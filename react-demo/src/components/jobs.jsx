import React from 'react'
import JobListing from './job-listing'
import Spinner from './spinner'
import { useState, useEffect } from 'react'
const Job = ({ isHome = false }) => {
  // const Jobs = isHome ? jobs.slice(0, 3) : jobs

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = isHome ? '/api/jobs?_per_page=3' : '/api/jobs'
        const response = await fetch(apiUrl)
        const json = await response.json()

        // json-server v1 returns { first: 1, next: null, data: [...] } when querying
        // but it returns a standard array when you aren't paginating/limiting.
        const data = json.data ? json.data : json
        setJobs(data)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])
  const jobListings = jobs.map((job) => (
    <JobListing key={job.id} title={job.title} type={job.type} description={job.description} location={job.location} url={`/jobs/${job.id}`} salary={job.salary} />
  ))
  return (
    <div>

      {/* Browse Jobs */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Browse Jobs" : "All Jobs"}
          </h2>
          {
            loading ? (<Spinner />) :


              (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobListings}
              </div>)
          }

        </div>
      </section>


    </div>
  )
}

export default Job