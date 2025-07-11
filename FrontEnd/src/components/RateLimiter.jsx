import React from 'react'

const RateLimiter = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full border border-base-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-error">Too Many Requests</h1>
          <p className="mt-4 text-gray-600">
            You have hit the daily request limit. Please try again tomorrow.
          </p>
          <div className="mt-6">
            <button className="btn btn-error btn-sm">Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimiter
