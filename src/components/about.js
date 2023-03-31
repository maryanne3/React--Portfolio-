import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/About.css';

// TODO: Create a styles object called "styles"
 const styles = {
  headerStyle: {
    background: 'pink',
  },
  headingStyle: {
    fontSize: '100px',
  },
};


function About() {
  // TODO: Add a style attribute to header and the h1 element


  return (
    <header className="about">
      <h4>About me</h4>
    </header>
  );
}

export default About;
