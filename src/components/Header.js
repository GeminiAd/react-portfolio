import React from "react";
import Navigation from './Navigation';
import background from './img/brick.jpg';
import './Header.css';

/* The header component. */
function Header(props) {
    const styles = {
        header: {
            height: 125,
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top'
        },
    }

    return (
        <header className="d-flex flex-column flex-sm-row justify-content-evenly justify-content-sm-between align-items-center" style={styles.header}>
            <h1 className="m-0 mt-3 mt-sm-0 ms-0 ms-sm-5" style={styles.h1}>GeminiAd</h1>
            <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
        </header>
    );
}

export default Header;