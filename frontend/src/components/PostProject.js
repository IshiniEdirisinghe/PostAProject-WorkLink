import React from "react";
import axios from "axios";

function PostProject() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: document.getElementById("project-title").value,
      description: document.getElementById("description").value,
      skills: document.getElementById("skills").value,
      budget: document.getElementById("budget").value,
      deadline: document.getElementById("deadline").value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Project posted successfully!");
      } else {
        alert("Failed to post project.");
      }
    } catch (error) {
      console.error("Error posting project:", error);
    }
  };

  return (
    <main className="main-content">
      <div className="post-project">
        <div className="left-section">
          <h2>Post a New Project</h2>
          <p>Provide the details below to attract the best freelancers for your project.</p>
        </div>
        <div className="right-section">
          <form id="project-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="project-title">Project Title</label>
              <input
                type="text"
                id="project-title"
                placeholder="e.g., Build responsive e-commerce website"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Project Description</label>
              <textarea
                id="description"
                rows="6"
                placeholder="Describe your project..."
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="skills">Required Skills</label>
              <input
                type="text"
                id="skills"
                placeholder="e.g., HTML, CSS, JavaScript"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="budget">Budget</label>
              <input
                type="number"
                id="budget"
                placeholder="e.g., 500,000 (LKR)"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="deadline">Deadline</label>
              <input type="date" id="deadline" required />
            </div>
            <button type="submit" className="submit-btn">
              Submit Project
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default PostProject;
