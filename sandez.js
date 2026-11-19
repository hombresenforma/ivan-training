// Titulo: P6_3D_ANTPOSTFB_RESTPAUSE_2
// Notas: AntPost:
// Notas: - Ejercicio 1 añadimos 1 serie más con REST-PAUSE.
// Notas: - Ejercicio 2 añadimos 1 serie más y cambiamos todo a DROP-SET.
// Notas: 
// Notas: Fullbody:
// Notas: - EMOMs 1 y 2: Añadimos 1 vuelta y bajamos tiempo de 120 a 90s
// Notas: Adaptación Santi: poleas agrupadas sin superseries entre plantas. Día 1: jalón + crunch en polea; laterales separadas en zona libre. Día 2: fondos de banco separados y tríceps + Pallof en polea. Día 3: hollow 60s. Cuarta serie del remo marcada DROPSET según descripción V2.

const workoutData = {
  "dia1": {
    "name": "Posterior",
    "exercises": [
      {
        "order": 1,
        "name": "Prensa Inclinada en Máquina de Discos",
        "setTechniques": {
          "1": "REST-PAUSE",
          "2": "REST-PAUSE",
          "3": "REST-PAUSE",
          "4": "REST-PAUSE"
        },
        "sets": 4,
        "reps": "8",
        "rest": "120s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
        "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Remo Gironda en Polea",
        "setTechniques": {
          "1": "DROPSET",
          "2": "DROPSET",
          "3": "DROPSET",
          "4": "DROPSET"
        },
        "sets": 4,
        "reps": "8",
        "rest": "120s",
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
        "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
      },
      {
        "name": "Jalón al Pecho Supino en Polea",
        "isSuperset": true,
        "items": [
          {
            "name": "Jalón al Pecho Supino en Polea",
            "sets": 3,
            "reps": "8",
            "rest": "0s",
            "notes": "",
            "videoUrl": "https://youtu.be/rimdRzyIJkA",
            "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg",
            "subOrder": 1,
            "isSupersetStart": true
          },
          {
            "name": "Crunch en Polea Alta",
            "sets": 3,
            "reps": "15",
            "rest": "90s",
            "notes": "",
            "videoUrl": "https://youtube.com/shorts/H9QSO6XBRkA",
            "imageUrl": "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg",
            "subOrder": 2
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/rimdRzyIJkA",
        "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg",
        "order": 3
      },
      {
        "name": "Elevaciones Laterales con Mancuernas",
        "sets": 3,
        "reps": "12",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://youtu.be/rhmW_fhB4cs",
        "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
        "order": 4
      },
      {
        "order": 5,
        "name": "Hip Thrust con Barra (ExPLICADO)",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "Agrupa este ejercicio y el trabajo con mancuernas en la zona de banco/peso libre. No alternes con máquinas de otra planta.",
        "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
        "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Dominadas Australianas en TRX",
        "isSuperset": true,
        "items": [
          {
            "name": "Dominadas Australianas en TRX",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/shorts/f2-aezhuOoQ",
            "imageUrl": "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
          },
          {
            "name": "Curl Martillo con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "90s",
            "videoUrl": "https://youtu.be/fcFsPoJY9lg",
            "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/f2-aezhuOoQ",
        "imageUrl": "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
      }
    ]
  },
  "dia2": {
    "name": "Anterior",
    "exercises": [
      {
        "order": 1,
        "name": "Press Banca en Multipower",
        "setTechniques": {
          "1": "REST-PAUSE",
          "2": "REST-PAUSE",
          "3": "REST-PAUSE",
          "4": "REST-PAUSE"
        },
        "sets": 4,
        "reps": "8",
        "rest": "120s",
        "notes": "",
        "videoUrl": "https://youtu.be/w-5ovE5O5iU",
        "imageUrl": "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Press Militar Sentado con Mancuernas (ExPLICADO)",
        "setTechniques": {
          "1": "DROPSET",
          "2": "DROPSET",
          "3": "DROPSET",
          "4": "DROPSET"
        },
        "sets": 4,
        "reps": "8",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/2ZkYyh4ic0o",
        "imageUrl": "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Flexiones Tempo 1:1",
        "sets": 3,
        "reps": "12",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/-9Md7Htla-o",
        "imageUrl": "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Zancada Trasera Alterna con Mancuernas/KTB",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/watch?v=Kzv73cEkTq4",
        "imageUrl": "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Press Militar Unilateral en Landmine",
        "sets": 3,
        "reps": "12",
        "rest": "60s",
        "notes": "",
        "videoUrl": "https://www.youtube.com/watch?v=p2OLvWOo9l0",
        "imageUrl": "https://i.ytimg.com/vi/p2OLvWOo9l0/mqdefault.jpg"
      },
      {
        "name": "Fondos de Tríceps con Pies Elevados",
        "sets": 3,
        "reps": "15",
        "rest": "60s",
        "videoUrl": "https://youtube.com/shorts/FBttBh-aiVs",
        "imageUrl": "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg",
        "order": 6
      },
      {
        "name": "Extensión de Tríceps Unilat en Polea",
        "isSuperset": true,
        "items": [
          {
            "name": "Extensión de Tríceps Unilat en Polea",
            "sets": 3,
            "reps": "10",
            "rest": "0s",
            "notes": "",
            "videoUrl": "https://youtube.com/shorts/yH6WAUNKO6c",
            "imageUrl": "https://i.ytimg.com/vi/yH6WAUNKO6c/mqdefault.jpg",
            "subOrder": 1,
            "isSupersetStart": true
          },
          {
            "name": "Press Pallof Excéntrico Unilat en Polea",
            "sets": 3,
            "reps": "10",
            "rest": "90s",
            "notes": "",
            "videoUrl": "https://youtube.com/shorts/r89c9qr-CB0",
            "imageUrl": "https://i.ytimg.com/vi/r89c9qr-CB0/mqdefault.jpg",
            "subOrder": 2
          }
        ],
        "notes": "",
        "videoUrl": "https://youtube.com/shorts/yH6WAUNKO6c",
        "imageUrl": "https://i.ytimg.com/vi/yH6WAUNKO6c/mqdefault.jpg",
        "order": 7
      }
    ]
  },
  "dia3": {
    "name": "Fullbody",
    "exercises": [
      {
        "order": 1,
        "name": "EMOM",
        "isSuperset": true,
        "isEMOM": true,
        "emomDetails": {
          "totalIntervals": 4,
          "workIntervalSeconds": 90
        },
        "items": [
          {
            "name": "Dominadas Supinas",
            "subOrder": 1,
            "sets": 1,
            "reps": "6",
            "isEMOMItem": true,
            "videoUrl": "https://www.youtube.com/shorts/0TwqeC7fH8Y",
            "imageUrl": "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
          },
          {
            "name": "Fondos en Paralelas Lastrados",
            "subOrder": 2,
            "sets": 1,
            "reps": "6",
            "isEMOMItem": true,
            "videoUrl": "https://www.youtube.com/shorts/xsnhvnyl70I",
            "imageUrl": "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/0TwqeC7fH8Y",
        "imageUrl": "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "EMOM",
        "isSuperset": true,
        "isEMOM": true,
        "emomDetails": {
          "totalIntervals": 4,
          "workIntervalSeconds": 90
        },
        "items": [
          {
            "name": "Sentadilla Búlgara con Mancuerna o KTB",
            "subOrder": 1,
            "sets": 1,
            "reps": "10",
            "isEMOMItem": true,
            "videoUrl": "https://youtu.be/kA6bHiDdTO4",
            "imageUrl": "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
          },
          {
            "name": "Kettlebell - Soft Swing",
            "subOrder": 2,
            "sets": 1,
            "reps": "20",
            "isEMOMItem": true,
            "videoUrl": "https://youtube.com/shorts/-i4ReGBb26g",
            "imageUrl": "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://youtu.be/kA6bHiDdTO4",
        "imageUrl": "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "EMOM",
        "isSuperset": true,
        "isEMOM": true,
        "emomDetails": {
          "totalIntervals": 3,
          "workIntervalSeconds": 90
        },
        "items": [
          {
            "name": "Curl Araña con Barra Z",
            "subOrder": 1,
            "sets": 1,
            "reps": "10",
            "isEMOMItem": true,
            "videoUrl": "https://www.youtube.com/shorts/ZGa2E8bi9Eg",
            "imageUrl": "https://i.ytimg.com/vi/ZGa2E8bi9Eg/mqdefault.jpg"
          },
          {
            "name": "Press Francés con Barra Z en Banco Inclinado",
            "subOrder": 2,
            "sets": 1,
            "reps": "10",
            "isEMOMItem": true,
            "videoUrl": "https://youtu.be/hFk6xzt1DWM",
            "imageUrl": "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
          }
        ],
        "notes": "",
        "videoUrl": "https://www.youtube.com/shorts/ZGa2E8bi9Eg",
        "imageUrl": "https://i.ytimg.com/vi/ZGa2E8bi9Eg/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "EMOM",
        "isSuperset": true,
        "isEMOM": true,
        "emomDetails": {
          "totalIntervals": 4,
          "workIntervalSeconds": 60
        },
        "items": [
          {
            "name": "Zancadas Caminando con Mancuernas/KTB",
            "subOrder": 1,
            "sets": 1,
            "reps": "16",
            "isEMOMItem": true,
            "notes": "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
            "videoUrl": "https://youtu.be/7tRy9X0ibnk",
            "imageUrl": "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
          },
          {
            "name": "Hollow Abdominal Encogido",
            "subOrder": 2,
            "sets": 1,
            "reps": "60s",
            "isEMOMItem": true,
            "videoUrl": "https://www.youtube.com/shorts/DUYZEFKjYxs",
            "imageUrl": "https://i.ytimg.com/vi/DUYZEFKjYxs/mqdefault.jpg"
          }
        ],
        "notes": "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
        "videoUrl": "https://youtu.be/7tRy9X0ibnk",
        "imageUrl": "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
      }
    ]
  }
};

const exerciseAlternatives = {
  "Prensa Inclinada en Máquina de Discos": [
    {
      "name": "Sentadilla Anterior en Máquina Jaca",
      "videoUrl": "https://youtube.com/shorts/saLWdiUe5eE",
      "imageUrl": "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg",
      "notes": ""
    }
  ],
  "Remo Gironda en Polea": [
    {
      "name": "Remo Diagonal Unilat en Polea Alta",
      "notes": "",
      "videoUrl": "https://youtube.com/shorts/ikKQhcynKmg",
      "imageUrl": "https://i.ytimg.com/vi/ikKQhcynKmg/mqdefault.jpg"
    }
  ],
  "Press Banca en Multipower": [
    {
      "name": "Press Banca con Barra",
      "videoUrl": "https://youtu.be/PKpsrFS2uac",
      "imageUrl": "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg",
      "notes": ""
    }
  ]
};
