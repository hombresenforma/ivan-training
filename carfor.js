// Titulo: P3_3D_APFB_INOUT_1
// Notas: Sin descripción específica en el catálogo. Estructura de tres días Anterior / Posterior / Fullbody IN-OUT. Se conservan las series, objetivos y circuitos de la plantilla.

const workoutData = {
  "dia1": {
    "name": "Anterior IN-OUT",
    "exercises": [
      {
        "order": 1,
        "name": "Press Banca Inclinado en Multipower",
        "sets": 3,
        "reps": "8",
        "rest": "90s",
        "notes": "La carga estimada por la app no es obligatoria. Prioriza técnica y un recorrido sin pinchazos; no subas por una sugerencia automática.",
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
        "notes": "",
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
        "notes": "",
        "videoUrl": "https://youtu.be/PKpsrFS2uac",
        "imageUrl": "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Circuito IN-OUT",
        "isSuperset": true,
        "circuitDetails": {
          "totalRounds": 4,
          "restBetweenExercisesSeconds": 30,
          "restBetweenRoundsSeconds": 30
        },
        "items": [
          {
            "name": "Step Up Lateral Alterno en Step",
            "subOrder": 1,
            "sets": 1,
            "reps": "30s",
            "isCircuitItem": true,
            "videoUrl": "https://youtu.be/N26TyhPhSRI",
            "imageUrl": "https://i.ytimg.com/vi/N26TyhPhSRI/mqdefault.jpg"
          },
          {
            "name": "Thruster con Mancuernas",
            "subOrder": 2,
            "sets": 1,
            "reps": "30s",
            "isCircuitItem": true,
            "notes": "Utiliza mancuernas de 8-10kg. ",
            "videoUrl": "https://www.youtube.com/watch?v=5mTjKFubavs",
            "imageUrl": "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/N26TyhPhSRI",
        "imageUrl": "https://i.ytimg.com/vi/N26TyhPhSRI/mqdefault.jpg"
      }
    ]
  },
  "dia2": {
    "name": "Posterior IN-OUT",
    "exercises": [
      {
        "order": 1,
        "name": "Jalón al Pecho Supino en Polea",
        "sets": 3,
        "reps": "8",
        "rest": "90s",
        "notes": "La carga estimada por la app no es obligatoria. Prioriza técnica y un recorrido sin pinchazos; no subas por una sugerencia automática.",
        "videoUrl": "https://youtu.be/rimdRzyIJkA",
        "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Peso Muerto Rumano con Barra",
        "sets": 3,
        "reps": "8",
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
            "name": "Remo Renegade Alterno con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "16",
            "rest": "90s",
            "videoUrl": "https://www.youtube.com/watch?v=FjwFzYXSK70",
            "imageUrl": "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg",
            "notes": "Mantén la cadera sin que se mueva ni rote"
          }
        ],
        "notes": "",
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
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/TaTjLum-_qI",
        "imageUrl": "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Circuito IN-OUT. ",
        "isSuperset": true,
        "circuitDetails": {
          "totalRounds": 4,
          "restBetweenExercisesSeconds": 30,
          "restBetweenRoundsSeconds": 30
        },
        "items": [
          {
            "name": "Snatch + Thruster Unilat Alterno con Mancuerna",
            "subOrder": 1,
            "sets": 1,
            "reps": "30s",
            "isCircuitItem": true,
            "notes": "Mancuerna de 10-12kg.",
            "videoUrl": "https://www.youtube.com/shorts/jNbG4xt8zCs",
            "imageUrl": "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
          },
          {
            "name": "Lateral Climbers",
            "subOrder": 2,
            "sets": 1,
            "reps": "30s",
            "isCircuitItem": true,
            "videoUrl": "https://www.youtube.com/shorts/IKuy2laTdGY",
            "imageUrl": "https://i.ytimg.com/vi/IKuy2laTdGY/mqdefault.jpg"
          }
        ],
        "notes": "Mancuerna de 10-12kg.",
        "videoUrl": "https://www.youtube.com/shorts/jNbG4xt8zCs",
        "imageUrl": "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
      }
    ]
  },
  "dia3": {
    "name": "Fullbody IN-OUT",
    "exercises": [
      {
        "order": 1,
        "name": "Curl con Barra Z",
        "sets": 3,
        "reps": "8",
        "rest": "90s",
        "notes": "La carga estimada por la app no es obligatoria. Prioriza técnica y un recorrido sin pinchazos; no subas por una sugerencia automática.",
        "videoUrl": "https://youtu.be/4gYLTjNaTmw",
        "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Press Cerrado con Barra",
        "sets": 3,
        "reps": "8",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtu.be/_062fQmtry8",
        "imageUrl": "https://i.ytimg.com/vi/_062fQmtry8/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Sentadilla Trasera en Multipower",
        "sets": 3,
        "reps": "8",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtu.be/la-dqygoIuk",
        "imageUrl": "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
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
        "notes": "",
        "videoUrl": "https://youtu.be/fcFsPoJY9lg",
        "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Circuito IN-OUT. ",
        "isSuperset": true,
        "circuitDetails": {
          "totalRounds": 4,
          "restBetweenExercisesSeconds": 30,
          "restBetweenRoundsSeconds": 30
        },
        "items": [
          {
            "name": "Zancadas Caminando con Mancuernas/KTB",
            "subOrder": 1,
            "sets": 1,
            "reps": "30s",
            "isCircuitItem": true,
            "notes": "Utiliza mancuernas de 8-10kg para ambos ejercicios.",
            "videoUrl": "https://youtu.be/7tRy9X0ibnk",
            "imageUrl": "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
          },
          {
            "name": "Burpee sin Flexión",
            "subOrder": 2,
            "sets": 1,
            "reps": "30s",
            "isCircuitItem": true,
            "videoUrl": "https://youtu.be/_liq4fAscDU",
            "imageUrl": "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
          }
        ],
        "notes": "Utiliza mancuernas de 8-10kg para ambos ejercicios.",
        "videoUrl": "https://youtu.be/7tRy9X0ibnk",
        "imageUrl": "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
      }
    ]
  },
  "dia4": {
  "name": "EXTRA · Peso corporal A · 30 min",
  "exercises": [
    {
      "order": 1,
      "name": "Calentamiento · 2 vueltas",
      "isSuperset": true,
      "isWarmup": true,
      "circuitDetails": {
        "totalRounds": 2,
        "restBetweenExercisesSeconds": 10,
        "restBetweenRoundsSeconds": 20
      },
      "items": [
        {
          "name": "Movilidad - Activación de Cadera",
          "subOrder": 1,
          "sets": 1,
          "reps": "30s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/ltzWjXiHXao",
          "imageUrl": "https://i.ytimg.com/vi/ltzWjXiHXao/mqdefault.jpg",
          "notes": "Controlar que los pies no se desplacen del sitio."
        },
        {
          "name": "Movilidad - Cintura Escapular",
          "subOrder": 2,
          "sets": 1,
          "reps": "30s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/qFt3RmTDmXI",
          "imageUrl": "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg",
          "notes": "Estabilizando el tronco con mucho control motor."
        },
        {
          "name": "Movilidad - Rodilla y Tobillo",
          "subOrder": 3,
          "sets": 1,
          "reps": "30s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/wdOGeCaNKS8",
          "imageUrl": "https://i.ytimg.com/vi/wdOGeCaNKS8/mqdefault.jpg",
          "notes": "Buscar ROM."
        }
      ],
      "notes": "2 vueltas: 30 s por ejercicio, 10 s entre ejercicios y 20 s entre vueltas. Movimiento suave y controlado. Sesión extra opcional para días sin gimnasio; no obliga a entrenar cinco días. Intensidad moderada y sin dolor. Al terminar los dos circuitos, camina suave y recupera la respiración 120 s. Duración estimada: 29-31 min.",
      "videoUrl": "https://youtu.be/ltzWjXiHXao",
      "imageUrl": "https://i.ytimg.com/vi/ltzWjXiHXao/mqdefault.jpg"
    },
    {
      "order": 2,
      "name": "Circuito A · 3 vueltas",
      "isSuperset": true,
      "circuitDetails": {
        "totalRounds": 3,
        "restBetweenExercisesSeconds": 10,
        "restBetweenRoundsSeconds": 45
      },
      "items": [
        {
          "name": "Sentadilla con Peso Corporal",
          "subOrder": 1,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/NWes6fd1Sxs",
          "imageUrl": "https://i.ytimg.com/vi/NWes6fd1Sxs/mqdefault.jpg",
          "notes": ""
        },
        {
          "name": "Flexiones con Peso Corporal",
          "subOrder": 2,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://www.youtube.com/shorts/jqnnetMI-4s",
          "imageUrl": "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg",
          "notes": "Alternativa disponible: flexiones con rodillas."
        },
        {
          "name": "Cuerpo Libre - Glute Bridge - Normal",
          "subOrder": 3,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/D04hX-R8LsA",
          "imageUrl": "https://i.ytimg.com/vi/D04hX-R8LsA/mqdefault.jpg",
          "notes": ""
        },
        {
          "name": "Bird Dog",
          "subOrder": 4,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/KizkN2buzMw",
          "imageUrl": "https://i.ytimg.com/vi/KizkN2buzMw/mqdefault.jpg",
          "notes": "Alterna lados sin girar la cadera."
        }
      ],
      "notes": "3 vueltas: 40 s de trabajo, 10 s entre ejercicios y 45 s entre vueltas. Tras el último ejercicio se aplica solo el descanso entre vueltas. Deja margen, no busques el fallo; puedes parar dentro del intervalo para conservar la técnica. Sin saltos y recorrido sin molestias. Descansa 60 s antes del segundo circuito.",
      "videoUrl": "https://youtu.be/NWes6fd1Sxs",
      "imageUrl": "https://i.ytimg.com/vi/NWes6fd1Sxs/mqdefault.jpg"
    },
    {
      "order": 3,
      "name": "Circuito B · 3 vueltas",
      "isSuperset": true,
      "circuitDetails": {
        "totalRounds": 3,
        "restBetweenExercisesSeconds": 10,
        "restBetweenRoundsSeconds": 45
      },
      "items": [
        {
          "name": "Sentadilla Sumo con Peso Corporal",
          "subOrder": 1,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/gJRjDiTSPYk",
          "imageUrl": "https://i.ytimg.com/vi/gJRjDiTSPYk/mqdefault.jpg",
          "notes": ""
        },
        {
          "name": "Shoulder Taps",
          "subOrder": 2,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://www.youtube.com/shorts/viyHk_K7I48",
          "imageUrl": "https://i.ytimg.com/vi/viyHk_K7I48/mqdefault.jpg",
          "notes": "Alterna las manos lentamente y evita rotar el tronco."
        },
        {
          "name": "Dead Bug",
          "subOrder": 3,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/0CteMtiMChQ",
          "imageUrl": "https://i.ytimg.com/vi/0CteMtiMChQ/mqdefault.jpg",
          "notes": ""
        },
        {
          "name": "Mountain Climber",
          "subOrder": 4,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/GZWmYzClS3s",
          "imageUrl": "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg",
          "notes": "Apoya cada pie sin salto; ritmo controlado."
        }
      ],
      "notes": "3 vueltas: 40 s de trabajo, 10 s entre ejercicios y 45 s entre vueltas. Tras el último ejercicio se aplica solo el descanso entre vueltas. Deja margen, no busques el fallo; puedes parar dentro del intervalo para conservar la técnica. Sin saltos y recorrido sin molestias.",
      "videoUrl": "https://youtu.be/gJRjDiTSPYk",
      "imageUrl": "https://i.ytimg.com/vi/gJRjDiTSPYk/mqdefault.jpg"
    }
  ]
},
  "dia5": {
  "name": "EXTRA · Peso corporal B · 30 min",
  "exercises": [
    {
      "order": 1,
      "name": "Calentamiento · 2 vueltas",
      "isSuperset": true,
      "isWarmup": true,
      "circuitDetails": {
        "totalRounds": 2,
        "restBetweenExercisesSeconds": 10,
        "restBetweenRoundsSeconds": 20
      },
      "items": [
        {
          "name": "Movilidad - Cintura Pélvica",
          "subOrder": 1,
          "sets": 1,
          "reps": "30s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/zoEdWDF5EiA",
          "imageUrl": "https://i.ytimg.com/vi/zoEdWDF5EiA/mqdefault.jpg",
          "notes": "Buscar control motor."
        },
        {
          "name": "Movilidad - Muñecas",
          "subOrder": 2,
          "sets": 1,
          "reps": "30s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/LchMtqRxkUw",
          "imageUrl": "https://i.ytimg.com/vi/LchMtqRxkUw/mqdefault.jpg",
          "notes": "Cuidado con los apoyos."
        },
        {
          "name": "Movilidad - Activación de Escápulas",
          "subOrder": 3,
          "sets": 1,
          "reps": "30s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/6Kj_rg_7tYQ",
          "imageUrl": "https://i.ytimg.com/vi/6Kj_rg_7tYQ/mqdefault.jpg",
          "notes": "Buscar control motor."
        }
      ],
      "notes": "2 vueltas: 30 s por ejercicio, 10 s entre ejercicios y 20 s entre vueltas. Movimiento suave y controlado. Sesión extra opcional para días sin gimnasio; no obliga a entrenar cinco días. Intensidad moderada y sin dolor. Al terminar los dos circuitos, camina suave y recupera la respiración 120 s. Duración estimada: 29-31 min.",
      "videoUrl": "https://youtu.be/zoEdWDF5EiA",
      "imageUrl": "https://i.ytimg.com/vi/zoEdWDF5EiA/mqdefault.jpg"
    },
    {
      "order": 2,
      "name": "Circuito A · 3 vueltas",
      "isSuperset": true,
      "circuitDetails": {
        "totalRounds": 3,
        "restBetweenExercisesSeconds": 10,
        "restBetweenRoundsSeconds": 45
      },
      "items": [
        {
          "name": "Split con Peso Corporal",
          "subOrder": 1,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/BvEvluBs5ZY",
          "imageUrl": "https://i.ytimg.com/vi/BvEvluBs5ZY/mqdefault.jpg",
          "notes": "Alterna los lados de manera controlada. Acorta el recorrido si lo necesitas."
        },
        {
          "name": "Flexiones Agarre Estrecho de Rodillas",
          "subOrder": 2,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/xlYUV9xY-lg",
          "imageUrl": "https://i.ytimg.com/vi/xlYUV9xY-lg/mqdefault.jpg",
          "notes": ""
        },
        {
          "name": "Abducción de Glúteo Unilat en el Suelo",
          "subOrder": 3,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
          "imageUrl": "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg",
          "notes": "Cambia de lado al llegar a 20 segundos."
        },
        {
          "name": "Plancha - Lateral de Rodillas",
          "subOrder": 4,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/pIf682Ral3A",
          "imageUrl": "https://i.ytimg.com/vi/pIf682Ral3A/mqdefault.jpg",
          "notes": "Cambia de lado al llegar a 20 segundos. Puedes hacer pausas breves dentro del intervalo."
        }
      ],
      "notes": "3 vueltas: 40 s de trabajo, 10 s entre ejercicios y 45 s entre vueltas. Tras el último ejercicio se aplica solo el descanso entre vueltas. Deja margen, no busques el fallo; puedes parar dentro del intervalo para conservar la técnica. Sin saltos y recorrido sin molestias. Descansa 60 s antes del segundo circuito.",
      "videoUrl": "https://youtu.be/BvEvluBs5ZY",
      "imageUrl": "https://i.ytimg.com/vi/BvEvluBs5ZY/mqdefault.jpg"
    },
    {
      "order": 3,
      "name": "Circuito B · 3 vueltas",
      "isSuperset": true,
      "circuitDetails": {
        "totalRounds": 3,
        "restBetweenExercisesSeconds": 10,
        "restBetweenRoundsSeconds": 45
      },
      "items": [
        {
          "name": "Sentadilla Lateral",
          "subOrder": 1,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/RkmdE5WBOy4",
          "imageUrl": "https://i.ytimg.com/vi/RkmdE5WBOy4/mqdefault.jpg",
          "notes": ""
        },
        {
          "name": "Cuerpo Libre - Glute Bridge - Frog Pump",
          "subOrder": 2,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/7F_EW3QM_Zo",
          "imageUrl": "https://i.ytimg.com/vi/7F_EW3QM_Zo/mqdefault.jpg",
          "notes": ""
        },
        {
          "name": "Crunch - Modificado McGuill",
          "subOrder": 3,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://youtu.be/-SCPkGTv6Cg",
          "imageUrl": "https://i.ytimg.com/vi/-SCPkGTv6Cg/mqdefault.jpg",
          "notes": ""
        },
        {
          "name": "Shoulder Tap (Hold)",
          "subOrder": 4,
          "sets": 1,
          "reps": "40s",
          "isCircuitItem": true,
          "videoUrl": "https://www.youtube.com/shorts/XbpPZNgcvxE",
          "imageUrl": "https://i.ytimg.com/vi/XbpPZNgcvxE/mqdefault.jpg",
          "notes": "Alterna los apoyos a mitad del intervalo; conserva el tronco estable."
        }
      ],
      "notes": "3 vueltas: 40 s de trabajo, 10 s entre ejercicios y 45 s entre vueltas. Tras el último ejercicio se aplica solo el descanso entre vueltas. Deja margen, no busques el fallo; puedes parar dentro del intervalo para conservar la técnica. Sin saltos y recorrido sin molestias.",
      "videoUrl": "https://youtu.be/RkmdE5WBOy4",
      "imageUrl": "https://i.ytimg.com/vi/RkmdE5WBOy4/mqdefault.jpg"
    }
  ]
}
};

const exerciseAlternatives = {
  "Flexiones con Peso Corporal": [{"name":"Flexiones con Rodillas","videoUrl":"https://www.youtube.com/shorts/bmKPWM_b85Y","imageUrl":"https://i.ytimg.com/vi/bmKPWM_b85Y/mqdefault.jpg","notes":""}],
  "Press Banca Inclinado en Multipower": [
    {
      "name": "Press Inclinado con Mancuernas",
      "videoUrl": "https://youtu.be/ZE4M73kXB5A",
      "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg",
      "notes": ""
    }
  ],
  "Press Militar con Barra de Pie": [
    {
      "name": "Press Militar Sentado con Mancuernas",
      "videoUrl": "https://www.youtube.com/watch?v=_IMpMCr87Cg",
      "imageUrl": "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg",
      "notes": ""
    }
  ],
  "Press Banca con Barra": [
    {
      "name": "Press Banca en Multipower",
      "videoUrl": "https://youtu.be/w-5ovE5O5iU",
      "imageUrl": "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg",
      "notes": ""
    }
  ],
  "Jalón al Pecho Supino en Polea": [
    {
      "name": "Jalón al Pecho en Polea",
      "videoUrl": "https://youtu.be/GYIhmy1P4vY",
      "imageUrl": "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg",
      "notes": ""
    }
  ],
  "Peso Muerto Rumano con Barra": [
    {
      "name": "Peso Muerto Rumano con Mancuernas/KTB",
      "videoUrl": "https://www.youtube.com/shorts/SMll4DOYvEs",
      "imageUrl": "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg",
      "notes": "Espalda recta en todo momento"
    }
  ],
  "Sentadilla Trasera en Multipower": [
    {
      "name": "Sentadilla Trasera con Barra",
      "videoUrl": "https://youtu.be/FK5XU_gaxAE",
      "imageUrl": "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg",
      "notes": ""
    }
  ]
};

