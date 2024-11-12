// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import ProfilesPage from "./pages/ProfilesPage";
import AddUserPage from "./pages/AddUserPage";
import PhotoUploadPage from "./pages/PhotoUploadPage";
import ProfileGalleryPage from "./pages/ProfileGalleryPage";

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProfilesPage />} />
          <Route path="/add-user" element={<AddUserPage />} />
          <Route path="/photo-upload" element={<PhotoUploadPage />} />
          <Route path="/profile/:userId" element={<ProfileGalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
