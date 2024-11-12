import React from "react";
import ProfileGallery from "../components/ProfileGallery/ProfileGallery";
import { useParams } from "react-router-dom";

const ProfileGalleryPage = () => {
  const { userId } = useParams(); // Get userId from route params
  return (
    <div>
      <ProfileGallery userId={userId} />
    </div>
  );
};

export default ProfileGalleryPage;
