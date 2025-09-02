import React, { useRef, useState, type ChangeEvent } from "react";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SUPABASE_LOGIN_URL = "https://cirrunswddxjvngcbmbn.supabase.co/functions/v1/login";
const SUPABASE_UPLOAD_URL = "https://cirrunswddxjvngcbmbn.supabase.co/functions/v1/upload";
const TOKEN_KEY = "sb_edge_token";

export const useFileUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getToken = () => localStorage.getItem(TOKEN_KEY) || "";

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFilesSelected = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file, file.name);

        const headers: Record<string, string> = {};
        const token = getToken();
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch(SUPABASE_UPLOAD_URL, { method: "POST", headers, body: formData });
        const text = await res.text();
        let data: any;
        try { data = JSON.parse(text); } catch {}

        if (!res.ok) {
          if (res.status === 401 || res.status === 403) {
            toast({
              title: "Login required",
              description: "Please login to upload files.",
              variant: "destructive",
            });
            setLoginOpen(true);
            break;
          }
          throw new Error(data?.message || text || `Upload failed: ${res.status}`);
        }

        toast({
          title: "Uploaded successfully",
          description: data?.message ? `${file.name} • ${data.message}` : `${file.name} uploaded.`,
        });
        console.info("Upload response:", data ?? text);
      }
    } catch (err: any) {
      toast({
        title: "Upload failed",
        description: err?.message ?? "Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const submitLogin = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!email || !password) {
      toast({ title: "Missing credentials", description: "Enter email and password.", variant: "destructive" });
      return;
    }
    try {
      setLoggingIn(true);
      const res = await fetch(SUPABASE_LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const text = await res.text();
      let data: any;
      try { data = JSON.parse(text); } catch {}
      if (!res.ok) throw new Error(data?.message || text || `Login failed: ${res.status}`);
      const token = data?.access_token || data?.token || data?.jwt || data?.data?.token;
      if (!token) throw new Error("No token returned by login.");
      localStorage.setItem(TOKEN_KEY, token);
      setLoginOpen(false);
      setPassword("");
      toast({ title: "Logged in", description: "You can now upload your files." });
      console.info("Login response:", data ?? text);
      return data;
    } catch (err: any) {
      toast({ title: "Login failed", description: err?.message ?? "Please try again.", variant: "destructive" });
      throw err;
    } finally {
      setLoggingIn(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    toast({ title: "Logged out", description: "Authentication cleared." });
  };

  const FileInput = () => (
    <input
      ref={fileInputRef}
      type="file"
      multiple
      accept=".zip,.rar,.7z,.ger,.gbr,.drl,.brd,.pcb,.kicad_pcb,.kicad_mod"
      className="hidden"
      onChange={handleFilesSelected}
    />
  );

  const LoginDialog = () => (
    <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login to continue</DialogTitle>
          <DialogDescription>Authenticate to upload files via Supabase.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submitLogin} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setLoginOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loggingIn}>
              {loggingIn ? "Logging in..." : "Login"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );

  return {
    FileInput,
    LoginDialog,
    handleUploadClick,
    uploading,
    loggingIn,
    openLogin: () => setLoginOpen(true),
    logout,
    isAuthenticated: !!getToken(),
  };
};