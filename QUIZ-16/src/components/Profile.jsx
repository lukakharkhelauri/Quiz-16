import { useState, useEffect } from 'react'
import classes from '../modules/index.module.scss'
import axios from 'axios'

const Profile = ({ username }) => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUserData = () => {
        axios
          .get(`https://api.github.com/users/${username}`)
          .then((response) => {
            setUserData(response.data);
            setError(null); 
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              setError('User not found');
            } else {
              setError('Error fetching user data');
            }
          });
      };
  
      if (username) {
        fetchUserData();
      }
    }, [username]);
  
    return (
        <div className={classes['user-profile']}>
          {userData ? (
            <>
              <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
              <h2>{userData.name}</h2>
              <p>{userData.bio}</p>
            </>
          ) : error ? (
            <p className={classes['error']}>{error}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
      
  };
  
  export default Profile;