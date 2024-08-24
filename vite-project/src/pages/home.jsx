import { useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <p>HOME!</p>
      {/* Temporary button, remove later */}
      <button onClick={() => useNavigate('resume')}>to resume page!</button>
    </div>
  )
}

export default Home;