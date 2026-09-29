// Titulo: P9_3D_FULLBODY_2
// Ajuste individual 29/09/2026: entrena en casa con poleas, barra y banco reclinable; tres días completos con trabajo de pierna gradual, sin día aislado de sentadillas. No forzar dolor de rodilla; avisar si aparece o empeora.

const workoutData = {
  "dia1": {
    "name": "Fullbody 1 (PUSH)",
    "exercises": [
      {
        "order": 1,
        "name": "Press Banca Inclinado con Barra",
        "sets": 4,
        "reps": "8, 8, 8, 15",
        "rest": "120s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/watch?v=4tPP-4K5kMQ",
        "imageUrl": "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Peso Muerto Rumano con Barra",
        "sets": 2,
        "reps": "10-12",
        "rest": "75s",
        "notes": "Carga moderada, recorrido controlado y sin dolor de rodilla. Si molesta, detén el ejercicio y avisa.",
        "videoUrl": "https://youtu.be/R7FKam5GyNw",
        "imageUrl": "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Remo Diagonal Unilat en Polea Alta",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/ikKQhcynKmg",
        "imageUrl": "https://i.ytimg.com/vi/ikKQhcynKmg/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Press Militar con Barra de Pie",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/watch?v=idnuMZx6mS0",
        "imageUrl": "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Fondos de Tríceps con Pies Elevados",
        "isSuperset": true,
        "items": [
          {
            "name": "Fondos de Tríceps con Pies Elevados",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://youtube.com/shorts/FBttBh-aiVs",
            "imageUrl": "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
          },
          {
            "name": "Extensión de Tríceps en Polea con Cuerda",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "60s",
            "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
            "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/FBttBh-aiVs",
        "imageUrl": "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
      }
    ]
  },
  "dia2": {
    "name": "Fullbody 2 (PULL) ",
    "exercises": [
      {
        "order": 1,
        "name": "Jalón al Pecho Unilateral con Polea",
        "sets": 4,
        "reps": "8, 8, 8, 15",
        "rest": "120s",
        "notes": "Lastra con peso si puedes",
        "videoUrl": "https://youtu.be/fxMPLrCpzeA",
        "imageUrl": "https://i.ytimg.com/vi/fxMPLrCpzeA/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Press Banca con Barra",
        "isSuperset": true,
        "items": [
          {
            "name": "Press Banca con Barra",
            "subOrder": 1,
            "sets": 3,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/PKpsrFS2uac",
            "imageUrl": "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/PKpsrFS2uac",
        "imageUrl": "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Hip Thrust con Barra (ExPLICADO)",
        "sets": 2,
        "reps": "10-12",
        "rest": "75s",
        "notes": "Carga moderada y recorrido cómodo. No fuerces la rodilla; si molesta, detén el ejercicio y avisa.",
        "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
        "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Remo Unilat en Polea Media",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/JtKX3g9TYco",
        "imageUrl": "https://i.ytimg.com/vi/JtKX3g9TYco/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Curl con Barra Recta",
        "isSuperset": true,
        "items": [
          {
            "name": "Curl con Barra Recta",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/0TjnWWqQfUw",
            "imageUrl": "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg"
          },
          {
            "name": "Elevaciones Laterales en Polea",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "60s",
            "videoUrl": "https://youtu.be/UxII1sPTa9U",
            "imageUrl": "https://i.ytimg.com/vi/UxII1sPTa9U/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/0TjnWWqQfUw",
        "imageUrl": "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg"
      }
    ]
  },
  "dia3": {
    "name": "Torso + pierna progresiva",
    "exercises": [
      {
        "order": 1,
        "name": "Flexiones con Peso Corporal",
        "sets": 4,
        "reps": "8-10",
        "rest": "120s",
        "notes": "Deja 2 repeticiones en reserva; ajusta la inclinación del apoyo en el banco si necesitas reducir la dificultad.",
        "videoUrl": "https://www.youtube.com/shorts/jqnnetMI-4s",
        "imageUrl": "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Remo Gironda en Polea",
        "sets": 3,
        "reps": "10-12",
        "rest": "90s",
        "notes": "Pecho apoyado y movimiento controlado.",
        "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
        "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
      },
      {
        "name": "Jalón al Pecho en Polea",
        "sets": 3,
        "reps": "10-12",
        "rest": "75s",
        "notes": "Controla la bajada y deja 2 repeticiones en reserva.",
        "videoUrl": "https://youtu.be/GYIhmy1P4vY",
        "imageUrl": "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg",
        "order": 3
      },
      {
        "order": 4,
        "name": "Press Militar con Barra de Pie",
        "sets": 2,
        "reps": "10",
        "rest": "90s",
        "notes": "Carga ligera y técnica controlada; sin llegar al fallo.",
        "videoUrl": "https://www.youtube.com/watch?v=idnuMZx6mS0",
        "imageUrl": "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Sentadilla con Peso Corporal",
        "sets": 2,
        "reps": "8-10",
        "rest": "90s",
        "notes": "Acércate a un banco como referencia, con recorrido cómodo y sin llegar al fallo. Si la rodilla duele o se hincha, detén el ejercicio y avisa para ajustarlo.",
        "videoUrl": "https://youtu.be/NWes6fd1Sxs",
        "imageUrl": "https://i.ytimg.com/vi/NWes6fd1Sxs/mqdefault.jpg"
      },
      {
        "name": "Curl con Barra Recta",
        "sets": 3,
        "reps": "10-12",
        "rest": "75s",
        "notes": "Sin balanceo; deja 2 repeticiones en reserva.",
        "videoUrl": "https://youtu.be/0TjnWWqQfUw",
        "imageUrl": "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg",
        "order": 6
      },
      {
        "order": 7,
        "name": "Crunch - Normal",
        "sets": 3,
        "reps": "15-20",
        "rest": "60s",
        "notes": "Mantén la lumbar pegada al suelo.",
        "videoUrl": "https://youtu.be/wNqGgCjBVaE",
        "imageUrl": "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg"
      }
    ]
  }
};

const exerciseAlternatives = {
  "Jalón al Pecho Unilateral con Polea": [
    {
      "name": "Jalón al Pecho en Polea",
      "videoUrl": "https://youtu.be/GYIhmy1P4vY",
      "imageUrl": "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
    }
  ]
};
