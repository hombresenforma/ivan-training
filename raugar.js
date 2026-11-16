// Titulo: P3_3D_APFB_INOUT_1
// Adaptación HOME con multipower, poleas, barra de dominadas, mancuernas y banco reclinable.

const workoutData = {
    "dia1": {
        "name": "Anterior IN-OUT",
        "exercises": [
            {
                "order": 1,
                "name": "Press Banca Inclinado en Multipower",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "videoUrl": "https://youtu.be/3GS7EjN7KSk",
                "imageUrl": "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Zancada Trasera Alterna con Mancuernas/KTB",
                "sets": 3,
                "reps": "16",
                "rest": "90s",
                "notes": "Usa mancuernas y limita la profundidad a un recorrido cómodo.",
                "videoUrl": "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                "imageUrl": "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
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
                        "reps": "10",
                        "isSupersetStart": true,
                        "videoUrl": "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                        "imageUrl": "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
                    },
                    {
                        "name": "Elevaciones Laterales con Mancuernas",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15",
                        "rest": "90s",
                        "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                        "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                "imageUrl": "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Press Banca en Multipower",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Press Banca en Multipower",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "15, 12, 10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/w-5ovE5O5iU",
                        "imageUrl": "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
                    },
                    {
                        "name": "Extensión de Tríceps en Polea con Barra",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15, 12, 10",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/watch?v=mcae9hNQn50",
                        "imageUrl": "https://i.ytimg.com/vi/mcae9hNQn50/mqdefault.jpg",
                        "notes": "Sujeta la barra de la polea alta en pronación. Extiende los codos llevando la barra hacia abajo, manteniendo los brazos junto al torso y sin balancearte. Controla la vuelta."
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/w-5ovE5O5iU",
                "imageUrl": "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Circuito IN-OUT",
                "isSuperset": true,
                "circuitDetails": {
                    "totalRounds": 4,
                    "restBetweenExercisesSeconds": 30,
                    "restBetweenRoundsSeconds": 30
                },
                "items": [
                    {
                        "name": "Sentadilla Sumo con Peso Corporal",
                        "subOrder": 1,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://youtu.be/gJRjDiTSPYk",
                        "imageUrl": "https://i.ytimg.com/vi/gJRjDiTSPYk/mqdefault.jpg",
                        "notes": "Baja a un recorrido cómodo y mantén el control al subir."
                    },
                    {
                        "name": "Flexiones con Peso Corporal",
                        "subOrder": 2,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://www.youtube.com/shorts/jqnnetMI-4s",
                        "imageUrl": "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/gJRjDiTSPYk",
                "imageUrl": "https://i.ytimg.com/vi/gJRjDiTSPYk/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        "name": "Posterior IN-OUT",
        "exercises": [
            {
                "order": 1,
                "name": "Jalón al Pecho Supino en Polea",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "videoUrl": "https://youtu.be/rimdRzyIJkA",
                "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Peso Muerto Rumano con Mancuernas/KTB",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "notes": "Espalda recta en todo momento",
                "videoUrl": "https://www.youtube.com/shorts/SMll4DOYvEs",
                "imageUrl": "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
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
                        "name": "Pull Over en Polea Alta",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "16",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/shorts/zWGbrVxoUpk",
                        "imageUrl": "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
                "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Face Pull al Cuello en Polea Alta",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Face Pull al Cuello en Polea Alta",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "15, 12, 10",
                        "isSupersetStart": true,
                        "videoUrl": "https://www.youtube.com/shorts/TaTjLum-_qI",
                        "imageUrl": "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg",
                        "notes": "Usa cuerda y lleva las manos hacia el cuello o la cara, separando los extremos. Mantén el tronco estable y controla la vuelta sin balancearte."
                    },
                    {
                        "name": "Curl Martillo con Cuerda en Polea Baja",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15, 12, 10",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/shorts/fSTgTQr1WCk",
                        "imageUrl": "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
                    }
                ],
                "notes": "Usa cuerda y lleva las manos hacia el cuello o la cara, separando los extremos. Mantén el tronco estable y controla la vuelta sin balancearte.",
                "videoUrl": "https://www.youtube.com/shorts/TaTjLum-_qI",
                "imageUrl": "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Circuito IN-OUT. ",
                "isSuperset": true,
                "circuitDetails": {
                    "totalRounds": 4,
                    "restBetweenExercisesSeconds": 30,
                    "restBetweenRoundsSeconds": 30
                },
                "items": [
                    {
                        "name": "Pull Through con Polea o Banda",
                        "subOrder": 1,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "notes": "Hazlo con la polea baja.",
                        "videoUrl": "https://www.youtube.com/shorts/74OJu_puEz0",
                        "imageUrl": "https://i.ytimg.com/vi/74OJu_puEz0/mqdefault.jpg"
                    },
                    {
                        "name": "Dead Bug",
                        "subOrder": 2,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://youtu.be/0CteMtiMChQ",
                        "imageUrl": "https://i.ytimg.com/vi/0CteMtiMChQ/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/shorts/74OJu_puEz0",
                "imageUrl": "https://i.ytimg.com/vi/74OJu_puEz0/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        "name": "Fullbody IN-OUT",
        "exercises": [
            {
                "order": 1,
                "name": "Curl con Mancuernas de Pie",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "videoUrl": "https://youtu.be/8STuQuoDMR0",
                "imageUrl": "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Press Cerrado en Banco Inclinado con Mancuernas",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "videoUrl": "https://youtu.be/tdh7LSxUj1s",
                "imageUrl": "https://i.ytimg.com/vi/tdh7LSxUj1s/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Sentadilla Trasera en Multipower",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "notes": "Empieza con carga moderada y usa un recorrido cómodo para la rodilla.",
                "videoUrl": "https://youtu.be/la-dqygoIuk",
                "imageUrl": "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Curl Martillo con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Curl Martillo con Mancuernas",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "15, 12, 10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/fcFsPoJY9lg",
                        "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        "name": "Extensión Tríceps Trasnuca Unilateral con Mancuerna",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15, 12, 10",
                        "rest": "90s",
                        "videoUrl": "https://youtu.be/jGTquNttoRU",
                        "imageUrl": "https://i.ytimg.com/vi/jGTquNttoRU/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/fcFsPoJY9lg",
                "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Circuito IN-OUT. ",
                "isSuperset": true,
                "circuitDetails": {
                    "totalRounds": 4,
                    "restBetweenExercisesSeconds": 30,
                    "restBetweenRoundsSeconds": 30
                },
                "items": [
                    {
                        "name": "Patada de Glúteo en Polea",
                        "subOrder": 1,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "notes": "Usa un disco o step para elevar el otro pie Cambia de pierna a mitad del intervalo.",
                        "videoUrl": "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                        "imageUrl": "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg"
                    },
                    {
                        "name": "Plancha - Cambios de apoyo",
                        "subOrder": 2,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://youtu.be/Yg74EfwLBQY",
                        "imageUrl": "https://i.ytimg.com/vi/Yg74EfwLBQY/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                "imageUrl": "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca Inclinado en Multipower": [
        {
            "name": "Press Inclinado con Mancuernas",
            "videoUrl": "https://youtu.be/ZE4M73kXB5A",
            "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg",
            "notes": ""
        }
    ],
    "Jalón al Pecho Supino en Polea": [
        {
            "name": "Dominadas Supinas",
            "videoUrl": "https://www.youtube.com/shorts/0TwqeC7fH8Y",
            "imageUrl": "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg",
            "notes": ""
        },
        {
            "name": "Jalón al Pecho en Polea",
            "videoUrl": "https://youtu.be/GYIhmy1P4vY",
            "imageUrl": "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg",
            "notes": ""
        }
    ]
};
