import { useEffect, useState } from "react";
import { TextInput, Badge } from "@canva/app-ui-kit";

export default function Home(){
    const [loaded, setLoaded] = useState(false);
    const [patientBackground, setPatientBackground] = useState('Meet Alex, a 28-year-old software engineer with a promising career but a hidden struggle with mental health. Growing up in a high-achieving family, Alex faced immense pressure to excel academically. This pressure intensified during college, where expectations for success were a constant source of stress.Throughout early adulthood, Alexs mental health deteriorated, marked by chronic anxiety and self-doubt. The demanding work environment in the tech industry exacerbated these issues, leading to burnout and a sense of isolation. Despite outward success, internally, Alex felt like an imposter, haunted by a fear of failure.The breaking point came when a major project deadline coincided with a personal loss. Alex began experiencing severe panic attacks and difficulty concentrating, impacting both personal and professional life. Friends and colleagues were unaware of this silent struggle.Seeking help, Alex started therapy, revealing the deep-rooted perfectionism and the toll it took on mental well-being. With ongoing support, Alex is gradually learning healthier coping mechanisms and striving to redefine success beyond external expectations. The journey is ongoing, illustrating the complex interplay between high-achieving environments and mental health challenges.');
    const [suggestedReply, setSuggestedReply] = useState("I'm truly sorry to hear that you're experiencing depression. It's a courageous step to acknowledge and share what you're going through. Depression can feel overwhelming and isolating, but please know that you're not alone in this. There are many paths to healing and support available to you. First and foremost, it's important to prioritize your well-being. Seeking professional help from a therapist or counselor who specializes in depression can provide valuable insights and strategies for managing symptoms. They can offer a safe space for you to explore your emotions and develop coping mechanisms tailored to your needs. Additionally, medication prescribed by a psychiatrist may be part of your treatment plan if deemed appropriate. It's essential to have open and honest communication with your healthcare provider to find the right approach for you.");
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [file, setFile] = useState(null);
  
    useEffect(() => {
      if (file !== null) {
        handleFileSubmit();
      }
    }, [file]);
  
    const handleFileChange = (e: any) => { // Explicitly type the event parameter
        e.preventDefault();
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };
  
    const handleFileSubmit = async () => {
        if (!file) return;
        setUploadSuccess(true);    
        const formData = new FormData();
        formData.append('pdfFile', file);
    };
    
    const myStyle: React.CSSProperties = {
      opacity: loaded ? 1 : 0,
    };

    const getPatientReply = (name: any, reply: any) => {
        return (
            <div className="d-flex align-items-center">
                <div className="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width="30" className="img1" /></div>
                <div className="pr-2 pl-1">
                <span className="name">{name}</span>
                <p className="msg">{reply}</p>
                </div>
            </div>
        )
    };

    const getDoctorReply = (name: any, reply: any) => {
        return (
            <div className="d-flex align-items-center text-right justify-content-end ">
                <div className="pr-2">
                <span className="name">{name}</span>
                <p className="msg">{reply}</p>
                </div>
                <div><img src="https://i.imgur.com/HpF4BFG.jpg" width="30" className="img1" /></div>
            </div>
        )
    };

    const handleChatKeyDown = (e: any) => {
        if(e.key === "Enter") {
            console.log("Entered");
        }
    };
  
    return (   
    <div style={myStyle} className="home-style">
      <div className="home-header">
        <h1 className="header-text">Welcome to <b>WeHeal</b>. The companion for superheroes.</h1>
        <div className="header-upload">
            <div>
                <form onSubmit={handleFileChange}>
                    {uploadSuccess ? (
                        <img src={'./checked.png'} alt="Success" style={{ width: '70px', height: '70px' }} />
                    ) : (
                        <label htmlFor="file-upload" className="custom-file-upload">
                        <img src={'./file-upload.png'} alt="Upload" style={{ width: '70px', height: '70px' }} />
                        </label>
                    )}
                    <input id="file-upload" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                </form>
            </div>
            <p>Upload Pre-Session Questionaire</p>
        </div>
      </div>
      <div className="home-content">
        <div className="home-content-left">
            <h1 style={{ paddingTop: '20px' }}>Patient Background</h1>
            <p style={{width:'90%'}}>{patientBackground}</p>
            <h1 style={{ paddingTop: '20px' }}>Suggested Reply</h1>
            <span className="suggested-reply">{suggestedReply}</span>
        </div>

        <div className="home-content-right">
            <div className="home-content-right-content" style={{ width: '90%', height: '80%', paddingLeft: '20px' }}>
                <div className="d-flex justify-content-start" >
                    <div className="px-2 scroll with-padding" style={{ width: '100%', height: '100%' }}>
                        {getPatientReply("Sarah Anderson", "Hi Dr. Hendrikson, I haven't been feeling well for the past few days.")}
                        {getDoctorReply("Dr. Hendrikson", "Let's jump on a video call")}
                        {getPatientReply("Sarah Anderson", "How often should I take this?")}
                        {getDoctorReply("Dr. Hendrikson", "Twice a day, at breakfast and before bed")}
                        {getPatientReply("Sarah Anderson", "How often should I take this?")}
                        {getPatientReply("Sarah Anderson", "Hi Dr. Hendrikson, I haven't been feeling well for the past few days.")}
                        {getDoctorReply("Dr. Hendrikson", "Let's jump on a video call")}
                        {getPatientReply("Sarah Anderson", "How often should I take this?")}
                        {getDoctorReply("Dr. Hendrikson", "Twice a day, at breakfast and before bed")}
                        {getPatientReply("Sarah Anderson", "How often should I take this?")}
                        {getPatientReply("Sarah Anderson", "Hi Dr. Hendrikson, I haven't been feeling well for the past few days.")}
                        {getDoctorReply("Dr. Hendrikson", "Let's jump on a video call")}
                        {getPatientReply("Sarah Anderson", "How often should I take this?")}
                        {getDoctorReply("Dr. Hendrikson", "Twice a day, at breakfast and before bed")}
                        {getPatientReply("Sarah Anderson", "How often should I take this?")}
                    </div>
                </div>
                <div className="chat-input-doctor">
                    <TextInput
                        onChange={function noRefCheck(){}}
                        onKeyDown={handleChatKeyDown}
                        placeholder="Type your reply and press Enter"
                    />
                </div>
            </div>
            
        </div>
      </div>
    </div>
    );
  }