import { useNavigate } from 'react-router-dom';
import InputBox from '../components/InputBox.jsx';

function Home() {
  const navigate = useNavigate();
  const imgID = document.getElementById('imgID');
  const imgForm = document.getElementById('imgForm');

  const upload = () => {
    imgForm.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log("submit img");
      fetch(imgForm.action, {
        method: 'POST',
        body: new FormData(imgForm)
      })
    });

    imgID.addEventListener('change', (event) => {
      if (event?.target.files && event.target.files[0]) {
        imgID.src = URL.createObjectURL(event.target.files[0]);
        imgID.load()
      }
    });
  }

  return (
    <div className="innerContainer">
      <h1>ResuManiac</h1>
      <p className="subHeadings">ACE YOUR INTERVIEW</p>

      <div className='flexContainer'>
        <div className='fileInputContainer'>
          <form
            action='http://localhost:3000/api/image'
            method='post'
            encType='multipart/form-data'
            id='imgForm'
          >
            <input
              type='file'
              name='image'
              onChange={upload}
              accept='image/*'
              id='imgID'
              className='fileInputHidden'
            />
            {/* Custom label as button */}
            <label htmlFor="imgID" className="customFileInput">
              Choose File
            </label>
          </form>
        </div>

        <InputBox />

        <button className="take-pic-button" onClick={() => navigate('/takepic')}>
          Take a picture
        </button>
      </div>
    </div>
  )
}

export default Home;