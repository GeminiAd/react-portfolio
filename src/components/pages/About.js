import React from "react";
import AboutMeImage from '../img/photo-me.png';

/* The 'About Me' Page. */
function About(props) {
    const styles = {
        myPhoto: {
            maxHeight: 300
        },
        h3: {
            color: 'black'
        }
    }

    return (
        <div className="col-lg-10 col-xl-8 col-xxl-6">
            <section className="d-flex flex-column align-items-center p-3">
                <h2 className="mb-4">About Me</h2>
                <figure className="figure d-flex flex-column flex-sm-row m-0 align-items-center align-items-sm-start">
                    <img src={AboutMeImage} alt="Me" id="about-me-photo" className="figure-img img-fluid rounded shadow me-0 me-sm-4 mb-3" style={styles.myPhoto} />
                    <figcaption id="about-me-text" className="figure-caption">
                        <h3 className="text-center text-sm-start" style={styles.h3}>Adam Ferro</h3>
                        <p>I am an aspiring developer.</p>
                        <p>
                            I have a number of years of formal Computer Science training studying algorithmic
                            effeciency, data structures, software engineering, and computer programming. I've mainly used Java
                            while studying all of this, but I've also worked with Ruby, C, and some low-level languages like
                            assembly/machine code.
                        </p>
                        <p>
                            Recently I completed a three month intensive coding bootcamp with a certificate in web development.
                            I have experience with server routing and setting up APIs using Express.js for Node.js. I also have experience
                            with setting up and using databases, specifically with Sequelize/MySQL and Mongoose/MongoDB. I've spent
                            countless hours studying CSS trying to make flashy effects that catch people's attention, and I've since
                            developed a passion for front-end development. I'm skilled with HTML, CSS, Handlebars and React.
                            I love problem-solving: it's so rewarding when I can't make something happen either with CSS or JavaScript and I keep working until I make my vision a reality.
                        </p>
                        <p>
                            This website, built using React, is the result of three months spent studying JS, HTML, and particularly CSS.
                            If you think this website looks good, hook up with me on linked in or send me an email: I'm looking for a job!
                        </p>
                    </figcaption>
                </figure>
            </section>
        </div>
    );
}

export default About;