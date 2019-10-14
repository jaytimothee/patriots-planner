import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(prj => {
          return (
            <Link to={`project/${prj.id}`}>
              <ProjectSummary project={prj} key={prj.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
