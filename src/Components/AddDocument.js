import React from "react";
import { useDropzone } from "react-dropzone";

export default function AddDocument({ props }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />

        <img
          className="h-40 mt-10 mb-10 rounded mx-auto d-block justify-content-md-center text-center"
          src="https://www.nicepng.com/png/detail/129-1298055_file-upload-comments-icons-for-file-upload.png"
          alt="Can't load"
        />

        <div className="text-center">
          <p className="dropzone-content">
            {" "}
            Drag and drop or click to upload the file here
          </p>
        </div>

        <div className="fw-lighter text-center ">
          {" "}
          File size should be less than 500mbs
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </div>
    </>
  );
}
