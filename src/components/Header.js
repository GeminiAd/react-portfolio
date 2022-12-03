import React from "react";
import Navigation from './Navigation';

function Header(props) {
    const styles = {
        height: 100
    }

    return (
        <header className="d-flex justify-content-between align-items-center bg-primary" style={styles}>
            <h1 className="text-secondary m-0 ms-5">GeminiAd</h1>
            <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
        </header>
    );
}

export default Header;