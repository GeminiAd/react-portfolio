import React from 'react';
import './Footer.css'

function Footer(props) {
    const styles = {
        footer: {
            height: 100,
            backgroundColor: 'antiquewhite'
        },
        ul: {
            listStyleType: 'none',
            paddingLeft: 0
        },
        li: {
            border: "none",
            width: "fit-content",
            height: "fit-content",
            display: "inline"
        },
    }

    return (
        <footer className="container-fluid p-0" style={styles.footer}>
            <div className="row d-flex justify-content-center align-items-center h-100 w-100">
                <div className="container-fluid h-100 m-0 col-md-8 col-xl-6 col-xxl-4">
                    <div className="row w-100 h-100">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <a href="https://github.com/GeminiAd" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <a href="https://www.linkedin.com/in/adam-ferro/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <a href="https://www.facebook.com/adam.ferro" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;