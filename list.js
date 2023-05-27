import React, { useState, useEffect } from 'react';
import JoblyApi from './api';
import JobCard from './JobCard';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const response = await JoblyApi.getJobs();
      setJobs(response.jobs);
    }

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Jobs</h2>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
