import React from "react";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
const JobListing = (props) => {
  const [showMore, setShowMore] = useState(false);
  let description = props.description;
  if (!showMore) {
    description = description.substring(0, 100) + "...";
  }
  return (
    <div>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{props.type}</div>
            <h3 className="text-xl font-bold">{props.title}</h3>
          </div>

          <div className="mb-5">{description}</div>
          {/* <button>{setShowMore(!showMore)}</button> */}
          <button
            onClick={() =>
              setShowMore((prev) => !prev)
            } /*or we can use (!showMore)*/
            className="text-indigo-500 hover:text-indigo-600 text-sm"
          >
            {showMore ? "Show Less" : "Show More"}{" "}
          </button>

          <h3 className="text-indigo-500 mb-2">{props.salary}</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <FaMapMarker className="inline-block mr-2 text-lg" />
              {props.location}
            </div>
            <Link
              to={props.url}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
