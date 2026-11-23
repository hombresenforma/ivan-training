// Titulo: P23_4D_PostAntTorPier_VOLUMEN_2_FEM
// Notas de versión: añadimos una serie a los básicos (máximo cinco) y un tercer ejercicio en los bloques de pecho/espalda del origen. Adaptación FEM: sin pectoral; prioridad de pierna, glúteo y abdomen.
// Adaptación Anna 23/11/2026: se recuperan los tres primeros días de su P23 V2 FEM del 19/11 y se sustituye el cuarto día por Pierna Foco Glúteo personalizado de Silvia, con sus series, repeticiones y descansos. Se completa el vídeo canónico de la búlgara en máquina.
// Día 4: abducción unilateral en suelo, búlgara en máquina, sentadilla trasera con barra, prensa, superserie hip thrust con barra + zancadas y patada lateral en polea.
// Duración estimada: 50-65 min días base y 60-70 min el día de glúteo personalizado, según transiciones y trabajo unilateral.

const workoutData = {
  "dia1": {
    "name": "Pierna y glúteo + abdomen 1",
    "exercises": [
      {
        "order": 1,
        "name": "Hip Thrust en Máquina",
        "sets": 5,
        "reps": "8",
        "rest": "120s",
        "notes": "Ajusta el apoyo y el cinturón o rodillo de la máquina sobre la cadera. Eleva la cadera con control, contrae el glúteo arriba sin arquear la zona lumbar y baja sin rebotes.",
        "videoUrl": "https://www.youtube.com/watch?v=BhoKmsSZNGM",
        "imageUrl": "https://i.ytimg.com/vi/BhoKmsSZNGM/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Sentadilla Búlgara con Mancuerna o KTB",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "Puedes hacerla cogido con una mano a alguna máquina.",
        "videoUrl": "https://youtu.be/kA6bHiDdTO4",
        "imageUrl": "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Zancadas Caminando con Mancuernas/KTB",
        "isSuperset": true,
        "items": [
          {
            "name": "Zancadas Caminando con Mancuernas/KTB",
            "subOrder": 1,
            "sets": 3,
            "reps": "8",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/7tRy9X0ibnk",
            "imageUrl": "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg",
            "notes": "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera."
          },
          {
            "name": "Sit Up Unilateral con Mancuerna/KTB",
            "subOrder": 2,
            "sets": 3,
            "reps": "12",
            "videoUrl": "https://youtu.be/INcd--4kK5k",
            "imageUrl": "https://i.ytimg.com/vi/INcd--4kK5k/mqdefault.jpg",
            "notes": ""
          },
          {
            "name": "Crunch - Normal",
            "subOrder": 3,
            "sets": 3,
            "reps": "12",
            "rest": "90s",
            "videoUrl": "https://youtu.be/wNqGgCjBVaE",
            "imageUrl": "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg",
            "notes": "Mantén la Lumbar pegada al suelo"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/7tRy9X0ibnk",
        "imageUrl": "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Extensión de Cuádriceps en Máquina",
        "isSuperset": true,
        "items": [
          {
            "name": "Extensión de Cuádriceps en Máquina",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
            "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
          },
          {
            "name": "Sentadilla Goblet con Mancuerna/KTB y Pies Elevados",
            "subOrder": 2,
            "sets": 3,
            "reps": "20",
            "rest": "90s",
            "videoUrl": "https://youtu.be/E2n7V0o8B5A",
            "imageUrl": "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
        "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://youtu.be/1MgU2PO4_rI",
        "imageUrl": "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
      }
    ]
  },
  "dia2": {
    "name": "Torso sin pectoral + abdomen 2",
    "exercises": [
      {
        "order": 1,
        "name": "Dominadas con Peso Corporal",
        "sets": 5,
        "reps": "8",
        "rest": "120s",
        "notes": "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
        "videoUrl": "https://www.youtube.com/shorts/pb-14sP_R4M",
        "imageUrl": "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Peso Muerto Rumano con Barra",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
        "videoUrl": "https://youtu.be/R7FKam5GyNw",
        "imageUrl": "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Remo Seal con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Remo Seal con Mancuernas",
            "subOrder": 1,
            "sets": 3,
            "reps": "8",
            "isSupersetStart": true,
            "notes": "Trata de despegar el pecho al final del movimiento",
            "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
            "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
          },
          {
            "name": "Remo Unilat con Mancuerna/KTB (Explicado)",
            "subOrder": 2,
            "sets": 3,
            "reps": "12",
            "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
            "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
          },
          {
            "name": "Face Pull al Cuello en Polea Alta",
            "subOrder": 3,
            "sets": 3,
            "reps": "20",
            "rest": "90s",
            "videoUrl": "https://www.youtube.com/shorts/TaTjLum-_qI",
            "imageUrl": "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg",
            "notes": "Usa cuerda y lleva las manos hacia el cuello o la cara, separando los extremos. Mantén el tronco estable y controla la vuelta sin balancearte."
          }
        ],
        "notes": "Trata de despegar el pecho al final del movimiento",
        "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
        "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Curl Femoral Sentado en Máquina",
        "isSuperset": true,
        "items": [
          {
            "name": "Curl Femoral Sentado en Máquina",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
            "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
          },
          {
            "name": "Kettlebell - Swing Ruso",
            "subOrder": 2,
            "sets": 3,
            "reps": "20",
            "rest": "90s",
            "videoUrl": "https://youtu.be/eKN0tj8q6Qc",
            "imageUrl": "https://i.ytimg.com/vi/eKN0tj8q6Qc/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
        "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Curl de Bíceps Apoyado en Banco con Mancuernas",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/hQ3ojFx5soY",
        "imageUrl": "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Cuerpo Libre - Glute Bridge - Normal",
        "sets": 2,
        "reps": "15",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://youtu.be/D04hX-R8LsA",
        "imageUrl": "https://i.ytimg.com/vi/D04hX-R8LsA/mqdefault.jpg"
      },
      {
        "order": 7,
        "name": "Plancha - Normal",
        "sets": 2,
        "reps": "30s",
        "rest": "45s",
        "notes": "Mantener espalda recta y glúteo apretado (retroversión de cadera)",
        "videoUrl": "https://youtu.be/DQ4wYExQRJo",
        "imageUrl": "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
      }
    ]
  },
  "dia3": {
    "name": "Torso sin pectoral + abdomen 3",
    "exercises": [
      {
        "order": 1,
        "name": "Hip Thrust con Barra (ExPLICADO)",
        "sets": 5,
        "reps": "8",
        "rest": "120s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
        "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Remo en Máquina T Agarre Estrecho",
        "sets": 5,
        "reps": "8",
        "rest": "120s",
        "notes": "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
        "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
        "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Press Militar Sentado con Mancuernas (ExPLICADO)",
        "sets": 4,
        "reps": "10",
        "rest": "90s",
        "notes": "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
        "videoUrl": "https://www.youtube.com/shorts/2ZkYyh4ic0o",
        "imageUrl": "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Jalón al Pecho Supino en Polea",
        "sets": 4,
        "reps": "10",
        "rest": "90s",
        "notes": "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
        "videoUrl": "https://youtu.be/rimdRzyIJkA",
        "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Zancada Alterna con Barra",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtu.be/Q2SUv47Qh4U",
        "imageUrl": "https://i.ytimg.com/vi/Q2SUv47Qh4U/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Curl con Barra Recta",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
        "videoUrl": "https://youtu.be/0TjnWWqQfUw",
        "imageUrl": "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg"
      },
      {
        "order": 7,
        "name": "Crunch - Modificado McGuill",
        "sets": 2,
        "reps": "12",
        "rest": "45s",
        "notes": "",
        "videoUrl": "https://youtu.be/-SCPkGTv6Cg",
        "imageUrl": "https://i.ytimg.com/vi/-SCPkGTv6Cg/mqdefault.jpg"
      }
    ]
  },
  "dia4": {
    "name": "Pierna Foco Glúteo",
    "exercises": [
      {
        "order": 1,
        "name": "Abducción de Glúteo Unilat en el Suelo",
        "isWarmup": true,
        "sets": 3,
        "reps": "10",
        "rest": "30s",
        "notes": " Antes de la búlgara, realiza dos aproximaciones progresivas con poca carga.",
        "videoUrl": "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
        "imageUrl": "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Sentadilla Búlgara en Máquina",
        "sets": 4,
        "reps": "8",
        "rest": "120s",
        "notes": "El vídeo muestra la variante en máquina de sentadilla Hammer Strength. Ajusta los apoyos de la máquina, mantén el pie delantero firme y el pie trasero elevado en un soporte estable. Baja con control y empuja con la pierna delantera. Realiza las repeticiones con cada pierna. Descansa después de completar ambas piernas. Ajusta la carga para terminar con 1–2 repeticiones en recámara.",
        "videoUrl": "https://www.youtube.com/watch?v=wqDidBdygbY",
        "imageUrl": "https://i.ytimg.com/vi/wqDidBdygbY/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Sentadilla Trasera con Barra",
        "sets": 3,
        "reps": "10",
        "rest": "120s",
        "notes": "Colócate como en el vídeo y baja de forma controlada, sin rebotes.",
        "videoUrl": "https://youtu.be/FK5XU_gaxAE",
        "imageUrl": "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Prensa Inclinada en Máquina de Discos",
        "sets": 3,
        "reps": "10",
        "rest": "120s",
        "notes": "Mantén la pelvis apoyada durante todo el recorrido y controla la bajada.",
        "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
        "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Hip Thrust con Barra (ExPLICADO)",
        "isSuperset": true,
        "items": [
          {
            "name": "Hip Thrust con Barra (ExPLICADO)",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "notes": " Haz una pausa breve contrayendo el glúteo arriba.",
            "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
            "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
          },
          {
            "name": "Zancadas Caminando con Mancuernas/KTB",
            "subOrder": 2,
            "sets": 3,
            "reps": "16",
            "rest": "90s",
            "videoUrl": "https://youtu.be/7tRy9X0ibnk",
            "imageUrl": "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
        "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Patada Lateral en Polea",
        "sets": 3,
        "reps": "12",
        "rest": "75s",
        "notes": "Colócate de lado a la polea baja y engancha la tobillera en la pierna más alejada. Separa la pierna hacia el lateral con la pelvis estable y vuelve despacio. Completa las repeticiones con ambas piernas antes de descansar.",
        "videoUrl": "https://www.youtube.com/watch?v=bGlm-qTnfTI",
        "imageUrl": "https://i.ytimg.com/vi/bGlm-qTnfTI/mqdefault.jpg"
      }
    ]
  }
};

const exerciseAlternatives = {};
