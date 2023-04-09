import pageImage from "../images/img1.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = ({ name, email, location, availability, brand }) => {
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });
  
    return (
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-4"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <img src={pageImage} />
          </motion.div>
          <motion.div
            className="personalInfo col-12 col-lg-8"
            ref={ref}
            initial={{ x: "10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="contentContainer">
              <h4>Hi, Welcome to my page</h4>
              <h5>Frontend Web Dev!</h5>
              <div className="contentDescription">
              </div>
              <div className="infoContainer">
                <div className="row">
                  <div className="col-12 col-md-6 info">
                    <span>Name:</span>
                    <p>Maryan A</p>
                  </div>
                  <div className="col-12 col-md-6 info">
                    <span>Email:</span>
                    <p>
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 info">
                    <span>Location:</span>
                    <p>{location}</p>
                  </div>
                  <div className="col-12 col-md-6 info">
                    <span>Availability:</span>
                    <p>{availability}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default AboutMe;
  