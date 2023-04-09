import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/ReactIcons";
import Form from "../../components/ContactForm";
import ContactInfo from "../../components/ContInfo";

const Contact = ({ name, email, location }) => {
  return (
    <section className="contact">
      <PageHeader title="Contact" description="Get in touch" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Form />
          </div>
          <div className="col-12 col-lg-6">
            <ContactInfo name={name} location={location} email={email} />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Contact;