function Home() {
  const imgID = document.getElementById('imgID');
  const imgForm = document.getElementById('imgForm');

  const upload = () => {
    imgForm.addEventListener('submit' ,(event) => {
      event.preventDefault();
      console.log("submit img");
      fetch(imgForm.action, {
        method:'POST',
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
      <h3 className="subHeadings">ACE YOUR INTERVIEW</h3>
      <div className="biggerContainer">
        <form action="http://localhost:3000/api/image" method="post" encType="multipart/form-data" id='imgForm'>
        <input type="file" name="image" onChange={upload} accept="image/*" id="imgID"></input>
        <div className="submitButton">  
          <button className="submitButton">Submit</button>
        </div>
    </form>
        <div className="inputContainer"></div>
      </div>
    </div>
  )
}

export default Home;