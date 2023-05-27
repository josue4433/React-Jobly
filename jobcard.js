import React from 'react';

function JobCard({ job, hasApplied, applyToJob }) {
  const handleApply = () => {
    applyToJob(job.id);
  };

  return (
    <div>
      <h3>{job.title}</h3>
      <p>{job.companyName}</p>
      {hasApplied ? (
        <button disabled>Applied</button>
      ) : (
        <button onClick={handleApply}>Apply</button>
      )}
    </div>
  );
}

export default JobCard;
