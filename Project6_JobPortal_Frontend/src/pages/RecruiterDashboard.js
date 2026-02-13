import React, { useState } from "react";
import API from "../api";

export default function RecruiterDashboard() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("Full Time");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");

  async function postJob() {
    try {
      const res = await API.post("/jobs", {
        title,
        company,
        location,
        salary,
        jobType,
        description,
        skills: skills.split(",").map(s => s.trim()).filter(Boolean)
      });

      alert(res.data.message);

      setTitle(""); setCompany(""); setLocation("");
      setSalary(""); setJobType("Full Time");
      setDescription(""); setSkills("");

    } catch (err) {
      alert(err.response?.data?.message || "Job post failed (Recruiter login required)");
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Recruiter Dashboard</h1>
        <p className="small">Only recruiter accounts can post jobs.</p>

        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Job Title" />
        <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" />
        <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        <input value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Salary" />

        <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>

        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Job Description"></textarea>
        <input value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Skills (comma separated e.g React, Node, MongoDB)" />

        <button className="btn" onClick={postJob}>Post Job</button>
      </div>
    </div>
  );
}
