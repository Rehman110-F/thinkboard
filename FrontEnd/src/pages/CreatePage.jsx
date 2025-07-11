import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import api from '../lib/axios';
import axios from 'axios';
const CreatePage = () => {
  const nodeMaker = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/notes", {
        title: title,
        content: content,
      })

    } catch (error) {
      console.log("Error has been occur.", error);
    }
  }
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoaing] = useState(false);
  return (

    <div className='flex items-center justify-center min-h-screen bg-base-200'>
      <div class="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <Link to={"/"}>
          <button className="btn btn-outline btn-sm gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Notes
          </button>
        </Link>
        <div className='p-6 bg-base-100 rounded-lg shadow-md'>
          <h1 class="text-2xl font-bold text-primary mb-2">
            Note Details
          </h1>


          <form onSubmit={nodeMaker} className='' >
            <div >
              <h3 className='text-lg font-semibold text-primary mb-2'>Title:</h3>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter the title'
                className="input input-bordered w-full"
              />

            </div>
            <div >
              <h3 class="text-lg font-semibold text-primary  mb-2">
                Content:
              </h3>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Enter the content'
                className='input input-bordered w-full'
              />

            </div>
            <div class="flex justify-end px-4 py-2">
              <button type='submit'
                class="btn btn-primary px-6 py-2 text-base h-12 min-w-[120px]">Create</button>
            </div>
          </form>


        </div>

      </div>

    </div>

  )
}

export default CreatePage;
