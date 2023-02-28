import ProjectBox from "./ProjectBox";

import "./Project.css";

const Project = () => {
  return (
    <div className="project__content">
      Hello
      <div className="project__wrapper">
        {ProjectBox.map(({ title, image }, index) => (
          <div className="project__box">
            <img src={image}></img>
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
