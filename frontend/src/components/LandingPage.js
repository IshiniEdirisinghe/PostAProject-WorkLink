function LandingPage() {
  const [projects, setProjects] = React.useState([]);
  const [successMessage, setSuccessMessage] = React.useState("");

    React.useEffect(() => {
    fetch("http://localhost:5000/api/projects") 
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="landing-page">
      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      )}
      <h2>Posted Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project._id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Skills:</strong> {project.skills}
            </p>
            <p>
              <strong>Budget:</strong> {project.budget} LKR
            </p>
            <p>
              <strong>Deadline:</strong> {new Date(project.deadline).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
