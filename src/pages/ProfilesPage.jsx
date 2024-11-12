// pages/ProfilesPage.js
import React, { useState, useEffect } from "react";
import ProfilesGrid from "../components/ProfilesGrid/ProfilesGrid";
import { getProfiles } from "../services/handlers";

const ProfilesPage = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getProfiles(setProfiles);
  }, []);
  console.log(profiles);
  return (
    <div>
      <ProfilesGrid profiles={profiles} />
    </div>
  );
};

export default ProfilesPage;
