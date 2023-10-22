import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-us">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi
          necessitatibus est eius sunt, explicabo optio tenetur!
        </p>
        <div className="contact-details">
          <div className="contact-detail">
            <p>Main Street, City, Country</p>
          </div>
          <div className="contact-detail">
            <p>contact@example.com</p>
          </div>
          <div className="contact-detail">
            <p>+098654321</p>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <div className="w-100">
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label h className="form-label">
                Name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
