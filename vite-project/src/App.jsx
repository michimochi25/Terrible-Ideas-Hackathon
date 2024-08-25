import './App.css';
import { Routes, Route } from 'react-router-dom';
import Resume from './pages/resume';
import Home from './pages/home';
import TakePic from './pages/takePicturePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/resume' element={<Resume />} />
        <Route path='/' element={<TakePic />} />
      </Routes>
    </>
  )
}

export default App
