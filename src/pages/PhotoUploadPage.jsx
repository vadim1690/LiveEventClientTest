// pages/PhotoUploadPage.js
import React, { useState } from "react";
import FileUpload from "../components/FileUpload/FileUpload";
import SearchResults from "../components/SearchResults/SearchResults";
import { handleUpload, handleSearch } from "../services/handlers";

const PhotoUploadPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleFileUploaded = (file) => {
    // Handle the uploaded file if needed
  };

  return (
    <div>
      <FileUpload
        onUpload={(file) => handleUpload(file, handleFileUploaded)}
        onSearch={(file) => handleSearch(file, setSearchResults)}
      />
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default PhotoUploadPage;
