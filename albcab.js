// Titulo: P3 FB 01

const workoutData = {
    "dia1": {
        name: "DÍA 1: Fullbody - base",
        exercises: [
            {
                order: 1,
                name: "Sentadilla con Peso Corporal",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla con Peso Corporal",
                        subOrder: 1,
                        sets: 2,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/NWes6fd1Sxs",
                        imageUrl: "https://i.ytimg.com/vi/NWes6fd1Sxs/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 2,
                        sets: 2,
                        reps: "20",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/NWes6fd1Sxs",
                imageUrl: "https://i.ytimg.com/vi/NWes6fd1Sxs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Banca con Mancuernas",
                setTechniques: {"4":"DROPSET"},
                sets: 4,
                reps: "8-10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Peso Muerto Rumano con Mancuernas/KTB",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "Espalda recta en todo momento",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Elevaciones Laterales con Mancuernas",
                sets: 3,
                reps: "12-15",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/rhmW_fhB4cs",
                imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
            },
            {
                order: 8,
                name: "Plancha - Normal",
                sets: 3,
                reps: "30-40seg",
                rest: "60s",
                notes: "Mantener espalda recta y glúteo apretado (retroversión de cadera)",
                videoUrl: "https://youtu.be/DQ4wYExQRJo",
                imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
            },
            {
                order: 8,
                name: "CARDIO - Correr (Suave)",
                sets: 1,
                reps: "10min",
                rest: "60s",
                notes: "Andar, con inclinación 5 a velocidad 5-6 durante 10 min",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "DÍA 2: Full Body ",
        exercises: [
            {
                order: 1,
                name: "Worm",
                isSuperset: true,
                items: [
                    {
                        name: "Worm",
                        subOrder: 1,
                        sets: 2,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 2,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
                        imageUrl: "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Hip Thrust con Barra (ExPLICADO)",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Gironda en Polea",
                setTechniques: {"4":"DROPSET"},
                sets: 4,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/11xkWdyYWus",
                imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar Sentado con Mancuernas",
                sets: 3,
                reps: "8-10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Zancadas Caminando con Mancuernas/KTB",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Face Pull en Polea",
                sets: 3,
                reps: "12-15",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo",
                imageUrl: "https://i.ytimg.com/vi/tZN8KYDSCRo/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Extensión de Tríceps Unilat en Polea",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/yH6WAUNKO6c",
                imageUrl: "https://i.ytimg.com/vi/yH6WAUNKO6c/mqdefault.jpg"
            },
            {
                order: 8,
                name: "Crunch - Normal",
                sets: 2,
                reps: "10-12",
                rest: "60s",
                notes: "Mantén la Lumbar pegada al suelo",
                videoUrl: "https://youtu.be/wNqGgCjBVaE",
                imageUrl: "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg"
            },
            {
                order: 9,
                name: "CARDIO - Correr (Suave)",
                sets: 1,
                reps: "10min",
                rest: "60s",
                notes: "Andar con inclinación 5 a velocidad 5-6 durante 10 min",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Hitt",
        exercises: [
            {
                order: 1,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 2,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Jumping Jack",
                        subOrder: 1,
                        sets: 1,
                        reps: "30",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/K5PMB8CauGM",
                        imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
                        imageUrl: "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
                    },
                    {
                        name: "Burpee Completo",
                        subOrder: 3,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/qfBhsTabWN0",
                        imageUrl: "https://i.ytimg.com/vi/qfBhsTabWN0/mqdefault.jpg"
                    },
                    {
                        name: "Mountain Climber",
                        subOrder: 4,
                        sets: 1,
                        reps: "30",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/GZWmYzClS3s",
                        imageUrl: "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/K5PMB8CauGM",
                imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};
