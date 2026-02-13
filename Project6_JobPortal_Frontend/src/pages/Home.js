import React, { useEffect, useState } from "react";
import API from "../api";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  async function loadJobs() {
    const res = await API.get(`/jobs?search=${search}&location=${location}`);
    setJobs(res.data);
  }

  async function applyJob(jobId) {
    const resumeLink = prompt("Enter Resume Link (Google Drive / GitHub / Portfolio):");
    if (!resumeLink) return;

    try {
      const res = await API.post("/applications/apply", { jobId, resumeLink });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Apply failed");
    }
  }

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>🔥 Explore Jobs</h1>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search job title..." />
        <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Search location..." />
        <button className="btn" onClick={loadJobs}>Search</button>
      </div>

      <div className="grid">
        {jobs.map((job) => (
          <div className="card" key={job._id}>
            <h2>{job.title}</h2>
            <p className="small"><b>Company:</b> {job.company}</p>
            <p className="small"><b>Location:</b> {job.location}</p>
            <p className="small"><b>Type:</b> {job.jobType}</p>
            <p className="small"><b>Salary:</b> ₹{job.salary}</p>

            <p>{job.description}</p>

            <div>
              {job.skills?.map((s, i) => (
                <span className="badge" key={i}>{s}</span>
              ))}
            </div>

            <button className="btn" onClick={() => applyJob(job._id)}>Apply Job</button>
          </div>
        ))}
      </div>
    </div>
  );
}
