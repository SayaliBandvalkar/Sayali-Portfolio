import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>How can I help you?</h1>
        <p>
          Thanks for visiting my portfolio! Your feedback or questions are always welcome. Let’s connect.
        </p>
      </div>

      <div className="contact-right">
        <form>
          <div className="form-group">
            <label>First Name*</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Last Name*</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email*</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Where did you hear about us?</label>
            <select>
              <option value="">Please Select</option>
              <option value="linkedin">LinkedIn</option>
              <option value="Github">Github</option>
              <option value="friend">Friend</option> 
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" />
          </div>
          <button className="submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
