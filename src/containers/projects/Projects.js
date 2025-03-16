import React, { useState, useEffect, Suspense, lazy } from "react";
import "./Project.scss";
import projectSection from "../../portfolio"; // Import project data

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const renderLoader = () => <div>Loading...</div>;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projects); // Load projects from the JS file
  }, []);

  return (
    <Suspense fallback={renderLoader()}>
      <div className="main" id="projects">
        <h1 className="project-title">My Projects</h1>
        <div className="repo-cards-div-main">
          {projectSection.projects.map((project) => (
            <div key={project.id} className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {(project.techStack || []).join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}

