import React, { useState } from 'react';
import { validateEmail } from './utils/helpers';

function ContactForm(props) {
    return (
        <div className="col-md-10 col-lg-8 col-xl-6 p-0">
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
            <button type="button" className="btn btn-primary">
                Submit
            </button>
        </div>
    );
}

export default ContactForm;