import React, { forwardRef } from "react";

const CVPreview = forwardRef(({ general, education, experience }, ref) => {
  return (
    <div ref={ref} className="cv-preview">
      <h1>CV Application</h1>

      <div className="form-section">
        <h2>General Information</h2>
        <div>
          <p><strong>Name:</strong> {general.name}</p>
          <p><strong>Email:</strong> {general.email}</p>
          <p><strong>Phone:</strong> {general.phone}</p>
        </div>
      </div>

      <div className="form-section">
        <h2>Education</h2>
        <div>
          <p><strong>School:</strong> {education.school}</p>
          <p><strong>Title:</strong> {education.title}</p>
          <p><strong>Date:</strong> {education.date}</p>
        </div>
      </div>

      <div className="form-section">
        <h2>Experience</h2>
        <div>
          <p><strong>Company:</strong> {experience.company}</p>
          <p><strong>Position:</strong> {experience.position}</p>
          <p><strong>Responsibilities:</strong> {experience.responsibilities}</p>
          <p><strong>From:</strong> {experience.from}</p>
          <p><strong>Until:</strong> {experience.until}</p>
        </div>
      </div>
    </div>
  );
});

export default CVPreview;
