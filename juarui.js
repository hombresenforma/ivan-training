// Titulo: p2_4d_fbcardio

const workoutData = {
    "dia1": {
        name: "Fullbody Anterior",
        exercises: [
            {
                order: 1,
                name: "Press Banca en Multipower",
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/w-5ovE5O5iU",
                imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 4,
                reps: "12",
                rest: "60s",
                notes: "Las piernas bajan hasta que las rodillas hagan un ángulo de 90º",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Pike Push-Up",
                sets: 3,
                reps: "8",
                rest: "60",
                notes: "Quedarte a 3 repeticiones del fallo muscular",
                videoUrl: "https://youtu.be/5d8ft4ktyeA",
                imageUrl: "https://i.ytimg.com/vi/5d8ft4ktyeA/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Zancadas Caminando con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 4,
                        reps: "16",
                        isSupersetStart: true,
                        notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    }
                ],
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fullbody Posterior",
        exercises: [
            {
                order: 1,
                name: "Dominadas Australianas con Pies en el Suelo",
                sets: 4,
                reps: "12",
                rest: "90s",
                notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Búlgara con Mancuerna o KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/kA6bHiDdTO4",
                        imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 2,
                        sets: 3,
                        reps: "90s",
                        notes: "Espalda y pecho recto, sin doblar la espalda",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Martillo con Mancuernas",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Dominadas Australianas en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas Australianas en TRX",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                        imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Burpees con Jumping Jacks",
                        subOrder: 2,
                        sets: 4,
                        reps: "5",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/A21AiXaXi40",
                        imageUrl: "https://i.ytimg.com/vi/A21AiXaXi40/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Mancuernas",
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Jalón al Pecho en Polea",
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vY",
                imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Activación - Push Up Walk - Caminada Sueca",
                isSuperset: true,
                items: [
                    {
                        name: "Activación - Push Up Walk - Caminada Sueca",
                        subOrder: 1,
                        sets: 4,
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/xjgdNAK8l_A",
                        imageUrl: "https://i.ytimg.com/vi/xjgdNAK8l_A/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 2,
                        sets: 4,
                        reps: "12, 10, 8",
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 3,
                        sets: 4,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/xjgdNAK8l_A",
                imageUrl: "https://i.ytimg.com/vi/xjgdNAK8l_A/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Fullbody TRX y peso corporal",
        exercises: [
            {
                order: 1,
                name: "Movilidad - Activación de Cadera",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Movilidad - Activación de Cadera",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Haz los ejercicios y repeticiones del vídeo",
                        videoUrl: "https://youtu.be/ltzWjXiHXao",
                        imageUrl: "https://i.ytimg.com/vi/ltzWjXiHXao/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - Cintura Escapular",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        videoUrl: "https://youtu.be/qFt3RmTDmXI",
                        imageUrl: "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - Activación de Escápulas",
                        subOrder: 3,
                        sets: 2,
                        reps: "10",
                        rest: "20s",
                        videoUrl: "https://youtu.be/6Kj_rg_7tYQ",
                        imageUrl: "https://i.ytimg.com/vi/6Kj_rg_7tYQ/mqdefault.jpg"
                    }
                ],
                notes: "Haz los ejercicios y repeticiones del vídeo",
                videoUrl: "https://youtu.be/ltzWjXiHXao",
                imageUrl: "https://i.ytimg.com/vi/ltzWjXiHXao/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Face Pull con TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Face Pull con TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                        imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 2,
                        sets: 3,
                        reps: "15\"",
                        rest: "45s",
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Flexiones / Push Ups en TRX / Anillas",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "Mantener espalda recta y glúteo apretado (retroversión de cadera)\nTambién puedes hacerla con los pies en el suelo. Cuanto más paralelo al suelo estés mayor la intensidad (como en el vídeo).",
                videoUrl: "https://www.youtube.com/watch?v=i8tpN3KPXLE",
                imageUrl: "https://i.ytimg.com/vi/i8tpN3KPXLE/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo en TRX",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "10 repeticiones con cada pierna",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 8,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "Worm",
                        subOrder: 1,
                        sets: 1,
                        reps: "20",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Burpee Completo",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/qfBhsTabWN0",
                        imageUrl: "https://i.ytimg.com/vi/qfBhsTabWN0/mqdefault.jpg"
                    },
                    {
                        name: "Jumping Jack",
                        subOrder: 3,
                        sets: 1,
                        reps: "20",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/K5PMB8CauGM",
                        imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Sumo con Peso Corporal",
                        subOrder: 4,
                        sets: 1,
                        reps: "20",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/gJRjDiTSPYk",
                        imageUrl: "https://i.ytimg.com/vi/gJRjDiTSPYk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca en Multipower": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ],
    "Dominadas Australianas con Pies en el Suelo": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ],
    "Press Banca con Mancuernas": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ],
    "Jalón al Pecho en Polea": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ]
};