// Titulo: P11_3+1_TorPierTor_TWS_TSBACKOFF_2 (FEM)
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
                reps: "12, 10, 8, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/FYuU4CAAT1I",
                imageUrl: "https://i.ytimg.com/vi/FYuU4CAAT1I/mqdefault.jpg"
            },
            {
                order: 4,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Prensa Inclinada en Máquina de Discos",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                        imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
                    },
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Fondos de Tríceps con Pies Elevados",
                isSuperset: true,
                items: [
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica + Sentadilla",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=kRm4s1Aemew",
                        imageUrl: "https://i.ytimg.com/vi/kRm4s1Aemew/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Elevaciones Laterales con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    },
                    {
                        name: "Press Pallof Alterno con Rotación en Polea",
                        subOrder: 2,
                        sets: 2,
                        reps: "16",
                        rest: "60s",
                        videoUrl: "https://youtube.com/shorts/vqBP-GHoW5k",
                        imageUrl: "https://i.ytimg.com/vi/vqBP-GHoW5k/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/rhmW_fhB4cs",
                imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Tracción Completa",
        exercises: [
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
                reps: "12, 10, 8, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 4,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Jalón al Pecho Supino en Polea",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/rimdRzyIJkA",
                        imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Martillo con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Pull Over en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Pull Over en Polea Alta",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/zWGbrVxoUpk",
                        imageUrl: "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Cuerda en Polea Baja",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                        imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/zWGbrVxoUpk",
                imageUrl: "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Piernas",
        exercises: [
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
                name: "Box Step Up Unilat con Mancuerna/KTB",
                sets: 4,
                reps: "12, 10, 8, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/8gFbFqy2Y7s",
                imageUrl: "https://i.ytimg.com/vi/8gFbFqy2Y7s/mqdefault.jpg"
            },
            {
                order: 4,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Curl Femoral Sentado en Máquina",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                        imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Soft Swing",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                        imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Cuádriceps en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Cuádriceps en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/tNu9bm3geqY",
                        imageUrl: "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
                    }
                ],
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Patada de Glúteo en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Patada de Glúteo en Polea",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Usa un disco o step para elevar el otro pie",
                        videoUrl: "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                        imageUrl: "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg"
                    },
                    {
                        name: "Hollow Abdominal Encogido",
                        subOrder: 2,
                        sets: 2,
                        reps: "45s",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/shorts/DUYZEFKjYxs",
                        imageUrl: "https://i.ytimg.com/vi/DUYZEFKjYxs/mqdefault.jpg"
                    }
                ],
                notes: "Usa un disco o step para elevar el otro pie",
                videoUrl: "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                imageUrl: "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "FULLBODY 2",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                setTechniques: {"1":"REST-PAUSE","2":"REST-PAUSE","3":"REST-PAUSE","4":"REST-PAUSE"},
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Gorilla Row con Kettlebells/Mancuernas",
                setTechniques: {"1":"REST-PAUSE","2":"REST-PAUSE","3":"REST-PAUSE","4":"REST-PAUSE"},
                sets: 4,
                reps: "16, 12, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/4hKPsdWsXl8",
                imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Floor Press con Mancuernas",
                setTechniques: {},
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "20, 16, 12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con TRX",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                        imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "FOR TIME",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 1
                },
                items: [
                    {
                        name: "Devil Press + Thruster Unilat Alterno con Mancuerna",
                        subOrder: 1,
                        reps: "40",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/shorts/piy1aNq2Tjw",
                        imageUrl: "https://i.ytimg.com/vi/piy1aNq2Tjw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/piy1aNq2Tjw",
                imageUrl: "https://i.ytimg.com/vi/piy1aNq2Tjw/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Militar en Multipower": [
        { name: "Press Militar con Barra Sentado (Half Press)", videoUrl: "https://www.youtube.com/watch?v=q0C0BaHITAc", imageUrl: "https://i.ytimg.com/vi/q0C0BaHITAc/mqdefault.jpg" }
    ],
    "Remo en Máquina T Agarre Estrecho": [
        { name: "Remo Gironda Sentado en Polea", videoUrl: "", imageUrl: "" }
    ],
    "Sentadilla Posterior en Máquina Jaca": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Box Step Up Unilat con Mancuerna/KTB": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ]
};
