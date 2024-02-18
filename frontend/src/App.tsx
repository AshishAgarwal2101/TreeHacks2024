import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userEntry" element={<UserEntry/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </>
 
  );
}

function UserEntry(){

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <nav className="navbar bg-white navbar-expand-sm d-flex justify-content-between" style={{ width: '80%', height: '60%' }}>
    <input type="text" name="text" className="form-control" placeholder="Type a message..." />

    <div className="icondiv d-flex justify-content-end align-content-center text-center ml-2">
      <i className="fa fa-paperclip icon1"></i>
      <i className="fa fa-arrow-circle-right icon2"></i>
    </div>
  </nav>
  <button type="button" className="btn btn-primary" style={{padding:20}}>S</button>
</div>

  );
}

function Home(){
  const [loaded, setLoaded] = useState(false);
  const [patientBackground, setPatientBackground] = useState('Initial patient background text');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const [file, setFile] = useState<File | null>(null);





  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 100);

    

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (file === null) {
      const timeoutId = setTimeout(() => {
        // Perform some action after waiting
        console.log('Waiting for file...');
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [file]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Explicitly type the event parameter
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      
      handleSubmit(); // Auto-submit the form when a file is selected
    }
  };

  const handleSubmit = async () => {

    if (!file) return; // Prevent submission if no file is selected
    setUploadSuccess(true);    
    const formData = new FormData();
    formData.append('pdfFile', file);

    try {
      const response = await fetch('http://localhost:5000/upload-pdf', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("Upload was successful");
      } else {
        console.error('Error uploading PDF file');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  

  const myStyle: React.CSSProperties = {
    backgroundImage: "url('/WhiteBackFlower.jpg')",
    height: '100vh',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'opacity 0.5s ease',
    opacity: loaded ? 1 : 0,
  };

  const leftDivStyle: React.CSSProperties = {
    width: '100%',
    height: '20%',
    background: 'rgba(255, 255, 255, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'left',
    paddingLeft: 0,
  };

  const rightDivStyle: React.CSSProperties = {
    width: '100%',
    height: '80%',
    background: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'row', 
  };

  const rightLeftDivStyle: React.CSSProperties = {
    width: '50%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'left',
    padding:40,
  };

  const rightrightDivStyle: React.CSSProperties = {
    width: '50%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'left',
  };

  const h1Style: React.CSSProperties = {
    margin: 0,
    paddingLeft: 20,
    paddingBottom: 0,
  };

  return (   <div style={myStyle}>
    <div style={leftDivStyle}>
      <h1 style={h1Style}>Welcome to Counsellor.AI, I am here to Assist you!</h1>
    </div>
    <div style={rightDivStyle}>
    <div style={rightLeftDivStyle}>
      <h1 style={{ paddingTop: '20px' }}>Patient Background</h1>
      <p style={{width:'80%'}}>{patientBackground}</p>
      <h1 style={{ paddingTop: '20px' }}>Suggested Reply</h1>
      <div className="alert" role="alert" style={{ backgroundColor: 'rgba(0, 123, 255, 0.3)',width:'80%' }}>
A simple primary alert—check it out!

</div>
<div className="container">
      <h5>Upload PDF File</h5>
      <form onSubmit={handleSubmit}>
        {/* Custom button with image */}
        {uploadSuccess ? (
          <img src={'./checked.png'} alt="Success" style={{ width: '50px', height: '50px' }} />
        ) : (
          <label htmlFor="file-upload" className="custom-file-upload">
            <img src={'./file-upload.png'} alt="Upload" style={{ width: '50px', height: '50px' }} />
          </label>
        )}
        <input id="file-upload" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
        {!uploadSuccess && <button type="submit" style={{ display: 'none' }}></button>}
      </form>
    </div>


    </div>
      <div style={rightrightDivStyle}>
      <div className="d-flex justify-content-start" style={{ width: '80%', height: '80%', paddingLeft: '20px' }}>
<div className="px-2 scroll with-padding" style={{ width: '100%', height: '100%' }}>

    <div className="d-flex align-items-center">
      <div className="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width="30" className="img1" /></div>
      <div className="pr-2 pl-1">
        <span className="name">Sarah Anderson</span>
        <p className="msg">Hi Dr. Hendrikson, I haven't been feeling well for the past few days.</p>
      </div>
    </div>

    <div className="d-flex align-items-center text-right justify-content-end ">
      <div className="pr-2">
        <span className="name">Dr. Hendrikson</span>
        <p className="msg">Let's jump on a video call</p>
      </div>
      <div><img src="https://i.imgur.com/HpF4BFG.jpg" width="30" className="img1" /></div>
    </div>
    <div className="text-center"><span className="between">Call started at 10:47am</span></div>
    <div className="text-center"><span className="between">Call ended at 11:03am</span></div>

    <div className="d-flex align-items-center">
      <div className="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width="30" className="img1" /></div>
      <div className="pr-2 pl-1">
        <span className="name">Sarah Anderson</span>
        <p className="msg">How often should I take this?</p>
      </div>
    </div>
    

    

    <div className="d-flex align-items-center text-right justify-content-end ">
      <div className="pr-2">
        <span className="name">Dr. Hendrikson</span>
        <p className="msg">Twice a day, at breakfast and before bed</p>
      </div>
      <div><img src="https://i.imgur.com/HpF4BFG.jpg" width="30" className="img1" /></div>
    </div>

    <div className="d-flex align-items-center">
      <div className="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width="30" className="img1" /></div>
      <div className="pr-2 pl-1">
        <span className="name">Sarah Anderson</span>
        <p className="msg">How often should I take this?</p>
      </div>
    </div>

  </div>



    </div>
    <nav className="navbar bg-white navbar-expand-sm d-flex justify-content-between" style={{ width: '80%' }}>
    <input type="text" name="text" className="form-control" placeholder="Type a message..." />

    <div className="icondiv d-flex justify-content-end align-content-center text-center ml-2">
      <i className="fa fa-paperclip icon1"></i>
      <i className="fa fa-arrow-circle-right icon2"></i>
    </div>
    
    
  </nav>
      </div>
    </div>
  </div>
  );
}

export default App;
