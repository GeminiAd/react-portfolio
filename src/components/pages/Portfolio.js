import React from "react";

function Portfolio(props) {
    return (
        <section className="container-fluid">
            <h2 className="my-4 ms-3">Portfolio</h2>
            <div className="row m-2">
                <div className="col-sm-6 col-lg-4 col-xxl-3 p-0">
                    <div className="card shadow m-2">
                        <img src="https://via.placeholder.com/200x200" alt="Placeholder" className="rounded" />
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xxl-3 p-0">
                    <div className="card shadow m-2">
                        <img src="https://via.placeholder.com/200x200" alt="Placeholder" className="rounded" />
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xxl-3 p-0">
                    <div className="card shadow m-2">
                        <img src="https://via.placeholder.com/200x200" alt="Placeholder" className="rounded" />
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xxl-3 p-0">
                    <div className="card shadow m-2">
                        <img src="https://via.placeholder.com/200x200" alt="Placeholder" className="rounded" />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Portfolio;