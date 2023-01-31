import React from "react";

import { useDropzone } from "react-dropzone";
export default function Dropzone({ open }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}
