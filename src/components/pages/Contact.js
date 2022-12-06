import React from "react";
import ContactForm from '../ContactForm';

function Contact(props) {
    return (
        <section className="col-md-10 col-lg-8 col-xl-6 d-flex flex-column p-3">
            <h2 className="mb-3 mx-3 text-center">Contact</h2>
            <ContactForm />
        </section>
    );
}

export default Contact;