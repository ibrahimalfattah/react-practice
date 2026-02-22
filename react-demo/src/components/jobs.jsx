import React from 'react'
import JobListing from './job-listing'
import jobs from '../jobs.json'
const Job = () => {
 const recentJobs = jobs.slice(0, 3)
  const jobListings = recentJobs.map((job) => (
    <JobListing key={job.id} title={job.title} type={job.type} description={job.description} location={job.location} url={`/jobs/${job.id}`} salary={job.salary} />
  ))
  return (
    <div>

    {/* Browse Jobs */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobListings}
        </div>
      </div>
    </section>


    </div>
  )
}

export default Job