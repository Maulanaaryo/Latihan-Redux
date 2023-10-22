import React from "react";
import "./About.css";

const AboutPage = () => {
  const profileData = {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1481px-Anonymous.svg.png",
    username: "John Tor",
    address: "123 Street",
    education: "PlayGroup",
    organization: "STM PlayGroup",
    experience: "Jalur Selatan",
  };
  return (
    <div className="cv-container">
    <div className="profile-container">
      <img className="profile-image" src={profileData.image} alt="Profile" />
      <h1>{profileData.username}</h1>
    </div>
    <div className="form-container">
      <form className="cv-form">
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={profileData.address}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="education">Education</label>
          <input
            type="text"
            id="education"
            value={profileData.education}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization</label>
          <input
            type="text"
            id="organization"
            value={profileData.organization}
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <input
            type="text"
            id="experience"
            value={profileData.experience}
            disabled
          />
        </div>
      </form>
    </div>
  </div>
  );
};

export default AboutPage;
