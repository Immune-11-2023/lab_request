import { useState } from 'react';
import reqresService from '../../services/reqres';

const Profile = () => {
  const [user, setUser] = useState({});
  
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  const getInfoUser = async () => {
    try {
      const response = await reqresService.getUser();
      console.log(response);
      setUser(response.data);
      setIsFirstLoad(false);
    } catch (err) {
      console.error(err);
    }
  };
  if (isFirstLoad) {
    getInfoUser();
  }

  return (
    <div>
      <h3>Nombre: {`${user.first_name} ${user.last_name}`}</h3>
      <p>Emails: {user.email}</p>
      <img src={user.avatar} alt='avatar' />
    </div>
  );
};

export default Profile;
