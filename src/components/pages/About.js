import React from "react";
import AboutMeImage from '../img/photo-me.png';

function About(props) {
    const styles = {
        myPhoto: {
            maxHeight: 300
        }
    }

    return (
        <section className="m-4 mt-4">
            <h2 className="mb-4">About Me</h2>
            <figure className="figure d-flex flex-column flex-sm-row m-0 align-items-start align-items-sm-start">
                <img src={AboutMeImage} alt="Me" id="about-me-photo" className="figure-img img-fluid rounded shadow me-3 mb-3" style={styles.myPhoto} />
                <figcaption id="about-me-text" className="figure-caption">
                    <h3>Adam Ferro</h3>
                    <p>I am an aspiring developer.</p>
                    <p>
                        This website is the first website I made, and I created it entirely from scratch using
                        HTML/CSS.
                        I have some knowledge of HTML structure and its sementic elements.
                        I also have some knowledge about styling with CSS using selectors, and advanced CSS concepts
                        such as Flexbox layout,
                        responsive design using media queries, pseudoclasses, wireframes, and using variables.
                    </p>
                    <p>
                        I also have a number of years of formal Computer Science training studying algorithmic
                        effeciency, data structures,
                        software engineering, and computer programming. I've used mainly the Java programming
                        language while studying all of this,
                        but I've also worked with Ruby, C, and some low-level languages like assembly/machine code.
                    </p>
                </figcaption>
            </figure>
        </section>
    );
}

export default About;