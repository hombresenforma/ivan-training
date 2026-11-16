// Titulo: P24_4D_TorPier_FUERZA_VOL_2_FEM_V2
// Notas: Adaptación de cuatro días con foco de glúteo, sin pectoral directo. Básicos con las mismas series y repeticiones; hip thrust en máquina. Accesorios nuevos de torso y pierna y abdomen al final de los cuatro días.

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
                "sets": 5,
                "reps": "6,8,8,8,8",
                "rest": "150s",
                "notes": "Primera serie exigente; reduce un 8-10% para las 4 series back-off. Mantén RIR 1-2.",
                "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
                "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Jalón al Pecho Supino en Polea",
                "sets": 4,
                "reps": "8",
                "rest": "150s",
                "notes": "",
                "videoUrl": "https://youtu.be/rimdRzyIJkA",
                "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
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
                        "notes": "Extensión controlada, sin balancear el tronco. Última serie: al completar las repeticiones, reduce la carga un 20-25% y continúa con técnica controlada hasta RIR 1; una sola bajada de peso.",
                        "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg",
                        "setTechniques": {
                            "3": "DROPSET"
                        }
                    },
                    {
                        "name": "Curl con Barra Z",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "10",
                        "notes": "Sin balanceo.",
                        "videoUrl": "https://youtu.be/4gYLTjNaTmw",
                        "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    },
                    {
                        "subOrder": 3,
                        "sets": 3,
                        "reps": "30s",
                        "rest": "90s",
                        "name": "Plancha - Normal",
                        "videoUrl": "https://youtu.be/DQ4wYExQRJo",
                        "imageUrl": "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg",
                        "notes": "Mantener espalda recta y glúteo apretado (retroversión de cadera)"
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
                "sets": 5,
                "reps": "6,8,8,8,8",
                "rest": "150s",
                "notes": "Primera serie pesada; reduce un 8-10% para las 4 series back-off. Mantén RIR 1-2.",
                "videoUrl": "https://youtu.be/la-dqygoIuk",
                "imageUrl": "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Peso Muerto Rumano con Mancuernas/KTB",
                "sets": 4,
                "reps": "8",
                "rest": "150s",
                "notes": "Espalda recta en todo momento",
                "videoUrl": "https://www.youtube.com/shorts/SMll4DOYvEs",
                "imageUrl": "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
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
                "notes": "Ejecución controlada. Última serie: al completar las repeticiones, reduce la carga un 20-25% y continúa con técnica controlada hasta RIR 1; una sola bajada de peso.",
                "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg",
                "setTechniques": {
                    "3": "DROPSET"
                }
            },
            {
                "order": 7,
                "name": "Patada de Glúteo en Polea",
                "notes": "Usa un disco o step para elevar el otro pie. Mantén la pelvis estable.",
                "videoUrl": "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                "imageUrl": "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Patada de Glúteo en Polea",
                        "sets": 2,
                        "reps": "15",
                        "notes": "Usa un disco o step para elevar el otro pie. Mantén la pelvis estable.",
                        "videoUrl": "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                        "imageUrl": "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "subOrder": 2,
                        "sets": 2,
                        "reps": "30s",
                        "rest": "75s",
                        "name": "Plancha - Lateral",
                        "videoUrl": "https://youtu.be/IBlAMf7LYvI",
                        "imageUrl": "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg",
                        "notes": "Alterna el lado entre series."
                    }
                ]
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
                "name": "Face Pull al Cuello en Polea Alta",
                "sets": 4,
                "reps": "10",
                "rest": "90s",
                "notes": "Usa cuerda y lleva las manos hacia el cuello o la cara, separando los extremos. Mantén el tronco estable y controla la vuelta sin balancearte.",
                "videoUrl": "https://www.youtube.com/shorts/TaTjLum-_qI",
                "imageUrl": "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Remo Gironda en Polea",
                "sets": 5,
                "reps": "10",
                "rest": "120s",
                "notes": "Pausa breve al final del tirón.",
                "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
                "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Remo Seal con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Remo Seal con Mancuernas",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "10",
                        "isSupersetStart": true,
                        "notes": "Trata de despegar el pecho al final del movimiento",
                        "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
                        "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
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
                "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
                "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
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
                        "notes": "Separa la cuerda al final. Última serie: al completar las repeticiones, reduce la carga un 20-25% y continúa con técnica controlada hasta RIR 1; una sola bajada de peso.",
                        "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg",
                        "setTechniques": {
                            "3": "DROPSET"
                        }
                    },
                    {
                        "name": "Curl de Bíceps Apoyado en Banco con Mancuernas",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15",
                        "notes": "Mantén el brazo apoyado.",
                        "videoUrl": "https://youtube.com/shorts/hQ3ojFx5soY",
                        "imageUrl": "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
                    },
                    {
                        "subOrder": 3,
                        "sets": 3,
                        "reps": "30s",
                        "rest": "75s",
                        "name": "Plancha - Cambios de apoyo",
                        "videoUrl": "https://youtu.be/Yg74EfwLBQY",
                        "imageUrl": "https://i.ytimg.com/vi/Yg74EfwLBQY/mqdefault.jpg",
                        "notes": ""
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
                "name": "Hip Thrust en Máquina",
                "sets": 5,
                "reps": "10",
                "rest": "120s",
                "notes": "Ajusta el apoyo y el cinturón o rodillo de la máquina sobre la cadera. Eleva la cadera con control, contrae el glúteo arriba sin arquear la zona lumbar y baja sin rebotes.",
                "videoUrl": "https://www.youtube.com/watch?v=BhoKmsSZNGM",
                "imageUrl": "https://i.ytimg.com/vi/BhoKmsSZNGM/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Sentadilla Búlgara en Multipower",
                "sets": 4,
                "reps": "10",
                "rest": "90s",
                "notes": "Apoya el pie trasero en un banco estable y coloca el delantero para bajar con control. Mantén el apoyo del pie delantero y evita impulsarte con la pierna trasera. Realiza las repeticiones con cada pierna.",
                "videoUrl": "https://www.youtube.com/watch?v=UHoRtCnxuXI",
                "imageUrl": "https://i.ytimg.com/vi/UHoRtCnxuXI/mqdefault.jpg"
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
                        "notes": "Controla la contracción. Última serie: al completar las repeticiones, reduce la carga un 20-25% y continúa con técnica controlada hasta RIR 1; una sola bajada de peso.",
                        "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg",
                        "setTechniques": {
                            "3": "DROPSET"
                        }
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
                        "name": "Abducción de Glúteo Unilat en el Suelo",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15",
                        "notes": "",
                        "videoUrl": "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        "imageUrl": "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    },
                    {
                        "subOrder": 3,
                        "sets": 3,
                        "reps": "12",
                        "rest": "90s",
                        "name": "Dead Bug",
                        "videoUrl": "https://youtu.be/0CteMtiMChQ",
                        "imageUrl": "https://i.ytimg.com/vi/0CteMtiMChQ/mqdefault.jpg",
                        "notes": ""
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
