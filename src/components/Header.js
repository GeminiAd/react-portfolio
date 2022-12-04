import React from "react";
import Navigation from './Navigation';
import background from './img/rain.jpg';

function Header(props) {
    const styles = {
        header: {
            height: 125,
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    }

    return (
        <header className="d-flex justify-content-between align-items-center" style={styles.header}>
            <h1 className="text-secondary m-0 ms-5">GeminiAd</h1>
            <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
        </header>
    );
}

export default Header;