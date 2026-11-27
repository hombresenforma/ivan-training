// Titulo: P16_4D_TORPIER_FUERZATOP_2
// Notas: - Ejercicios básicos 1 y 2: CAMBIAMOS VARIANTE.
// - Torso Push y Pull: Cambiamos ejercicios penúltimo circuito (Variante). 
// - Bloque final: AÑADIMOS 1 SERIE MÁS.

// Adaptación José Luis 27/11/2026: cuatro días con peso libre; press mancuerna, Seal, sumo, remo inclinado, pájaros, hip thrust y rumano. Sin TRX, poleas ni máquinas de fuerza. Movilidad sin bandas. Se mantienen series y descansos; rangos al extremo superior.
const workoutData = {
  "dia1": {
    "name": "Torso Completo (PUSH)",
    "exercises": [
      {
        "order": 1,
        "name": "Movilidad - Cintura Escapular",
        "isWarmup": true,
        "sets": 2,
        "reps": "10",
        "rest": "60s",
        "notes": "Estabilizando el tronco con mucho control motor.",
        "videoUrl": "https://youtu.be/qFt3RmTDmXI",
        "imageUrl": "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Press Banca con Mancuernas",
        "sets": 4,
        "reps": "6, 6, 12, 12",
        "rest": "120s",
        "notes": "",
        "videoUrl": "https://youtu.be/hXCJC2Apcdg",
        "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Remo Seal con Mancuernas",
        "sets": 3,
        "reps": "6, 6, 12",
        "rest": "90s",
        "notes": "Trata de despegar el pecho al final del movimiento",
        "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
        "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Press Militar Unilat de Pie con Mancuerna/KTB",
        "isSuperset": true,
        "items": [
          {
            "name": "Press Militar Unilat de Pie con Mancuerna/KTB",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/shorts/vIK0qkXP_f0",
            "imageUrl": "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
          },
          {
            "name": "Flexiones Tempo 1:1",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "90s",
            "videoUrl": "https://www.youtube.com/shorts/-9Md7Htla-o",
            "imageUrl": "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/vIK0qkXP_f0",
        "imageUrl": "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Dominadas Australianas con Pies en Banco",
        "isSuperset": true,
        "items": [
          {
            "name": "Dominadas Australianas con Pies en Banco",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/WqoNa74DieE",
            "imageUrl": "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg"
          },
          {
            "name": "Curl de Bíceps Apoyado en Banco con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "notes": "Hazlo de espaldas en el mismo jalón",
            "rest": "90s",
            "videoUrl": "https://youtube.com/shorts/hQ3ojFx5soY",
            "imageUrl": "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/WqoNa74DieE",
        "imageUrl": "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Fondos de Tríceps con Pies Elevados",
        "isSuperset": true,
        "items": [
          {
            "name": "Fondos de Tríceps con Pies Elevados",
            "subOrder": 1,
            "sets": 3,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://youtube.com/shorts/FBttBh-aiVs",
            "imageUrl": "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
          },
          {
            "name": "Extensión Tríceps Trasnuca Unilateral con Mancuerna",
            "subOrder": 2,
            "sets": 3,
            "reps": "15",
            "rest": "90s",
            "videoUrl": "https://youtu.be/jGTquNttoRU",
            "imageUrl": "https://i.ytimg.com/vi/jGTquNttoRU/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/FBttBh-aiVs",
        "imageUrl": "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
      }
    ]
  },
  "dia2": {
    "name": "Pierna Completa (ANTERIOR)",
    "exercises": [
      {
        "order": 1,
        "name": "Abducción de Glúteo Unilat en el Suelo",
        "isWarmup": true,
        "sets": 2,
        "reps": "12",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
        "imageUrl": "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Sentadilla Frontal con Mancuernas/Kettlebells",
        "sets": 4,
        "reps": "6, 6, 12, 12",
        "rest": "120s",
        "notes": "",
        "videoUrl": "https://youtu.be/lfb6neUpfP8",
        "imageUrl": "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Split Unilateral con Mancuernas/KTB",
        "sets": 3,
        "reps": "6, 12, 12",
        "rest": "120s",
        "notes": "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
        "videoUrl": "https://www.youtube.com/shorts/o8-Oc19pGn8",
        "imageUrl": "https://i.ytimg.com/vi/o8-Oc19pGn8/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Zancada Trasera Alterna con Mancuernas/KTB",
        "sets": 3,
        "reps": "16",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/watch?v=Kzv73cEkTq4",
        "imageUrl": "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Sentadilla Sumo con Mancuerna/Kettlebell",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://youtu.be/ifBHyfgLe8k",
        "imageUrl": "https://i.ytimg.com/vi/ifBHyfgLe8k/mqdefault.jpg"
      }
    ]
  },
  "dia3": {
    "name": "Torso Completo (PULL)",
    "exercises": [
      {
        "order": 1,
        "name": "Movilidad - Cintura Escapular",
        "isWarmup": true,
        "sets": 2,
        "reps": "10",
        "rest": "60s",
        "notes": "Estabilizando el tronco con mucho control motor.",
        "videoUrl": "https://youtu.be/qFt3RmTDmXI",
        "imageUrl": "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
        "sets": 4,
        "reps": "6, 6, 12, 12",
        "rest": "120s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/NMlvYALcyBc",
        "imageUrl": "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Press Militar con Barra de Pie",
        "sets": 3,
        "reps": "6, 12, 12",
        "rest": "120s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/watch?v=idnuMZx6mS0",
        "imageUrl": "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Remo Contralat Unilat con Mancuerna",
        "isSuperset": true,
        "items": [
          {
            "name": "Remo Contralat Unilat con Mancuerna",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://youtube.com/shorts/O7PAUd4ZMB4",
            "imageUrl": "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg"
          },
          {
            "name": "Pájaros con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "90s",
            "videoUrl": "https://youtu.be/EMrOS6P90lM",
            "imageUrl": "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg",
            "notes": ""
          }
        ],
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/O7PAUd4ZMB4",
        "imageUrl": "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Press Inclinado con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Press Inclinado con Mancuernas",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/ZE4M73kXB5A",
            "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
          },
          {
            "name": "Press Francés con Mancuernas en Banco Inclinado",
            "subOrder": 2,
            "sets": 3,
            "reps": "15",
            "rest": "90s",
            "videoUrl": "https://youtu.be/L__Q6Jl9Ics",
            "imageUrl": "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/ZE4M73kXB5A",
        "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Curl Martillo con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Curl Martillo con Mancuernas",
            "subOrder": 1,
            "sets": 3,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/fcFsPoJY9lg",
            "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
          },
          {
            "name": "Elevaciones Laterales con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "15",
            "rest": "90s",
            "videoUrl": "https://youtu.be/rhmW_fhB4cs",
            "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/fcFsPoJY9lg",
        "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
      }
    ]
  },
  "dia4": {
    "name": "Pierna Completa (POSTERIOR)",
    "exercises": [
      {
        "order": 1,
        "name": "Abducción de Glúteo Unilat en el Suelo",
        "isWarmup": true,
        "sets": 2,
        "reps": "10",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
        "imageUrl": "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Sentadilla Búlgara con Mancuerna o KTB",
        "sets": 4,
        "reps": "6, 6, 12, 12",
        "rest": "120s",
        "notes": "",
        "videoUrl": "https://youtu.be/kA6bHiDdTO4",
        "imageUrl": "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Hip Thrust con Barra (ExPLICADO)",
        "sets": 3,
        "reps": "6, 12, 12",
        "rest": "120s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
        "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Peso Muerto Rumano con Mancuernas/KTB",
        "sets": 3,
        "reps": "16",
        "rest": "90s",
        "notes": "Espalda recta en todo momento",
        "videoUrl": "https://www.youtube.com/shorts/SMll4DOYvEs",
        "imageUrl": "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
      }
    ]
  }
};
