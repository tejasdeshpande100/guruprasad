import React from "react";

const ContactMap = () => {
  return (
    <div className="map_section">
      <div id="map">
        <iframe
          title="template google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.070480156443!2d75.32211634598936!3d19.876668308777273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb986bddb5663d%3A0x33a8a511ab2caee9!2sGuruprasad%20Eye%20Hospital!5e0!3m2!1sen!2sin!4v1659082925995!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
