// Titulo: P14_3D_FUERZA_1 (HOME)
// Adaptación para hombro sensible y muñecas débiles: sin presses sobre la cabeza ni apoyos de manos en el suelo. Enfoque de fuerza y tres días conservados.

const workoutData = {
  "dia1": {
    "name": "Anterior (empuje y pierna)",
    "exercises": [
      {
        "order": 1,
        "name": "Gomas - Rotación Externa en Columna",
        "isWarmup": true,
        "sets": 2,
        "reps": "10",
        "rest": "30s",
        "notes": "Mantén tu codo prácticamente pegado al torso en todo momento",
        "videoUrl": "https://youtu.be/y8cSPoMahok",
        "imageUrl": "https://i.ytimg.com/vi/y8cSPoMahok/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Elevaciones Laterales con Mancuernas",
        "sets": 3,
        "reps": "6, 12, 12",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtu.be/rhmW_fhB4cs",
        "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Sentadilla Búlgara con Mancuerna o KTB",
        "setTechniques": {
          "1": "DROPSET",
          "2": "DROPSET",
          "3": "DROPSET"
        },
        "sets": 3,
        "reps": "8",
        "rest": "90s",
        "notes": "la dropset es DEJANDO EL PESO. ",
        "videoUrl": "https://youtu.be/kA6bHiDdTO4",
        "imageUrl": "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Press Cerrado en Banco Inclinado con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Press Cerrado en Banco Inclinado con Mancuernas",
            "subOrder": 1,
            "sets": 3,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/tdh7LSxUj1s",
            "imageUrl": "https://i.ytimg.com/vi/tdh7LSxUj1s/mqdefault.jpg"
          },
          {
            "name": "Gomas - Empuje en Columna",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "90s",
            "videoUrl": "https://youtu.be/GrDyF8acxeU",
            "imageUrl": "https://i.ytimg.com/vi/GrDyF8acxeU/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/tdh7LSxUj1s",
        "imageUrl": "https://i.ytimg.com/vi/tdh7LSxUj1s/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Gomas - Extensión de Tríceps de Pie",
        "isSuperset": true,
        "items": [
          {
            "name": "Gomas - Extensión de Tríceps de Pie",
            "subOrder": 1,
            "sets": 3,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/iwMJz1a0pck",
            "imageUrl": "https://i.ytimg.com/vi/iwMJz1a0pck/mqdefault.jpg"
          },
          {
            "name": "Gomas - Extensión de Tríceps en Columna",
            "subOrder": 2,
            "sets": 3,
            "reps": "5",
            "rest": "90s",
            "videoUrl": "https://youtu.be/MtGdJQ-Q0hs",
            "imageUrl": "https://i.ytimg.com/vi/MtGdJQ-Q0hs/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/iwMJz1a0pck",
        "imageUrl": "https://i.ytimg.com/vi/iwMJz1a0pck/mqdefault.jpg"
      },
      {
        "order": 7,
        "name": "Sentadilla Goblet con Mancuerna/KTB y Pies Elevados",
        "isSuperset": true,
        "items": [
          {
            "name": "Sentadilla Goblet con Mancuerna/KTB y Pies Elevados",
            "subOrder": 1,
            "sets": 3,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/E2n7V0o8B5A",
            "imageUrl": "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
          },
          {
            "name": "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
            "subOrder": 2,
            "sets": 3,
            "reps": "12",
            "rest": "90s",
            "videoUrl": "https://youtu.be/1MgU2PO4_rI",
            "imageUrl": "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/E2n7V0o8B5A",
        "imageUrl": "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
      }
    ]
  },
  "dia2": {
    "name": "Posterior (Remo)",
    "exercises": [
      {
        "order": 1,
        "name": "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
        "isWarmup": true,
        "sets": 2,
        "reps": "10",
        "rest": "30s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/NMlvYALcyBc",
        "imageUrl": "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Remo Seal con Mancuernas",
        "sets": 3,
        "reps": "6, 12, 12",
        "rest": "120s",
        "notes": "Trata de despegar el pecho al final del movimiento",
        "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
        "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Peso Muerto Rumano con Mancuernas/KTB",
        "sets": 3,
        "reps": "12, 10, 8",
        "rest": "90s",
        "notes": "Espalda recta en todo momento",
        "videoUrl": "https://www.youtube.com/shorts/SMll4DOYvEs",
        "imageUrl": "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Dominadas Australianas en TRX",
        "isSuperset": true,
        "items": [
          {
            "name": "Dominadas Australianas en TRX",
            "subOrder": 1,
            "sets": 3,
            "reps": "8",
            "isSupersetStart": true,
            "notes": "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
            "videoUrl": "https://www.youtube.com/shorts/f2-aezhuOoQ",
            "imageUrl": "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
          },
          {
            "name": "Remo Horizontal en TRX",
            "subOrder": 2,
            "sets": 3,
            "reps": "8",
            "rest": "90s",
            "videoUrl": "https://www.youtube.com/watch?v=uTA2s5FuRUM",
            "imageUrl": "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
          }
        ],
        "notes": "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
        "videoUrl": "https://www.youtube.com/shorts/f2-aezhuOoQ",
        "imageUrl": "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Curl con Mancuernas Sentado en Banco Inclinado",
        "isSuperset": true,
        "items": [
          {
            "name": "Curl con Mancuernas Sentado en Banco Inclinado",
            "subOrder": 1,
            "sets": 3,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/S32a3nYiWko",
            "imageUrl": "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
          },
          {
            "name": "Remo Horizontal en TRX",
            "subOrder": 2,
            "sets": 3,
            "reps": "12",
            "rest": "60s",
            "videoUrl": "https://www.youtube.com/watch?v=uTA2s5FuRUM",
            "imageUrl": "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/S32a3nYiWko",
        "imageUrl": "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Curl Femoral desde Puente (Con TRX)",
        "isSuperset": true,
        "items": [
          {
            "name": "Curl Femoral desde Puente (Con TRX)",
            "subOrder": 1,
            "sets": 3,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/watch?v=6NCkHTG4lHc",
            "imageUrl": "https://i.ytimg.com/vi/6NCkHTG4lHc/mqdefault.jpg"
          },
          {
            "name": "Curl Martillo con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "12",
            "rest": "90s",
            "videoUrl": "https://youtu.be/fcFsPoJY9lg",
            "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://www.youtube.com/watch?v=6NCkHTG4lHc",
        "imageUrl": "https://i.ytimg.com/vi/6NCkHTG4lHc/mqdefault.jpg"
      }
    ]
  },
  "dia3": {
    "name": "Completo",
    "exercises": [
      {
        "order": 1,
        "name": "Abducción de Glúteo Unilat en el Suelo",
        "isWarmup": true,
        "sets": 2,
        "reps": "10",
        "rest": "30s",
        "notes": "10 por lado",
        "videoUrl": "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
        "imageUrl": "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Sentadilla Frontal con Mancuernas/Kettlebells",
        "sets": 3,
        "reps": "6, 12, 12",
        "rest": "120s",
        "notes": "",
        "videoUrl": "https://youtu.be/lfb6neUpfP8",
        "imageUrl": "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Press Banca Contralat Unilat con Mancuerna",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/7kAl5bVSYUc",
        "imageUrl": "https://i.ytimg.com/vi/7kAl5bVSYUc/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Remo Contralat Unilat con Mancuerna",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/O7PAUd4ZMB4",
        "imageUrl": "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Floor Press con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Floor Press con Mancuernas",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "notes": "Trata de despegar el pecho al final del movimiento",
            "videoUrl": "https://www.youtube.com/shorts/Iu02N3s7zgQ",
            "imageUrl": "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
          },
          {
            "name": "Gomas - Remo en Columna",
            "subOrder": 2,
            "sets": 3,
            "reps": "16",
            "rest": "90s",
            "videoUrl": "https://youtu.be/oaNDZ4glMKY",
            "imageUrl": "https://i.ytimg.com/vi/oaNDZ4glMKY/mqdefault.jpg"
          }
        ],
        "notes": "Trata de despegar el pecho al final del movimiento",
        "videoUrl": "https://www.youtube.com/shorts/Iu02N3s7zgQ",
        "imageUrl": "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Zancada Trasera Alterna con Mancuernas/KTB",
        "isSuperset": true,
        "items": [
          {
            "name": "Zancada Trasera Alterna con Mancuernas/KTB",
            "subOrder": 1,
            "sets": 3,
            "reps": "16, 14, 12",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/watch?v=Kzv73cEkTq4",
            "imageUrl": "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
          },
          {
            "name": "Elevaciones Laterales con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "12, 10, 8",
            "rest": "90s",
            "videoUrl": "https://youtu.be/rhmW_fhB4cs",
            "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://www.youtube.com/watch?v=Kzv73cEkTq4",
        "imageUrl": "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
      }
    ]
  }
};

const exerciseAlternatives = {};
