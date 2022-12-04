import React from "react";
import Project from "../Project"
import MassMatchupImage from '../img/mass-matchup.png';
import GeoChartTrackerImage from '../img/geo-chart-tracker.png';
import WeatherDashboardImage from '../img/weather-dashboard.png';
import CodeQuizImage from '../img/code-quiz.png';

function Portfolio(props) {
    const projects = [
        {
            id: 0,
            name: "Mass Matchup",
            img: MassMatchupImage,
            github: "https://github.com/theDomConrad/Mass-Matchup",
            link: "https://mass-matchup.herokuapp.com/",
            tech: "MySQL/Express/Handlebars"
        },
        {
            id: 1,
            name: "Geo Chart Tracker",
            img: GeoChartTrackerImage,
            github: "https://github.com/JCaloca/Geo-Chart-Tracker",
            link: "https://jcaloca.github.io/Geo-Chart-Tracker/",
            tech: "HTML/CSS/JS"
        },
        {
            id: 2,
            name: "Weather Dashboard",
            img: WeatherDashboardImage,
            github: "https://github.com/GeminiAd/weather-dashboard",
            link: "https://geminiad.github.io/weather-dashboard/",
            tech: "HTML/CSS/JS"
        },
        {
            id: 3,
            name: "Code Quiz",
            img: CodeQuizImage,
            github: "https://github.com/GeminiAd/code-quiz",
            link: "https://geminiad.github.io/code-quiz/",
            tech: "HTML/CSS/JS"
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
                        tech={project.tech}
                    />
                )}
            </div>
        </section >
    );
}

export default Portfolio;