import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const {name , value} = event.target ;
    return setUser((prevUser) => {
       return {...prevUser, [name]: value};
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const userData = {
      id: nanoid(),
      name: 'Waleed',
      email: 'waleedy93@hotmail.com' ,
      password: 'supbruv',
      address: 'Makkah_Jeddah',
      isAdmin: true,
    };
    
    if (user.email === userData.email && user.password === userData.password) {
      console.log('user successfully signed in');
      localStorage.setItem('login', JSON.stringify({ userData , isLoggedin: true}))
      navigate('/profile', {state: userData});
    } else {
      console.log('failed to sign in');
      navigate('/login');
    }

    
  };

  return (
    <div>
      <h2>User Login page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id='email' name='email'
          value={user.email} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id='password' name='password'
          value={user.password} onChange={handleChange} />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
