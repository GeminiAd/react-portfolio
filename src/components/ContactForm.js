import React, { useState } from 'react';
import { validEmail } from './utils/helpers';

function ContactForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [messageErrorMessage, setMessageErrorMessage] = useState('');

    const styles = {
        errorMessage: {
            color: 'black',
            fontWeight: "bold",
            fontSize: 16,
        }
    };

    const onBlur = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            if (inputValue === '') {
                setNameErrorMessage("Name is a required field.");
            }
        } else if (inputType === 'email') {
            if (inputValue === '') {
                setEmailErrorMessage("Email address is a required field.");
            } else if (!validEmail(inputValue)) {
                setEmailErrorMessage("Email address is invalid.");
            }
        } else if (inputType === 'message') {
            if (inputValue === '') {
                setMessageErrorMessage("Message is a required field.");
            }
        }
    }

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);

            if (nameErrorMessage && inputValue) {
                setNameErrorMessage('');
            }
        } else if (inputType === 'email') {
            setEmail(inputValue);

            if ((emailErrorMessage === "Email address is a required field.") && inputValue) {
                setEmailErrorMessage('');
            } else if ((emailErrorMessage === "Email address is invalid.") && validEmail(inputValue)) {
                setEmailErrorMessage('');
            }
        } else if (inputType === "message") {
            setMessage(inputValue);

            if (messageErrorMessage && inputValue) {
                setMessageErrorMessage('');
            }
        }
    }

    return (
        <form>
            <div className="mb-3 position-relative">
                <label htmlFor="nameInput" className="form-label">Name:</label>
                <input
                    value={name}
                    name="name"
                    type="text"
                    className="form-control"
                    id="nameInput"
                    onChange={handleInputChange}
                    onBlur={onBlur}
                />
                {nameErrorMessage && (
                    <div className="position-absolute end-0">
                        <p className="m-0 mt-1" style={styles.errorMessage}>{nameErrorMessage}</p>
                    </div>
                )}
            </div>
            <div className="mb-3 position-relative">
                <label htmlFor="emailInput" className="form-label">Email address:</label>
                <input
                    value={email}
                    name="email"
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="name@example.com"
                    onChange={handleInputChange}
                    onBlur={onBlur}
                />
                {emailErrorMessage && (
                    <div className="position-absolute end-0">
                        <p className="m-0 mt-1" style={styles.errorMessage}>{emailErrorMessage}</p>
                    </div>
                )}
            </div>
            <div className="mb-3 position-relative">
                <label htmlFor="messageInput" className="form-label">Message:</label>
                <textarea
                    value={message}
                    name="message"
                    className="form-control"
                    id="messageInput"
                    rows="4"
                    onChange={handleInputChange}
                    onBlur={onBlur}
                >
                </textarea>
                {messageErrorMessage && (
                    <div className="position-absolute end-0">
                        <p className="m-0 mt-1" style={styles.errorMessage}>{messageErrorMessage}</p>
                    </div>
                )}
            </div>
            <button type="button" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}

export default ContactForm;