// Titulo: P11_3+1_TorPierTor_TWS_TSBACKOFF_1 (FEM)
// Notas: Trabajo por TOPSET-BACKOFF y SERIES AL FALLO.
// For Time 21,15,9 + Trabajo de abdomen POLEA
// Contenido de app_datos.js
// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================

const workoutData = {
    "dia1": {
        name: "Empuje COMPLETO",
        exercises: [
            {
                order: 1,
                name: "Elevación Lateral Unilat en Polea Alta",
                setTechniques: {},
                sets: 2,
                reps: "12-15",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/8h_6GaA47HA",
                imageUrl: "https://i.ytimg.com/vi/8h_6GaA47HA/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar en Multipower",
                setTechniques: {},
                sets: 4,
                reps: "6, 6, 6, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Trasera con Barra Talones Elevados",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/FYuU4CAAT1I",
                imageUrl: "https://i.ytimg.com/vi/FYuU4CAAT1I/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    },
                    {
                        name: "Muscle Clean-Jerk Unilat Alterno con Mancuerna",
                        subOrder: 3,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/2sOV3aayUCI",
                        imageUrl: "https://i.ytimg.com/vi/2sOV3aayUCI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Piernas",
        exercises: [
            {
                order: 1,
                name: "Aducción de Piernas en Máquina",
                sets: 2,
                reps: "12-15",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Posterior en Máquina Jaca",
                setTechniques: {},
                sets: 4,
                reps: "6, 6, 6, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/KII1KHKgr8o",
                imageUrl: "https://i.ytimg.com/vi/KII1KHKgr8o/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Swing con Sentadilla",
                        subOrder: 2,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/MUJ2UiP5gjc",
                        imageUrl: "https://i.ytimg.com/vi/MUJ2UiP5gjc/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 3,
                        sets: 1,
                        reps: "30s",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Tracción Completa",
        exercises: [
            {
                order: 1,
                name: "Patada de Glúteo en Polea",
                setTechniques: {},
                sets: 2,
                reps: "12-15",
                rest: "60s",
                notes: "Usa un disco o step para elevar el otro pie",
                videoUrl: "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                imageUrl: "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo en Máquina T Agarre Estrecho",
                setTechniques: {},
                sets: 4,
                reps: "6, 6, 6, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Hip Thrust con Barra (ExPLICADO)",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con TRX",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                        imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                        subOrder: 3,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                        imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "FOR TIME (TWS) - ABS CARGA",
        exercises: [
            {
                order: 1,
                name: "FOR TIME (Thruster+Worm+SitUp)",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 3
                },
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        notes: "Objetivo: Mejorar el tiempo en cada entreno. ",
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Burpee",
                        subOrder: 2,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=qTLp4wcAAtQ",
                        imageUrl: "https://i.ytimg.com/vi/qTLp4wcAAtQ/mqdefault.jpg"
                    },
                    {
                        name: "Sit Up Abdominal con Disco",
                        subOrder: 3,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/shorts/GHLO76YCyHE",
                        imageUrl: "https://i.ytimg.com/vi/GHLO76YCyHE/mqdefault.jpg"
                    }
                ],
                notes: "Objetivo: Mejorar el tiempo en cada entreno. ",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Crunch en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Crunch en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                        imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
                    },
                    {
                        name: "Press Pallof Excéntrico Unilat en Polea",
                        subOrder: 2,
                        sets: 3,
                        reps: "8",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/r89c9qr-CB0",
                        imageUrl: "https://i.ytimg.com/vi/r89c9qr-CB0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Elevación Lateral Unilat en Polea Alta": [
        { name: "Elevaciones Laterales con Mancuernas", videoUrl: "https://youtu.be/rhmW_fhB4cs", imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg" }
    ],
    "Press Militar en Multipower": [
        { name: "Press Militar con Barra Sentado (Half Press)", videoUrl: "https://www.youtube.com/watch?v=q0C0BaHITAc", imageUrl: "https://i.ytimg.com/vi/q0C0BaHITAc/mqdefault.jpg" }
    ],
    "Sentadilla Posterior en Máquina Jaca": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Patada de Glúteo en Polea": [
        { name: "Remo Gironda Sentado en Polea", videoUrl: "", imageUrl: "" }
    ],
    "Remo en Máquina T Agarre Estrecho": [
        { name: "Remo Gironda Sentado en Polea", videoUrl: "", imageUrl: "" }
    ]
};
