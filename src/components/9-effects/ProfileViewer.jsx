import { useState, useEffect } from 'react';
import axios from 'axios';

import ProfileSearchForm from './ProfileSearchForm';

const gitHubUrl = 'https://api.github.com/users';

const ProfileViewer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userResult = await axios(`${gitHubUrl}`);
      setUsers(userResult);
    };
    fetchData();
  }, [users]); // this effect should only run when username changes.

  return (
    <div>
      <ProfileSearchForm />
      <ul>
        {users.map((user) => {
          // console.log(user)
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4 style={{ textTransform: 'capitalize', marginBottom: '0' }}>
                  {login}
                </h4>
                <a href={html_url}>Link</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileViewer;


