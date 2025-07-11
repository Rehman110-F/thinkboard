import React from 'react';
import { Route, Routes } from 'react-router'; // ✅ Make sure you're using react-router-dom
import CreatePage from './pages/CreatePage.jsx';
import HomePage from './pages/HomePage.jsx';
import NoteDetailPage from './pages/NoteDetailPage.jsx';
import toast from 'react-hot-toast';
const App = () => {
  return (
    <div data-theme="forest">
        <Routes>
        <Route path="/"  element={ <HomePage />} />
        <Route path="/create"  element={ <CreatePage />} />
        <Route path="/note/:id"  element={ <NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;

