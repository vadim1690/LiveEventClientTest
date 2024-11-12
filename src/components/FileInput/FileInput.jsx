// components/FileInput/FileInput.js
import React, { useRef } from "react";
import styles from "./FileInput.module.css";

const FileInput = ({ handleFileChange }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange({ target: { files: e.dataTransfer.files } });
      e.dataTransfer.clearData();
    }
  };

  return (
    <div
      className={styles.fileInputContainer}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <button onClick={handleButtonClick} className={styles.uploadButton}>
        Choose File
      </button>
      <p className={styles.instructions}>or drag & drop here</p>
    </div>
  );
};

export default FileInput;
