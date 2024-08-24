import { useNavigate } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Resume from './pages/resume';
import Home from './pages/home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </>
  )
}

export default App
