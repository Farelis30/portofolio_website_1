import React from 'react';
import './portofolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17774105-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17661138-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16811959-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16811761-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16811740-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17610616-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
];

const portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portofolio;
