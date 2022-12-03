import React from 'react';

function Footer(props) {
    const styles = {
        footer: {
            height: 100,
            backgroundColor: "antiquewhite"
        },
        ul: {
            listStyleType: 'none',
            paddingLeft: 0
        },
        li: {
            border: "none",
            width: "fit-content",
            display: "inline"
        },
        biLinkedin: {
            marginLeft: '.1em'
        }
    }

    return (
        <footer className="container-fluid p-4" style={styles.footer}>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <ul className="m-0 d-flex justify-content-evenly col-md-8 col-xl-6 col-xxl-4" style={styles.ul}>
                    <li style={styles.li}><a href="https://github.com/GeminiAd" target="_blank" rel="noreferrer"><button type="button" id="github-button"
                        className="btn btn-dark"><i className="bi bi-github me-1"></i>Github</button></a></li>
                    <li style={styles.li}><a href="https://www.linkedin.com/in/adam-ferro/" target="_blank" rel="noreferrer"><button type="button"
                        id="github-button" className="btn btn-primary">Linked<i className="bi bi-linkedin" style={styles.biLinkedin}></i></button></a>
                    </li>
                    <li style={styles.li}><a href="https://www.facebook.com/adam.ferro" target="_blank" rel="noreferrer"><button type="button"
                        id="github-button" className="btn btn-primary"><i
                            className="bi bi-facebook me-1"></i>Facebook</button></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;