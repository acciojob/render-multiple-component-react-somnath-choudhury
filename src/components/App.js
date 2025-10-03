import React from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      name: "AI-Powered Assistant",
      description: "A voice and text-based AI assistant that helps with daily tasks."
    },
    {
      name: "Social Media Hub",
      description: "A collaborative platform for students and residents to solve problems."
    },
    {
      name: "Credit Risk Predictor",
      description: "A machine learning model to predict credit risk of loan applicants."
    }
  ];

  return (
    <div id="main">
      <div className="ns-wrapper">
        {projects.map((project, index) => (
          <div key={index}>
            <h1 data-ns-test="project-name">{project.name}</h1>
            <h6 data-ns-test="project-description">{project.description}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
