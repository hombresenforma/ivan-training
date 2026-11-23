// Titulo: P22_4D_TORPIER_MIXTO_1
// Notas: Base de catálogo P22_4D_TORPIER_MIXTO_1. El catálogo no aporta descripción propia: el código distribuye 4 días de torso PUSH, torso PULL, pierna posterior completa y torso accesorios. Adaptación para gimnasio concurrido: superseries en una zona de mancuernas, una sola polea en el plan principal (jalón neutro), alternativas publicadas para todos los ejercicios individuales y 13 series efectivas de pierna en una sesión. Conserva series y objetivos del P22 (rangos convertidos al extremo superior). Sin dropsets ni fallo; RIR 3 mientras se concreta dolor de hombro/codo. Separar pierna del fútbol. Descansos de superseries 90 s. Duración estimada 45-60 min en torso y 40-50 min en pierna incluyendo aproximaciones.

const workoutData = {
  "dia1": {
    "name": "Torso Completo (PUSH)",
    "exercises": [
      {
        "order": 1,
        "name": "Movilidad - Muñecas",
        "isWarmup": true,
        "isSuperset": true,
        "items": [
          {
            "name": "Movilidad - Muñecas",
            "subOrder": 1,
            "sets": 2,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/LchMtqRxkUw",
            "imageUrl": "https://i.ytimg.com/vi/LchMtqRxkUw/mqdefault.jpg",
            "notes": "Calentamiento ligero sin fatiga. Cuidado con los apoyos.",
            "isWarmup": true
          },
          {
            "name": "Movilidad - Cintura Escapular",
            "subOrder": 2,
            "sets": 2,
            "reps": "10",
            "rest": "90s",
            "videoUrl": "https://youtu.be/qFt3RmTDmXI",
            "imageUrl": "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg",
            "notes": "Calentamiento ligero sin fatiga. Estabilizando el tronco con mucho control motor.",
            "isWarmup": true
          }
        ],
        "notes": "Completa los ejercicios con el mismo material y zona de mancuernas. No reserves estaciones distintas. Descansa 90 s al acabar cada vuelta.",
        "videoUrl": "https://youtu.be/LchMtqRxkUw",
        "imageUrl": "https://i.ytimg.com/vi/LchMtqRxkUw/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Press Banca en Máquina",
        "sets": 3,
        "reps": "6, 10, 10",
        "rest": "90s",
        "notes": "Ajusta el asiento para que las empuñaduras queden a la altura del pecho. Mantén la espalda apoyada y las muñecas alineadas; empuja y vuelve con control, sin rebotes. Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa.",
        "videoUrl": "https://www.youtube.com/watch?v=lw4uUkBl_HE",
        "imageUrl": "https://i.ytimg.com/vi/lw4uUkBl_HE/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Remo Seal con Mancuernas",
        "sets": 3,
        "reps": "8, 12, 12",
        "rest": "90s",
        "notes": "Trata de despegar el pecho al final del movimiento Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa.",
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
            "imageUrl": "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          },
          {
            "name": "Floor Press con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "90s",
            "videoUrl": "https://www.youtube.com/shorts/Iu02N3s7zgQ",
            "imageUrl": "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          }
        ],
        "notes": "Completa los ejercicios con el mismo material y zona de mancuernas. No reserves estaciones distintas. Descansa 90 s al acabar cada vuelta.",
        "videoUrl": "https://www.youtube.com/shorts/vIK0qkXP_f0",
        "imageUrl": "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
      },
      {
        "order": 5,
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
            "imageUrl": "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          },
          {
            "name": "Curl Martillo con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "90s",
            "videoUrl": "https://youtu.be/fcFsPoJY9lg",
            "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          }
        ],
        "notes": "Completa los ejercicios con el mismo material y zona de mancuernas. No reserves estaciones distintas. Descansa 90 s al acabar cada vuelta.",
        "videoUrl": "https://youtube.com/shorts/O7PAUd4ZMB4",
        "imageUrl": "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Press Cerrado en Banco Inclinado con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Press Cerrado en Banco Inclinado con Mancuernas",
            "subOrder": 1,
            "sets": 2,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/tdh7LSxUj1s",
            "imageUrl": "https://i.ytimg.com/vi/tdh7LSxUj1s/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          },
          {
            "name": "Extensión Tríceps Trasnuca Unilateral con Mancuerna",
            "subOrder": 2,
            "sets": 2,
            "reps": "15",
            "rest": "90s",
            "videoUrl": "https://youtu.be/jGTquNttoRU",
            "imageUrl": "https://i.ytimg.com/vi/jGTquNttoRU/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          }
        ],
        "notes": "Completa los ejercicios con el mismo material y zona de mancuernas. No reserves estaciones distintas. Descansa 90 s al acabar cada vuelta.",
        "videoUrl": "https://youtu.be/tdh7LSxUj1s",
        "imageUrl": "https://i.ytimg.com/vi/tdh7LSxUj1s/mqdefault.jpg"
      }
    ]
  },
  "dia2": {
    "name": "Torso Completo (PULL)",
    "exercises": [
      {
        "order": 1,
        "name": "Movilidad - Cintura Escapular",
        "isWarmup": true,
        "isSuperset": true,
        "items": [
          {
            "name": "Movilidad - Cintura Escapular",
            "subOrder": 1,
            "sets": 2,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/qFt3RmTDmXI",
            "imageUrl": "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg",
            "notes": "Calentamiento ligero sin fatiga. Estabilizando el tronco con mucho control motor.",
            "isWarmup": true
          },
          {
            "name": "Movilidad - Activación de Escápulas",
            "subOrder": 2,
            "sets": 2,
            "reps": "10",
            "rest": "90s",
            "videoUrl": "https://youtu.be/6Kj_rg_7tYQ",
            "imageUrl": "https://i.ytimg.com/vi/6Kj_rg_7tYQ/mqdefault.jpg",
            "notes": "Calentamiento ligero sin fatiga. Buscar control motor.",
            "isWarmup": true
          }
        ],
        "notes": "Completa los ejercicios con el mismo material y zona de mancuernas. No reserves estaciones distintas. Descansa 90 s al acabar cada vuelta.",
        "videoUrl": "https://youtu.be/qFt3RmTDmXI",
        "imageUrl": "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Jalón al Pecho Neutro en Polea",
        "sets": 3,
        "reps": "6, 10, 10",
        "rest": "90s",
        "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa.",
        "videoUrl": "https://youtu.be/5YzMH2KkMHc",
        "imageUrl": "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Press Militar en Máquina",
        "sets": 3,
        "reps": "8, 12, 12",
        "rest": "90s",
        "notes": "Ajusta el asiento y mantén la espalda apoyada. Empuja por encima de la cabeza con control, sin compensar arqueando la zona lumbar. Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa.",
        "videoUrl": "https://www.youtube.com/shorts/48CmkF61E7M",
        "imageUrl": "https://i.ytimg.com/vi/48CmkF61E7M/mqdefault.jpg"
      },
      {
        "order": 4,
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
            "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          },
          {
            "name": "Pájaros con Mancuernas",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "90s",
            "videoUrl": "https://youtu.be/EMrOS6P90lM",
            "imageUrl": "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          }
        ],
        "notes": "Completa los ejercicios con el mismo material y zona de mancuernas. No reserves estaciones distintas. Descansa 90 s al acabar cada vuelta.",
        "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
        "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Press Banca con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Press Banca con Mancuernas",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/hXCJC2Apcdg",
            "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          },
          {
            "name": "Flexiones con Rodillas",
            "subOrder": 2,
            "sets": 3,
            "reps": "15",
            "rest": "90s",
            "videoUrl": "https://www.youtube.com/shorts/bmKPWM_b85Y",
            "imageUrl": "https://i.ytimg.com/vi/bmKPWM_b85Y/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          }
        ],
        "notes": "Completa los ejercicios con el mismo material y zona de mancuernas. No reserves estaciones distintas. Descansa 90 s al acabar cada vuelta.",
        "videoUrl": "https://youtu.be/hXCJC2Apcdg",
        "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Curl con Barra Z",
        "isSuperset": true,
        "items": [
          {
            "name": "Curl con Barra Z",
            "subOrder": 1,
            "sets": 2,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/4gYLTjNaTmw",
            "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          },
          {
            "name": "Elevaciones Laterales con Mancuernas",
            "subOrder": 2,
            "sets": 2,
            "reps": "15",
            "rest": "90s",
            "videoUrl": "https://youtu.be/rhmW_fhB4cs",
            "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          }
        ],
        "notes": "Completa los ejercicios con el mismo material y zona de mancuernas. No reserves estaciones distintas. Descansa 90 s al acabar cada vuelta.",
        "videoUrl": "https://youtu.be/4gYLTjNaTmw",
        "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
      }
    ]
  },
  "dia3": {
    "name": "Pierna Completa (POSTERIOR)",
    "exercises": [
      {
        "order": 1,
        "name": "Aducción de Piernas en Máquina",
        "isWarmup": true,
        "isSuperset": true,
        "items": [
          {
            "name": "Aducción de Piernas en Máquina",
            "subOrder": 1,
            "sets": 2,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/shorts/7TPklhKZRrc",
            "imageUrl": "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg",
            "notes": "Calentamiento ligero sin fatiga. ",
            "isWarmup": true
          }
        ],
        "notes": "Calentamiento específico, sin fatiga.",
        "videoUrl": "https://www.youtube.com/shorts/7TPklhKZRrc",
        "imageUrl": "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Hip Thrust en Máquina",
        "sets": 4,
        "reps": "6, 6, 12, 12",
        "rest": "120s",
        "notes": "Ajusta el apoyo y el cinturón o rodillo de la máquina sobre la cadera. Eleva la cadera con control, contrae el glúteo arriba sin arquear la zona lumbar y baja sin rebotes. Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa. Deja margen, no progreses si la pierna está fatigada por el fútbol; separa este día de las 48 h previas al partido.",
        "videoUrl": "https://www.youtube.com/watch?v=BhoKmsSZNGM",
        "imageUrl": "https://i.ytimg.com/vi/BhoKmsSZNGM/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Prensa Inclinada en Máquina de Discos",
        "sets": 3,
        "reps": "8, 12, 12",
        "rest": "90s",
        "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa. Deja margen, no progreses si la pierna está fatigada por el fútbol; separa este día de las 48 h previas al partido.",
        "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
        "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Zancada Trasera Alterna con Mancuernas/KTB",
        "sets": 3,
        "reps": "8",
        "rest": "90s",
        "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa. Deja margen, no progreses si la pierna está fatigada por el fútbol; separa este día de las 48 h previas al partido.",
        "videoUrl": "https://www.youtube.com/watch?v=Kzv73cEkTq4",
        "imageUrl": "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Curl Femoral Sentado en Máquina",
        "sets": 3,
        "reps": "12",
        "rest": "60s",
        "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa. Deja margen, no progreses si la pierna está fatigada por el fútbol; separa este día de las 48 h previas al partido.",
        "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
        "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
      }
    ]
  },
  "dia4": {
    "name": "Torso Accesorios",
    "exercises": [
      {
        "order": 1,
        "name": "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
        "isWarmup": true,
        "isSuperset": true,
        "items": [
          {
            "name": "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
            "subOrder": 1,
            "sets": 2,
            "reps": "12",
            "isSupersetStart": true,
            "videoUrl": "https://youtu.be/1MgU2PO4_rI",
            "imageUrl": "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg",
            "notes": "Calentamiento ligero sin fatiga. ",
            "isWarmup": true
          },
          {
            "name": "Curl con Mancuernas Sentado en Banco Inclinado",
            "subOrder": 2,
            "sets": 2,
            "reps": "12",
            "rest": "90s",
            "videoUrl": "https://youtu.be/S32a3nYiWko",
            "imageUrl": "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg",
            "notes": "Calentamiento ligero sin fatiga. ",
            "isWarmup": true
          }
        ],
        "notes": "Completa los ejercicios con el mismo material y zona de mancuernas. No reserves estaciones distintas. Descansa 90 s al acabar cada vuelta.",
        "videoUrl": "https://youtu.be/1MgU2PO4_rI",
        "imageUrl": "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Press Militar Sentado con Mancuernas",
        "sets": 3,
        "reps": "16",
        "rest": "120s",
        "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa.",
        "videoUrl": "https://www.youtube.com/watch?v=_IMpMCr87Cg",
        "imageUrl": "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Remo en Máquina T Agarre Abierto",
        "sets": 3,
        "reps": "8",
        "rest": "90s",
        "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa.",
        "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
        "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
      },
      {
        "order": 4,
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
            "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          },
          {
            "name": "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "90s",
            "videoUrl": "https://www.youtube.com/shorts/NMlvYALcyBc",
            "imageUrl": "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          }
        ],
        "notes": "Completa los ejercicios con el mismo material y zona de mancuernas. No reserves estaciones distintas. Descansa 90 s al acabar cada vuelta.",
        "videoUrl": "https://youtu.be/ZE4M73kXB5A",
        "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Curl Araña con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Curl Araña con Mancuernas",
            "subOrder": 1,
            "sets": 3,
            "reps": "10",
            "isSupersetStart": true,
            "videoUrl": "https://www.youtube.com/shorts/vll2f1bqDlA",
            "imageUrl": "https://i.ytimg.com/vi/vll2f1bqDlA/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          },
          {
            "name": "Press Francés con Mancuernas en Banco Inclinado",
            "subOrder": 2,
            "sets": 3,
            "reps": "10",
            "rest": "90s",
            "videoUrl": "https://youtu.be/L__Q6Jl9Ics",
            "imageUrl": "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg",
            "notes": "Mantén 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Usa un recorrido cómodo; si provoca dolor en hombro o codo, detén ese ejercicio y comunica qué movimiento lo causa."
          }
        ],
        "notes": "Completa los ejercicios con el mismo material y zona de mancuernas. No reserves estaciones distintas. Descansa 90 s al acabar cada vuelta.",
        "videoUrl": "https://www.youtube.com/shorts/vll2f1bqDlA",
        "imageUrl": "https://i.ytimg.com/vi/vll2f1bqDlA/mqdefault.jpg"
      }
    ]
  }
};

const exerciseAlternatives = {
  "Press Banca en Máquina": [
    {
      "name": "Press Banca Inclinado en Multipower",
      "videoUrl": "https://youtu.be/3GS7EjN7KSk",
      "imageUrl": "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg",
      "notes": "Usa las mismas series, objetivos y descansos del ejercicio principal. Ajusta la carga para mantener el margen; no fuerces una alternativa dolorosa."
    }
  ],
  "Remo Seal con Mancuernas": [
    {
      "name": "Remo Gironda en Polea",
      "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
      "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg",
      "notes": "Usa las mismas series, objetivos y descansos del ejercicio principal. Ajusta la carga para mantener el margen; no fuerces una alternativa dolorosa."
    }
  ],
  "Jalón al Pecho Neutro en Polea": [
    {
      "name": "Dominadas Asistidas en Máquina",
      "videoUrl": "https://www.youtube.com/shorts/5OGBlINLP6w",
      "imageUrl": "https://i.ytimg.com/vi/5OGBlINLP6w/mqdefault.jpg",
      "notes": "Usa las mismas series, objetivos y descansos del ejercicio principal. Ajusta la carga para mantener el margen; no fuerces una alternativa dolorosa."
    }
  ],
  "Press Militar en Máquina": [
    {
      "name": "Press Militar Unilateral en Landmine",
      "videoUrl": "https://www.youtube.com/watch?v=p2OLvWOo9l0",
      "imageUrl": "https://i.ytimg.com/vi/p2OLvWOo9l0/mqdefault.jpg",
      "notes": "Usa las mismas series, objetivos y descansos del ejercicio principal. Ajusta la carga para mantener el margen; no fuerces una alternativa dolorosa."
    }
  ],
  "Aducción de Piernas en Máquina": [
    {
      "name": "Sentadilla Lateral",
      "videoUrl": "https://youtu.be/RkmdE5WBOy4",
      "imageUrl": "https://i.ytimg.com/vi/RkmdE5WBOy4/mqdefault.jpg",
      "notes": "Usa las mismas series, objetivos y descansos del ejercicio principal. Ajusta la carga para mantener el margen; no fuerces una alternativa dolorosa."
    }
  ],
  "Hip Thrust en Máquina": [
    {
      "name": "Hip Thrust con Barra (ExPLICADO)",
      "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
      "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg",
      "notes": "Usa las mismas series, objetivos y descansos del ejercicio principal. Ajusta la carga para mantener el margen; no fuerces una alternativa dolorosa."
    }
  ],
  "Prensa Inclinada en Máquina de Discos": [
    {
      "name": "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
      "videoUrl": "https://www.youtube.com/shorts/tNu9bm3geqY",
      "imageUrl": "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg",
      "notes": "Usa las mismas series, objetivos y descansos del ejercicio principal. Ajusta la carga para mantener el margen; no fuerces una alternativa dolorosa."
    }
  ],
  "Zancada Trasera Alterna con Mancuernas/KTB": [
    {
      "name": "Zancada Unilateral en Multipower",
      "videoUrl": "https://youtu.be/yfNWlh9rp6o",
      "imageUrl": "https://i.ytimg.com/vi/yfNWlh9rp6o/mqdefault.jpg",
      "notes": "Usa las mismas series, objetivos y descansos del ejercicio principal. Ajusta la carga para mantener el margen; no fuerces una alternativa dolorosa."
    }
  ],
  "Curl Femoral Sentado en Máquina": [
    {
      "name": "Curl Femoral Tumbado en Máquina",
      "videoUrl": "https://www.youtube.com/shorts/-VfGwgG23OM",
      "imageUrl": "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg",
      "notes": "Usa las mismas series, objetivos y descansos del ejercicio principal. Ajusta la carga para mantener el margen; no fuerces una alternativa dolorosa."
    }
  ],
  "Press Militar Sentado con Mancuernas": [
    {
      "name": "Press Militar en Multipower",
      "videoUrl": "https://www.youtube.com/watch?v=iATqshmFPnI",
      "imageUrl": "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg",
      "notes": "Usa las mismas series, objetivos y descansos del ejercicio principal. Ajusta la carga para mantener el margen; no fuerces una alternativa dolorosa."
    }
  ],
  "Remo en Máquina T Agarre Abierto": [
    {
      "name": "Remo Diagonal Unilat en Polea Alta",
      "videoUrl": "https://youtube.com/shorts/ikKQhcynKmg",
      "imageUrl": "https://i.ytimg.com/vi/ikKQhcynKmg/mqdefault.jpg",
      "notes": "Usa las mismas series, objetivos y descansos del ejercicio principal. Ajusta la carga para mantener el margen; no fuerces una alternativa dolorosa."
    }
  ]
};
