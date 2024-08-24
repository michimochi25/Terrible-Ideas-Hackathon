import { useNavigate } from 'react-router-dom';
import WebcamCapture from '../components/Webcam';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <p>HOME!</p>
      <WebcamCapture />
      {/* Temporary button, remove later */}
      <button onClick={() => navigate('resume')}>to resume page!</button>
    </div>
  )
}

export default Home;