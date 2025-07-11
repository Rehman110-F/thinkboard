import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router';
import { ArrowLeft, Trash2Icon } from "lucide-react";
import axios from 'axios';
import api from "../lib/axios.js";
import toast from 'react-hot-toast';

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        console.log("Fetching note with ID:", id);
        setLoading(true);
        const response = await axios.get(`http://localhost:5001/api/notes/${id}`);
        setNote(response.data);
      } catch (error) {
        console.error("Error fetching note:", error);
        console.error("Error message:", error.message);
        console.error("Error response:", error.response?.data);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const deleteHandle = async () => {
    try {
      await api.delete(`http://localhost:5001/api/notes/${id}`);
      toast.success("Deleted successfully!");
      navigate('/');
    } catch (error) {
      toast.error("Error deleting note.");
    }
  };

  const UpdateNote = async () => {
    try {
      if (note.title.trim() && note.content.trim()) {
        setSaving(true);
        await api.put(`http://localhost:5001/api/notes/${id}`, {
          title: note.title,
          content: note.content,
        });
        toast.success("Updated Successfully!");
        navigate("/");
      } else {
        toast.error("Fill the Fields before updating!");
      }
    } catch (error) {
      toast.error("Not updated, an issue occurred! Try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-error font-semibold text-lg">Note not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-base-100 py-10 px-4">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <button className="btn btn-outline btn-sm gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Notes
            </button>
          </Link>
          <button
            className="btn btn-outline btn-error btn-sm"
            onClick={deleteHandle}
          >
            <Trash2Icon className="size-4" />
            Delete
          </button>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-primary">Title:</span>
          </label>
          <input
            type="text"
            value={note.title || ""}
            onChange={(e) =>
              setNote({ ...note, title: e.target.value })
            }
            placeholder="Enter title"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-primary">Content:</span>
          </label>
          <textarea
            value={note.content || ""}
            onChange={(e) =>
              setNote({ ...note, content: e.target.value })
            }
            placeholder="Enter content"
            className="textarea textarea-bordered w-full h-32"
          />
        </div>

        <div className="text-center">
          {saving ? (
            <button className="btn btn-ghost btn-disabled gap-2">
              <span className="loading loading-spinner loading-sm"></span>
              Updating...
            </button>
          ) : (
            <button onClick={UpdateNote} className="btn btn-primary px-8">
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
