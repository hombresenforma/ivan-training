// Titulo: P4_3D_APTOR_HIIT_2
// Notas: - Añadimos 2 ejercicios en super-serie antes del HIIT.
// - HIIT 1:1 y añadimos 2 vueltas más (6).
// - En el día de Torso, añadimos 1 serie a los 2 básicos de brazos. 
// Contenido de app_datos.js
// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================

const workoutData = {
    "dia1": {
        name: "Anterior HIIT",
        exercises: [
            {
                order: 1,
                name: "Flexiones con Peso Corporal",
                sets: 2,
                reps: "50",
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
                        sets: 4,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/FK5XU_gaxAE",
                        imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica",
                        subOrder: 2,
                        sets: 4,
                        reps: "24",
                        notes: "12 por lado.",
                        rest: "60s",
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
                name: "Press Militar en Multipower",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar en Multipower",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                        imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 3,
                        sets: 3,
                        reps: "12",
                        rest: "60s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Cuádriceps en Máquina",
                sets: 4,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 6,
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
                        name: "CARDIO - Bicicleta (Ritmo Suave)",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=r6iTJGOftHY",
                        imageUrl: "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg"
                    }
                ],
                notes: "Haz el descanso a ritmo suave, pero no pares.",
                videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Posterior HIIT",
        exercises: [
            {
                order: 1,
                name: "Extensión de Cuádriceps en Máquina",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas Asistidas en Máquina",
                sets: 2,
                reps: "50",
                rest: "120s",
                notes: "Pon el 50% de tu peso corporal y haz las máximas repeticiones.",
                videoUrl: "https://www.youtube.com/shorts/5OGBlINLP6w",
                imageUrl: "https://i.ytimg.com/vi/5OGBlINLP6w/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 4,
                        reps: "16",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
                        imageUrl: "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 4,
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
                        rest: "60s",
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
                name: "Curl Femoral Tumbado en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral Tumbado en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                        imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "60s",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            },
            {
                order: 6,
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
            }
        ]
    },
    "dia3": {
        name: "Torso HIIT",
        exercises: [
            {
                order: 1,
                name: "Curl Scott con Barra Z",
                sets: 4,
                reps: "8-10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Fondos en Paralelas con Peso Corporal",
                sets: 4,
                reps: "8-10",
                rest: "60s",
                notes: "Utiliza la máquina asistida o banda elástica si lo necesitas. ",
                videoUrl: "https://youtube.com/shorts/om9U8WY5HoY",
                imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
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
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/watch?v=6K5n0Lja4Uc",
                        imageUrl: "https://i.ytimg.com/vi/6K5n0Lja4Uc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 4,
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
                        rest: "60s",
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
        name: "Entreno vacaciones",
        exercises: [
            {
                order: 1,
                name: "Kettlebell - Press Militar",
                isSuperset: true,
                items: [
                    {
                        name: "Kettlebell - Press Militar",
                        subOrder: 1,
                        sets: 2,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/CCgU8PLMcdI",
                        imageUrl: "https://i.ytimg.com/vi/CCgU8PLMcdI/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Spider Climber",
                        subOrder: 3,
                        sets: 2,
                        reps: "16",
                        videoUrl: "https://youtu.be/bzzJ0zeO70A",
                        imageUrl: "https://i.ytimg.com/vi/bzzJ0zeO70A/mqdefault.jpg"
                    },
                    {
                        name: "Jumping Jack",
                        subOrder: 4,
                        sets: 2,
                        reps: "20",
                        rest: "45s",
                        videoUrl: "https://youtu.be/K5PMB8CauGM",
                        imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/CCgU8PLMcdI",
                imageUrl: "https://i.ytimg.com/vi/CCgU8PLMcdI/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Box Glute Step Up Unilat con Mancuerna/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Box Glute Step Up Unilat con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 4,
                        reps: "16",
                        isSupersetStart: true,
                        notes: "Lo puedes hacer con una silla",
                        videoUrl: "https://youtube.com/shorts/h73RCZp007M",
                        imageUrl: "https://i.ytimg.com/vi/h73RCZp007M/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 3",
                        subOrder: 2,
                        sets: 4,
                        reps: "15s",
                        rest: "60s",
                        videoUrl: "https://youtu.be/I6YISGE4Uvo",
                        imageUrl: "https://i.ytimg.com/vi/I6YISGE4Uvo/mqdefault.jpg"
                    }
                ],
                notes: "Lo puedes hacer con una silla",
                videoUrl: "https://youtube.com/shorts/h73RCZp007M",
                imageUrl: "https://i.ytimg.com/vi/h73RCZp007M/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Flexiones / Push Ups",
                isSuperset: true,
                items: [
                    {
                        name: "Flexiones / Push Ups",
                        subOrder: 1,
                        sets: 4,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk",
                        imageUrl: "https://i.ytimg.com/vi/GFUw7S0wDxk/mqdefault.jpg"
                    },
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 2,
                        sets: 4,
                        reps: "20",
                        notes: "10 con cada brazo",
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Sumo con Mancuerna/Kettlebell",
                        subOrder: 3,
                        sets: 4,
                        reps: "20",
                        rest: "45s",
                        videoUrl: "https://youtu.be/ifBHyfgLe8k",
                        imageUrl: "https://i.ytimg.com/vi/ifBHyfgLe8k/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk",
                imageUrl: "https://i.ytimg.com/vi/GFUw7S0wDxk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl con Mancuernas de Pie",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Mancuernas de Pie",
                        subOrder: 1,
                        sets: 4,
                        reps: "12",
                        isSupersetStart: true,
                        notes: "12 repeticiones por lado",
                        videoUrl: "https://youtu.be/8STuQuoDMR0",
                        imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
                    },
                    {
                        name: "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
                        subOrder: 2,
                        sets: 4,
                        reps: "12",
                        rest: "30s",
                        videoUrl: "https://youtu.be/1MgU2PO4_rI",
                        imageUrl: "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
                    }
                ],
                notes: "12 repeticiones por lado",
                videoUrl: "https://youtu.be/8STuQuoDMR0",
                imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Militar en Multipower": [
        { name: "Press Militar Sentado con Mancuernas (Explicado)", videoUrl: "", imageUrl: "" }
    ],
    "Curl Femoral Tumbado en Máquina": [
        { name: "Curl Femoral Sentado en Máquina", videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4", imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg" }
    ],
    "Curl Scott con Barra Z": [
        { name: "Curl Araña con Barra Z", videoUrl: "https://www.youtube.com/shorts/ZGa2E8bi9Eg", imageUrl: "https://i.ytimg.com/vi/ZGa2E8bi9Eg/mqdefault.jpg" }
    ]
};
