import React from "react";

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-sm me-0 me-sm-1 me-md-2 me-lg-3 me-xl-4 me-xxl-5">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-0">
                        <li className="nav-item">
                            <a
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                                onClick={() => handlePageChange('About')}
                                href="#about">
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                                onClick={() => handlePageChange('Portfolio')}
                                href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                                onClick={() => handlePageChange('Contact')}
                                href="#contact">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                                onClick={() => handlePageChange('Resume')}
                                href="#resume">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;