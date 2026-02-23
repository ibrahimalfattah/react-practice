import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/home-page";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/jobs-page";
import NotFoundPage from "./pages/notfound-page";
import JobPage, { jobLoader } from "./pages/job-page";
import AddJobPage from "./pages/addjob-page";
import EditJobPage from "./pages/editjob-page";
// import EditJobPage from "./pages/editjob-page";
// import DeleteJobPage from "./pages/deletejob-page";
const addJob = async (job) => {
  console.log(job);
  response = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  if (!response.ok) {
    throw new Error("Failed to add job");
  }
  const data = await response.json();
  console.log(data);
  return data;
};

const deletejob = async (id) => {
  console.log(id);
  const response = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete job");
  }
  return response.json();
};
const updateJob = async (job) => {
  console.log(job);
  const response = await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  if (!response.ok) {
    throw new Error("Failed to update job");
  }
  return response.json();
};
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deletejob={deletejob} updateJob={updateJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJob={addJob} />} />
        <Route
          path="/jobs/edit/:id"
          element={<EditJobPage updateJob={updateJob} />}
          loader={jobLoader}
        />
        {/* the idea of ":id to indicate that the id is a dynamic parameter"*/}
        <Route path="/*" element={<NotFoundPage />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
