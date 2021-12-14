import React from 'react';
import '../styles/UserLogIn.css';
import image1 from '../images/MartinL1.JPG';

export default function UserLogIn() {
  return (
    <div className="user-login-container">
      <img className="user-login-img" src={image1} alt="" />
      <p>Martin L.</p>
    </div>
  );
}
