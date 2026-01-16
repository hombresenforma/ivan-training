// Titulo: Plan de Entrenamiento
// Notas: Prueba Entrenamiento

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: ",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 4,
                reps: "10, 10, 8, 8",
                rest: "60s",
                notes: "-Mantener retracción escapular en todo el movimiento (hombros atrás y abajo)\n-Arco natural\n-Pies bien apoyados en el suelo para ganar estabilidad\n-Tocar con la barra el pectoral medio- bajo",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Inclinado con Mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "-Mantener retracción escapular\n-Pies bien apoyados en el suelo para ganar estabilidad\n-Inclinación del banco 30-45º\n-Muñecas rectas ",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Fondos en Paralelas con Peso Corporal",
                sets: 3,
                reps: "10, 8, 8",
                rest: "60s",
                notes: "-No bloquear arriba los brazos (tensión continua)\n-Respetar el tempo 3 s de bajada 1 s de subida (explosivo)\n-Mirar al suelo no al frente\n- Piensa en empujar el suelo con las manos\n",
                videoUrl: "https://youtube.com/shorts/om9U8WY5HoY",
                imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Codo en Polea Alta",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "-Ligera semi flexión de las piernas\n- Extensión completa de los codos\n-Hombros atras y abajo",
                videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0",
                imageUrl: "https://i.ytimg.com/vi/z7gqbcjkzU0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Codo Trasnuca con Cuerda en Polea Baja",
                sets: 3,
                reps: "8-10",
                rest: "60s",
                notes: "-1 o 2 pasos hacia adelante\n-Codos elevados y apuntando enfrente\n- Core apretado",
                videoUrl: "https://www.youtube.com/watch?v=iSC42Fn4VT0",
                imageUrl: "https://i.ytimg.com/vi/iSC42Fn4VT0/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca con Barra": [
        { name: "", videoUrl: "", imageUrl: "" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
