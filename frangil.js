// Titulo: P4_3D_APTOR_HIIT_1

const workoutData = {
    "dia1": {
        name: "Anterior HIIT",
        exercises: [
            {
                order: 1,
                name: "Flexiones con Peso Corporal",
                sets: 3,
                reps: "FALLO",
                rest: "120s",
                notes: "MÁXIMAS REPETICIONES (AL FALLO)",
                videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Trasera con Barra",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Trasera con Barra",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/FK5XU_gaxAE",
                        imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica",
                        subOrder: 2,
                        sets: 3,
                        reps: "24",
                        notes: "12 por lado.",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                        imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "HIIT 1:1",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 5,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "CARDIO - Correr (Sprint)",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Haz el descanso a ritmo suave, pero no pares.",
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Correr (Sprint)",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "Haz el descanso a ritmo suave, pero no pares.",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Crunch en Polea Alta",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Posterior HIIT",
        exercises: [
            {
                order: 1,
                name: "Dominadas / Pull Ups asistidas con Goma",
                sets: 3,
                reps: "FALLO",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=pll4AdUg17g",
                imageUrl: "https://i.ytimg.com/vi/pll4AdUg17g/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "16",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
                        imageUrl: "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                        imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                        imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 5,
                name: "HIIT 1:1",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 5,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Haz el descanso a ritmo suave, pero no pares.",
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    }
                ],
                notes: "Haz el descanso a ritmo suave, pero no pares.",
                videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Pallof Unilat con Rotación en Polea",
                sets: 3,
                reps: "8",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/5lo528rQAx8",
                imageUrl: "https://i.ytimg.com/vi/5lo528rQAx8/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso HIIT",
        exercises: [
            {
                order: 1,
                name: "Dead Curl con Barra",
                sets: 4,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/HWs4EYCI8iE",
                imageUrl: "https://i.ytimg.com/vi/HWs4EYCI8iE/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Fondos en Paralelas Lastrados",
                sets: 4,
                reps: "8-10",
                rest: "90s",
                notes: "Utiliza la máquina asistida o banda elástica si lo necesitas. ",
                videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Thruster con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones Diamante / Diamond Pushups",
                        subOrder: 3,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=6K5n0Lja4Uc",
                        imageUrl: "https://i.ytimg.com/vi/6K5n0Lja4Uc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Gorilla Row con Kettlebells/Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "16",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    },
                    {
                        name: "Muscle Snatch Unilat con Mancuerna/KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/00FzH7YaDwc",
                        imageUrl: "https://i.ytimg.com/vi/00FzH7YaDwc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4hKPsdWsXl8",
                imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
            },
            {
                order: 5,
                name: "HIIT 1:1",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 5,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    },
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Metabólico + Abs ",
        exercises: [
            {
                order: 2,
                name: "FOR TIME",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 6
                },
                items: [
                    {
                        name: "Snatch + Thruster Unilat Alterno con Mancuerna",
                        subOrder: 1,
                        reps: "12, 10, 8, 6, 4, 2",
                        isForTimeItem: true,
                        notes: "Alterna entre brazos",
                        videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                        imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade + Flexión con Mancuernas",
                        subOrder: 2,
                        reps: "12, 10, 8, 6, 4, 2",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/shorts/hLPJik1MaaY",
                        imageUrl: "https://i.ytimg.com/vi/hLPJik1MaaY/mqdefault.jpg"
                    },
                    {
                        name: "Burpee sin Flexión",
                        subOrder: 3,
                        reps: "12, 10, 8, 6, 4, 2",
                        isForTimeItem: true,
                        videoUrl: "https://youtu.be/_liq4fAscDU",
                        imageUrl: "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
                    }
                ],
                notes: "Alterna entre brazos",
                videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Circuito Abdominal",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Mountain Climber",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/GZWmYzClS3s",
                        imageUrl: "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Lateral Piernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/jjoqs9YMyrM",
                        imageUrl: "https://i.ytimg.com/vi/jjoqs9YMyrM/mqdefault.jpg"
                    },
                    {
                        name: "Crunch Abdominal Piernas Extendidas",
                        subOrder: 3,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/TYNp3OsGKL0",
                        imageUrl: "https://i.ytimg.com/vi/TYNp3OsGKL0/mqdefault.jpg"
                    },
                    {
                        name: "Hollow Abdominal con Brazos a los Lados",
                        subOrder: 4,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/Ewp7N3-NYAY",
                        imageUrl: "https://i.ytimg.com/vi/Ewp7N3-NYAY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/GZWmYzClS3s",
                imageUrl: "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Dominadas / Pull Ups asistidas con Goma": [
        { name: "Jalón al Pecho en Polea", videoUrl: "https://youtu.be/GYIhmy1P4vY", imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg" }
    ],
    "Dead Curl con Barra": [
        { name: "Curl con Barra Recta", videoUrl: "https://youtu.be/0TjnWWqQfUw", imageUrl: "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg" }
    ],
    "Fondos en Paralelas Lastrados": [
        { name: "Fondos en Paralelas con Peso Corporal", videoUrl: "https://youtube.com/shorts/om9U8WY5HoY", imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg" }
    ]
};
