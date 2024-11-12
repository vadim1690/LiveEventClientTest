// components/ImagePreview/ImagePreview.js
import React from "react";
import styles from "./ImagePreview.module.css";

const ImagePreview = ({ selectedFile, onRemove }) => {
  return (
    <div className={styles.imagePreviewContainer}>
      <img
        src={URL.createObjectURL(selectedFile)}
        alt="selected file"
        className={styles.previewImage}
      />
      <button className={styles.removeButton} onClick={onRemove}>
        ✕
      </button>
    </div>
  );
};

export default ImagePreview;
