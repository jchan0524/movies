import React from "react";
import { useDropzone } from "react-dropzone";
import { Card, Container } from "react-bootstrap";

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
          <Card>
            <img
              className="h-40 mt-10 mb-10 rounded mx-auto d-block justify-content-md-center text-center"
              src="https://www.nicepng.com/png/detail/129-1298055_file-upload-comments-icons-for-file-upload.png"
            />

            {/* <input className="input-zone" {...getInputProps()} /> */}
            <div className="text-center">
              <p className="dropzone-content">
                {" "}
                Drag and drop or click to upload the file here
              </p>
            </div>

            <div className="text-center mb-10">
              {" "}
              File size should be less than 500mbs
            </div>
            <aside>
              <ul>{files}</ul>
            </aside>
          </Card>
        </div>
    
    </>
  );
}
