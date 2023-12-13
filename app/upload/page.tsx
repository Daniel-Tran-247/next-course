'use client';
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

export default function page() {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && <CldImage src={publicId} width={270} height={180} alt=""/>}
      <CldUploadWidget
        uploadPreset="ivsvzppq"
        onUpload={(result, widget) => {
          const info = result.info as CloudinaryResult;
          if (result.event !== "success") return;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
}
