import React from "react";
import './Navigation.css';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar mb-1 mb-sm-0 me-0 me-sm-1 me-md-2 me-lg-3 me-xl-4 me-xxl-5">
            <div className="container-fluid">
                <ul className="navbar-nav m-0 d-flex flex-row align-items-baseline">
                    <li className="nav-item mx-2 mx-md-3">
                        <a
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            onClick={() => handlePageChange('About')}
                            href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="nav-item mx-2 mx-md-3">
                        <a
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                            onClick={() => handlePageChange('Portfolio')}
                            href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item mx-2 mx-md-3">
                        <a
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            onClick={() => handlePageChange('Contact')}
                            href="#contact">
                            Contact
                        </a>
                    </li>
                    <li className="nav-item mx-2 mx-md-3">
                        <a
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            onClick={() => handlePageChange('Resume')}
                            href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default Navigation;