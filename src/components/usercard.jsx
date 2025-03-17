// write the component code here
import React from "react";
import "./usercard.css"; // Optional: You can create this file for custom styling

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://static.foxdealer.com/686/2021/03/2019_Dodge_Challenger_-_Exterior_Side_View.jpg"; 
  const name = "mukesh";
  const email = "mukesh@gmail.com";
  const phoneNumber = "8179831797";
  const address = "chittor,ap";

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="usercard-photo" />
      <h2 className="usercard-name">{name}</h2>
      <p className="usercard-email">Email: {email}</p>
      <p className="usercard-phone">Phone: {phoneNumber}</p>
      <p className="usercard-address">Address: {address}</p>
    </div>
  );
};

export default Usercard;
