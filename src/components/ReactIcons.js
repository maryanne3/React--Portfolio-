const ReactIcons = () => {
    const styles = {
      icon: {
        textDecoration: "none",
        fontSize: "22px",
        padding: "10px",
        transition: "0.2s ease-in",
      },
    };
  
    return (
      <div className="socialIcons" style={styles.socialIcons}>
        <a className="icon" style={styles.icon} href="https://github.com/maryanne3">
          <i className="fa-brands fa-github" aria-hidden="true" title="Maryan A' GitHub Profile"></i>
        </a>
        <a className="icon" style={styles.icon} href="https://twitter.com">
          <i className="fa-brands fa-twitter" aria-hidden="true" title="Twitter Profile"></i>
        </a>
      </div>
    );
  };
  
  export default ReactIcons;