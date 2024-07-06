/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/profile.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "A TinDog website",
    description:
      "TinDog is an innovative web application designed as a playful parody of the popular dating app, Tinder. Instead of connecting humans, TinDog aims to bring together dogs and their owners by providing a platform where users can find potential playmates for their pets.",
    url: "https://niveditavishwakarma.github.io/Tindog/",
  },
  {
    title: "TIC-TAC-TOE Game",
    description:
      "The Tic-Tac-Toe Game is a web-based application that allows users to play the classic two-player game.",
    url: "https://niveditavishwakarma.github.io/tic-tac-toe/",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://niveditavishwakarma.github.io/resume/",
  },
  {
    title: "Stone-Paper-Scissor",
    description:
      "The Stone Paper Scissor Game is a web-based application that allows users to play the classic hand game against a computer opponent. This project highlights the application of web development skills to create an interactive and engaging user experience.",
    url: "https://niveditavishwakarma.github.io/Stone-Paper-Scissor/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
