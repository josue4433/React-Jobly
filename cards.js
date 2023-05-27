import React from 'react';

function JobCard({ job }) {
  return (
    <div>
      <h3>{job.title}</h3>
      <p>{job.companyName}</p>
      {/* Add any other job information to display */}
    </div>
  );
}

export default JobCard;
