import { useState } from "react";

export default function Education({ data, setData }) {
  const [edit, setEdit] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section">
      <h2>Education</h2>
      {edit ? (
        <form>
          <input
            type="text"
            name="school"
            placeholder="School Name"
            value={data.school}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title of Study"
            value={data.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="date"
            placeholder="Date of Study"
            value={data.date}
            onChange={handleChange}
          />
          <div className="form-actions">
            <button type="button" onClick={() => setEdit(false)}>
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p><strong>School:</strong> {data.school}</p>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Date:</strong> {data.date}</p>
          <div className="form-actions">
            <button type="button" onClick={() => setEdit(true)}>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
