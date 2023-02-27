import { Link } from "react-router-dom";

import "./About.css";

const About = () => {
  return (
    <main className="about__content">
      <h1>About</h1>
      <p>My name is Dagger.</p>
      <p>
        I'm a self-taught Front End Web Developer who has been studying
        programming for the past two years. It started in March 2021 when I
        began learning Python but it wasn't until January of 2022 when I began
        learning JavaScript that I really started to understand what it means to
        be a programmer. Since then I have become a lot more proficient in HTMl,
        CSS and JavaScript. I'm currently learning about React and its amazing
        capabilities.
      </p>
      <p>
        I'm a night owl. I spend 2-3 hours every night working on projects,
        going through Stack Overflow or watching YouTube videos.
      </p>
      <p>
        I love working and keeping my mind busy. I'm self motivated and I take
        my future very seriously.
      </p>
      <p>
        My New Year's goal for 2023 is to finally get a job relating to
        programming so I can finally get my career started.
      </p>
      <p>Follow Me:</p>
      <p>
        <Link
          to="https://www.linkedin.com/feed/"
          target="_blank"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <i class="devicon-linkedin-plain colored"></i>
        </Link>
        <Link
          to="https://github.com/dagger-v"
          target="_blank"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <i class="devicon-github-original left"></i>
        </Link>
        <Link
          to="https://twitter.com/daggerv3"
          target="_blank"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <i class="devicon-twitter-original colored left"></i>
        </Link>
      </p>
      <p>
        <i class="devicon-react-original"></i>
        <i class="devicon-javascript-plain colored left"></i>
        <i class="devicon-html5-plain colored left"></i>
        <i class="devicon-css3-plain colored left"></i>
        <i class="devicon-nodejs-plain left"></i>
        <i class="devicon-mongodb-plain left"></i>
      </p>
    </main>
  );
};
export default About;
