import "./styles.css";
export default function JobSection(jobDetail) {
  return (
    <div className="job-section-container">
      <h3 className="job-section-header">
        <a href={jobDetail.url} rel="noopener noreferrer" target="_blank">
          {jobDetail.title}
        </a>
      </h3>
      <div className="job-section-caption">
        <p>By {jobDetail.by}</p>
        <p>{new Date(jobDetail.time * 1000).toLocaleString()}</p>
      </div>
    </div>
  );
}
