import { useState } from "react";

export default function Experience({ data, setData }) {
  const [edit, setEdit] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section">
      <h2>Practical Experience</h2>
      {edit ? (
        <form>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={data.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Position Title"
            value={data.position}
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            placeholder="Main Responsibilities"
            value={data.responsibilities}
            onChange={handleChange}
          />
          <input
            type="text"
            name="from"
            placeholder="From"
            value={data.from}
            onChange={handleChange}
          />
          <input
            type="text"
            name="until"
            placeholder="Until"
            value={data.until}
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
          <p><strong>Company:</strong> {data.company}</p>
          <p><strong>Position:</strong> {data.position}</p>
          <p><strong>Responsibilities:</strong> {data.responsibilities}</p>
          <p><strong>From:</strong> {data.from}</p>
          <p><strong>Until:</strong> {data.until}</p>
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
