// components/AddUserForm/AddUserForm.js
import React, { useState } from "react";
import styles from "./AddUserForm.module.css";
import { addUser } from "../../services/handlers";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddUserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const navigate = useNavigate(); // Initialize navigate
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !profilePhoto) {
      alert("Please fill in all fields and upload a profile photo.");
      return;
    }

    try {
      const newUser = await addUser({ fullName, email, profilePhoto });
      if (newUser) {
        alert("המשתמש נוצר בהצלחה!");
        // Reset the form
        setFullName("");
        setEmail("");
        setProfilePhoto(null);
        navigate("/"); // Adjust the path to your Profiles route
      } else {
        alert("Failed to add user.");
      }
    } catch (error) {
      console.error("Add User Error:", error);
      alert("Failed to add user.");
    }
  };

  return (
    <form className={styles.addUserForm} onSubmit={handleSubmit}>
      <div className={styles.labelInput}>
        <label>שם מלא:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className={styles.labelInput}>
        <label>אימייל:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.labelInput}>
        <label>תמונה מזהה:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfilePhoto(e.target.files[0])}
          required
        />
      </div>
      <button type="submit">הוסף</button>
    </form>
  );
};

export default AddUserForm;
