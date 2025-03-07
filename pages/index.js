import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import * as THREE from "three";
import FOG from "vanta/src/vanta.fog";
import arrowAnimation from "../public/arrow.json";
import iniendAnimation from "../public/iniend.json";
import loadingAnimation from "../public/loading.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});
  const vantaRef = useRef(null);
  const sectionsRef = useRef([]);
  const router = useRouter();
  const [modalContent, setModalContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const scrollToSection = (index) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Hides after 1.5 seconds
    
    const eventDate = new Date("2025-03-14T13:00:00").getTime();
    const today = new Date();
    const todayFormatted = today.toLocaleDateString("es-ES", { weekday: "long", day: "numeric" });
  
    let todayIndex = timeline.findIndex((item) => item.day.toLowerCase() === todayFormatted.toLowerCase());
    if (todayIndex === -1 || todayIndex < 0) todayIndex = 0;
    if (todayIndex >= timeline.length) todayIndex = timeline.length - 1;
  
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = eventDate - now;
  
      if (diff <= 0) {
        setTimeLeft({ message: "¡A DISFRUTAR!" });
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      setTimeLeft({ days, hours, minutes, seconds });
    };
  
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  
    setTimeout(() => {
      sectionsRef.current[todayIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
  
      setTimeout(() => {
        if (vantaRef.current) {
          FOG({
            el: vantaRef.current,
            THREE: THREE,
            highlightColor: 0xff66b2,
            midtoneColor: 0xFF4F64,
            lowlightColor: 0xF6B26B,
            baseColor: 0xffffff,
            zoom: 0.9,
            speed: 3,
          });
        }
      }, 1000);
    }, 500);
  
    return () => clearInterval(interval);
  }, []); 


  useEffect(() => {
    const eventDate = new Date("2025-03-14T13:15:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff <= 0) {
        setTimeLeft({ message: "¡EMPIEZA TU DESPEDIDA DE SOLTERA!" });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Timeline Events
  const timeline = [
    { day: "Instrucciones"},
    { day: "Sábado 8"},
    { day: "Domingo 9"},
    { day: "Lunes 10"},
    { day: "Martes 11"},
    { day: "Miércoles 12"},
    { day: "Jueves 13"},
    { day: "Viernes 14"},
    { day: "Sábado 15"},
    { day: "Domingo 16"}
  ];


/*
  const openDayPage = (day) => {
    if (!day) {
      console.error("Invalid day detected:", day);
      return;
    }
    if (day === "Instrucciones") {
      router.push("/instructions"); // Redirect to the correct page
    } else {
      const formattedDay = day.replace(/\s+/g, "-").toLowerCase(); // "Sábado 8" → "sabado-8"
      router.push(`/day/${formattedDay}`);
    }
  };
*/

const openDayPage = (day) => {
  if (day.toLowerCase() === "instrucciones") {
    router.push("/instructions"); // ✅ Redirect to the correct page
    return;
  }

  const now = new Date();
  const todayFormatted = now.toLocaleDateString("es-ES", { weekday: "long", day: "numeric" }).toLowerCase();
  const formattedDay = day.toLowerCase().replace(/\s+/g, "-"); // "Sábado 8" → "sabado-8"

  // 🔥 Set the unlock time (14:00)
  const unlockTime = new Date();
  unlockTime.setHours(14, 0, 0, 0);

  // 🔥 Check if today is before the required unlock time
  if (formattedDay === todayFormatted && now < unlockTime) {
    setModalContent("Desbloqueo a las 14:00.");
    return;
  }

  // 🔥 Parse the event date correctly
  const eventDate = new Date(2025, 2, parseInt(day.split(" ")[1])); // March is month index 2
  const eventDayOfWeek = eventDate.toLocaleDateString("es-ES", { weekday: "long" });

  // 🔥 Check if the day is in the future
  if (now < eventDate) {
    setModalContent(`Ups... contenido bloqueado. ¡Vuelve el ${eventDayOfWeek} a las 14:00!`);
    return;
  }

  // ✅ Redirect to the correct day
  router.push(`/day/${formattedDay}`);
};


  return (

    <div ref={vantaRef} className="h-screen w-full flex flex-col items-center justify-center text-white fixed top-0 left-0">
      
      {/* ✅ Load Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />

      {/* 🔥 Countdown Box (ALWAYS FIXED & NEVER MOVES) */}
      <div className="countdown-container">
        {timeLeft.message ? (
          <p className="countdown-message">{timeLeft.message}</p>
        ) : (
          <div className="countdown-grid">
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.days}</span>
              <span className="countdown-label">días</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.hours}</span>
              <span className="countdown-label">horas</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.minutes}</span>
              <span className="countdown-label">min</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-number">{timeLeft.seconds}</span>
              <span className="countdown-label">seg</span>
            </div>
          </div>
        )}
      </div>

      {modalContent && (
        <div className="modal-overlay" onClick={() => setModalContent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p className="modal-text">{modalContent}</p>
            <button className="modal-close" onClick={() => setModalContent(null)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* 🔥 Timeline SCROLLS, but the PAGE STAYS STATIC */}
      <div className="timeline-container">
        
        {/* 🔹 Animated Start Spacer */}
        <div className="animation-container">
          <Lottie animationData={iniendAnimation} loop={true} style={{ width: 80, height: 80 }} />
        </div>

        {timeline.map((item, index) => (
          <div key={index} ref={(el) => (sectionsRef.current[index] = el)}>
            {/* 🏹 UP ARROW (Except First Card) */}
            {index > 0 && (
              <div className="arrow-container" onClick={() => scrollToSection(index - 1)}>
                <Lottie animationData={arrowAnimation} loop={true} style={{ width: 80, height: 80, transform: "rotate(180deg)" }} />
              </div>
            )}

            {/* Timeline Card - Clicking the card redirects to the new page*/}
            <div
              className={`timeline-card ${new Date() < new Date(2025, 2, parseInt(item.day.split(" ")[1])) ? "locked" : ""}`}
              onClick={() => openDayPage(item.day)} >
              <h3 className="timeline-day">{item.day}</h3>
              <p className="timeline-text">{item.text}</p>
            </div>

            {/* 🏹 DOWN ARROW (Except Last Card) */}
            {index !== timeline.length - 1 && (
              <div className="arrow-container" onClick={() => scrollToSection(index + 1)}>
                <Lottie animationData={arrowAnimation} loop={true} style={{ width: 80, height: 80 }} />
              </div>
            )}
          </div>
        ))}

        {/* 🔹 Animated End Spacer */}
        <div className="animation-container">
          <Lottie animationData={iniendAnimation} loop={true} style={{ width: 80, height: 80 }} />
        </div>

      </div>

      {/* 🎨 Styles */}
      <style jsx>{`

        /* ✅ COUNTDOWN ALWAYS FIXED ON TOP */
        .countdown-container {
          position: fixed;
          top: 10px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          z-index: 10;
        }

        .countdown-grid {
          display: flex; /* Ensure it's in a row */
          justify-content: center;
          align-items: center;
          gap: 15px; /* Adjust spacing between elements */
          max-width: 400px;
          width: 90%;
          margin-top: 15px;
        }

        .countdown-box {
          background-color: rgba(255, 79, 100, 1); /* Solid background */
          border-radius: 15px;
          padding: 15px; /* Increase padding for better proportion */
          text-align: center;
          width: 80px; /* Ensure equal width for all */
          height: 80px; /* Ensure equal height for all */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 4px 10px rgba(255, 79, 100, 0.5); /* Subtle shadow */
        }

        .countdown-number {
          font-family: 'Fredoka One', cursive;
          font-size: 2rem; /* Bigger number */
          font-weight: bold;
          display: block;
          color: white;
        }

        .countdown-label {
          font-family: 'Fredoka One', cursive;
          font-size: 0.9rem; /* Smaller label */
          text-transform: uppercase;
          opacity: 0.9;
          color: white;
        }

        .countdown-message {
          font-size: 2rem;
          font-weight: bold;
          color: white;
          text-shadow: 2px 2px 8px rgba(255, 79, 100, 0.8), 
               0px 0px 10px rgba(255, 79, 100, 0.8);          
        }

        .timeline-container {
          position: fixed;
          top: 150px;
          width: 100%;
          height: 60vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          scrollbar-width: none;
          scroll-snap-type: y mandatory;
        }

        .timeline-container::-webkit-scrollbar {
          display: none;
        }

        .timeline-card {
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          font-weight: bold;
          font-size: 1.5rem;
          width: 300px;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 4px 10px rgba(255, 79, 100, 1);
          margin: 30px 0;
          scroll-snap-align: center;
        }

        .timeline-card.locked {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .timeline-day {
          font-size: 2rem;
          margin-bottom: 10px;
          color: #FF4F64; 
          text-shadow: 2px 2px 8px rgba(255, 255, 255, 0.8), 
               0px 0px 10px rgba(255, 255, 255, 0.6); 
        }

        .timeline-text {
          font-size: 1.3rem;
          opacity: 0.9;
          color: white; 
        }

        .arrow-container, .animation-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 10px 0;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }

        .modal-content {
          background: rgba(255, 255, 255, 0.9);
          padding: 10px; 
          border-radius: 12px; 
          text-align: center;
          width: 350px; 
          min-height: 50px;
          box-shadow: 0px 4px 10px rgba(255, 79, 100, 1);
          position: relative;
        }

        .modal-text {
          font-size: 1.5rem;
          color: #CC3F50;
          margin-top: 15px;
          text-shadow: 2px 2px 8px rgba(163, 13, 64, 0), 
               0px 0px 10px rgba(163, 13, 64, 0); 
        }

        .modal-close {
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #FF4F64;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
        }

        .modal-close:hover {
          background-color: #e03c50;
        }



      `}</style>
    </div>
  );
  
}
