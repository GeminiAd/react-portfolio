import React from "react";
import Project from "../Project"

function Portfolio(props) {
    const projects = [
        {
            id: 0,
            name: "Mass Matchup",
            img: "mass-matchup.png",
            github: "https://github.com/theDomConrad/Mass-Matchup",
            link: "https://mass-matchup.herokuapp.com/",
            tech: "MySQL/Express/Handlebars",
            css: "MassMatchup"
        },
        {
            id: 1,
            name: "Geo Chart Tracker",
            img: 'geo-chart-tracker.png',
            github: "https://github.com/JCaloca/Geo-Chart-Tracker",
            link: "https://jcaloca.github.io/Geo-Chart-Tracker/",
            tech: "HTML/CSS/JS",
            css: "GeoChartTracker"
        },
        {
            id: 2,
            name: "Weather Dashboard",
            img: 'weather-dashboard.png',
            github: "https://github.com/GeminiAd/weather-dashboard",
            link: "https://geminiad.github.io/weather-dashboard/",
            tech: "HTML/CSS/JS",
            css: "WeatherDashboard"
        },
        {
            id: 3,
            name: "Code Quiz",
            img: "code-quiz.png",
            github: "https://github.com/GeminiAd/code-quiz",
            link: "https://geminiad.github.io/code-quiz/",
            tech: "HTML/CSS/JS",
            css: "CodeQuiz"
        },

    ];

    return (
        <section className="container-fluid my-4">
            <h2 className="my-4 ms-3">Portfolio</h2>
            <div className="row m-2">
                {projects.map(project =>
                    <Project
                        key={project.id}
                        name={project.name}
                        img={project.img}
                        github={project.github}
                        link={project.link}
                        tech={project.tech}
                        css={project.css}
                    />
                )}
            </div>
        </section >
    );
}

export default Portfolio;