// Titulo: P9_3D_FULLBODY_1

const workoutData = {
    "dia1": {
        name: "Fullbody 1 (PUSH)",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado en Multipower",
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Zancadas Caminando con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Diagonal Unilat en Polea Alta",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/ikKQhcynKmg",
                imageUrl: "https://i.ytimg.com/vi/ikKQhcynKmg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar con Mancuernas Agarre Neutro",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=C6NaHhnQavs",
                imageUrl: "https://i.ytimg.com/vi/C6NaHhnQavs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Fondos en Paralelas con Peso Corporal",
                isSuperset: true,
                items: [
                    {
                        name: "Fondos en Paralelas con Peso Corporal",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/om9U8WY5HoY",
                        imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
                    },
                    {
                        name: "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "60s",
                        videoUrl: "https://youtu.be/1MgU2PO4_rI",
                        imageUrl: "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/om9U8WY5HoY",
                imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fullbody 2 (PULL) ",
        exercises: [
            {
                order: 1,
                name: "Dominadas con Peso Corporal",
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "Lastra con peso si puedes",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Banca con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/hXCJC2Apcdg",
                        imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Hip Thrust con Barra (ExPLICADO)",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Scott con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Scott con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                        imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "60s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody 3 (LEGS)",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Anterior en Máquina Jaca",
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "Lastra con peso si puedes",
                videoUrl: "https://youtube.com/shorts/saLWdiUe5eE",
                imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo Seal con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Seal con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        notes: "Trata de despegar el pecho al final del movimiento",
                        videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                        imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
                    }
                ],
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
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
                name: "Curl Femoral Tumbado en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral Tumbado en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                        imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet + Sentadilla Sumo con KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        notes: "10 de cada (20 en total)",
                        rest: "60s",
                        videoUrl: "https://youtu.be/oz1SagvDVe8",
                        imageUrl: "https://i.ytimg.com/vi/oz1SagvDVe8/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca Inclinado en Multipower": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ", imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg" }
    ],
    "Dominadas con Peso Corporal": [
        { name: "Jalón al Pecho en Polea", videoUrl: "https://youtu.be/GYIhmy1P4vY", imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg" }
    ],
    "Sentadilla Anterior en Máquina Jaca": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ]
};