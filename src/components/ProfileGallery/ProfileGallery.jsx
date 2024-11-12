// pages/ProfileGallery.js
import React, { useState, useEffect } from "react";
import styles from "./ProfileGallery.module.css";
import { getUserPhotos } from "../../services/handlers"; // Import service to get user photos

const ProfileGallery = ({ userId }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const userPhotos = await getUserPhotos(userId);
        setPhotos(userPhotos);
      } catch (error) {
        console.error("Failed to fetch user photos:", error);
      }
    };

    fetchPhotos();
  }, [userId]);

  return (
    <div className={styles.galleryContainer}>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.url}
          alt="User gallery"
          className={styles.galleryImage}
        />
      ))}
    </div>
  );
};

export default ProfileGallery;
