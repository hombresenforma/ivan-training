// Titulo: P11_3+1_TorPierTor_TWS_CLUTERS_1_HOME
// Notas: Trabajo por CLUSTERS y SERIES AL FALLO.
// For Time 21,15,9 + Trabajo de abdomen POLEA
// Contenido de app_datos.js
// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================

const workoutData = {
    "dia1": {
        name: "Torso Empuje",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado con Barra",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "6, 6, 25",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ",
                imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Jalón al Pecho en Polea",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vY",
                imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Flexiones + Mountain Climbers",
                sets: 3,
                reps: "FALLO",
                rest: "90s",
                notes: "Sin parar. Cuando necesites parar, cortamos ahí la serie.",
                videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
            },
            {
                order: 5,
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
                        name: "Worm + Flexión",
                        subOrder: 2,
                        sets: 1,
                        reps: "5",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
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
                name: "Worm + Flexión",
                sets: 2,
                reps: "6",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Trasera con Barra Talones Elevados",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "6, 6, 25",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/FYuU4CAAT1I",
                imageUrl: "https://i.ytimg.com/vi/FYuU4CAAT1I/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 3,
                reps: "16",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
                sets: 2,
                reps: "FALLO",
                rest: "90s",
                notes: "2 series AL FALLO (Con peso para hacer unas 15 reps teóricas). Anota las repeticiones. ",
                videoUrl: "https://www.youtube.com/shorts/tNu9bm3geqY",
                imageUrl: "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
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
        name: "Torso Tracción",
        exercises: [
            {
                order: 1,
                name: "Remo Seal con Mancuernas",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "6, 6, 25",
                rest: "120s",
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Dominadas Australianas en TRX",
                sets: 3,
                reps: "FALLO",
                rest: "90s",
                notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            },
            {
                order: 5,
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
                        name: "Worm",
                        subOrder: 2,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Sit Up",
                        subOrder: 3,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        videoUrl: "https://youtu.be/fXgBSdee8QU",
                        imageUrl: "https://i.ytimg.com/vi/fXgBSdee8QU/mqdefault.jpg"
                    }
                ],
                notes: "Objetivo: Mejorar el tiempo en cada entreno. ",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Pallof Excéntrico con Banda Elástica",
                isSuperset: true,
                items: [
                    {
                        name: "Press Pallof Excéntrico con Banda Elástica",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "10 por lado",
                        videoUrl: "https://www.youtube.com/shorts/K4zseqb-hvo",
                        imageUrl: "https://i.ytimg.com/vi/K4zseqb-hvo/mqdefault.jpg"
                    }
                ],
                notes: "10 por lado",
                videoUrl: "https://www.youtube.com/shorts/K4zseqb-hvo",
                imageUrl: "https://i.ytimg.com/vi/K4zseqb-hvo/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca Inclinado con Barra": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ", imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg" }
    ],
    "Sentadilla Trasera con Barra Talones Elevados": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Zancada Trasera Alterna con Mancuernas/KTB": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Remo Seal con Mancuernas": [
        { name: "Remo Gironda Sentado en Polea", videoUrl: "", imageUrl: "" }
    ],
    "Press Banca con Mancuernas": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ]
};
