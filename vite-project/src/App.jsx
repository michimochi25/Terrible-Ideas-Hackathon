import { useNavigate } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import resume from './pages/resume';
import home from './pages/home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<home />} />
        <Route path='/resume' element={<resume />} />
      </Routes>
    </>
  )
}

export default App
