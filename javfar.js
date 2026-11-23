// Titulo: P3_3D_APFB_INOUT_2
// Notas de catálogo: Subir Volumen en algunos ejercicios.
// Adaptación Javi 23/11/2026: sin TRX, saltos ni desplazamientos; remo Seal en lugar de renegade; prensa conservada. Circuitos de cinco vueltas y bloques en la misma zona. Conserva series/reps de V2. Duración estimada 50-60 min con transiciones y descansos. Si molesta la rodilla, detén el ejercicio y avisa.

const workoutData = {
  "dia1": {
    "name": "Anterior IN-OUT",
    "exercises": [
      {
        "order": 1,
        "name": "Press Banca Inclinado en Multipower",
        "sets": 4,
        "reps": "8, 8, 10, 12",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtu.be/3GS7EjN7KSk",
        "imageUrl": "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Zancada Trasera Alterna con Mancuernas/KTB",
        "sets": 3,
        "reps": "16",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/watch?v=Kzv73cEkTq4",
        "imageUrl": "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Press Militar con Barra de Pie",
        "isSuperset": true,
        "items": [
          {
            "name": "Press Militar con Barra de Pie",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/watch?v=idnuMZx6mS0",
            "imageUrl": "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
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
        "notes": "Completa la superserie en la misma zona. Prepara el material antes; descansa 90 s al terminar cada vuelta.",
        "videoUrl": "https://www.youtube.com/watch?v=idnuMZx6mS0",
        "imageUrl": "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Press Banca con Barra",
        "isSuperset": true,
        "items": [
          {
            "name": "Press Banca con Barra",
            "subOrder": 1,
            "sets": 3,
            "reps": "15, 12, 10",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/PKpsrFS2uac",
            "imageUrl": "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
          },
          {
            "name": "Fondos de Tríceps con Pies Elevados",
            "subOrder": 2,
            "sets": 3,
            "reps": "15, 12, 10",
            "rest": "90s",
            "videoUrl": "https://youtube.com/shorts/FBttBh-aiVs",
            "imageUrl": "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
          }
        ],
        "notes": "Completa la superserie en la misma zona. Prepara el material antes; descansa 90 s al terminar cada vuelta.",
        "videoUrl": "https://youtu.be/PKpsrFS2uac",
        "imageUrl": "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Circuito IN-OUT",
        "isSuperset": true,
        "circuitDetails": {
          "totalRounds": 5,
          "restBetweenExercisesSeconds": 30,
          "restBetweenRoundsSeconds": 30
        },
        "items": [
          {
            "name": "Sentadilla con Peso Corporal",
            "subOrder": 1,
            "sets": 1,
            "reps": "30s",
            "isCircuitItem": true,
            "videoUrl": "https://youtu.be/NWes6fd1Sxs",
            "imageUrl": "https://i.ytimg.com/vi/NWes6fd1Sxs/mqdefault.jpg",
            "notes": "Sin salto; recorrido cómodo y controlado para la rodilla."
          },
          {
            "name": "Thruster con Mancuernas",
            "subOrder": 2,
            "sets": 1,
            "reps": "30s",
            "isCircuitItem": true,
            "notes": "Utiliza mancuernas de 8-10kg",
            "videoUrl": "https://www.youtube.com/watch?v=5mTjKFubavs",
            "imageUrl": "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
          }
        ],
        "notes": "Cinco vueltas de dos ejercicios, sin saltos ni desplazamientos; 30 s de trabajo, 30 s entre ejercicios y 30 s entre vueltas. Prepara el material en la misma zona.",
        "videoUrl": "https://youtu.be/NWes6fd1Sxs",
        "imageUrl": "https://i.ytimg.com/vi/NWes6fd1Sxs/mqdefault.jpg"
      }
    ]
  },
  "dia2": {
    "name": "Posterior IN-OUT",
    "exercises": [
      {
        "order": 1,
        "name": "Jalón al Pecho Supino en Polea",
        "sets": 4,
        "reps": "8, 8, 10, 12",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtu.be/rimdRzyIJkA",
        "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Peso Muerto Rumano con Barra",
        "sets": 4,
        "reps": "8, 8, 10, 12",
        "rest": "90s",
        "notes": "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
        "videoUrl": "https://youtu.be/R7FKam5GyNw",
        "imageUrl": "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Remo Unilat con Mancuerna/KTB (Explicado)",
        "isSuperset": true,
        "items": [
          {
            "name": "Remo Unilat con Mancuerna/KTB (Explicado)",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
            "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
          },
          {
            "name": "Remo Seal con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "16",
            "rest": "90s",
            "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
            "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg",
            "notes": "Trata de despegar el pecho al final del movimiento"
          }
        ],
        "notes": "Completa la superserie en la misma zona. Prepara el material antes; descansa 90 s al terminar cada vuelta.",
        "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
        "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Face Pull al Cuello en Polea Alta",
        "isSuperset": true,
        "items": [
          {
            "name": "Face Pull al Cuello en Polea Alta",
            "subOrder": 1,
            "sets": 3,
            "reps": "15, 12, 10",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/shorts/TaTjLum-_qI",
            "imageUrl": "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg",
            "notes": "Usa cuerda y lleva las manos hacia el cuello o la cara, separando los extremos. Mantén el tronco estable y controla la vuelta sin balancearte."
          },
          {
            "name": "Curl Martillo con Cuerda en Polea Baja",
            "subOrder": 2,
            "sets": 3,
            "reps": "15, 12, 10",
            "rest": "90s",
            "videoUrl": "https://www.youtube.com/shorts/fSTgTQr1WCk",
            "imageUrl": "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg",
            "notes": ""
          }
        ],
        "notes": "Completa la superserie en la misma zona. Prepara el material antes; descansa 90 s al terminar cada vuelta.",
        "videoUrl": "https://www.youtube.com/shorts/TaTjLum-_qI",
        "imageUrl": "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Circuito IN-OUT",
        "isSuperset": true,
        "circuitDetails": {
          "totalRounds": 5,
          "restBetweenExercisesSeconds": 30,
          "restBetweenRoundsSeconds": 30
        },
        "items": [
          {
            "name": "Hip Thrust con Banda Elástica",
            "subOrder": 1,
            "sets": 1,
            "reps": "30s",
            "isCircuitItem": true,
            "notes": "Puente de glúteo con banda, en suelo. Ten preparada la banda antes de empezar el circuito.",
            "videoUrl": "https://www.youtube.com/shorts/ewSrH2uFits",
            "imageUrl": "https://i.ytimg.com/vi/ewSrH2uFits/mqdefault.jpg"
          },
          {
            "name": "Mountain Climber",
            "subOrder": 2,
            "sets": 1,
            "reps": "30s",
            "isCircuitItem": true,
            "videoUrl": "https://youtu.be/GZWmYzClS3s",
            "imageUrl": "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg",
            "notes": "Lento y controlado, sin impacto ni rebotes; recorrido cómodo para la rodilla."
          }
        ],
        "notes": "Cinco vueltas de dos ejercicios, sin saltos ni desplazamientos; 30 s de trabajo, 30 s entre ejercicios y 30 s entre vueltas. Prepara el material en la misma zona.",
        "videoUrl": "https://www.youtube.com/shorts/ewSrH2uFits",
        "imageUrl": "https://i.ytimg.com/vi/ewSrH2uFits/mqdefault.jpg"
      }
    ]
  },
  "dia3": {
    "name": "Fullbody IN-OUT",
    "exercises": [
      {
        "order": 1,
        "name": "Curl con Barra Z",
        "sets": 4,
        "reps": "8, 8, 10, 12",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtu.be/4gYLTjNaTmw",
        "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Press Cerrado con Barra",
        "sets": 4,
        "reps": "8, 8, 10, 12",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtu.be/_062fQmtry8",
        "imageUrl": "https://i.ytimg.com/vi/_062fQmtry8/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Prensa Inclinada en Máquina de Discos",
        "sets": 3,
        "reps": "8",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
        "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Curl Martillo con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Curl Martillo con Mancuernas",
            "subOrder": 1,
            "sets": 3,
            "reps": "15, 12, 10",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/fcFsPoJY9lg",
            "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
          },
          {
            "name": "Extensión Tríceps Trasnuca Unilateral con Mancuerna",
            "subOrder": 2,
            "sets": 3,
            "reps": "15, 12, 10",
            "rest": "90s",
            "videoUrl": "https://youtu.be/jGTquNttoRU",
            "imageUrl": "https://i.ytimg.com/vi/jGTquNttoRU/mqdefault.jpg"
          }
        ],
        "notes": "Completa la superserie en la misma zona. Prepara el material antes; descansa 90 s al terminar cada vuelta.",
        "videoUrl": "https://youtu.be/fcFsPoJY9lg",
        "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Circuito IN-OUT",
        "isSuperset": true,
        "circuitDetails": {
          "totalRounds": 5,
          "restBetweenExercisesSeconds": 30,
          "restBetweenRoundsSeconds": 30
        },
        "items": [
          {
            "name": "Sentadilla Sumo con Peso Corporal",
            "subOrder": 1,
            "sets": 1,
            "reps": "30s",
            "isCircuitItem": true,
            "notes": "",
            "videoUrl": "https://youtu.be/gJRjDiTSPYk",
            "imageUrl": "https://i.ytimg.com/vi/gJRjDiTSPYk/mqdefault.jpg"
          },
          {
            "name": "Plancha - Normal",
            "subOrder": 2,
            "sets": 1,
            "reps": "30s",
            "isCircuitItem": true,
            "videoUrl": "https://youtu.be/DQ4wYExQRJo",
            "imageUrl": "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg",
            "notes": "Mantener espalda recta y glúteo apretado (retroversión de cadera)"
          }
        ],
        "notes": "Cinco vueltas de dos ejercicios, sin saltos ni desplazamientos; 30 s de trabajo, 30 s entre ejercicios y 30 s entre vueltas. Prepara el material en la misma zona.",
        "videoUrl": "https://youtu.be/gJRjDiTSPYk",
        "imageUrl": "https://i.ytimg.com/vi/gJRjDiTSPYk/mqdefault.jpg"
      }
    ]
  }
};

const exerciseAlternatives = {
  "Press Banca Inclinado en Multipower": [
    {
      "name": "Press Inclinado con Mancuernas",
      "videoUrl": "https://youtu.be/ZE4M73kXB5A",
      "notes": " Mismas series y repeticiones; recorrido sin dolor.",
      "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg",
      "categories": [
        "HOME"
      ]
    }
  ],
  "Zancada Trasera Alterna con Mancuernas/KTB": [
    {
      "name": "Zancada Unilateral en Multipower",
      "videoUrl": "https://youtu.be/yfNWlh9rp6o",
      "notes": " Mismas series y repeticiones; recorrido sin dolor.",
      "imageUrl": "https://i.ytimg.com/vi/yfNWlh9rp6o/mqdefault.jpg"
    }
  ],
  "Jalón al Pecho Supino en Polea": [
    {
      "name": "Dominadas Asistidas en Máquina",
      "videoUrl": "https://www.youtube.com/shorts/5OGBlINLP6w",
      "notes": " Mismas series y repeticiones; recorrido sin dolor.",
      "imageUrl": "https://i.ytimg.com/vi/5OGBlINLP6w/mqdefault.jpg",
      "categories": [
        "GYM"
      ]
    }
  ],
  "Peso Muerto Rumano con Barra": [
    {
      "name": "Peso Muerto Rumano con Mancuernas/KTB",
      "videoUrl": "https://www.youtube.com/shorts/SMll4DOYvEs",
      "notes": "Espalda recta en todo momento Mismas series y repeticiones; recorrido sin dolor.",
      "imageUrl": "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg",
      "categories": [
        "HOME",
        "KTB"
      ]
    }
  ],
  "Curl con Barra Z": [
    {
      "name": "Curl Araña con Barra Z",
      "videoUrl": "https://www.youtube.com/shorts/ZGa2E8bi9Eg",
      "notes": " Mismas series y repeticiones; recorrido sin dolor.",
      "imageUrl": "https://i.ytimg.com/vi/ZGa2E8bi9Eg/mqdefault.jpg",
      "categories": [
        "GYM"
      ]
    }
  ],
  "Press Cerrado con Barra": [
    {
      "name": "Press Cerrado en Banco Inclinado con Mancuernas",
      "videoUrl": "https://youtu.be/tdh7LSxUj1s",
      "notes": " Mismas series y repeticiones; recorrido sin dolor.",
      "imageUrl": "https://i.ytimg.com/vi/tdh7LSxUj1s/mqdefault.jpg",
      "categories": [
        "HOME"
      ]
    }
  ],
  "Prensa Inclinada en Máquina de Discos": [
    {
      "name": "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
      "videoUrl": "https://www.youtube.com/shorts/tNu9bm3geqY",
      "notes": " Mismas series y repeticiones; recorrido sin dolor.",
      "imageUrl": "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg",
      "categories": [
        "HOME"
      ]
    }
  ]
};
