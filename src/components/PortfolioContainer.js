import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About'
import Portfolio from './pages/Portfolio';

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    function renderPage() {
        if (currentPage === "About") {
            return <About />
        } else if (currentPage === "Portfolio") {
            return <Portfolio />
        }
    }

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default PortfolioContainer;