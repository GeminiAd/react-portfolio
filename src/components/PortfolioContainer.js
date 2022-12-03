import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    function renderPage() {
        if (currentPage === "About") {
            return <About />
        } else if (currentPage === "Portfolio") {
            return <Portfolio />
        } else if (currentPage === "Contact") {
            return <Contact />
        } else if (currentPage === "Resume") {
            return <Resume />
        }
    }

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    return (
        <div className="m-0 p-0">
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default PortfolioContainer;