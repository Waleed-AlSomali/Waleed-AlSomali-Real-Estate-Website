import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {

const { state } = useLocation();
console.log(state);
  return (
    <div>
      <h2>Profile Page</h2>
      <h3>Name: {state.name}</h3>
      <h3>Email: {state.email}</h3>
      <h3>Address: {state.address}</h3>
    </div>
  )
}

export default Profile;
