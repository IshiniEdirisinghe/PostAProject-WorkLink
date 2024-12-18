import React from "react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>
          Work<span className="link-highlight">Link</span>
        </h1>
      </div>
      <nav className="nav">
        <a href="#" className="active">
          Post a project
        </a>
        <a href="#">Your Hires</a>
        <a href="#">Reports</a>
        <a href="#">Messages</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
