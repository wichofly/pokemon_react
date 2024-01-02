import { useState, useEffect } from 'react';
import axios from 'axios';

import ProfileSearchForm from './ProfileSearchForm';

const gitHubUrl = 'https://api.github.com/users';

const ProfileViewer = () => {
  const [username, setUsername] = useState("wichofly");
  const [profile, setProfile] = useState({ data: null, isLoading: true });

  useEffect(
    function fetchUserOnUsernameChange() {
      async function fetchUser() {
        const userResult = await axios.get(`${gitHubUrl}/${username}`);
        setProfile({ data: userResult.data, isLoading: false });
      }
      fetchUser();
    },
    [username] // this effect should only run when username changes.
  );

  function search(username) {
    setProfile({ data: null, isLoading: true });
    setUsername(username);
  }

  if (profile.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <ProfileSearchForm search={search} />
      <b>{profile.data.name}</b>
      <img src={profile.data.avatar_url} />
    </div>
  );
}

export default ProfileViewer;


