import React from "react";

function Resume(props) {
    return (
        <section className="m-4">
            <h2 className="mb-4">Resume</h2>
            <p>Download my resume</p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 p-0">
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
                    <div className="col-md-6 p-0">
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