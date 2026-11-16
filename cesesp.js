// Titulo: P4_3D_APTOR_HIIT_1
// Notas: Estructura con pocos ejercicios y un HIIT 1:2 al final.

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================

const workoutData = {
    "dia1": {
        "name": "Anterior HIIT",
        "exercises": [
            {
                "order": 1,
                "name": "Flexiones con Peso Corporal",
                "sets": 2,
                "reps": "100",
                "rest": "120s",
                "notes": "MÁXIMAS REPETICIONES (AL FALLO)",
                "videoUrl": "https://www.youtube.com/shorts/jqnnetMI-4s",
                "imageUrl": "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Sentadilla Trasera con Barra",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Sentadilla Trasera con Barra",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "15",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/FK5XU_gaxAE",
                        "imageUrl": "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
                    },
                    {
                        "name": "Zancada Dinámica",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "24",
                        "notes": "12 por lado.",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        "imageUrl": "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/FK5XU_gaxAE",
                "imageUrl": "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Press Militar en Multipower",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Press Militar en Multipower",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "12",
                        "isSupersetStart": true,
                        "videoUrl": "https://www.youtube.com/watch?v=iATqshmFPnI",
                        "imageUrl": "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
                    },
                    {
                        "name": "Fondos de Tríceps con Pies en el Suelo",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "12",
                        "rest": "90s",
                        "videoUrl": "https://youtube.com/shorts/7mpEJQC_gRk",
                        "imageUrl": "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg",
                        "notes": ""
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=iATqshmFPnI",
                "imageUrl": "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "HIIT 1:2",
                "isSuperset": true,
                "circuitDetails": {
                    "totalRounds": 2,
                    "restBetweenExercisesSeconds": 60,
                    "restBetweenRoundsSeconds": 60
                },
                "items": [
                    {
                        "name": "CARDIO - Correr (Sprint)",
                        "subOrder": 1,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://youtu.be/KKvRtNn904g",
                        "imageUrl": "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg",
                        "notes": "Puedes hacerlo al aire libre si lo prefieres."
                    },
                    {
                        "name": "CARDIO - Correr (Suave)",
                        "subOrder": 2,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://youtu.be/KKvRtNn904g",
                        "imageUrl": "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg",
                        "notes": "Puedes hacerlo al aire libre si lo prefieres."
                    }
                ],
                "notes": "Haz el descanso a ritmo suave, pero no pares.",
                "videoUrl": "https://youtu.be/KKvRtNn904g",
                "imageUrl": "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        "name": "Posterior HIIT",
        "exercises": [
            {
                "order": 1,
                "name": "Dominadas Asistidas en Máquina",
                "sets": 2,
                "reps": "100",
                "rest": "120s",
                "notes": "Pon el 50% de tu peso corporal y haz las máximas repeticiones.",
                "videoUrl": "https://www.youtube.com/shorts/5OGBlINLP6w",
                "imageUrl": "https://i.ytimg.com/vi/5OGBlINLP6w/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Zancada Trasera Alterna con Mancuernas/KTB",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Zancada Trasera Alterna con Mancuernas/KTB",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "16",
                        "isSupersetStart": true,
                        "videoUrl": "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        "imageUrl": "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    },
                    {
                        "name": "Sentadilla con Salto",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
                        "imageUrl": "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                "imageUrl": "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Remo Unilat con Mancuerna/KTB (Explicado)",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Remo Unilat con Mancuerna/KTB (Explicado)",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
                        "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
                    },
                    {
                        "name": "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "12",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/shorts/HH8uoLbhWSw",
                        "imageUrl": "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
                "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "HIIT 1:2",
                "isSuperset": true,
                "circuitDetails": {
                    "totalRounds": 2,
                    "restBetweenExercisesSeconds": 60,
                    "restBetweenRoundsSeconds": 60
                },
                "items": [
                    {
                        "name": "CARDIO - Bicicleta (Ritmo Fuerte)",
                        "subOrder": 1,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        "imageUrl": "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg",
                        "notes": "Liberación."
                    },
                    {
                        "name": "CARDIO - Bicicleta (Ritmo Suave)",
                        "subOrder": 2,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://www.youtube.com/watch?v=r6iTJGOftHY",
                        "imageUrl": "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg",
                        "notes": ""
                    }
                ],
                "notes": "Haz el descanso a ritmo suave, pero no pares.",
                "videoUrl": "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                "imageUrl": "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        "name": "Torso HIIT",
        "exercises": [
            {
                "order": 1,
                "name": "Curl Scott con Barra Z",
                "sets": 3,
                "reps": "8-10",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                "imageUrl": "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Fondos en Paralelas con Peso Corporal",
                "sets": 3,
                "reps": "8-10",
                "rest": "90s",
                "notes": "Utiliza la máquina asistida o banda elástica si lo necesitas. ",
                "videoUrl": "https://youtube.com/shorts/om9U8WY5HoY",
                "imageUrl": "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Press Militar Sentado con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Press Militar Sentado con Mancuernas",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "12",
                        "isSupersetStart": true,
                        "videoUrl": "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                        "imageUrl": "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg",
                        "notes": ""
                    },
                    {
                        "name": "Curl con Mancuernas Sentado en Banco Inclinado",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "12",
                        "videoUrl": "https://youtu.be/S32a3nYiWko",
                        "imageUrl": "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    },
                    {
                        "name": "Flexiones Agarre Estrecho",
                        "subOrder": 3,
                        "sets": 3,
                        "reps": "12",
                        "rest": "90s",
                        "videoUrl": "https://youtu.be/9o2ldyYStO8",
                        "imageUrl": "https://i.ytimg.com/vi/9o2ldyYStO8/mqdefault.jpg",
                        "notes": ""
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                "imageUrl": "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Remo Contralat Unilat con Mancuerna",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Remo Contralat Unilat con Mancuerna",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtube.com/shorts/O7PAUd4ZMB4",
                        "imageUrl": "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg",
                        "notes": ""
                    },
                    {
                        "name": "Peso Muerto Rumano con Mancuernas/KTB",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "12",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/shorts/SMll4DOYvEs",
                        "imageUrl": "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg",
                        "notes": "Espalda recta en todo momento"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/O7PAUd4ZMB4",
                "imageUrl": "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "HIIT 1:2",
                "isSuperset": true,
                "circuitDetails": {
                    "totalRounds": 2,
                    "restBetweenExercisesSeconds": 60,
                    "restBetweenRoundsSeconds": 60
                },
                "items": [
                    {
                        "name": "Cardio - Remo en Máquina",
                        "subOrder": 1,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        "imageUrl": "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    },
                    {
                        "name": "Assault Bike",
                        "subOrder": 2,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://www.youtube.com/watch?v=AqDZi0p7kN4",
                        "imageUrl": "https://i.ytimg.com/vi/AqDZi0p7kN4/mqdefault.jpg",
                        "notes": ""
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                "imageUrl": "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Militar en Multipower": [
        {
            "name": "Press Militar en Máquina",
            "videoUrl": "https://www.youtube.com/shorts/48CmkF61E7M",
            "imageUrl": "https://i.ytimg.com/vi/48CmkF61E7M/mqdefault.jpg",
            "notes": "Ajusta el asiento y mantén la espalda apoyada. Empuja por encima de la cabeza con control, sin compensar arqueando la zona lumbar."
        }
    ],
    "Curl Scott con Barra Z": [
        {
            "name": "Curl Araña con Barra Z",
            "videoUrl": "https://www.youtube.com/shorts/ZGa2E8bi9Eg",
            "imageUrl": "https://i.ytimg.com/vi/ZGa2E8bi9Eg/mqdefault.jpg",
            "notes": ""
        }
    ]
};