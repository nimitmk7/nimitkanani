import React from "react";
import { skillsSection } from "../../portfolio.js";
import "./SoftwareSkill.scss";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {skillsSection.programmingLanguages && (
          <>
            <h2>Programming Languages</h2>
            <ul className="dev-icons">
              {skillsSection.programmingLanguages.map((skills, i) => {
                return (
                  <li key={i} className="software-skill-inline">
                    <img src={skills.imagePath} alt={skills.skillName} />
                    <span className="skill-tooltip">{skills.skillName}</span>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        {skillsSection.devOps && (
          <>
            <h2>Cloud & Infrastructure</h2>
            <ul className="dev-icons">
              {skillsSection.devOps.map((skills, i) => {
                return (
                  <li key={i} className="software-skill-inline">
                    <img src={skills.imagePath} alt={skills.skillName} />
                    <span className="skill-tooltip">{skills.skillName}</span>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        {skillsSection.mlTools && (
          <>
            <h2>Machine Learning</h2>
            <ul className="dev-icons">
              {skillsSection.mlTools.map((skills, i) => {
                return (
                  <li key={i} className="software-skill-inline">
                    <img src={skills.imagePath} alt={skills.skillName} />
                    <span className="skill-tooltip">{skills.skillName}</span>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        {skillsSection.dataProcessing && (
          <>
            <h2>Data Processing</h2>
            <ul className="dev-icons">
              {skillsSection.dataProcessing.map((skills, i) => {
                return (
                  <li key={i} className="software-skill-inline">
                    <img src={skills.imagePath} alt={skills.skillName} />
                    <span className="skill-tooltip">{skills.skillName}</span>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        {skillsSection.databases && (
          <>
            <h2>Databases</h2>
            <ul className="dev-icons">
              {skillsSection.databases.map((skills, i) => {
                return (
                  <li key={i} className="software-skill-inline">
                    <img src={skills.imagePath} alt={skills.skillName} />
                    <span className="skill-tooltip">{skills.skillName}</span>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
