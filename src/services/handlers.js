import axios from "axios";

export const handleUpload = async (selectedFile, onResult) => {
  if (!selectedFile) {
    alert("Please select an image to upload.");
    return;
  }

  const formData = new FormData();
  formData.append("photo", selectedFile);

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/v1/photos/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    onResult(response.data.url);
    alert("Image uploaded successfully!");
  } catch (error) {
    console.error("Upload Error:", error);
    alert("Failed to upload image.");
  }
};

export const handleSearch = async (selectedFile, onResult) => {
  if (!selectedFile) {
    alert("Please select an image to search.");
    return;
  }

  const formData = new FormData();
  formData.append("photo", selectedFile);

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/v1/photos/search",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    onResult(response.data.matches);
    alert("Search completed!");
  } catch (error) {
    console.error("Search Error:", error);
    alert("Failed to search for matches.");
  }
};

export const getPhotos = async (onResult) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/v1/photos");
    onResult(response.data);
  } catch (error) {
    console.error("Search Error:", error);
    alert("Failed to search for matches.");
  }
};

export const addUser = async ({ fullName, email, profilePhoto }) => {
  const formData = new FormData();
  formData.append("full_name", fullName);
  formData.append("email", email);
  formData.append("photo", profilePhoto);

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/v1/users",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Add User Error:", error);
    throw error;
  }
};

export const getProfiles = async (onResult) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/v1/users");
    onResult(response.data);
  } catch (error) {
    console.error("Get Profiles Error:", error);
    alert("Failed to get profiles.");
  }
};

export const getUserPhotos = async (userId) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/v1/users/${userId}/photos`
    );
    return response.data; // Assuming the server returns an array of photos in a "photos" key
  } catch (error) {
    console.error("Error fetching user photos:", error);
    throw error;
  }
};
