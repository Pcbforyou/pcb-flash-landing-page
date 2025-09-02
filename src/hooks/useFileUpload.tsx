import React, { useRef, useState, type ChangeEvent } from "react";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogIn, UserPlus, Upload } from "lucide-react";

const SUPABASE_LOGIN_URL = "https://cirrunswddxjvngcbmbn.supabase.co/functions/v1/login";
const SUPABASE_UPLOAD_URL = "https://cirrunswddxjvngcbmbn.supabase.co/functions/v1/upload";
const SUPABASE_REGISTER_URL = "https://cirrunswddxjvngcbmbn.supabase.co/functions/v1/register";
const TOKEN_KEY = "sb_edge_token";

export const useFileUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const getToken = () => localStorage.getItem(TOKEN_KEY) || "";
  const isAuthenticated = !!getToken();

  const handleUploadClick = () => {
    if (!isAuthenticated) {
      setLoginOpen(true);
      return;
    }
    fileInputRef.current?.click();
  };

  const handleFilesSelected = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    if (!isAuthenticated) {
      toast({
        title: "Login required",
        description: "Please login to upload files.",
        variant: "destructive",
      });
      setLoginOpen(true);
      return;
    }

    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file, file.name);

        const headers: Record<string, string> = {
          "Authorization": `Bearer ${getToken()}`
        };

        const res = await fetch(SUPABASE_UPLOAD_URL, { method: "POST", headers, body: formData });
        const text = await res.text();
        let data: any;
        try { data = JSON.parse(text); } catch {}

        if (!res.ok) {
          if (res.status === 401 || res.status === 403) {
            localStorage.removeItem(TOKEN_KEY);
            toast({
              title: "Session expired",
              description: "Please login again.",
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
      setEmail("");
      toast({ title: "Logged in successfully", description: "You can now upload your files." });
      console.info("Login response:", data ?? text);
      return data;
    } catch (err: any) {
      toast({ title: "Login failed", description: err?.message ?? "Please check your credentials.", variant: "destructive" });
      throw err;
    } finally {
      setLoggingIn(false);
    }
  };

  const submitRegister = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!name || !email || !phone || !password) {
      toast({ title: "Missing information", description: "Please fill all fields.", variant: "destructive" });
      return;
    }
    try {
      setRegistering(true);
      const res = await fetch(SUPABASE_REGISTER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });
      const text = await res.text();
      let data: any;
      try { data = JSON.parse(text); } catch {}
      if (!res.ok) throw new Error(data?.message || text || `Registration failed: ${res.status}`);
      
      // Auto-login after successful registration
      const token = data?.access_token || data?.token || data?.jwt || data?.data?.token;
      if (token) {
        localStorage.setItem(TOKEN_KEY, token);
        setLoginOpen(false);
        toast({ title: "Account created successfully", description: "Welcome! You can now upload files." });
      } else {
        toast({ title: "Account created", description: "Please login with your credentials." });
      }
      
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      console.info("Register response:", data ?? text);
      return data;
    } catch (err: any) {
      toast({ title: "Registration failed", description: err?.message ?? "Please try again.", variant: "destructive" });
      throw err;
    } finally {
      setRegistering(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setEmail("");
    setPassword("");
    setName("");
    setPhone("");
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

  const LoginButton = ({ variant = "default" }: { variant?: "default" | "outline" | "secondary" }) => (
    <Button variant={variant} onClick={() => setLoginOpen(true)}>
      <LogIn className="w-4 h-4 mr-2" />
      Login
    </Button>
  );

  const LoginDialog = () => (
    <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Account Access</DialogTitle>
          <DialogDescription>Login or create an account to upload files.</DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login" className="flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Create Account
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={submitLogin} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="login-email">Email</Label>
                <Input 
                  id="login-email" 
                  type="email" 
                  placeholder="your@email.com"
                  autoComplete="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="login-password">Password</Label>
                <Input 
                  id="login-password" 
                  type="password" 
                  placeholder="Enter your password"
                  autoComplete="current-password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setLoginOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loggingIn}>
                  {loggingIn ? "Signing in..." : "Sign In"}
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>
          
          <TabsContent value="register">
            <form onSubmit={submitRegister} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="register-name">Full Name</Label>
                <Input 
                  id="register-name" 
                  type="text" 
                  placeholder="Your full name"
                  autoComplete="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="register-email">Email</Label>
                <Input 
                  id="register-email" 
                  type="email" 
                  placeholder="your@email.com"
                  autoComplete="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="register-phone">Phone Number</Label>
                <Input 
                  id="register-phone" 
                  type="tel" 
                  placeholder="+91 9876543210"
                  autoComplete="tel" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="register-password">Password</Label>
                <Input 
                  id="register-password" 
                  type="password" 
                  placeholder="Create a strong password"
                  autoComplete="new-password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setLoginOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={registering}>
                  {registering ? "Creating..." : "Create Account"}
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );

  return {
    FileInput,
    LoginDialog,
    LoginButton,
    handleUploadClick,
    uploading,
    loggingIn,
    registering,
    openLogin: () => setLoginOpen(true),
    logout,
    isAuthenticated,
  };
};