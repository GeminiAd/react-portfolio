import React, { useState } from 'react';
import { validateEmail } from './utils/helpers';

function ContactForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        console.log(e);

        if (inputType === 'name') {
            setName(inputValue);
        }
    }

    return (
        <div className="col-md-10 col-lg-8 col-xl-6 p-0">
            <form>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Name:</label>
                    <input
                        value={name}
                        name="name"
                        type="text"
                        onChange={handleInputChange}
                        className="form-control"
                        id="nameInput"
                    />
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
            </form>
        </div>
    );
}

export default ContactForm;