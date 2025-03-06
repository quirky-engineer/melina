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
      <br><br> <strong>RECOMENDAMOS NO TARDAR EN EMPEZAR A HACER LA MALETA, NUNCA SE SABE SI LA VAS A NECESITAR MAÑANA...</strong>
      <br><br> <strong>EN SERIO, ¡HAZ LA MALETA!</strong>
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
        textTitle: "La fe mueve montañas... y despedidas",
        song: "Padre Nuestro, en el mar he oido hoy - Grupo Nueva Vida",
        audioFile: "padre.mp3",
        text: `
        <br>Hay lugares que marcan una vida. <strong>Algunos nos enseñan a ser mejores personas…</strong> y otros nos enseñan que hasta las que parecen más santas tienen su lado fiestero. Y tú aprendiste ambas cosas.
        <br><br> Porque si algo ha quedado claro con los años es que la fe puede mover montañas… pero también puede mover a un grupo de amigas aburridas hacia situaciones que hoy <strong>nos hacen reír</strong> (y que en su momento nos hicieron sudar frío).
        <br><br>Desde aquellas clases donde intentabas no reírte a carcajadas de la sopa primordial en plena reflexión espiritual, hasta los enamoramientos que desafiaban cualquier mandamiento… como <strong>aquel crush descomunal</strong> que tuviste con cierto profesor de nombre <em>of the church</em>.
        <br><br>Tú no intentabas disimular y cada vez que entraba en clase, te ponías más atenta que en cualquier examen. Podía estar explicando lo más aburrido del mundo pero ahí estabas tú, con una concentración digna de alguien <strong>descubriendo el sentido de la vida en esos brazos que estallaban camisetas</strong>. Si los curas hablaban de vocación, la tuya claramente era asistir a sus clases.
        `,
        text2: `
        <br>Aquí Melina descargando el retorno venoso para ayudar con su hipotrofia...
        <br><br><video
          controls
          playsinline
          muted
          onfocus="this.blur();"
        >
          <source src="/videos/miercoles12_2.mp4" type="video/mp4">
          Tu navegador no soporta el video.
        </video>
        `,          
        question: {
          text: "Durante la ilustre educación de Melina en los Jesuitas, aprendió muchas cosas… pero ¿cuál de estas fue la lección más importante?",
          options: [
            { letter: "A", text: "Que el uniforme era más sagrado que la Biblia", correct: false },
            { letter: "B", text: "Que rezar antes de un examen no garantiza el aprobado", correct: false },
            { letter: "C", text: "Que debemos poner la mano en la mano de aquel que te da la mano", correct: true },
            { letter: "D", text: "Que la verdadera penitencia era aguantar la misa entera sin dormirse", correct: false },
          ],
        },
      },

    // JUEVES 13
    "jueves-13": {
      textTitle: "El camino hasta aquí",
      song: "P'aquí p'allá - La Fuga",
      audioFile: "fuga.mp3",
      text: `
      <br>Si alguien nos hubiera dicho hace 20 años que algún día estaríamos aquí, probablemente nos habríamos reído en su cara. Porque si algo hemos aprendido con los años es que <strong>los planes nunca salen como los imaginamos</strong>, y la vida tiene su propia forma de sorprendernos (y de darnos la vuelta como un calcetín).
      <br><br>Desde los recreos eternos hasta los primeros viajes, pasando por exámenes, fiestas, dramas absurdos y decisiones impulsivas, hemos ido construyendo nuestra historia paso a paso, como si fuera una versión extendida del Camino de Santiago. <strong>¡Y qué camino, amiga!</strong>
      <br><br>Porque si algo ha quedado claro en todos estos años es que <strong>tú nunca has tenido prisa</strong>. No te han importado las pausas, las paradas estratégicas, los desvíos inesperados; ni siquiera los momentos en los que te ha tocado dar un paso atrás antes de seguir adelante. <strong>Cada parte del recorrido ha valido la pena</strong>.
      <br><br>Y ahora, aquí estás, llegando a uno de los grandes hitos de tu vida. No importa si la meta era esta desde el principio o si fue un giro inesperado en el camino, porque, al final, <strong>todo lo que has vivido te ha traído hasta aquí</strong>.
      <br><br>Así que disfruta este momento, respira hondo y sigue caminando. No hace falta correr, <strong>la meta te está esperando</strong>.
      <br><br><img src="/images/miercoles12_1.jpg" alt="Ejemplo de imagen"> 
      `,
      text2: `
      <br>¿Quién crees que te ha hecho sufrir toda la semana?
      <br><br><p><a href="/revelacion" class="reveal-link"><em><strong>Haz click AQUÍ para descubrirlo</strong></em></a></p>
      <br>(Aunque confiamos en que ya lo sepas)
      `,
      question: {
        text: "Si la vida de Melina fuera realmente el Camino de Santiago, ¿qué cosa representaría su mayor obstáculo en la ruta?",
        options: [
          { letter: "A", text: "El peso de su propia maleta, porque lleva cosas inútiles ''por si acaso''", correct: false },
          { letter: "B", text: "La pereza de empezar cada mañana", correct: false },
          { letter: "C", text: "Las ganas de parar cada 20 minutos a hacer fotos", correct: false },
          { letter: "D", text: "El hecho de que se perdería con el GPS activado", correct: false },
          { letter: "E", text: "Que los chicos ya estén en Santiago para cuando ella llegue", correct: true },
        ],
      },
    },

    // VIERNES 14
    "viernes-14": {
        textTitle: "La última sidra antes del gran día",
        song: "Asturias - Melendi",
        audioFile: "asturias.mp3",
        text: `
        <br>Si has llegado hasta aquí, significa que <strong>has sobrevivido</strong> a esta cuenta atrás llena de recuerdos, indirectas y alguna que otra vergüenza ajena.
        <br><br>Hemos vivido muchas noches épicas, pero ninguna empieza sin un buen brindis. Y si hay una bebida que ha sido testigo de nuestros mejores (y peores) momentos, esa es la <strong>sidra asturiana</strong>.
        <br><br>Pero esta vez, amiga, el brindis es diferente.
        <br>Esta vez, <strong>el brindis es por TI</strong>.
        <br><br>Dicen que la sidra ayuda a ver la vida con más claridad… pero en tu caso, ni con GPS. Si alguna vez hubo una brújula que apuntaba al caos, sin duda la llevas tú. Y es precisamente por eso que este fin de semana promete ser inolvidable.
        <br><br> A veces las premoniciones (o medias premoniciones) se hacen realidad, y sino mira esta carta que escribimos hace ya 12 años...
        <br><br><img src="/images/contrato.jpg" alt="Ejemplo de imagen"> 
        <br><br> QUÉ MÁS PONER???????
        `,
        text2: `
        🧠 Pista del día: No busques más, el secreto está en el escanciado. 🇪🇸🍏
        `,        
        question: {
          text: "Si Melina fuera una sidra, ¿qué tipo sería?",
          options: [
            { letter: "A", text: "Una sidra natural: auténtica y con carácter, pero con riesgo de derrame si no se maneja bien", correct: false },
            { letter: "B", text: "Una sidra espumosa: siempre lista para la fiesta, pero peligrosa en las aperturas", correct: false },
            { letter: "C", text: "Una sidra dulce: la opción segura que no falla, pero que engaña con lo suave que entra", correct: false },
            { letter: "✅", text: "Una sidra asturiana bien escanciada… aunque sabemos que acabaría más en el suelo que en el vaso", correct: true },
          ],
        },
      },

    // SÁBADO 15
    "sábado-15": {
        textTitle: "Título",
        song: "Bailando por ahí - Juan Magán",
        audioFile: "bailando.mp3",
        text: `
        hello
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
        song: "Ya nada volverá a ser cómo antes - El Canta del Loco",
        audioFile: "antes.mp3",
        text: `
        hello     
        `,
        text2: `
       <br><br><video
          controls
          playsinline
          muted
          onfocus="this.blur();"
        >
          <source src="/videos/melina_novia.mp4" type="video/mp4">
          Tu navegador no soporta el video.
        </video>
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
