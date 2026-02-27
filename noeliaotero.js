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
                name: "Abducción de Glúteo Unilat en el Suelo",
                setTechniques: {},
                sets: 2,
                reps: "12",
                rest: "60s",
                notes: "Hazlo en máquina",
                videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar en Multipower",
                setTechniques: {},
                sets: 3,
                reps: "6, 12 , 12",
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
                order: 4,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
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
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/tNu9bm3geqY",
                        imageUrl: "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 3,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    }
                ],
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Tracción COMPLETA",
        exercises: [
            {
                order: 1,
                name: "Curl Femoral Tumbado en Máquina",
                sets: 2,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Box Glute Step Up Unilat con Mancuerna/KTB",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/h73RCZp007M",
                imageUrl: "https://i.ytimg.com/vi/h73RCZp007M/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Jalón al Pecho en Polea",
                setTechniques: {},
                sets: 3,
                reps: "12-15",
                rest: "60s",
                notes: "Usa un disco o step para elevar el otro pie",
                videoUrl: "https://youtu.be/GYIhmy1P4vY",
                imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo en Máquina T Agarre Estrecho",
                setTechniques: {},
                sets: 3,
                reps: "6, 12, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 3,
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
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con KTB",
                        subOrder: 3,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Abducción de Glúteo Unilat en el Suelo": [
        { name: "Elevaciones Laterales con Mancuernas", videoUrl: "https://youtu.be/rhmW_fhB4cs", imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg" }
    ],
    "Press Militar en Multipower": [
        { name: "Press Militar con Barra Sentado (Half Press)", videoUrl: "https://www.youtube.com/watch?v=q0C0BaHITAc", imageUrl: "https://i.ytimg.com/vi/q0C0BaHITAc/mqdefault.jpg" }
    ],
    "Jalón al Pecho en Polea": [
        { name: "Remo Gironda Sentado en Polea", videoUrl: "", imageUrl: "" }
    ],
    "Remo en Máquina T Agarre Estrecho": [
        { name: "Remo Gironda Sentado en Polea", videoUrl: "", imageUrl: "" }
    ]
};
