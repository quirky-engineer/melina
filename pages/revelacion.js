import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/src/vanta.fog";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import homeAnimation from "../public/home.json";

export default function Revelacion() {

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

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);


  return (
    <div ref={vantaRef} className="background-container">
      {/* Top Section with Home Button */}
      <div className="top-bar">
        <Link href="/">
          <div className="home-button-wrapper">
            <div className="home-button-bubble">
              <Lottie animationData={homeAnimation} loop={true} className="home-button" />
            </div>
          </div>
        </Link>
      </div>

      {/* Instruction Content */}
      <div className="content-wrapper">
        <div className="card">
          <h2>¡SORPRESA!</h2>
          <p>
          Melina, toda esta semana de pistas, pruebas y misterio... fue obra de tus amigas: <strong> ¡Las Benis!</strong> Como si no fuese obvio...
          </p>
          <br></br>
          <p>
          Ahora es el momento de la verdad: <strong> Mañana VIERNES, prepárate para una gran aventura.</strong> A las 14:00, antes de llegar a tu destino sabrás más cuando el día se desbloquee.
          </p>
          <br></br>
          <p>
          Mientras tanto, aquí tienes <strong>tu billete de tren.</strong> En tu trabajo, está todo arreglado, descarga el billete en el link y no llegues tarde. Nos vemos pronto...
          </p>
          <br></br><a href="/tickets/billete_melina.pdf" download className="download-button">
          🎟️Descargar Billete🎟️
          </a>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        html, body {
          height: 100%;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

      .background-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start; /* Push everything up */
        align-items: center;
        overflow: hidden;
        padding-top: 20px; /* Small padding to avoid being too close to the top */
      }

      .content-wrapper {
        width: 90%;
        max-width: 500px;
        margin-top: 0; /* Remove excess margin */
        padding-top: 10px; /* Slightly separate content */
      }

        .page-content {
          width: 100%;
          max-width: 800px;
          margin-bottom: 25px;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 10px 20px;
          align-items: center;
        }

        /* Home Button */
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

        .page-title {
          font-size: 24px;
          font-weight: bold;
          color: black;
          text-align: center;
        }
    
        .download-button {
          font-size: 24px;
          font-weight: bold;
          color: black;
          text-align: center;
        }

        .content-wrapper {
          width: 90%;
          max-width: 500px;
          margin-top: 10px;
        }

        .card {
          background: rgba(255, 255, 255, 0.6);
          padding: 15px;
          margin-bottom: 15px;
          border-radius: 12px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        h2 {
          color: #cc3366;
          font-size: 20px;
          font-weight: bold;
          text-shadow: 2px 2px 8px rgba(255, 255, 255, 0.8), 
                      0px 0px 10px rgba(255, 255, 255, 0.8);
        }

        p, li {
          color: black;
          font-size: 16px;
          text-align: justify;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li::before {
          content: "✔️ ";
        }
      `}</style>
    </div>
  );
}