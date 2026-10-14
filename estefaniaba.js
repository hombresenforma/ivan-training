// Titulo: P24_4D_TorPier_FUERZA_VOL_1
// Notas: Progresión tras P23: 2 días de fuerza y 2 de volumen; top set + back-off en básicos, doble progresión y calentamientos específicos. Adaptación individual para Estefanía: sin trabajo directo de pectoral y con mayor volumen de glúteo. Hip thrust con opción de máquina. Duración objetivo 48-58 min.

const workoutData = {
    "dia1": {
        "name": "Torso Fuerza",
        "exercises": [
            {
                "order": 1,
                "name": "Rotación Externa de Hombro Unilat con Polea",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Rotación Externa de Hombro Unilat con Polea",
                        "subOrder": 1,
                        "sets": 2,
                        "reps": "10",
                        "isSupersetStart": true,
                        "notes": "Activa el manguito rotador sin fatigar.",
                        "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                        "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
                    },
                    {
                        "name": "Rotación Interna de Hombro Unilat con Polea",
                        "subOrder": 2,
                        "sets": 2,
                        "reps": "10",
                        "rest": "30s",
                        "notes": "Movimiento controlado.",
                        "videoUrl": "https://youtube.com/shorts/3SW4Pxgi1c0",
                        "imageUrl": "https://i.ytimg.com/vi/3SW4Pxgi1c0/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg",
                "isWarmup": true
            },
            {
                "order": 2,
                "name": "Remo en Máquina T Agarre Abierto",
                "sets": 4,
                "reps": "6, 8, 8, 8",
                "rest": "150s",
                "notes": "Primera serie exigente; reduce un 8-10% para las 3 series back-off. Mantén RIR 1-2.",
                "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
                "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Dominadas con Peso Corporal",
                "sets": 4,
                "reps": "8",
                "rest": "150s",
                "notes": "Cuando completes 4x8 con buena técnica, añade carga.",
                "videoUrl": "https://www.youtube.com/shorts/pb-14sP_R4M",
                "imageUrl": "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Remo en Máquina T Agarre Estrecho",
                "sets": 3,
                "reps": "8",
                "rest": "120s",
                "notes": "Pecho estable y retracción escapular.",
                "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
                "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Press Militar en Multipower",
                "sets": 3,
                "reps": "8",
                "rest": "120s",
                "notes": "Recorrido controlado y RIR 1-2.",
                "videoUrl": "https://www.youtube.com/watch?v=iATqshmFPnI",
                "imageUrl": "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "Extensión de Tríceps en Polea con Cuerda",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Extensión de Tríceps en Polea con Cuerda",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "10",
                        "isSupersetStart": true,
                        "notes": "Extensión controlada, sin balancear el tronco.",
                        "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
                    },
                    {
                        "name": "Curl con Barra Z",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "10",
                        "rest": "90s",
                        "notes": "Sin balanceo.",
                        "videoUrl": "https://youtu.be/4gYLTjNaTmw",
                        "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        "name": "Pierna Fuerza",
        "exercises": [
            {
                "order": 1,
                "name": "Aducción de Piernas en Máquina",
                "sets": 2,
                "reps": "12",
                "rest": "30s",
                "notes": "Calentamiento específico; carga ligera.",
                "videoUrl": "https://www.youtube.com/shorts/7TPklhKZRrc",
                "imageUrl": "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg",
                "isWarmup": true
            },
            {
                "order": 2,
                "name": "Sentadilla Trasera en Multipower",
                "sets": 4,
                "reps": "6, 8, 8, 8",
                "rest": "150s",
                "notes": "Primera serie pesada; reduce un 8-10% para las 3 series back-off. Mantén RIR 1-2.",
                "videoUrl": "https://youtu.be/la-dqygoIuk",
                "imageUrl": "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Peso Muerto Rumano con Barra",
                "sets": 4,
                "reps": "8",
                "rest": "150s",
                "notes": "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta). Mantén RIR 1-2.",
                "videoUrl": "https://youtu.be/R7FKam5GyNw",
                "imageUrl": "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Prensa Inclinada en Máquina de Discos",
                "sets": 3,
                "reps": "10",
                "rest": "120s",
                "notes": "Controla la bajada y no bloquees las rodillas.",
                "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
                "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Curl Femoral Sentado en Máquina",
                "sets": 3,
                "reps": "12",
                "rest": "90s",
                "notes": "Mantén un segundo de contracción.",
                "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
                "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "Extensión de Cuádriceps en Máquina",
                "sets": 3,
                "reps": "15",
                "rest": "75s",
                "notes": "Ejecución controlada.",
                "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                "order": 7,
                "name": "Patada de Glúteo en Polea",
                "sets": 2,
                "reps": "15",
                "rest": "75s",
                "notes": "Usa un disco o step para elevar el otro pie. Mantén la pelvis estable.",
                "videoUrl": "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                "imageUrl": "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        "name": "Torso Volumen",
        "exercises": [
            {
                "order": 1,
                "name": "Rotación Externa de Hombro Unilat con Polea",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Rotación Externa de Hombro Unilat con Polea",
                        "subOrder": 1,
                        "sets": 2,
                        "reps": "10",
                        "isSupersetStart": true,
                        "notes": "Activa el manguito rotador sin fatigar.",
                        "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                        "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
                    },
                    {
                        "name": "Rotación Interna de Hombro Unilat con Polea",
                        "subOrder": 2,
                        "sets": 2,
                        "reps": "10",
                        "rest": "30s",
                        "notes": "Movimiento controlado.",
                        "videoUrl": "https://youtube.com/shorts/3SW4Pxgi1c0",
                        "imageUrl": "https://i.ytimg.com/vi/3SW4Pxgi1c0/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg",
                "isWarmup": true
            },
            {
                "order": 2,
                "name": "Pájaros con Mancuernas",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "Controla el movimiento y evita el balanceo.",
                "videoUrl": "https://youtu.be/EMrOS6P90lM",
                "imageUrl": "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Remo Gironda en Polea",
                "sets": 3,
                "reps": "10",
                "rest": "120s",
                "notes": "Pausa breve al final del tirón.",
                "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
                "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Remo en Máquina T Agarre Abierto",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Remo en Máquina T Agarre Abierto",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "10",
                        "isSupersetStart": true,
                        "notes": "Pecho apoyado y tirón controlado.",
                        "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
                        "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
                    },
                    {
                        "name": "Jalón al Pecho Neutro en Polea",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "10",
                        "rest": "90s",
                        "notes": "Lleva los codos hacia abajo.",
                        "videoUrl": "https://youtu.be/5YzMH2KkMHc",
                        "imageUrl": "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
                "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Press Militar Sentado con Mancuernas (ExPLICADO)",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Press Militar Sentado con Mancuernas (ExPLICADO)",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "12",
                        "isSupersetStart": true,
                        "notes": "Mantén el torso estable.",
                        "videoUrl": "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                        "imageUrl": "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
                    },
                    {
                        "name": "Elevaciones Laterales con Mancuernas",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15",
                        "rest": "90s",
                        "notes": "Sin balanceos.",
                        "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                        "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                "imageUrl": "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "Extensión de Tríceps en Polea con Cuerda",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Extensión de Tríceps en Polea con Cuerda",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "15",
                        "isSupersetStart": true,
                        "notes": "Separa la cuerda al final.",
                        "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
                    },
                    {
                        "name": "Curl de Bíceps Apoyado en Banco con Mancuernas",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15",
                        "rest": "75s",
                        "notes": "Mantén el brazo apoyado.",
                        "videoUrl": "https://youtube.com/shorts/hQ3ojFx5soY",
                        "imageUrl": "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        "name": "Pierna Volumen",
        "exercises": [
            {
                "order": 1,
                "name": "Aducción de Piernas en Máquina",
                "sets": 2,
                "reps": "15",
                "rest": "30s",
                "notes": "Calentamiento específico; carga ligera.",
                "videoUrl": "https://www.youtube.com/shorts/7TPklhKZRrc",
                "imageUrl": "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg",
                "isWarmup": true
            },
            {
                "order": 2,
                "name": "Hip Thrust con Barra (ExPLICADO)",
                "sets": 5,
                "reps": "10",
                "rest": "120s",
                "notes": "Pausa un segundo arriba y evita hiperextender la zona lumbar. Puede realizarlo en máquina de hip thrust; en el gimnasio del trabajo puede mantener la versión con barra.",
                "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Sentadilla Búlgara con Mancuerna o KTB",
                "sets": 4,
                "reps": "10",
                "rest": "90s",
                "notes": "Mantén el control y la estabilidad.",
                "videoUrl": "https://youtu.be/kA6bHiDdTO4",
                "imageUrl": "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
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
                        "reps": "15",
                        "isSupersetStart": true,
                        "notes": "Controla la contracción.",
                        "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        "name": "Sentadilla Goblet con Mancuerna/KTB y Pies Elevados",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15",
                        "rest": "90s",
                        "notes": "Talones elevados y torso estable.",
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
                "name": "Curl Femoral Sentado en Máquina",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Curl Femoral Sentado en Máquina",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "12",
                        "isSupersetStart": true,
                        "notes": "Mantén un segundo de contracción.",
                        "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
                        "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
                    },
                    {
                        "name": "Kettlebell - Swing Ruso",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15",
                        "rest": "90s",
                        "notes": "Impulsa desde la cadera.",
                        "videoUrl": "https://youtu.be/eKN0tj8q6Qc",
                        "imageUrl": "https://i.ytimg.com/vi/eKN0tj8q6Qc/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
                "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {};
