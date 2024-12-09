import { useState, useEffect } from "react";
import JobSection from "./JobSection";
import "./styles.css";

const JOB_IDS_URL = `https://hacker-news.firebaseio.com/v0/jobstories.json`;

export default function JobBoard() {
  const [jobIds, setJobIds] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchJobIds() {
    let ids = jobIds;
    if (!jobIds) {
      try {
        const res = await fetch(JOB_IDS_URL);
        const data = await res.json();
        console.log("data", data);
        ids = data;
        setJobIds(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    let start = (page - 1) * 10;
    let end = start + 10;
    return ids.slice(start, end);
  }

  async function fetchJobDetails() {
    setLoading(true);
    const ids = await fetchJobIds();
    console.log("ids", ids);

    const jobDetails = await Promise.all(
      ids.map((id) => {
        return fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        ).then((res) => res.json());
      })
    );

    setJobs([...jobs, ...jobDetails]);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobDetails();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="job-board-container padding-20">
      <h1 className="job-board-header">Job Board</h1>
      {jobs.map((job) => (
        <JobSection key={job.id} {...job} />
      ))}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={loading || !jobIds || page * 10 >= jobIds.length}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
