// Titulo: P11_3+1_TorPierTor_TWS_CLUTERS_1_HOME
// Notas: Trabajo por CLUSTERS y SERIES AL FALLO.\n// Adaptado para muñecas débiles y hombro sensible: sin impacto, sin apoyos de manos en el suelo y sin presses sobre la cabeza.\n// For Time 21,15,9 de bajo impacto + trabajo de abdomen

const workoutData = {
    "dia1": {
        name: "Torso Empuje",
        exercises: [
            {
                order: 1,
                name: "Floor Press con Mancuernas",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "8, 8, 25",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo con Banda Elástica",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Ujn1NciaFII",
                imageUrl: "https://i.ytimg.com/vi/Ujn1NciaFII/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Elevaciones Laterales con Mancuernas",
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "Usa carga ligera y un recorrido cómodo, sin dolor en el hombro.",
                videoUrl: "https://youtu.be/rhmW_fhB4cs",
                imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Inclinado con Mancuernas",
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "Agarre neutro y recorrido cómodo. Detén la serie si aparece molestia en el hombro.",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
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
                        name: "Press Francés con Mancuernas en Banco Inclinado",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/L__Q6Jl9Ics",
                        imageUrl: "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 3,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
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
                name: "Movilidad - Activación de Cadera",
                isWarmup: true,
                sets: 2,
                reps: "10",
                rest: "60s",
                notes: "Haz los ejercicios y repeticiones del vídeo, sin apoyar las manos en el suelo si genera molestia.",
                videoUrl: "https://youtu.be/ltzWjXiHXao",
                imageUrl: "https://i.ytimg.com/vi/ltzWjXiHXao/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "8, 8, 25",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
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
                        reps: "16",
                        isEMOMItem: true,
                        notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
                        subOrder: 2,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/tNu9bm3geqY",
                        imageUrl: "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
                    },
                    {
                        name: "Crunch Abdominal Piernas Extendidas",
                        subOrder: 3,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/TYNp3OsGKL0",
                        imageUrl: "https://i.ytimg.com/vi/TYNp3OsGKL0/mqdefault.jpg"
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
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "8, 8, 25",
                rest: "120s",
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
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
                        reps: "10",
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
                        name: "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
                        subOrder: 3,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                        imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "FOR TIME BAJO IMPACTO - ABS CARGA",
        exercises: [
            {
                order: 1,
                name: "FOR TIME (Sentadilla+Remo+SitUp)",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 3
                },
                items: [
                    {
                        name: "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
                        subOrder: 1,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        notes: "Objetivo: Mejorar el tiempo en cada entreno. ",
                        videoUrl: "https://www.youtube.com/shorts/tNu9bm3geqY",
                        imageUrl: "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
                    },
                    {
                        name: "Remo con Banda Elástica",
                        subOrder: 2,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/shorts/Ujn1NciaFII",
                        imageUrl: "https://i.ytimg.com/vi/Ujn1NciaFII/mqdefault.jpg"
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
};


