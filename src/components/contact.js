import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Contact.css';

// TODO: Create a styles object called "styles"
 const styles = {
  headerStyle: {
    background: 'pink',
  },
  headingStyle: {
    fontSize: '100px',
  },
};


function Contact() {
  // TODO: Add a style attribute to header and the h1 element


  return (
    <header className="conatct">
      <h4>Contact Me</h4>
    </header>
  );
}

export default Contact;
