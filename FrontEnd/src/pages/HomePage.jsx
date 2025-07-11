import React from 'react'
import { useState ,useEffect} from 'react';
import Navbar from '../components/Navbar.jsx';
import RateLimiter  from '../components/RateLimiter.jsx';
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from '../components/NoteCard.jsx';
import api from '../lib/axios.js';
import NofoundNote from '../components/NofoundNote.jsx';
const HomePage = () => {
  const [isRateHit, setRateAgain] = useState(false);
  const [notes, setnotes] = useState([]);
  const [loading , setloading] = useState(true);
  useEffect(() => {

    const fetchnotes = async () => {
      try {
        const res = await api.get("/notes");// we have get,post here also
        
        // instead of using the below we can use the axios see above line
        //const res= await fetch("http://localhost:5001/api/notes");
        //const data = await res.json();
        //console.log(data);
        console.log(res.data);
        setnotes(res.data);
        setRateAgain(false);
      } catch (error) {
        console.log("Notes Fetching  error", error);
        console.log("To many requests.");
        if (error.response?.status === 429){
          setRateAgain(true);
          
        }
        else{
          toast.error("Failed to Fetch notes!");
        }
      }
      finally{
        setloading(false);
      }
    };
    fetchnotes();


  },[]);
  return (
    <div className='min-h-screen'>
      <Navbar/>
      {isRateHit && <RateLimiter/>}

      <div className='max-w-7xl mx-auto p-4 mt-6'>
          {loading && <div className='text-center text-primary py-10'>Loading the notes...</div>}
          {notes.length ===0 && !isRateHit && <NofoundNote/>}
          {notes.length > 0 && !isRateHit && (
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {notes.map((note) =>(
                <NoteCard  key={note._id} note={note} setnotes={setnotes} />
              )
            )}
            </div>
          )}
      </div>
    </div>
  )
};

export default HomePage;
