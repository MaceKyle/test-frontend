import { useState } from 'react'
import './styles/App.css'
import { dummyPostTableData } from './assets/dummyPostTableData'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from './pages/post'
import SubmitPost from './pages/submitPostForm'
import Header from './pages/Header'
import Account from './pages/Account';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
