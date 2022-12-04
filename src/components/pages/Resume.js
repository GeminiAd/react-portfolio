import React from "react";

function Resume(props) {
    return (
        <section className="m-4 d-flex flex-column align-items-center">
            <h2 className="mb-4">Resume</h2>
            <p>Download my resume</p>
            <div className="container-fluid p-0">
                <div className="row d-flex flex-row justify-content-center justify-content-md-between mx-3 mx-lg-5">
                    <div className="col-10 col-sm-8 col-md-5 col-xl-4 p-0">
                        <h3>Front-end Proficiencies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Eesponsive Design</li>
                            <li>Bootstrap</li>
                            <li>Handlebars</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="col-10 col-sm-8 col-md-5 col-xl-4 p-0">
                        <h3>Back-end Proficiencies</h3>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express.js</li>
                            <li>MySQL/Sequelize</li>
                            <li>MongoDB/Mongoose</li>
                            <li>REST</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;