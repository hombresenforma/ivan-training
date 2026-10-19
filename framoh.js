// Titulo: P16_4D_PUSH_PULL_PIERNA_TORSO_BRAZOS_1
// Programa base: P16_4D_TORPIER_FUERZATOP_2
// Notas: - Ejercicios básicos 1 y 2: CAMBIAMOS VARIANTE.
// - Torso Push y Pull: Cambiamos ejercicios penúltimo circuito (Variante). 
// - Bloque final: AÑADIMOS 1 SERIE MÁS.
// Adaptación Fran: orden PUSH / PULL / PIERNA COMPLETA / TORSO BRAZOS + ABDOMEN.
// Pierna: se incorporan curl femoral sentado y soft swing del anterior día posterior.
// Día 4 nuevo: torso completo, énfasis en bíceps/tríceps y abdomen final.

const workoutData = {
    "dia1": {
        "name": "Torso Completo (PUSH)",
        "exercises": [
            {
                "order": 1,
                "name": "Rotación Externa de Hombro Unilat con Polea",
                "isWarmup": true,
                "isSuperset": true,
                "items": [
                    {
                        "name": "Rotación Externa de Hombro Unilat con Polea",
                        "subOrder": 1,
                        "sets": 2,
                        "reps": "10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                        "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
                    },
                    {
                        "name": "Rotación Interna de Hombro Unilat con Polea",
                        "subOrder": 2,
                        "sets": 2,
                        "reps": "10",
                        "rest": "30s",
                        "videoUrl": "https://youtube.com/shorts/3SW4Pxgi1c0",
                        "imageUrl": "https://i.ytimg.com/vi/3SW4Pxgi1c0/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Press Banca en Multipower",
                "sets": 4,
                "reps": "6, 6, 12, 12",
                "rest": "120s",
                "notes": "Pon una banda elástica que te ayude. ",
                "videoUrl": "https://youtu.be/w-5ovE5O5iU",
                "imageUrl": "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Remo Unilat con Mancuerna/KTB (Explicado)",
                "sets": 3,
                "reps": "6, 6, 12",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
                "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
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
                        "reps": "8-10",
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
                "name": "Jalón al Pecho Unilateral con Polea",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Jalón al Pecho Unilateral con Polea",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "8-10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/fxMPLrCpzeA",
                        "imageUrl": "https://i.ytimg.com/vi/fxMPLrCpzeA/mqdefault.jpg"
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
                "videoUrl": "https://youtu.be/fxMPLrCpzeA",
                "imageUrl": "https://i.ytimg.com/vi/fxMPLrCpzeA/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "Fondos en Paralelas Lastrados",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Fondos en Paralelas Lastrados",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "10-12",
                        "isSupersetStart": true,
                        "videoUrl": "https://www.youtube.com/shorts/xsnhvnyl70I",
                        "imageUrl": "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
                    },
                    {
                        "name": "Extensión de Codo en Polea Alta",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "12-15",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/watch?v=z7gqbcjkzU0",
                        "imageUrl": "https://i.ytimg.com/vi/z7gqbcjkzU0/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/shorts/xsnhvnyl70I",
                "imageUrl": "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        "name": "Torso Completo (PULL)",
        "exercises": [
            {
                "order": 1,
                "name": "Rotación Externa de Hombro Unilat con Polea",
                "isWarmup": true,
                "isSuperset": true,
                "items": [
                    {
                        "name": "Rotación Externa de Hombro Unilat con Polea",
                        "subOrder": 1,
                        "sets": 2,
                        "reps": "10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                        "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
                    },
                    {
                        "name": "Rotación Interna de Hombro Unilat con Polea",
                        "subOrder": 2,
                        "sets": 2,
                        "reps": "10",
                        "rest": "30s",
                        "videoUrl": "https://youtube.com/shorts/3SW4Pxgi1c0",
                        "imageUrl": "https://i.ytimg.com/vi/3SW4Pxgi1c0/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Jalón al Pecho Supino en Polea",
                "sets": 4,
                "reps": "6, 6, 12, 12",
                "rest": "120s",
                "notes": "",
                "videoUrl": "https://youtu.be/rimdRzyIJkA",
                "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Press Militar con Barra Sentado (Half Press)",
                "sets": 3,
                "reps": "6, 12, 12",
                "rest": "120s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=q0C0BaHITAc",
                "imageUrl": "https://i.ytimg.com/vi/q0C0BaHITAc/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Remo Unilat Sentado en Polea Media",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Remo Unilat Sentado en Polea Media",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "8-10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtube.com/shorts/kjbRoWIl7eI",
                        "imageUrl": "https://i.ytimg.com/vi/kjbRoWIl7eI/mqdefault.jpg"
                    },
                    {
                        "name": "Face Pull con KTB",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "10",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        "imageUrl": "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/kjbRoWIl7eI",
                "imageUrl": "https://i.ytimg.com/vi/kjbRoWIl7eI/mqdefault.jpg"
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
                        "reps": "8-10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/ZE4M73kXB5A",
                        "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
                    },
                    {
                        "name": "Press Francés con Barra Z en Banco Inclinado",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15",
                        "rest": "90s",
                        "videoUrl": "https://youtu.be/hFk6xzt1DWM",
                        "imageUrl": "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/ZE4M73kXB5A",
                "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "Curl con Barra Z",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Curl con Barra Z",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "10-12",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/4gYLTjNaTmw",
                        "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    },
                    {
                        "name": "Elevaciones Laterales con Mancuernas",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "12-15",
                        "rest": "90s",
                        "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                        "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/4gYLTjNaTmw",
                "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        "name": "Pierna Completa",
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
                        "imageUrl": "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/shorts/7TPklhKZRrc",
                "imageUrl": "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Sentadilla Posterior en Máquina Jaca",
                "sets": 4,
                "reps": "6, 6, 12, 12",
                "rest": "120s",
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/KII1KHKgr8o",
                "imageUrl": "https://i.ytimg.com/vi/KII1KHKgr8o/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Prensa Inclinada en Máquina de Discos",
                "sets": 3,
                "reps": "6, 12, 12",
                "rest": "120s",
                "notes": "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
                "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
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
                "name": "Extensión de Cuádriceps en Máquina",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Extensión de Cuádriceps en Máquina",
                        "subOrder": 1,
                        "sets": 4,
                        "reps": "8-10",
                        "isSupersetStart": true,
                        "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        "name": "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
                        "subOrder": 2,
                        "sets": 4,
                        "reps": "15",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/shorts/tNu9bm3geqY",
                        "imageUrl": "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "Curl Femoral Sentado en Máquina",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Curl Femoral Sentado en Máquina",
                        "subOrder": 1,
                        "sets": 4,
                        "reps": "10",
                        "isSupersetStart": true,
                        "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
                        "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
                    },
                    {
                        "name": "Kettlebell - Soft Swing",
                        "subOrder": 2,
                        "sets": 4,
                        "reps": "15",
                        "rest": "90s",
                        "videoUrl": "https://youtube.com/shorts/-i4ReGBb26g",
                        "imageUrl": "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
                "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        "name": "Torso Completo (BRAZOS + ABDOMEN)",
        "exercises": [
            {
                "order": 1,
                "name": "Rotación Externa de Hombro Unilat con Polea",
                "isWarmup": true,
                "isSuperset": true,
                "items": [
                    {
                        "name": "Rotación Externa de Hombro Unilat con Polea",
                        "subOrder": 1,
                        "sets": 2,
                        "reps": "10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                        "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
                    },
                    {
                        "name": "Rotación Interna de Hombro Unilat con Polea",
                        "subOrder": 2,
                        "sets": 2,
                        "reps": "10",
                        "rest": "30s",
                        "videoUrl": "https://youtube.com/shorts/3SW4Pxgi1c0",
                        "imageUrl": "https://i.ytimg.com/vi/3SW4Pxgi1c0/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Press Inclinado con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Press Inclinado con Mancuernas",
                        "sets": 3,
                        "reps": "10",
                        "notes": "Trabaja con 2 repeticiones en recámara y dentro de un recorrido sin molestias en el hombro.",
                        "videoUrl": "https://youtu.be/ZE4M73kXB5A",
                        "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Remo Seal con Mancuernas",
                        "sets": 3,
                        "reps": "10",
                        "notes": "Trata de despegar el pecho al final del movimiento",
                        "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
                        "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg",
                        "subOrder": 2,
                        "rest": "90s"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/ZE4M73kXB5A",
                "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Curl con Barra Z",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Curl con Barra Z",
                        "sets": 3,
                        "reps": "10",
                        "notes": "",
                        "videoUrl": "https://youtu.be/4gYLTjNaTmw",
                        "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Press Francés con Barra Z en Banco Inclinado",
                        "sets": 3,
                        "reps": "12",
                        "notes": "Carga controlada y recorrido sin molestias en el hombro. Deja 2 repeticiones en recámara.",
                        "videoUrl": "https://youtu.be/hFk6xzt1DWM",
                        "imageUrl": "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg",
                        "subOrder": 2,
                        "rest": "75s"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/4gYLTjNaTmw",
                "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Curl Martillo con Cuerda en Polea Baja",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Curl Martillo con Cuerda en Polea Baja",
                        "sets": 3,
                        "reps": "12",
                        "notes": "",
                        "videoUrl": "https://www.youtube.com/shorts/fSTgTQr1WCk",
                        "imageUrl": "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Extensión de Tríceps en Polea con Cuerda",
                        "sets": 3,
                        "reps": "12",
                        "notes": "",
                        "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg",
                        "subOrder": 2,
                        "rest": "75s"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/shorts/fSTgTQr1WCk",
                "imageUrl": "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Elevaciones Laterales con Mancuernas",
                "sets": 2,
                "reps": "15",
                "rest": "60s",
                "notes": "Eleva dentro de un recorrido sin molestias y sin balancear el cuerpo.",
                "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "Crunch - Normal",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Crunch - Normal",
                        "sets": 2,
                        "reps": "15",
                        "notes": "Mantén la Lumbar pegada al suelo",
                        "videoUrl": "https://youtu.be/wNqGgCjBVaE",
                        "imageUrl": "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Plancha - Normal",
                        "sets": 2,
                        "reps": "30s",
                        "notes": "Mantener espalda recta y glúteo apretado (retroversión de cadera)",
                        "videoUrl": "https://youtu.be/DQ4wYExQRJo",
                        "imageUrl": "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg",
                        "subOrder": 2,
                        "rest": "45s"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/wNqGgCjBVaE",
                "imageUrl": "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca en Multipower": [
        {
            "name": "Press Banca con Barra",
            "videoUrl": "https://youtu.be/PKpsrFS2uac",
            "imageUrl": "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
        }
    ],
    "Remo Unilat con Mancuerna/KTB (Explicado)": [
        {
            "name": "Remo Unilat Sentado en Polea Media",
            "videoUrl": "https://youtube.com/shorts/kjbRoWIl7eI",
            "imageUrl": "https://i.ytimg.com/vi/kjbRoWIl7eI/mqdefault.jpg"
        }
    ],
    "Sentadilla Posterior en Máquina Jaca": [
        {
            "name": "Sentadilla Trasera en Multipower",
            "videoUrl": "https://youtu.be/la-dqygoIuk",
            "imageUrl": "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
        }
    ],
    "Press Militar con Barra Sentado (Half Press)": [
        {
            "name": "Press Militar Sentado con Mancuernas (ExPLICADO)",
            "videoUrl": "https://www.youtube.com/shorts/2ZkYyh4ic0o",
            "imageUrl": "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
        }
    ]
};
