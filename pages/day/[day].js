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
        song: "Puedes contar conmigo - La Oreja de Van Gogh",
        audioFile: "conmigo.mp3",
        text: `
        <br>
        Siendo honestos… esto no entraba en tus planes (ni en los nuestros). La vida es impredecible… Un día estás convencida de que acabarás viviendo SOOOOLA y al siguiente tienes una boda marcada en el calendario. El destino es un cachondo.
        <br><br>  
        <img src="/images/sabado8_cuchillo.jpg" alt="Ejemplo de imagen">
        <br>
        Ahora bien, antes de que nos pongamos sentimentales (tranquila, para eso ya habrá tiempo después), hagamos un pequeño viaje en el tiempo.
        <br><br>
        Piensa en quién eras hace unos años. En todo lo que ha cambiado, en todo lo que has vivido. Desde aquellas tardes eternas haciendo el tonto hasta las conversaciones profundas que parecían resolver el mundo en un solo café. Desde los errores de los que nos reímos hoy hasta los momentos en los que pensábamos que lo teníamos todo bajo control (y claramente no era así).
        <br><br>
        <img src="/images/sabado8_londres.jpg" alt="Ejemplo de imagen">
        <br>
        Te hemos visto crecer, aprender, evolucionar. Hemos sido testigos de tus fases, de tus crisis existenciales, de tus sueños locos y de tus logros. Y ahora, llegamos a este punto: vas a casarte. No diremos que ha sido un camino recto (porque contigo nunca lo es), pero una cosa es segura: cada paso te ha llevado hasta aquí.
        <br><br>
        <img src="/images/sabado8_morado.jpg" alt="Ejemplo de imagen">
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
        Cómo Melina llega a un viaje
        </strong>
        <br><br>
        <img src="/images/domingo9_2.jpg" alt="Ejemplo de imagen">
        <br>
        <strong>
        El método de transporte preferido de Melina
        </strong>
        <br><br>
        <video
          controls
          playsinline
          muted
          onfocus="this.blur();"
        >
          <source src="/videos/domingo9_1.mp4" type="video/mp4">
          Tu navegador no soporta el video.
        </video>
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
          { letter: "A", text: "Las bragas", correct: false },
          { letter: "B", text: "El bikini", correct: false },
          { letter: "C", text: "El DNI", correct: false },
          { letter: "D", text: "Todas las anteriores, porque la conocemos", correct: true },
        ],
      },
    },

    // LUNES 10
    "lunes-10": {
        textTitle: "Oscuridad, risas y algún golpe",
        song: "We're all in this together - High School Musical",
        audioFile: "school.mp3",
        text: `
          <br>Apagábamos las luces y automáticamente nos convertíamos en un grupo de histéricas. Un  montón de adolescentes gritando en la oscuridad como si estuviéramos en una peli de terror.
          <br><br>Pero lo mejor no era el miedo, sino la cantidad de veces que alguien acababa en el suelo porque no veías un carajo y te tropezabas con todo.
          <br><br><img src="/images/lunes10_2.jpg" alt="Ejemplo de imagen">
          <br><br><img src="/images/lunes10_3.jpg" alt="Ejemplo de imagen">
          <br><br>Para sorpresa de nadie, en medio de ese caos, no había solidaridad. Cada vez que alguien gritaba, siempre había otra persona gritando más fuerte y nadie ayudaba a nadie.
          <br><br>No importaba si te habías dado con un mueble, si habías terminado en el suelo o si HABÍAS ENCONTRADO UN RATÓN MUERTO, porque el pánico colectivo tenía prioridad.
          <br><br>Conociéndote, seguro que en esos momentos pensabas: “‘voy a morir sola y así es como me encontrarán”  Pero bueno, al final alguien te encontró…
          <br><br><img src="/images/lunes10_1.jpg" alt="Ejemplo de imagen">     
          `,
        text2: `
        <br> Si todo lo anterior no te suena de nada, quizás esto te refresque la memoria...
        <br><br><img src="/images/lunes10_virgen.jpg" alt="Ejemplo de imagen">     
        `,
          question: {
          text: "Si Melina hubiera protagonizado una película de terror, ¿qué papel habría tenido?",
          options: [
            { letter: "A", text: "La que le ruega a un zombi que no le persiga", correct: true },
            { letter: "B", text: "La que se esconde mal y la encuentran en 3 segundos", correct: false },
            { letter: "C", text: "La que grita tanto que asusta más que el asesino", correct: false },
            { letter: "D", text: "La que se queda hasta el final pero de milagro", correct: false },
          ],
        },
      },


    // MARTES 11
    "martes-11": {
        textTitle: "La Reina del Perreo (y de perderse con GPS)",
        song: "Infinity - Guru Josh Project",
        audioFile: "infinity.mp3",
        text: `
        <br>Todos tenemos un lugar donde brillamos, y el tuyo fue uno donde la purpurina, los tacones y el reggaetón eran la combinación perfecta para bailes, confesiones y decisiones cuestionables. Algunas noches fueron para recordar… y otras para olvidar (o mejor dicho, para que te las cuenten al día siguiente mientras intentas reconstruir los hechos).
        <br><br>Porque si algo estaba garantizado en aquellas noches, era la intensidad. Desde las largas horas frente al espejo decidiendo qué ponerte hasta el clásico “una más y nos vamos” que <strong>nunca</strong> se cumplía. La pista de baile se convertía en territorio de guerra: podías entrar con dignidad, pero salir sin voz, sin móvil o, en algunos casos, sin equilibrio.
        <br><br>Y entre tus <strong>TOP 3 momentos legendarios</strong>, sin duda, está <strong>aquella fatídica noche en la que te caíste y te partiste el labio</strong>. En lugar de preocuparte por la sangre, solamente preguntabas: "¿Se me nota?"
        <br><br>Spoiler: <strong>SE TE NOTABA.</strong>
        <br><br><img src="/images/martes11_1.jpg" alt="Ejemplo de imagen">     
        <br><br><img src="/images/martes11_2.jpg" alt="Ejemplo de imagen"> 
        <br>Pero la salud era secundaria; lo fundamental era recomponerse y asegurarse de que nada (ni siquiera una herida visible) arruinara la noche. Porque al final, lo único peor que caerse era perderse la mejor parte de la fiesta.
        <br><br>Y esa, amiga, es la actitud que nos ha traído hasta aquí: reponerse, reírse y seguir bailando. Porque si hay algo que sabemos, es que todavía queda mucha fiesta por delante...
        <br><br><img src="/images/martes11_3.jpg" alt="Ejemplo de imagen"> 
        <br><br><video
          controls
          playsinline
          muted
          onfocus="this.blur();"
        >
          <source src="/videos/martes11_4.mp4" type="video/mp4">
          Tu navegador no soporta el video.
        </video>
        <br><br><video
          controls
          playsinline
          muted
          onfocus="this.blur();"
        >
          <source src="/videos/martes11_5.mp4" type="video/mp4">
          Tu navegador no soporta el video.
        </video>
        `,
        text2: `
        <br>¿Reconoces este momento?
        <br><br><video
          controls
          playsinline
          muted
          onfocus="this.blur();"
        >
          <source src="/videos/martes11_6.mp4" type="video/mp4">
          Tu navegador no soporta el video.
        </video>
        `,
          question: {
          text: "¿Cuánto tardaba Melina en llegar a Gabanna aunque tuviera el GPS activado?",
          options: [
            { letter: "A", text: "5 minutos", correct: false },
            { letter: "B", text: "15 minutos", correct: false },
            { letter: "C", text: "30 minutos y 3 llamadas de auxilio", correct: true },
            { letter: "D", text: "3 días", correct: false },
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
