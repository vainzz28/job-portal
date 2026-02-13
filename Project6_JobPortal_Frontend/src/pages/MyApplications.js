import React, { useEffect, useState } from "react";
import API from "../api";

export default function MyApplications() {
  const [apps, setApps] = useState([]);

  async function loadApps() {
    try {
      const res = await API.get("/applications/my");
      setApps(res.data);
    } catch (err) {
      alert("Login required to view applications");
    }
  }

  useEffect(() => {
    loadApps();
  }, []);

  return (
    <div className="container">
      <h1>My Applications</h1>

      {apps.length === 0 && <p className="small">No applications found.</p>}

      {apps.map((a) => (
        <div className="card" key={a._id}>
          <h2>{a.jobId?.title}</h2>
          <p className="small"><b>Company:</b> {a.jobId?.company}</p>
          <p className="small"><b>Location:</b> {a.jobId?.location}</p>
          <p className="small"><b>Status:</b> {a.status}</p>
          <p className="small"><b>Resume:</b> <a href={a.resumeLink} target="_blank" rel="noreferrer">{a.resumeLink}</a></p>
        </div>
      ))}
    </div>
  );
}
