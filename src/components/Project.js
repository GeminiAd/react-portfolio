import React from 'react';
import './Project.css';

function Project(props) {
    const styles = {
        card: {
            border: 'solid 1px lightgrey'
        }
    };

    return (
        <div className="col-sm-6 col-lg-4 col-xxl-3 p-0">
            <div className="card shadow m-2 Project" style={styles.card}>
                <img src={props.img} alt={props.name} className="rounded" />
            </div>
        </div>
    );
}

export default Project;