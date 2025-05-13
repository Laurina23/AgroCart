import React from 'react';
import profileImage from '../components/roshina.jpeg'; 

const ProfilePage = () => {
  const user = {
    name: 'Roshina Sharma',
    address: '123 Green Street, AgriTown, India',
    mobile: '+91 9876543210'
  };

  const handleEdit = () => {
    alert('Edit button clicked! You can integrate a modal or form here.');
  };

  return (
    <div>
      <style>
        {`
          .profile-container {
            text-align: center;
            padding: 20px;
            max-width: 400px;
            margin: auto;
            border: 1px solid #ccc;
            border-radius: 12px;
            background-color: #f9f9f9;
          }

          .profile-image {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: 15px;
          }

          .edit-button {
            padding: 8px 16px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
          }

          .edit-button:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      <div className="profile-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h2>{user.name}</h2>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
        <button onClick={handleEdit} className="edit-button">Edit</button>
      </div>
    </div>
  );
};

export default ProfilePage;
