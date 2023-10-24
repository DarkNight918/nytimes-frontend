import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="text-[70px] h-screen flex flex-col justify-center items-center">
      <div className="text-neutral-200 shadow-md">
        Top Stories of New York Times
      </div>
      <Link to="/news">
        <button className="text-xl mt-10 bg-neutral-900 px-5 py-2 rounded text-neutral-200 transition ease-in-out hover:shadow-md hover:bg-neutral-700">
          View Stories
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
