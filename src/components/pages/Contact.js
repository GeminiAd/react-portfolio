import React from "react";
import ContactForm from '../ContactForm';

function Contact(props) {
    return (
        <section className="container-fluid my-4">
            <h2 className="mb-3 mx-3 text-center">Contact</h2>
            <div className="row mx-3 d-flex justify-content-center">
                <ContactForm />
                {/* <div className="col-6 p-0">
                    <h2 className="mb-3">Contact</h2>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="nameInput" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Email address:</label>
                        <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="messageInput" className="form-label">Message:</label>
                        <textarea className="form-control" id="messageInput" rows="3"></textarea>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default Contact;