import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import * as THREE from "three";
import FOG from "vanta/src/vanta.fog";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import homeAnimation from "../public/home.json";
import playAnimation from "../public/play.json"; // Your Lottie animation for Play
import pauseAnimation from "../public/pause.json"; // Your Lottie animation for Pause

export default function DayTemplate({ title, textTitle, song, audioFile, text, text2, video, question }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = FOG({
      el: vantaRef.current,
      THREE: THREE,
      highlightColor: 0xff99cc,
      midtoneColor: 0xffb3c6,
      lowlightColor: 0xffccd6,
      baseColor: 0xffffff,
      zoom: 1,
      speed: 2,
    });
  
    // ✅ Define the function before calling it
    function updateBackgroundHeight() {
      if (vantaRef.current) {
        vantaRef.current.style.height = `${document.documentElement.scrollHeight}px`;
      }
    }
  
    updateBackgroundHeight(); // ✅ Now it is defined before calling
  
    window.addEventListener("resize", updateBackgroundHeight);
    window.addEventListener("load", updateBackgroundHeight);
  
    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener("resize", updateBackgroundHeight);
      window.removeEventListener("load", updateBackgroundHeight);
    };
  }, []);
     

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option.correct);
  
    // Scroll to the question section
    setTimeout(() => {
      const questionSection = document.getElementById("question-section");
      if (questionSection) {
        questionSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }; 


  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div ref={vantaRef} className="background-container">

      {/* Top Section */}
      <div className="top-bar">

        {/* Home Button with Pink Bubble */}
        <Link href="/">
          <div className="home-button-wrapper">
            <div className="home-button-bubble">
              <Lottie animationData={homeAnimation} loop={true} className="home-button" />
            </div>
          </div>
        </Link>

        {/* Fancy Audio Player */}
        <div className={`audio-player ${isPlaying ? "expanded" : ""}`} onClick={togglePlayPause}>
          <div className="audio-button-bubble">
            <Lottie animationData={isPlaying ? pauseAnimation : playAnimation} loop={false} className="audio-button" />
          </div>
          {isPlaying && (
            <div className="song-title-wrapper">
              <div className="song-title">{song}</div>
            </div>
          )}
          <audio ref={audioRef}>
            <source src={`/music/${audioFile}`} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>

      <div className="content-container"> 
        <div className="timeline-container">

          {/* Content Cards */}
          <div className="content-wrapper">
            {/* Texto del Día */}
            <div className="card">
              <h2 className="section-title">{textTitle}</h2>
              <div className="blog-text" dangerouslySetInnerHTML={{ __html: text || ""}}></div>
            </div>

            {/* Pregunta del Día (Interactive) */}
            <div id="question-section" className="card">
  <h2 className="section-title">❓ Pregunta del día</h2>
  <p className="question-text">{question?.text || "No question available"}</p>

  <ul className="question-options">
  {question?.options?.length > 0 ? (
    question.options.map((option, index) => (
      <li
        key={index}
        className={`option ${selectedOption === option ? (option.correct ? "correct" : "incorrect") : ""}`}
        onClick={() => handleOptionClick(option)}
      >
        <strong>{option.letter}</strong> {option.text}
      </li>
    ))
  ) : (
    <p>No options available.</p> // Prevents the crash if no options exist
  )}
</ul>


</div>

            
            {/* Pista del Día */}
            <div className="card">
              <h2 className="section-title">💡 Pista del día</h2>
              <div className="blog-text2" dangerouslySetInnerHTML={{ __html: text2 || ""}}></div>
            </div>

          </div>
        </div>        
      </div>
      

      {/* Styles */}
      <style jsx>{`

        html, body {
          min-height: 100vh;
          height: auto;
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
          overscroll-behavior: contain;
        }

        .background-container {
          position: fixed; /* 🔥 Keeps the background in place */
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh; /* Full viewport height */
          z-index: -1; /* Push behind content */
        }

        .content-container {
          position: relative; /* Allows scrolling */
          width: 100%;
          height: 100vh; /* Ensure it fills the viewport */
          overflow-y: auto; /* 🔥 Enables scrolling */
          padding-top: 80px; /* Space for the fixed top-bar */
        }

        .content-wrapper {
          position: relative; /* Allows scrolling */
          width: 90%;
          max-width: 500px;
          margin: 0 auto;
          padding-top: 25px; /* Add space for the fixed top bar */
          padding-bottom: 200px;
        }

        .page-container {
          position: relative; /* Ensure content is positioned */
          width: 100%;
          height: 100vh; /* Full viewport height */
          overflow-y: auto; /* 🔥 Enables scrolling */
          padding-top: 100px; /* Adjust for the fixed top bar */
        }

        /* 🔥 Ensure Vanta.js Fills the Entire Page 🔥 */
        #vanta-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1; /* Push background behind content */
        }

        /* Pink Bubble for Home Button */
        .home-button-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .home-button-bubble {
          width: 60px;
          height: 60px;
          background: rgba(255, 79, 100, 0.8);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 4px 10px rgba(255, 79, 100, 0.3);
        }

        .home-button {
          width: 40px;
          height: 40px;
          cursor: pointer;
        }

        .day-title {
          font-size: 22px;
          font-weight: bold;
          color: black;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .card {
          background: rgba(255, 255, 255, 0.6);
          padding: 15px;
          margin-bottom: 15px;
          border-radius: 12px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* ✅ Titles should stand out */
        .text-title, .section-title {
          font-size: 22px;
          font-weight: bold;
          color: #cc3366;
        }

        .question-text {
          margin-top: 20px;
        }


        /* ✅ Content text should be black */
        .blog-text, .blog-text2, .checklist, .question-options li {
          color: black;
          text-align: justify;
        }

        .question-options li {
          cursor: pointer;
          padding: 8px;
          background: #f5f5f5;
          margin: 5px 0;
          border-radius: 5px;
          transition: background 0.3s ease-in-out;
        }

        .question-text {
          color: black;
          font-size: 16px;
        }

        .correct {
          background: #a7f3a0 !important;
          font-weight: bold;
        }

        .incorrect {
          background: #ff7b7b !important;
          font-weight: bold;
        }

        img {
          display: block;
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 15px auto;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        video {
          display: block;
          width: 100%;
          border-radius: 12px;
          margin: 15px auto;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);       
          
  min-height: 200px;  /* Keeps video height fixed */
  max-width: 100%;    /* Ensures video is responsive */
  object-fit: cover;  /* Prevents weird stretching */
        }
    

video {
  min-height: 200px;  /* Keeps video height fixed */
  max-width: 100%;    /* Ensures video is responsive */
  object-fit: cover;  /* Prevents weird stretching */
  display: block;     /* Prevents inline spacing issues */
}


        /* Fancy Audio Player */
        .audio-player {
          display: flex;
          align-items: center;
          justify-content: center; /* Center contents */
          width: auto; /* Prevent it from expanding */
          max-width: 500px; /* Set a reasonable limit */
          background: rgba(255, 255, 255, 0.6);
          padding: 10px;
          border-radius: 50%;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
          flex-shrink: 0; /* Prevents it from stretching */
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0); /* Optional transparency */
          padding: 10px 20px;
          z-index: 10; /* Ensures it stays above content */
        }

        .expanded {
          border-radius: 30px;
          padding: 10px 20px;
        }

        .audio-button-bubble {
          width: 50px;
          height: 50px;
          background: rgba(255, 79, 100, 0.8);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 4px 10px rgba(255, 79, 100, 0.3);
        }

        .audio-button {
          width: 35px;
          height: 35px;
          cursor: pointer;
        }

        .song-title-wrapper {
          overflow: hidden;
          white-space: nowrap;
          width: 140px;
          position: relative;
        }

        .song-title {
          display: inline-block;
          font-size: 16px;
          color: black;
          padding-left: 10px;
          animation: marquee 5s linear infinite;
        }


        



      `}</style>
    </div>
  );
}
