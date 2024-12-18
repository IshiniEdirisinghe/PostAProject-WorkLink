import React from "react";

function FormGroup({ label, id, type, placeholder, rows }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea id={id} rows={rows} placeholder={placeholder} required></textarea>
      ) : (
        <input type={type} id={id} placeholder={placeholder} required />
      )}
    </div>
  );
}

export default FormGroup;
