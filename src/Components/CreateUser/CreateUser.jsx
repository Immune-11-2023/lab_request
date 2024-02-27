import { useState } from 'react';
import reqresService from '../../services/reqres';

const CreateUser = () => {
  const [user, setUser] = useState({
    email: '',
    first_name: '',
    last_name: '',
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("Nuevo usuario:", user)
    try {
      e.preventDefault();
      await reqresService.createUser(user);
      setUser({
        email: '',
        first_name: '',
        last_name: '',
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Emails</label>
        <input type='email' name='email' value={user.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='first_name'>Nombre</label>
        <input type='text' name='first_name' value={user.first_name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='last_name'>Apellido</label>
        <input type='text' name='last_name' value={user.last_name} onChange={handleChange} />
      </div>
      <button type='submit'>Crear usuario</button>
    </form>
  );
};

export default CreateUser;
