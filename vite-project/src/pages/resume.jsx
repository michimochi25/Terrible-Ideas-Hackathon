import { useState, useEffect } from 'react';

function Resume() {
  const [data, setData] = useState(0);
  useEffect(() => {

  }, []);

  return (
    <div className="resume">
      <div className="container">
        <div className="image">
          Image here
          {/* image */}
        </div>
        <div className="resume-container">
          {/* the CV */}
          {data}
        </div>
      </div>
    </div>
  )
}

export default Resume;