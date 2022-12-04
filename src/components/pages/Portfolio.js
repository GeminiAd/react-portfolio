import React from "react";
import Project from "../Project"
import MassMatchupImage from "../img/mass-matchup.png";
import GeoChartTrackerImage from "../img/geo-chart-tracker.png";
import WeatherDashboardImage from "../img/weather-dashboard.png";
import CodeQuizImage from "../img/code-quiz.png";
import TechBlogImage from "../img/tech-blog.png";

function Portfolio(props) {
    const projects = [
        {
            id: 0,
            name: "Mass Matchup",
            img: MassMatchupImage,
            github: "https://github.com/theDomConrad/Mass-Matchup",
            link: "https://mass-matchup.herokuapp.com/",
            tech: "MySQL/Express/Handlebars",
            css: "MassMatchup"
        },
        {
            id: 1,
            name: "Geo Chart Tracker",
            img: GeoChartTrackerImage,
            github: "https://github.com/JCaloca/Geo-Chart-Tracker",
            link: "https://jcaloca.github.io/Geo-Chart-Tracker/",
            tech: "HTML/CSS/JS",
            css: "GeoChartTracker"
        },
        {
            id: 2,
            name: "Tech Blog",
            img: TechBlogImage,
            github: "https://github.com/GeminiAd/tech-blog",
            link: "https://salty-crag-65332.herokuapp.com/",
            tech: "Handlebars/SQL/Express",
            css: "TechBlog"
        },
        {
            id: 3,
            name: "Weather Dashboard",
            img: WeatherDashboardImage,
            github: "https://github.com/GeminiAd/weather-dashboard",
            link: "https://geminiad.github.io/weather-dashboard/",
            tech: "HTML/CSS/JS",
            css: "WeatherDashboard"
        },
        {
            id: 4,
            name: "Code Quiz",
            img: CodeQuizImage,
            github: "https://github.com/GeminiAd/code-quiz",
            link: "https://geminiad.github.io/code-quiz/",
            tech: "HTML/CSS/JS",
            css: "CodeQuiz"
        },

    ];

    return (
        <section className="container-fluid my-4">
            <h2 className="my-4 ms-3 text-center">Portfolio</h2>
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