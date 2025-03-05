import { useRouter } from "next/router";
import DayTemplate from "@/components/DayTemplate"; // Import the template
import Image from 'next/image';

export default function DayPage() {
  const router = useRouter();
  const { day } = router.query;
  
// Prevents error
if (!day) {
  return <p>Loading...</p>; // Prevents errors when `day` is undefined
}

  // ✅ All content is defined here
  const content = {

    // SÁBADO 8
    "sábado-8": {
        textTitle: "Cuenta atrás activada...",
        song: "Puedes contar conmigo - La Oreja de Van Gogh...",
        audioFile: "conmigo.mp3",
        text: `
        <br>
        Siendo honestos… esto no entraba en tus planes (ni en los nuestros). La vida es impredecible… Un día estás convencida de que acabarás viviendo SOOOOLA y al siguiente tienes una boda marcada en el calendario. El destino es un cachondo.
        <br><br>  
        <img src="/images/sabado8_cuchillo.JPG" alt="Ejemplo de imagen">
        <br>
        Ahora bien, antes de que nos pongamos sentimentales (tranquila, para eso ya habrá tiempo después), hagamos un pequeño viaje en el tiempo.
        <br><br>
        Piensa en quién eras hace unos años. En todo lo que ha cambiado, en todo lo que has vivido. Desde aquellas tardes eternas haciendo el tonto hasta las conversaciones profundas que parecían resolver el mundo en un solo café. Desde los errores de los que nos reímos hoy hasta los momentos en los que pensábamos que lo teníamos todo bajo control (y claramente no era así).
        <br><br>
        <img src="/images/sabado8_londres.JPG" alt="Ejemplo de imagen">
        <br>
        Te hemos visto crecer, aprender, evolucionar. Hemos sido testigos de tus fases, de tus crisis existenciales, de tus sueños locos y de tus logros. Y ahora, llegamos a este punto: vas a casarte. No diremos que ha sido un camino recto (porque contigo nunca lo es), pero una cosa es segura: cada paso te ha llevado hasta aquí.
        <br><br>
        <img src="/images/example.jpg" alt="Ejemplo de imagen">
        <br>
        Así que, antes de que la despedida empiece y te sumerjas en esta cuenta atrás, queremos que te tomes un momento. Mírate. Reconócete. Y sonríe. Porque lo mejor aún está por venir.
        `,     
        text2: `
        <br>Hace más de 15 años, Melina ya acostumbraba a no tener batería NUNCA. Este era su teléfono, que usaba más de espejo que otra cosa...
        	<br><br>
          <img src="/images/sabado8_pista.jpg" alt="Ejemplo de imagen">
          <br>
        `,
          question: {
          text: "¿Qué color tenía TODA la ropa de Melina, sus accesorios y hasta su móvil en la adolescencia?",
          options: [
            { letter: "A", text: "Rosa chillón", correct: false },
            { letter: "B", text: "Azul cielo", correct: false },
            { letter: "C", text: "Morado", correct: true },
            { letter: "D", text: "Verde bosque", correct: false },
          ],
        },
      },

      
    // DOMINGO 9
    "domingo-9": {
      textTitle: "Equipaje emocional (y literal)",
      song: "Salir - Extremoduro",
      audioFile: "salir.mp3",
      text: `
        <br>
        Bueno, ya hemos asumido que la boda es real y que no te casas con un gato. Un gran avance. Pero antes de eso, hay algo importante…
        <br><br>
        Te espera un <em>VIAJE</em>. Uno de esos que recordarás para siempre (y no solo porque tu dignidad va a quedar comprometida).
        Así que antes de que llegue el gran momento, queremos asegurarnos de que no te presentes con lo puesto y sin bragas.
        Porque sí, te conocemos. Sabemos que eres capaz de aparecer con una maleta donde has metido tres pintalabios pero ni un solo calcetín. O que te acordarás del cargador pero no del DNI. Y eso, amiga, no puede pasar.
        <br><br>
        Y hablando de conocernos, seguro que a estas alturas ya te estarás preguntando… <em>¿quién está detrás de todo este caos organizado?</em>
        <br>Vamos a darte una pista: nos conoces desde antes de que supieras maquillarte decentemente, hemos sobrevivido juntas a exámenes, crisis existenciales y alguna que otra metedura de pata histórica.
        <br>Compartimos recreos, confesiones y ataques de risa en clase que casi nos cuestan una expulsión. 
        <br><br>
        Así que relájate (pero no mucho) y si ya sabes quiénes somos, haz como que no lo sabes que todo este ha costado mucho curro. 
        <br><br>
        <strong>
        Melina de camino a un viaje
        </strong>
        <br><br>
        <video controls>
          <source src="/videos/domingo9_1.MP4" type="video/mp4">
          Tu navegador no soporta el video.
        </video>
        <br>
        <strong>
        Melina a su llegada a dicho viaje
        </strong>
        <br><br>
        <img src="/images/domingo9_2.jpg" alt="Ejemplo de imagen">
        <br>
        `,
      text2:`
      <br>Esto es lo que necesitarás para este viaje:
      <br><br>◾ DNI (¿y si te deportan?)
      <br>◾ Dinero (¿todo pagado?... no)
      <br>◾ Bikini (¿mar, piscina, fuente pública?)
      <br>◾ Ropa cómoda (la razón es secreta)
      <br>◾ Zapatos cómodos (hay que madurar)
      <br>◾ Analgésicos (nos conocemos...)
      <br>◾ Cargador del móvil (aunque para lo que lo usas...)
      <br>◾ Ganas de darlo todo (obligatorio)

      `,
      question: {
        text: "Si Melina tuviera que hacer la maleta bajo presión, ¿qué olvidaría con un 99% de probabilidad?",
        options: [
          { letter: "A", text: "Las bragas.", correct: false },
          { letter: "B", text: "El DNI.", correct: false },
          { letter: "C", text: "El bikini.", correct: false },
          { letter: "D", text: "Todas las anteriores, porque la conocemos.", correct: true },
        ],
      },
    },

    // LUNES 10
    "lunes-10": {
        textTitle: "Título",
        song: "Canción - Intérprete",
        spotifyLink: "https://open.spotify.com/track/4z2EeFUp5Lhai9qhHtA6IF",
        text: `
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
        `,
        text2: `
        Aquí tienes una pista visual.
        `,
          question: {
          text: "Si Melina tuviera que hacer la maleta bajo presión, ¿qué olvidaría con un 99% de probabilidad?",
          options: [
            { letter: "A", text: "...", correct: false },
            { letter: "B", text: "....", correct: false },
            { letter: "C", text: "....", correct: false },
            { letter: "✅", text: "...", correct: true },
          ],
        },
      },


    // MARTES 11
    "martes-11": {
        textTitle: "Título",
        song: "Canción - Intérprete",
        spotifyLink: "https://open.spotify.com/track/4z2EeFUp5Lhai9qhHtA6IF",
        text: `
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
        `,
        text2: `
        Aquí tienes una pista visual.
        `,
          question: {
          text: "Si Melina tuviera que hacer la maleta bajo presión, ¿qué olvidaría con un 99% de probabilidad?",
          options: [
            { letter: "A", text: "...", correct: false },
            { letter: "B", text: "....", correct: false },
            { letter: "C", text: "....", correct: false },
            { letter: "✅", text: "...", correct: true },
          ],
        },
      },

    // MIÉRCOLES 12
    "miércoles-12": {
        textTitle: "Título",
        song: "Canción - Intérprete",
        spotifyLink: "https://open.spotify.com/track/4z2EeFUp5Lhai9qhHtA6IF",
        text: `
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
        `,
        text2: `
        Aquí tienes una pista visual.
        `,        
        question: {
          text: "Si Melina tuviera que hacer la maleta bajo presión, ¿qué olvidaría con un 99% de probabilidad?",
          options: [
            { letter: "A", text: "...", correct: false },
            { letter: "B", text: "....", correct: false },
            { letter: "C", text: "....", correct: false },
            { letter: "✅", text: "...", correct: true },
          ],
        },
      },

    // JUEVES 13
    "jueves-13": {
        textTitle: "Título",
        song: "Canción - Intérprete",
        spotifyLink: "https://open.spotify.com/track/4z2EeFUp5Lhai9qhHtA6IF",
        text: `
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
        `,
        text2: `
        Aquí tienes una pista visual.
        `,        
        question: {
          text: "Si Melina tuviera que hacer la maleta bajo presión, ¿qué olvidaría con un 99% de probabilidad?",
          options: [
            { letter: "A", text: "...", correct: false },
            { letter: "B", text: "....", correct: false },
            { letter: "C", text: "....", correct: false },
            { letter: "✅", text: "...", correct: true },
          ],
        },
      },


    // VIERNES 14
    "viernes-14": {
        textTitle: "Título",
        song: "Canción - Intérprete",
        spotifyLink: "https://open.spotify.com/track/4z2EeFUp5Lhai9qhHtA6IF",
        text: `
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
        `,
        text2: `
        Aquí tienes una pista visual.
        `,        
        question: {
          text: "Si Melina tuviera que hacer la maleta bajo presión, ¿qué olvidaría con un 99% de probabilidad?",
          options: [
            { letter: "A", text: "...", correct: false },
            { letter: "B", text: "....", correct: false },
            { letter: "C", text: "....", correct: false },
            { letter: "✅", text: "...", correct: true },
          ],
        },
      },

    // SÁBADO 15
    "sábado-15": {
        textTitle: "Título",
        song: "Canción - Intérprete",
        spotifyLink: "https://open.spotify.com/track/4z2EeFUp5Lhai9qhHtA6IF",
        text: `
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
        `,
        text2: `
        Aquí tienes una pista visual.
        `,        
        question: {
          text: "Si Melina tuviera que hacer la maleta bajo presión, ¿qué olvidaría con un 99% de probabilidad?",
          options: [
            { letter: "A", text: "...", correct: false },
            { letter: "B", text: "....", correct: false },
            { letter: "C", text: "....", correct: false },
            { letter: "✅", text: "...", correct: true },
          ],
        },
      },

    // DOMINGO 16
    "domingo-16": {
        textTitle: "Título",
        song: "Canción - Intérprete",
        spotifyLink: "https://open.spotify.com/track/4z2EeFUp5Lhai9qhHtA6IF",
        text: `
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
        `,
        text2: `
        Aquí tienes una pista visual.
        `,        
        question: {
          text: "Si Melina tuviera que hacer la maleta bajo presión, ¿qué olvidaría con un 99% de probabilidad?",
          options: [
            { letter: "A", text: "...", correct: false },
            { letter: "B", text: "....", correct: false },
            { letter: "C", text: "....", correct: false },
            { letter: "✅", text: "...", correct: true },
          ],
        },
      },


  };

  const dayContent = content[day] || {
    title: "Día no encontrado",
    text: "Este día aún no tiene contenido. ¡Vuelve pronto!",
  };

  return <DayTemplate {...dayContent} />;
}
