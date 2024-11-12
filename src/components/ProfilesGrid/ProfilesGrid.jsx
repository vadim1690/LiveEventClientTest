// components/ProfilesGrid/ProfilesGrid.js
import React from "react";
import styles from "./ProfilesGrid.module.css";
import { useNavigate } from "react-router-dom";

const ProfilesGrid = ({ profiles }) => {
  const navigate = useNavigate();

  const handleProfileClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <div className={styles.profilesGrid}>
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className={styles.profileCard}
          onClick={() => handleProfileClick(profile.id)}
        >
          <img
            src={profile.photo_url}
            alt={profile.name}
            className={styles.profileImage}
          />
          <p className={styles.profileName}>{profile.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfilesGrid;
