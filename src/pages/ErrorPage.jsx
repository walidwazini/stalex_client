import React from "react";

import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen bg-slate-700 flex flex-col gap-20 justify-center items-center '>
      <h1 className='text-3xl font-bold underline text-blue-400 '>
        Error Page
      </h1>
      <button
        className='py-3 px-4 bg-indigo-600 rounded-md text-sm text-white '
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
