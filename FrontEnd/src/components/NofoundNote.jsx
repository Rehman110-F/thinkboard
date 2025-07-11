import React from 'react'
import { Link } from 'react-router'
const NofoundNote = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-base-200 rounded-xl p-8 shadow-md">
      <h1 className="text-2xl font-bold text-error mb-4">No Note Found!</h1>
      <Link to="/create" className="btn btn-primary btn-wide">
        <span>Go to Creation →</span>
      </Link>
    </div>

  )
}

export default NofoundNote
