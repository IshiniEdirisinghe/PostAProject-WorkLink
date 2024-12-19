import React from "react";
import "./ClientLandingPage.css";

const ClientLandingPage = () => {
  const projects = [
    {
      title: "Build an E-commerce Website",
      description: "A responsive online store with payment gateway integration.",
      budget: "500,000 LKR",
      deadline: "2024-12-31",
    },
    {
      title: "Mobile App Development",
      description: "Develop a cross-platform app for fitness tracking.",
      budget: "300,000 LKR",
      deadline: "2025-01-15",
    },
    {
      title: "Social Media Marketing Campaign",
      description: "Create and manage a social media campaign for 6 months.",
      budget: "100,000 LKR",
      deadline: "2024-12-01",
    },
  ];

  return (
    <div>
      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <p>10</p>
        </div>
        <div className="stat-card">
          <h3>Completed Projects</h3>
          <p>5</p>
        </div>
        <div className="stat-card">
          <h3>Ongoing Projects</h3>
          <p>3</p>
        </div>
        <div className="stat-card">
          <h3>Pending Projects</h3>
          <p>2</p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search projects..." />
        <button>Search</button>
      </div>

      {/* Projects List */}
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Budget:</strong> {project.budget}
            </p>
            <p>
              <strong>Deadline:</strong> {project.deadline}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLandingPage;
