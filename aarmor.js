// Titulo: P11_3+1_TorPierTor_TWS_CLUTERS_1
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
                name: "Press Banca Inclinado en Multipower",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "6, 6, 25",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
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
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Intervalos EMPUJE",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "CARDIO - Correr (Suave)",
                        subOrder: 1,
                        sets: 1,
                        reps: "60s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    },
                    {
                        name: "Press de Pecho con TRX+Banda",
                        subOrder: 2,
                        sets: 1,
                        reps: "60s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/LiELGmB9MGk",
                        imageUrl: "https://i.ytimg.com/vi/LiELGmB9MGk/mqdefault.jpg"
                    }
                ],
                notes: "Puedes hacerlo al aire libre si lo prefieres.",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
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
                name: "Sentadilla Anterior en Máquina Jaca",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "6, 6, 25",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/saLWdiUe5eE",
                imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Cuádriceps en Máquina",
                sets: 2,
                reps: "FALLO",
                rest: "90s",
                notes: "2 series AL FALLO (Con peso para hacer entre 12 y 15 reps teóricas). Anota las repeticiones. ",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Tumbado en Máquina",
                sets: 2,
                reps: "FALLO",
                rest: "90s",
                notes: "2 series AL FALLO (Con peso para hacer entre 12 y 15 reps teóricas). Anota las repeticiones. ",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Intervalos PIERNA",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "CARDIO - Correr (Suave)",
                        subOrder: 1,
                        sets: 1,
                        reps: "60s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    },
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 2,
                        sets: 1,
                        reps: "60s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    }
                ],
                notes: "Puedes hacerlo al aire libre si lo prefieres.",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso Tracción",
        exercises: [
            {
                order: 1,
                name: "Remo en Máquina T Agarre Estrecho",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "6, 6, 25",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
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
                order: 3,
                name: "Dominadas Supinas Asistidas en Máquina",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/E9DT2pv7Rp0",
                imageUrl: "https://i.ytimg.com/vi/E9DT2pv7Rp0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Dominadas Australianas con Pies en el Suelo",
                sets: 3,
                reps: "FALLO",
                rest: "90s",
                notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Intervalos TRACCIÓN",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "CARDIO - Correr (Suave)",
                        subOrder: 1,
                        sets: 1,
                        reps: "60s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    },
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 2,
                        sets: 1,
                        reps: "60s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    }
                ],
                notes: "Puedes hacerlo al aire libre si lo prefieres.",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
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
    "Press Banca Inclinado en Multipower": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ", imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg" }
    ],
    "Sentadilla Anterior en Máquina Jaca": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Curl Femoral Tumbado en Máquina": [
        { name: "Curl Femoral Tumbado en Máquina", videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM", imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg" }
    ],
    "Remo en Máquina T Agarre Estrecho": [
        { name: "Remo Gironda Sentado en Polea", videoUrl: "https://www.youtube.com/shorts/jFR7oYwgy5s", imageUrl: "https://i.ytimg.com/vi/jFR7oYwgy5s/mqdefault.jpg" }
    ],
    "Press Banca con Mancuernas": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
