// components/FileUpload/FileUpload.js
import React, { useState } from "react";
import FileInput from "../FileInput/FileInput";
import ImagePreview from "../ImagePreview/ImagePreview";
import styles from "./FileUpload.module.css";

const FileUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
  };

  return (
    <div className={styles.fileUploadContainer}>
      <FileInput handleFileChange={handleFileChange} />
      {selectedFile && (
        <ImagePreview
          selectedFile={selectedFile}
          onRemove={handleRemoveImage}
        />
      )}
      <button
        onClick={() => onUpload(selectedFile)}
        className={styles.uploadButton}
        disabled={!selectedFile}
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
