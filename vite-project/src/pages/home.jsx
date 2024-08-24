import { useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div className="innerContainer">
      <h1>ResuManiac</h1>
      <h3 className="subHeadings">ACE YOUR INTERVIEW</h3>
      {/* Temporary button, remove later */}

      <div className="inputContainer">
        
        <button onClick={() => useNavigate('resume')}>to resume page!</button>
      </div>
    </div>
  )
}

export default Home;