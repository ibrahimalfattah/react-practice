import React from "react";
import Job from "../components/jobs";
// import JobListing from "../components/job-listing";
// import jobs from '../jobs.json'
const JobsPage = () => {
  // const JobListings = jobs.map((job) => <JobListing key={job.id} {...job} />)
  return (
    <div>
      <Job />
    </div>
  );
};

export default JobsPage;
