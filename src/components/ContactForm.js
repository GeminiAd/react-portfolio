import React, { useState } from 'react';
import { validEmail } from './utils/helpers';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/* 
 *  The contact form component. I didn't have to implement this as a component, it just made more sense to me
 *  to house all the logic for the contact form in here as opposed to the contact me page itself.
  */
function ContactForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    /* 
     *  I have individual error messages for each input field. It just made more sense to me than having one
     *  error field to display all errors.
     */
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [messageErrorMessage, setMessageErrorMessage] = useState('');

    /* States for the modal window that pops up on form submit. */
    const [show, setShow] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const styles = {
        errorMessage: {
            color: 'black',
            fontWeight: "bold",
            fontSize: 16,
        }
    };

    const handleClose = () => setShow(false);

    /* 
     *  Whenever an input is deselected, check to see if the input is invalid. 
     *  If so, display the appropriate error message. */
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

    /* Logic for the form on submit. */
    const onSubmit = (e) => {
        e.preventDefault();

        if (name && email && message && validEmail(email)) {
            const inputName = name;

            setName('');
            setEmail('');
            setMessage('');

            setModalMessage(`Thank you ${inputName}, your message has been sent.`);
            setShow(true);
        } else {
            setModalMessage("One or more required fields aren't filled out!");
            setShow(true);
        }
    }

    /* Logic for each input field on input change. */
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
        <>
            <form onSubmit={onSubmit}>
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
                            <p className="m-0 mt-1 errorMessage" style={styles.errorMessage}>{nameErrorMessage}</p>
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
                            <p className="m-0 mt-1 errorMessage" style={styles.errorMessage}>{emailErrorMessage}</p>
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
                            <p className="m-0 mt-1 errorMessage" style={styles.errorMessage}>{messageErrorMessage}</p>
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ContactForm;