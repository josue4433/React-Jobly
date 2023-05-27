import React, { useEffect, useState } from 'react';
import JoblyApi from '../api';
import ProfileForm from './ProfileForm';

function ProfilePage({ currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await JoblyApi.getUser(currentUser.username);
        setUser(fetchedUser);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [currentUser]);

  const updateUserProfile = async (formData) => {
    try {
      const updatedUser = await JoblyApi.updateUser(
        currentUser.username,
        formData
      );
      setUser(updatedUser);
     
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Edit Profile</h2>
          <ProfileForm currentUser={user} updateUser={updateUserProfile} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProfilePage;
