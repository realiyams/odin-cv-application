import { useState } from "react";

export default function GeneralInfo({ data, setData }) {
  const [edit, setEdit] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section">
      <h2>General Information</h2>
      {edit ? (
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={data.phone}
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
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
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
