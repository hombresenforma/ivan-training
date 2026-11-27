// Titulo: PEPE_3D_PUSH_PULL_LEGS_HOME
// Rutina personalizada propuesta, no variante de DATABASE. Tres días con mancuernas, banco y peso corporal; sin TRX, poleas, bandas, saltos, dropsets ni series al fallo. Sliders sustituibles por una toalla en superficie adecuada.
// PUSH: pecho/hombro/tríceps. PULL: espalda/bíceps con apoyos. LEGS: pierna completa y abdomen. Finales controlados de tres rondas en PUSH y PULL.
// Duración estimada: PUSH 45–50 min; PULL 48–55 min, contando ambos brazos; LEGS 43–50 min. Incluye calentamiento 4–5 min, trabajo 15–20 min, descansos/transiciones 20–30 min.
const workoutData = {
  "dia1": {
    "name": "PUSH · pecho, hombro y tríceps",
    "exercises": [
      {
        "name": "Movilidad - Cintura Escapular",
        "sets": 2,
        "reps": "10",
        "rest": "45s",
        "notes": "Estabilizando el tronco con mucho control motor. Calentamiento suave.",
        "videoUrl": "https://youtu.be/qFt3RmTDmXI",
        "imageUrl": "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg",
        "order": 1
      },
      {
        "name": "Floor Press con Mancuernas",
        "sets": 4,
        "reps": "10",
        "rest": "120s",
        "notes": "Deja 2–3 repeticiones en recámara, sin llegar al fallo. Registra la carga; progresa solo si completas el objetivo con técnica estable.",
        "videoUrl": "https://www.youtube.com/shorts/Iu02N3s7zgQ",
        "imageUrl": "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg",
        "order": 2
      },
      {
        "name": "Press Militar Sentado con Mancuernas",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "Deja 2–3 repeticiones en recámara, sin llegar al fallo. Registra la carga; progresa solo si completas el objetivo con técnica estable.",
        "videoUrl": "https://www.youtube.com/watch?v=_IMpMCr87Cg",
        "imageUrl": "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg",
        "order": 3
      },
      {
        "name": "Flexiones con Rodillas",
        "sets": 3,
        "reps": "12",
        "rest": "90s",
        "notes": "Deja 2–3 repeticiones en recámara, sin llegar al fallo. Registra la carga; progresa solo si completas el objetivo con técnica estable.",
        "videoUrl": "https://www.youtube.com/shorts/bmKPWM_b85Y",
        "imageUrl": "https://i.ytimg.com/vi/bmKPWM_b85Y/mqdefault.jpg",
        "order": 4
      },
      {
        "name": "Elevaciones Laterales con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Elevaciones Laterales con Mancuernas",
            "sets": 3,
            "reps": "15",
            "rest": "",
            "notes": "",
            "videoUrl": "https://youtu.be/rhmW_fhB4cs",
            "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
            "subOrder": 1,
            "isSupersetStart": true
          },
          {
            "name": "Extensión Tríceps Trasnuca Unilateral con Mancuerna",
            "sets": 3,
            "reps": "12",
            "rest": "90s",
            "notes": "",
            "videoUrl": "https://youtu.be/jGTquNttoRU",
            "imageUrl": "https://i.ytimg.com/vi/jGTquNttoRU/mqdefault.jpg",
            "subOrder": 2
          }
        ],
        "videoUrl": "https://youtu.be/rhmW_fhB4cs",
        "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
        "order": 5
      },
      {
        "name": "Plancha - Normal",
        "isSuperset": true,
        "items": [
          {
            "name": "Plancha - Normal",
            "sets": 1,
            "reps": "30s",
            "rest": "",
            "notes": "Mantener espalda recta y glúteo apretado (retroversión de cadera)",
            "videoUrl": "https://youtu.be/DQ4wYExQRJo",
            "imageUrl": "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg",
            "subOrder": 1,
            "isSupersetStart": true,
            "isCircuitItem": true
          },
          {
            "name": "Crunch Tuck Up Completo",
            "sets": 1,
            "reps": "10",
            "rest": "",
            "notes": "",
            "videoUrl": "https://www.youtube.com/shorts/LJNB5djT4LI",
            "imageUrl": "https://i.ytimg.com/vi/LJNB5djT4LI/mqdefault.jpg",
            "subOrder": 2,
            "isCircuitItem": true
          }
        ],
        "videoUrl": "https://youtu.be/DQ4wYExQRJo",
        "imageUrl": "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg",
        "circuitDetails": {
          "totalRounds": 3,
          "restBetweenExercisesSeconds": 20,
          "restBetweenRoundsSeconds": 60
        },
        "order": 6
      }
    ]
  },
  "dia2": {
    "name": "PULL · espalda, deltoide posterior y bíceps",
    "exercises": [
      {
        "name": "Movilidad - Activación de Escápulas",
        "sets": 2,
        "reps": "10",
        "rest": "45s",
        "notes": "Buscar control motor. Calentamiento suave.",
        "videoUrl": "https://youtu.be/6Kj_rg_7tYQ",
        "imageUrl": "https://i.ytimg.com/vi/6Kj_rg_7tYQ/mqdefault.jpg",
        "order": 1
      },
      {
        "name": "Remo Unilat con Mancuerna/KTB (Explicado)",
        "sets": 4,
        "reps": "10",
        "rest": "120s",
        "notes": "Deja 2–3 repeticiones en recámara, sin llegar al fallo. Registra la carga; progresa solo si completas el objetivo con técnica estable. Apoya el tronco en banco y completa ambos brazos antes del descanso.",
        "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
        "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg",
        "order": 2
      },
      {
        "name": "Remo Seal con Mancuernas",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "Trata de despegar el pecho al final del movimiento Deja 2–3 repeticiones en recámara, sin llegar al fallo. Registra la carga; progresa solo si completas el objetivo con técnica estable. Mantén el pecho apoyado para descargar la zona lumbar y abre moderadamente los codos.",
        "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
        "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg",
        "order": 3
      },
      {
        "name": "Pájaros con Mancuernas",
        "sets": 3,
        "reps": "15",
        "rest": "75s",
        "notes": "",
        "videoUrl": "https://youtu.be/EMrOS6P90lM",
        "imageUrl": "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg",
        "order": 4
      },
      {
        "name": "Curl con Mancuernas Sentado en Banco Inclinado",
        "isSuperset": true,
        "items": [
          {
            "name": "Curl con Mancuernas Sentado en Banco Inclinado",
            "sets": 3,
            "reps": "10",
            "rest": "",
            "notes": "",
            "videoUrl": "https://youtu.be/S32a3nYiWko",
            "imageUrl": "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg",
            "subOrder": 1,
            "isSupersetStart": true
          },
          {
            "name": "Curl Martillo con Mancuernas",
            "sets": 3,
            "reps": "12",
            "rest": "90s",
            "notes": "",
            "videoUrl": "https://youtu.be/fcFsPoJY9lg",
            "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg",
            "subOrder": 2
          }
        ],
        "videoUrl": "https://youtu.be/S32a3nYiWko",
        "imageUrl": "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg",
        "order": 5
      },
      {
        "name": "Bird Dog",
        "isSuperset": true,
        "items": [
          {
            "name": "Bird Dog",
            "sets": 1,
            "reps": "12",
            "rest": "",
            "notes": "",
            "videoUrl": "https://youtu.be/KizkN2buzMw",
            "imageUrl": "https://i.ytimg.com/vi/KizkN2buzMw/mqdefault.jpg",
            "subOrder": 1,
            "isSupersetStart": true,
            "isCircuitItem": true
          },
          {
            "name": "Plancha - Lateral de Rodillas",
            "sets": 1,
            "reps": "30s",
            "rest": "",
            "notes": "",
            "videoUrl": "https://youtu.be/pIf682Ral3A",
            "imageUrl": "https://i.ytimg.com/vi/pIf682Ral3A/mqdefault.jpg",
            "subOrder": 2,
            "isCircuitItem": true
          }
        ],
        "videoUrl": "https://youtu.be/KizkN2buzMw",
        "imageUrl": "https://i.ytimg.com/vi/KizkN2buzMw/mqdefault.jpg",
        "circuitDetails": {
          "totalRounds": 3,
          "restBetweenExercisesSeconds": 20,
          "restBetweenRoundsSeconds": 60
        },
        "order": 6
      }
    ]
  },
  "dia3": {
    "name": "LEGS · pierna completa",
    "exercises": [
      {
        "name": "Abducción de Glúteo Unilat en el Suelo",
        "sets": 2,
        "reps": "12",
        "rest": "45s",
        "notes": "Activación suave.",
        "videoUrl": "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
        "imageUrl": "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg",
        "order": 1
      },
      {
        "name": "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
        "sets": 4,
        "reps": "10",
        "rest": "120s",
        "notes": "Deja 2–3 repeticiones en recámara, sin llegar al fallo. Registra la carga; progresa solo si completas el objetivo con técnica estable.",
        "videoUrl": "https://www.youtube.com/shorts/tNu9bm3geqY",
        "imageUrl": "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg",
        "order": 2
      },
      {
        "name": "Peso Muerto Rumano con Mancuernas/KTB",
        "sets": 3,
        "reps": "10",
        "rest": "120s",
        "notes": "Espalda recta en todo momento Deja 2–3 repeticiones en recámara, sin llegar al fallo. Registra la carga; progresa solo si completas el objetivo con técnica estable. Cadera atrás y espalda estable; evita ampliar el recorrido a costa de flexionar la zona lumbar.",
        "videoUrl": "https://www.youtube.com/shorts/SMll4DOYvEs",
        "imageUrl": "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg",
        "order": 3
      },
      {
        "name": "Zancada Trasera Alterna con Mancuernas/KTB",
        "sets": 3,
        "reps": "16",
        "rest": "90s",
        "notes": "Deja 2–3 repeticiones en recámara, sin llegar al fallo. Registra la carga; progresa solo si completas el objetivo con técnica estable.",
        "videoUrl": "https://www.youtube.com/watch?v=Kzv73cEkTq4",
        "imageUrl": "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg",
        "order": 4
      },
      {
        "name": "Curl Femoral desde Puente (Con Sliders / Toalla)",
        "isSuperset": true,
        "items": [
          {
            "name": "Curl Femoral desde Puente (Con Sliders / Toalla)",
            "sets": 3,
            "reps": "10",
            "rest": "",
            "notes": "",
            "videoUrl": "https://www.youtube.com/watch?v=HI3Bb1SAru8",
            "imageUrl": "https://i.ytimg.com/vi/HI3Bb1SAru8/mqdefault.jpg",
            "subOrder": 1,
            "isSupersetStart": true
          },
          {
            "name": "Dead Bug",
            "sets": 3,
            "reps": "12",
            "rest": "90s",
            "notes": "",
            "videoUrl": "https://youtu.be/0CteMtiMChQ",
            "imageUrl": "https://i.ytimg.com/vi/0CteMtiMChQ/mqdefault.jpg",
            "subOrder": 2
          }
        ],
        "videoUrl": "https://www.youtube.com/watch?v=HI3Bb1SAru8",
        "imageUrl": "https://i.ytimg.com/vi/HI3Bb1SAru8/mqdefault.jpg",
        "order": 5
      }
    ]
  }
};
