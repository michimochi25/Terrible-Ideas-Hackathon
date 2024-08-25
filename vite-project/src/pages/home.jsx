import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputBox from '../components/InputBox.jsx';

function Home() {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(null);

  const upload = (event) => {
    if (event?.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImgSrc(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <div className="innerContainer">
      <h1>ResuManiac</h1>
      <p className="subHeadings">Rescue Your Career…
        or Sabotage It, We’re Not Sure!</p>

      <div className='flexContainer'>
        <div className='fileInputContainer'>
          <form
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

            {imgSrc && <div>
              <h2>Preview</h2>
              <div className='img-preview'>
                <img style={{ maxWidth: '500px', maxHeight: '200px' }} src={imgSrc} />
              </div>
            </div>}
          </form>
        </div>

        <InputBox />

        <span className="take-pic-button" onClick={() => navigate('/takepic')}>
          Take a picture instead?
        </span>
      </div>
    </div>
  )
}

export default Home;