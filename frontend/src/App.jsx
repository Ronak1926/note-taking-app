import React from 'react'
import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast'
const App = () => {
  return (
    <div data-theme="black">
      <button className='btn btn-outline'>Click me</button>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
