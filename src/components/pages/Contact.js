import React from "react";
// import ContactForm from '../ContactForm';

/* The 'Contact Me' Page. */
function Contact(props) {
    return (
        <section className="col-sm-10 col-md-8 col-lg-6 col-xl-4 d-flex flex-column p-3 align-items-center">
            <h2 className="mb-3 mx-3 text-center">Contact</h2>
            <a href="mailto:adam.michael.ferro@gmail.com" className="text-white fw-bold">adam.michael.ferro@gmail.com</a>
            {/* <ContactForm /> */}
        </section>
    );
}

export default Contact;