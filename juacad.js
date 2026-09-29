// Titulo: P5_3D_TPFB_1
// Adaptación individual Juanpa 29/09/2026: programa de 3 días torso, pierna y fullbody. Se sustituyen los apoyos prolongados sobre manos y agarres que podrían reproducir la molestia de antebrazo. Clavícula: recorrido cómodo y detener si molesta. Circuitos y EMOM corregidos.
const workoutData = {
  "dia1": {
    "name": "Tren superior",
    "exercises": [
      {
        "order": 1,
        "name": "Rotación Externa de Hombro Unilat con Polea",
        "sets": 2,
        "reps": "10 por lado",
        "rest": "30s",
        "notes": "Calentamiento suave, sin dolor en clavícula ni antebrazo.",
        "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
        "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg",
        "isWarmup": true
      },
      {
        "order": 2,
        "name": "Jalón al Pecho Neutro en Polea",
        "sets": 3,
        "reps": "8-10",
        "rest": "75s",
        "notes": "Agarre neutro y recorrido cómodo; deja 2 repeticiones en reserva.",
        "videoUrl": "https://youtu.be/5YzMH2KkMHc",
        "imageUrl": "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Remo Gironda en Polea",
        "sets": 3,
        "reps": "8-10",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
        "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Press Banca con Mancuernas",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://youtu.be/hXCJC2Apcdg",
        "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Press Militar Unilat de Pie con Mancuerna/KTB",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "notes": "Carga controlada y recorrido cómodo para la clavícula; si molesta, detener y avisar.",
        "videoUrl": "https://www.youtube.com/shorts/vIK0qkXP_f0",
        "imageUrl": "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Circuito bicicleta",
        "isSuperset": true,
        "circuitDetails": {
          "totalRounds": 3,
          "restBetweenExercisesSeconds": 0,
          "restBetweenRoundsSeconds": 60
        },
        "items": [
          {
            "name": "CARDIO - Bicicleta (Ritmo Fuerte)",
            "sets": 1,
            "reps": "45s",
            "subOrder": 1,
            "isSupersetStart": true,
            "rest": "60s",
            "notes": "45 s de trabajo, 60 s de recuperación.",
            "videoUrl": "https://www.youtube.com/watch?v=T4xdxoA4UzY",
            "imageUrl": "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
          }
        ],
        "notes": "Tres intervalos sin apoyo sobre las manos.",
        "videoUrl": "https://www.youtube.com/watch?v=T4xdxoA4UzY",
        "imageUrl": "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
      },
      {
        "order": 7,
        "name": "EMOM bíceps y abdomen",
        "isSuperset": true,
        "isEMOM": true,
        "emomDetails": {
          "totalIntervals": 6,
          "workIntervalSeconds": 60
        },
        "items": [
          {
            "name": "Curl Martillo con Cuerda en Polea Baja",
            "sets": 1,
            "reps": "12",
            "subOrder": 1,
            "isSupersetStart": true,
            "rest": "",
            "notes": "Agarre neutro y carga ligera.",
            "videoUrl": "https://www.youtube.com/shorts/fSTgTQr1WCk",
            "imageUrl": "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
          },
          {
            "name": "Crunch - Normal",
            "subOrder": 2,
            "sets": 1,
            "reps": "15",
            "isEMOMItem": true,
            "videoUrl": "https://youtu.be/wNqGgCjBVaE",
            "imageUrl": "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg"
          }
        ],
        "notes": "Alterna curl y crunch durante 6 minutos (3 vueltas).",
        "videoUrl": "https://www.youtube.com/shorts/fSTgTQr1WCk",
        "imageUrl": "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
      }
    ]
  },
  "dia2": {
    "name": "Tren inferior",
    "exercises": [
      {
        "order": 1,
        "name": "Jumping Jack",
        "isSuperset": true,
        "items": [
          {
            "name": "Jumping Jack",
            "subOrder": 1,
            "sets": 2,
            "reps": "15",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/K5PMB8CauGM",
            "imageUrl": "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
          },
          {
            "name": "Sentadilla con Salto",
            "subOrder": 2,
            "sets": 2,
            "reps": "15",
            "rest": "30s",
            "videoUrl": "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
            "imageUrl": "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/K5PMB8CauGM",
        "imageUrl": "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Prensa Inclinada en Máquina de Discos",
        "sets": 3,
        "reps": "8-10",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
        "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Hip Thrust con Barra (ExPLICADO)",
        "sets": 3,
        "reps": "10-12",
        "rest": "75s",
        "notes": "Recorrido controlado, sin apoyo prolongado en manos.",
        "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
        "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Step Up Unilateral en Step",
        "sets": 3,
        "reps": "12 por pierna",
        "rest": "75s",
        "notes": "Sube a un escalón bajo, sin impulso con el brazo; usa peso corporal.",
        "videoUrl": "https://youtu.be/bSxZqLpknb8",
        "imageUrl": "https://i.ytimg.com/vi/bSxZqLpknb8/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Curl Femoral Sentado en Máquina",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
        "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "EMOM",
        "isSuperset": true,
        "isEMOM": true,
        "emomDetails": {
          "totalIntervals": 6,
          "workIntervalSeconds": 60
        },
        "items": [
          {
            "name": "Hip Thrust con Banda Elástica",
            "subOrder": 1,
            "sets": 1,
            "reps": "15",
            "isEMOMItem": true,
            "videoUrl": "https://www.youtube.com/shorts/ewSrH2uFits",
            "imageUrl": "https://i.ytimg.com/vi/ewSrH2uFits/mqdefault.jpg"
          },
          {
            "name": "Crunch Bicicleta Alterno",
            "subOrder": 2,
            "sets": 1,
            "reps": "20",
            "isEMOMItem": true,
            "videoUrl": "https://www.youtube.com/shorts/nUIfDzuMR00",
            "imageUrl": "https://i.ytimg.com/vi/nUIfDzuMR00/mqdefault.jpg"
          }
        ],
        "notes": "Alterna hip thrust con banda y crunch bicicleta durante 6 minutos (3 vueltas).",
        "videoUrl": "https://www.youtube.com/shorts/ewSrH2uFits",
        "imageUrl": "https://i.ytimg.com/vi/ewSrH2uFits/mqdefault.jpg"
      }
    ]
  },
  "dia3": {
    "name": "Fullbody",
    "exercises": [
      {
        "order": 1,
        "name": "Rotación Externa de Hombro Unilat con Polea",
        "sets": 2,
        "reps": "10 por lado",
        "rest": "30s",
        "notes": "Calentamiento controlado.",
        "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
        "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg",
        "isWarmup": true
      },
      {
        "order": 2,
        "name": "Press Banca con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Press Banca con Mancuernas",
            "sets": 3,
            "reps": "8-10",
            "subOrder": 1,
            "isSupersetStart": true,
            "rest": "",
            "notes": "Agarre cómodo; si molesta la clavícula, detener y avisar.",
            "videoUrl": "https://youtu.be/hXCJC2Apcdg",
            "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
          },
          {
            "name": "Sentadilla con Salto",
            "sets": 3,
            "reps": "8",
            "subOrder": 2,
            "isSupersetStart": false,
            "rest": "90s",
            "notes": "Aterriza suave.",
            "videoUrl": "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
            "imageUrl": "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
          }
        ],
        "notes": "Tres vueltas, sin apoyo prolongado sobre las manos.",
        "videoUrl": "https://youtu.be/hXCJC2Apcdg",
        "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Peso Muerto Rumano con Barra",
        "isSuperset": true,
        "items": [
          {
            "name": "Peso Muerto Rumano con Barra",
            "sets": 3,
            "reps": "10",
            "subOrder": 1,
            "isSupersetStart": true,
            "rest": "",
            "notes": "Carga moderada y espalda neutra.",
            "videoUrl": "https://youtu.be/R7FKam5GyNw",
            "imageUrl": "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
          },
          {
            "name": "Crunch - Normal",
            "sets": 3,
            "reps": "20",
            "subOrder": 2,
            "isSupersetStart": false,
            "rest": "90s",
            "notes": "Lumbar apoyada.",
            "videoUrl": "https://youtu.be/wNqGgCjBVaE",
            "imageUrl": "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg"
          }
        ],
        "notes": "Tres vueltas.",
        "videoUrl": "https://youtu.be/R7FKam5GyNw",
        "imageUrl": "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Remo en Máquina T Agarre Estrecho",
        "isSuperset": true,
        "items": [
          {
            "name": "Remo en Máquina T Agarre Estrecho",
            "sets": 3,
            "reps": "10-12",
            "subOrder": 1,
            "isSupersetStart": true,
            "rest": "",
            "notes": "Agarre cómodo; si reproduce dolor de antebrazo, detén el ejercicio.",
            "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
            "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
          },
          {
            "name": "Curl Martillo con Cuerda en Polea Baja",
            "sets": 3,
            "reps": "12",
            "subOrder": 2,
            "isSupersetStart": false,
            "rest": "90s",
            "notes": "Agarre neutro y carga ligera.",
            "videoUrl": "https://www.youtube.com/shorts/fSTgTQr1WCk",
            "imageUrl": "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
          }
        ],
        "notes": "Tres vueltas.",
        "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
        "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Step Up Unilateral en Step",
        "isSuperset": true,
        "items": [
          {
            "name": "Step Up Unilateral en Step",
            "sets": 3,
            "reps": "12 por pierna",
            "subOrder": 1,
            "isSupersetStart": true,
            "rest": "",
            "notes": "Escalón bajo y controlado.",
            "videoUrl": "https://youtu.be/bSxZqLpknb8",
            "imageUrl": "https://i.ytimg.com/vi/bSxZqLpknb8/mqdefault.jpg"
          },
          {
            "name": "Crunch Bicicleta Alterno",
            "sets": 3,
            "reps": "20",
            "subOrder": 2,
            "isSupersetStart": false,
            "rest": "90s",
            "notes": "Sin apoyar peso sobre las manos.",
            "videoUrl": "https://www.youtube.com/shorts/nUIfDzuMR00",
            "imageUrl": "https://i.ytimg.com/vi/nUIfDzuMR00/mqdefault.jpg"
          }
        ],
        "notes": "Tres vueltas.",
        "videoUrl": "https://youtu.be/bSxZqLpknb8",
        "imageUrl": "https://i.ytimg.com/vi/bSxZqLpknb8/mqdefault.jpg"
      }
    ]
  }
};

const exerciseAlternatives = {};
