import React from "react";
import "./ClientLandingPage.css";

const ClientLandingPage = () => {
  return (
    <div>
      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome to WorkLink!</h2>
        <p>Post and manage your projects efficiently, and collaborate with top freelancers.</p>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>Post a New Project</h3>
          <p>Easily post a project and specify your requirements to attract the best freelancers.</p>
          <button className="action-button">Post Project</button>
        </div>
        <div className="feature-card">
          <h3>Manage Your Projects</h3>
          <p>View the status of your posted projects, track milestones, and approve deliverables.</p>
          <button className="action-button">View Projects</button>
        </div>
        <div className="feature-card">
          <h3>Engage with Freelancers</h3>
          <p>Communicate directly with freelancers to ensure smooth project execution.</p>
          <button className="action-button">Message Freelancers</button>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="reporting-section">
        <h2>Project Analytics</h2>
        <p>Get insights on your project performance and budgets.</p>
        <div className="report-card">
          <h3>Total Projects: 10</h3>
          <h3>Budget Utilized: 75%</h3>
          <h3>Average Rating of Freelancers: 4.8/5</h3>
        </div>
      </section>
    </div>
  );
};

export default ClientLandingPage;
