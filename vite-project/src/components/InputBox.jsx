import { useNavigate } from "react-router-dom";

const InputBox = () => {
  const navigate = useNavigate();
  return (
    <div className='input-box-container'>
      <form action="" method="get">
        <textarea
          className="inputContainer"
          placeholder='Put the job position you want to apply for, e.g. Software Engineer'
          rows="4"
        />
      </form>


      <button type="submit" className="submitButton" onClick={() => navigate('/resume')}>
        Submit
      </button>

    </div>
  )
}

export default InputBox;