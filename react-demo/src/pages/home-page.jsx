import React from "react";
import Hero from "../components/hero";
import HomeCards from "../components/home-cards";
import Jobs from "../components/jobs";
import ViewAllJobs from "../components/viewAllJobs";

const HomePage = () => {
  return (
    <div>
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />

      <HomeCards />

      <Jobs isHome={true} />
      <ViewAllJobs />
    </div>
  );
};

export default HomePage;
