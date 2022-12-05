/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Project.css';

function Project(props) {
    const styles = {
        card: {
            border: 'none'
        },
    };

    return (
        <div className="col-sm-6 col-lg-4 col-xxl-3 p-2 position-relative">
            <div className="card Project" style={styles.card}>
                <a href={props.link} target="_blank" rel="noreferrer" className="ProjectImage p-0">
                    <img src={props.img} alt={props.name} className="img-fluid rounded" />
                </a>
                <a href={props.link} target="_blank" rel="noreferrer" className={`position-absolute top-0 start-0 ProjectDescription m-3 ${props.css}`}>{props.name}</a>
                <a href={props.github} target="_blank" rel="noreferrer" className="ProjectGithubLink m-2 me-3"><i className="bi bi-github"></i></a>
                <a href={props.link} target="_blank" rel="noreferrer" className={`position-absolute bottom-0 start-0 ProjectTech m-3 ${props.css}`}>{props.tech}</a>
            </div>
        </div>
    );
}

export default Project;