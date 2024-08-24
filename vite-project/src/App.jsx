import { useNavigate } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import resume from './pages/resume';
import home from './pages/home';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<home />} />
          <Route path='/resume' element={<resume />} />
        </Routes>
      </div>
    </>
  )
}

export default App
