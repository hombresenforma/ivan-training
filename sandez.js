// Titulo: P5_3D_TPFB_2
// Notas: Primer ejercicio subimos reps y 1 ronda. Circuito final subimos 4 rondas. Último día primer ejercicio subimos reps. Superserie 3 plancha subimos 10 seg extra. Superserie 4 subimos ronda 4.
// Adaptación Santi: calentamientos con peso libre; ejercicios de banco agrupados; brazos con mancuernas; EMOM 4 vueltas / 8 intervalos; plancha lateral a ambos lados.

const workoutData = {
  "dia1": {
    "name": "Tren superior",
    "exercises": [
      {
        "order": 1,
        "name": "Remo Unilat con Mancuerna/KTB (Explicado)",
        "isSuperset": true,
        "items": [
          {
            "name": "Remo Unilat con Mancuerna/KTB (Explicado)",
            "subOrder": 1,
            "sets": 1,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
            "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg",
            "notes": ""
          },
          {
            "name": "Press Inclinado con Mancuernas",
            "subOrder": 2,
            "sets": 1,
            "reps": "15",
            "rest": "30s",
            "videoUrl": "https://youtu.be/ZE4M73kXB5A",
            "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg",
            "notes": ""
          }
        ],
        "notes": "Calentamiento con carga ligera, sin fatiga. Antes del básico realiza aproximaciones progresivas, sin contar como series efectivas.",
        "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
        "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg",
        "isWarmup": true
      },
      {
        "order": 2,
        "name": "Dominadas Supinas Asistidas en Máquina",
        "sets": 4,
        "reps": "12",
        "rest": "90s",
        "notes": "-Mantener retracción escapular, extensión completa de los codos",
        "videoUrl": "https://www.youtube.com/shorts/E9DT2pv7Rp0",
        "imageUrl": "https://i.ytimg.com/vi/E9DT2pv7Rp0/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Press Banca con Mancuernas",
        "sets": 3,
        "reps": "12",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://youtu.be/hXCJC2Apcdg",
        "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Press Militar Unilat de Pie con Mancuerna/KTB",
        "sets": 3,
        "reps": "12",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/vIK0qkXP_f0",
        "imageUrl": "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Remo Gironda en Polea",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
        "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Ejercicio por tiempo",
        "isSuperset": true,
        "circuitDetails": {
          "totalRounds": 4,
          "restBetweenExercisesSeconds": 0,
          "restBetweenRoundsSeconds": 60
        },
        "items": [
          {
            "name": "Flexiones + Mountain Climbers",
            "subOrder": 1,
            "sets": 1,
            "reps": "45s",
            "isCircuitItem": true,
            "videoUrl": "https://www.youtube.com/shorts/1wdJ5RSUCBE",
            "imageUrl": "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/1wdJ5RSUCBE",
        "imageUrl": "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
      },
      {
        "order": 7,
        "name": "EMOM",
        "isSuperset": true,
        "isEMOM": true,
        "emomDetails": {
          "totalIntervals": 8,
          "workIntervalSeconds": 60
        },
        "items": [
          {
            "name": "Curl Martillo Alterno Sentado con Mancuernas",
            "subOrder": 1,
            "sets": 1,
            "reps": "15",
            "isEMOMItem": true,
            "videoUrl": "https://www.youtube.com/shorts/1cRT5C0klJc",
            "imageUrl": "https://i.ytimg.com/vi/1cRT5C0klJc/mqdefault.jpg",
            "notes": ""
          },
          {
            "name": "Extensión Tríceps Trasnuca Unilateral con Mancuerna",
            "subOrder": 2,
            "sets": 1,
            "reps": "15",
            "isEMOMItem": true,
            "videoUrl": "https://youtu.be/jGTquNttoRU",
            "imageUrl": "https://i.ytimg.com/vi/jGTquNttoRU/mqdefault.jpg",
            "notes": ""
          }
        ],
        "notes": "4 vueltas; alterna los 2 ejercicios: 8 intervalos de 60s. Descansa el tiempo restante de cada minuto.",
        "videoUrl": "https://www.youtube.com/shorts/1cRT5C0klJc",
        "imageUrl": "https://i.ytimg.com/vi/1cRT5C0klJc/mqdefault.jpg"
      }
    ]
  },
  "dia2": {
    "name": "Tren inferior",
    "exercises": [
      {
        "order": 1,
        "name": "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
        "isSuperset": true,
        "items": [
          {
            "name": "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
            "subOrder": 1,
            "sets": 2,
            "reps": "15",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/shorts/tNu9bm3geqY",
            "imageUrl": "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg",
            "notes": ""
          },
          {
            "name": "Peso Muerto Rumano con Mancuernas/KTB",
            "subOrder": 2,
            "sets": 2,
            "reps": "15",
            "rest": "30s",
            "videoUrl": "https://www.youtube.com/shorts/SMll4DOYvEs",
            "imageUrl": "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg",
            "notes": ""
          }
        ],
        "notes": "Calentamiento con carga ligera, sin fatiga. Antes del básico realiza aproximaciones progresivas, sin contar como series efectivas.",
        "videoUrl": "https://www.youtube.com/shorts/tNu9bm3geqY",
        "imageUrl": "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg",
        "isWarmup": true
      },
      {
        "order": 2,
        "name": "Prensa Inclinada en Máquina de Discos",
        "sets": 4,
        "reps": "12",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
        "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Kettlebell - Swing con Sentadilla",
        "sets": 3,
        "reps": "12",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/MUJ2UiP5gjc",
        "imageUrl": "https://i.ytimg.com/vi/MUJ2UiP5gjc/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Zancadas Caminando con Mancuernas/KTB",
        "sets": 3,
        "reps": "20",
        "rest": "90s",
        "notes": "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
        "videoUrl": "https://youtu.be/7tRy9X0ibnk",
        "imageUrl": "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Curl Femoral Sentado en Máquina",
        "sets": 3,
        "reps": "12",
        "rest": "90s",
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
          "totalIntervals": 8,
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
        "notes": "4 vueltas; alterna los 2 ejercicios: 8 intervalos de 60s. Descansa el tiempo restante de cada minuto.",
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
        "name": "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
        "isSuperset": true,
        "items": [
          {
            "name": "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
            "subOrder": 1,
            "sets": 2,
            "reps": "5",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/shorts/NMlvYALcyBc",
            "imageUrl": "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg",
            "notes": ""
          },
          {
            "name": "Press Militar Unilat de Pie con Mancuerna/KTB",
            "subOrder": 2,
            "sets": 2,
            "reps": "10",
            "rest": "30s",
            "videoUrl": "https://www.youtube.com/shorts/vIK0qkXP_f0",
            "imageUrl": "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg",
            "notes": ""
          }
        ],
        "notes": "Calentamiento con carga ligera, sin fatiga. Antes del básico realiza aproximaciones progresivas, sin contar como series efectivas.",
        "videoUrl": "https://www.youtube.com/shorts/NMlvYALcyBc",
        "imageUrl": "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg",
        "isWarmup": true
      },
      {
        "order": 2,
        "name": "Devil Press + Thruster con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Devil Press + Thruster con Mancuernas",
            "subOrder": 1,
            "sets": 3,
            "reps": "8",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/shorts/njS9V-rVeTY",
            "imageUrl": "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
          },
          {
            "name": "Flexiones con Peso Corporal",
            "subOrder": 2,
            "sets": 3,
            "reps": "15",
            "notes": "En caso de no llegar a las repeticiones pautadas, se pueden hacer con rodilla",
            "rest": "90s",
            "videoUrl": "https://www.youtube.com/shorts/jqnnetMI-4s",
            "imageUrl": "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/njS9V-rVeTY",
        "imageUrl": "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Kettlebell - Soft Swing",
        "isSuperset": true,
        "items": [
          {
            "name": "Kettlebell - Soft Swing",
            "subOrder": 1,
            "sets": 3,
            "reps": "15",
            "isSupersetStart": true,
            "videoUrl": "https://youtube.com/shorts/-i4ReGBb26g",
            "imageUrl": "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
          },
          {
            "name": "Plancha - Lateral",
            "subOrder": 2,
            "sets": 3,
            "reps": "30s",
            "videoUrl": "https://youtu.be/IBlAMf7LYvI",
            "imageUrl": "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg",
            "notes": "Apoyo sobre el lado derecho."
          },
          {
            "name": "Plancha - Lateral",
            "subOrder": 3,
            "sets": 3,
            "reps": "30s",
            "rest": "90s",
            "videoUrl": "https://youtu.be/IBlAMf7LYvI",
            "imageUrl": "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg",
            "notes": "Apoyo sobre el lado izquierdo."
          }
        ],
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/-i4ReGBb26g",
        "imageUrl": "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Remo con Barra",
        "isSuperset": true,
        "items": [
          {
            "name": "Remo con Barra",
            "subOrder": 1,
            "sets": 3,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/MjnZ52mZgT0",
            "imageUrl": "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
          },
          {
            "name": "Curl Martillo Alterno Sentado con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "12",
            "notes": "En caso de no tener el banco cerca lo puedes hacer de pie",
            "rest": "90s",
            "videoUrl": "https://www.youtube.com/shorts/1cRT5C0klJc",
            "imageUrl": "https://i.ytimg.com/vi/1cRT5C0klJc/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/MjnZ52mZgT0",
        "imageUrl": "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Zancada Trasera Alterna con Mancuernas/KTB",
        "isSuperset": true,
        "items": [
          {
            "name": "Zancada Trasera Alterna con Mancuernas/KTB",
            "subOrder": 1,
            "sets": 4,
            "reps": "16",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/watch?v=Kzv73cEkTq4",
            "imageUrl": "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
          },
          {
            "name": "Plancha - Cambios de apoyo",
            "subOrder": 2,
            "sets": 4,
            "reps": "10",
            "rest": "90s",
            "videoUrl": "https://youtu.be/Yg74EfwLBQY",
            "imageUrl": "https://i.ytimg.com/vi/Yg74EfwLBQY/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://www.youtube.com/watch?v=Kzv73cEkTq4",
        "imageUrl": "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
      }
    ]
  }
};

const exerciseAlternatives = {
  "Dominadas Supinas Asistidas en Máquina": [
    {
      "name": "Jalón al Pecho Supino en Polea",
      "videoUrl": "https://youtu.be/rimdRzyIJkA",
      "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
    }
  ]
};
