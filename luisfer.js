// Titulo: P9_3D_FULLBODY_2
// Ajuste individual 29/09/2026: tres días completos con trabajo de pierna gradual, sin día aislado de sentadillas. No forzar dolor de rodilla; avisar si aparece o empeora.

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
        "name": "Peso Muerto Rumano con Mancuernas/KTB",
        "sets": 2,
        "reps": "10-12",
        "rest": "75s",
        "notes": "Carga moderada, recorrido controlado y sin dolor de rodilla. Si molesta, detén el ejercicio y avisa.",
        "videoUrl": "https://www.youtube.com/shorts/SMll4DOYvEs",
        "imageUrl": "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
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
        "name": "Press Militar con Mancuernas Agarre Neutro",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/watch?v=C6NaHhnQavs",
        "imageUrl": "https://i.ytimg.com/vi/C6NaHhnQavs/mqdefault.jpg"
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
            "name": "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "60s",
            "videoUrl": "https://youtu.be/1MgU2PO4_rI",
            "imageUrl": "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
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
        "name": "Press Banca con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Press Banca con Mancuernas",
            "subOrder": 1,
            "sets": 3,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/hXCJC2Apcdg",
            "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/hXCJC2Apcdg",
        "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
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
        "name": "Remo Unilat con Mancuerna/KTB (Explicado)",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
        "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
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
            "name": "Elevaciones Laterales con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "60s",
            "videoUrl": "https://youtu.be/rhmW_fhB4cs",
            "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
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
        "name": "Press Banca con Mancuernas",
        "sets": 4,
        "reps": "8-10",
        "rest": "120s",
        "notes": "Deja 2 repeticiones en reserva; progresa solo cuando completes el rango con buena técnica.",
        "videoUrl": "https://youtu.be/hXCJC2Apcdg",
        "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Remo Seal con Mancuernas",
        "sets": 3,
        "reps": "10-12",
        "rest": "90s",
        "notes": "Pecho apoyado y movimiento controlado.",
        "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
        "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Press Militar Sentado con Mancuernas (ExPLICADO)",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "notes": "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
        "videoUrl": "https://www.youtube.com/shorts/2ZkYyh4ic0o",
        "imageUrl": "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Sentadilla con Peso Corporal",
        "sets": 2,
        "reps": "8-10",
        "rest": "90s",
        "notes": "Acércate a un banco como referencia, con recorrido cómodo y sin llegar al fallo. Si la rodilla duele o se hincha, detén el ejercicio y avisa para ajustarlo.",
        "videoUrl": "https://youtu.be/NWes6fd1Sxs",
        "imageUrl": "https://i.ytimg.com/vi/NWes6fd1Sxs/mqdefault.jpg"
      },
      {
        "order": 5,
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
  "Press Banca Inclinado con Barra": [
    {
      "name": "Press Inclinado con Mancuernas",
      "videoUrl": "https://youtu.be/ZE4M73kXB5A",
      "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
    }
  ],
  "Jalón al Pecho Unilateral con Polea": [
    {
      "name": "Jalón al Pecho en Polea",
      "videoUrl": "https://youtu.be/GYIhmy1P4vY",
      "imageUrl": "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
    }
  ]
};
