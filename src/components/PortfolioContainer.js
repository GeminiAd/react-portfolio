import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

/* 
 *  This is the component that wraps the portfolio application. 
 *  The logic of what page is displayed is contained here.
 */
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
            <main className="m-4 mt-4">
                <div className="container-fluid p-0">
                    <div className="row d-flex justify-content-center">
                        {renderPage()}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default PortfolioContainer;