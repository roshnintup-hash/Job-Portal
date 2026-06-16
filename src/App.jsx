import { useState } from "react";
import './App.css'
function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [bookmarked, setBookmarked] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ABC Technologies",
    location: "Chennai"
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "XYZ Solutions",
    location: "Bangalore"
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "TechSoft",
    location: "Hyderabad"
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Infosys",
    location: "Pune"
  },
  {
    id: 5,
    title: "UI UX Designer",
    company: "Creative Labs",
    location: "Mumbai"
  },
  {
    id: 6,
    title: "Python Developer",
    company: "Wipro",
    location: "Chennai"
  },
  {
    id: 7,
    title: "React Developer",
    company: "TCS",
    location: "Coimbatore"
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "Accenture",
    location: "Bangalore"
  }
];
const filteredJobs = jobs.filter(
  (job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) &&
    job.location.toLowerCase().includes(location.toLowerCase())
);
const addBookmark = (jobTitle) => {
  setBookmarked([...bookmarked, jobTitle]);
};
  return (
    <div>
      <h1>Job Portal</h1>
      <h2>Find Your Dream Job</h2>
      <input
  type="text"
  placeholder="Search Jobs"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<input
  type="text"
  placeholder="Search Location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
/>

<button>Search</button>
<p>You searched for: {search}</p>
<h3>Bookmarked Jobs</h3>

{bookmarked.map((job, index) => (
  <p key={index}>{job}</p>
))}

      <hr />

      {selectedJob && (
  <div>
    <h3>Selected Job Details</h3>
    <p>Title: {selectedJob.title}</p>
    <p>Company: {selectedJob.company}</p>
    <p>Location: {selectedJob.location}</p>
  </div>
)}
      <h3>Available Jobs</h3>

      {filteredJobs.map((job) => (
  <div key={job.id} className="job-card">
    <h4>{job.title}</h4>
    <p>🏢 Company: {job.company}</p>
    <p>📍 Location: {job.location}</p>
    <button onClick={() => setSelectedJob(job)}>
  View Details
</button>
<button>
  Apply Now
</button>
    <button onClick={() => addBookmark(job.title)}>
  Bookmark
</button>
    <hr />
  </div>
))}
    </div>
  );
}

export default App;