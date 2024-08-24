import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">

      <p>HOME!</p>
      {/* Temporary button, remove later */}
      <button onClick={() => navigate('resume')}>to resume page!</button>
    </div>
  )
}

export default Home;