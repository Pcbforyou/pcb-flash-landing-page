import React, { useRef, useState, type ChangeEvent } from "react";
import { toast } from "@/hooks/use-toast";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyCk92KJhrGMnDrYm7uMMaJdtomhE_trX5UMVjJck6_bseOWpYE-Hw-pT4-w61nW7y6KQ/exec";

export const useFileUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

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
        formData.append("source", "website-contact");
        const res = await fetch(APPS_SCRIPT_URL, { method: "POST", body: formData });
        if (!res.ok) throw new Error(`Upload failed: ${res.status}`);
        try {
          await res.clone().json();
        } catch {}
        toast({
          title: "Uploaded successfully",
          description: `${file.name} sent to our engineers.`,
        });
      }
    } catch (err: any) {
      toast({
        title: "Upload failed",
        description: err?.message ?? "Please try again or email us.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      e.target.value = "";
    }
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

  return {
    FileInput,
    handleUploadClick,
    uploading
  };
};