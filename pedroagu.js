// Titulo: P1_3D_fb_02
// Notas: - Añadimos 1 serie al PRINCIPAL y subimos de 8 a 10 repeticiones.
// - Añadimos 1 vuelta al circuito final y subimos repeticiones/tiempo.
// Contenido de app_datos.js
// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================

const workoutData = {
    "dia1": {
        name: "Fullbody Push",
        exercises: [
            {
                order: 1,
                name: "Worm + Rotaciones de Tronco",
                isSuperset: true,
                items: [
                    {
                        name: "Worm + Rotaciones de Tronco",
                        subOrder: 1,
                        sets: 2,
                        reps: "4",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=A8MFPgYNoGs",
                        imageUrl: "https://i.ytimg.com/vi/A8MFPgYNoGs/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        notes: "Puedes hacerlas sin salto si lo prefieres.",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=A8MFPgYNoGs",
                imageUrl: "https://i.ytimg.com/vi/A8MFPgYNoGs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca en Multipower",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/w-5ovE5O5iU",
                imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Inclinado en Landmine",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Inclinado en Landmine",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/5gakUsid-Lg",
                        imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
                    },
                    {
                        name: "Plancha Lateral Dinámica sobre Antebrazo",
                        subOrder: 2,
                        sets: 3,
                        reps: "20s",
                        notes: "Haz ambos lados.",
                        videoUrl: "https://www.youtube.com/watch?v=fhCo3uoboAU",
                        imageUrl: "https://i.ytimg.com/vi/fhCo3uoboAU/mqdefault.jpg"
                    },
                    {
                        name: "Plancha Lateral Dinámica sobre Antebrazo",
                        subOrder: 3,
                        sets: 3,
                        reps: "20s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=fhCo3uoboAU",
                        imageUrl: "https://i.ytimg.com/vi/fhCo3uoboAU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/5gakUsid-Lg",
                imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
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
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones con Peso Corporal",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        notes: "Puedes hacerlas de rodillas.",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                        imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Thruster con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        sets: 4,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/KTB (Explicado)",
                        subOrder: 2,
                        sets: 4,
                        reps: "15",
                        videoUrl: "https://www.youtube.com/shorts/tNu9bm3geqY",
                        imageUrl: "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 3,
                        sets: 4,
                        reps: "45s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fullbody Pull",
        exercises: [
            {
                order: 1,
                name: "Gomas - Remo en Columna",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Remo en Columna",
                        subOrder: 1,
                        sets: 2,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/oaNDZ4glMKY",
                        imageUrl: "https://i.ytimg.com/vi/oaNDZ4glMKY/mqdefault.jpg"
                    },
                    {
                        name: "Funcional - Mountain Climber",
                        subOrder: 2,
                        sets: 2,
                        reps: "20",
                        rest: "30s",
                        videoUrl: "https://youtu.be/GZWmYzClS3s",
                        imageUrl: "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/oaNDZ4glMKY",
                imageUrl: "https://i.ytimg.com/vi/oaNDZ4glMKY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas Australianas con Pies en el Suelo",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Trasera en Multipower",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Trasera en Multipower",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/la-dqygoIuk",
                        imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Rodilla",
                        subOrder: 2,
                        sets: 3,
                        reps: "20s",
                        notes: "Haz ambos lados.",
                        videoUrl: "https://youtu.be/ROVRkBnD4zg",
                        imageUrl: "https://i.ytimg.com/vi/ROVRkBnD4zg/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Rodilla",
                        subOrder: 3,
                        sets: 3,
                        reps: "20s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/ROVRkBnD4zg",
                        imageUrl: "https://i.ytimg.com/vi/ROVRkBnD4zg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar en Multipower",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar en Multipower",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                        imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies en el Suelo",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/7mpEJQC_gRk",
                        imageUrl: "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo Inclinado con Mancuernas/KTB (Explicado)",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Inclinado con Mancuernas/KTB (Explicado)",
                        subOrder: 1,
                        sets: 4,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                        imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 4,
                        reps: "20",
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    },
                    {
                        name: "Hollow Abdominal Encogido",
                        subOrder: 3,
                        sets: 4,
                        reps: "45s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/DUYZEFKjYxs",
                        imageUrl: "https://i.ytimg.com/vi/DUYZEFKjYxs/mqdefault.jpg"
                    }
                ],
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody Legs",
        exercises: [
            {
                order: 1,
                name: "Abducción de Glúteo Unilat en el Suelo",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Abducción de Glúteo Unilat en el Suelo",
                        subOrder: 1,
                        sets: 2,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    },
                    {
                        name: "Abducción de Glúteo Unilat en el Suelo",
                        subOrder: 2,
                        sets: 2,
                        reps: "8",
                        videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 3,
                        sets: 2,
                        reps: "16",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Inclinado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Inclinado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/ZE4M73kXB5A",
                        imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
                    },
                    {
                        name: "Sit Up Unilateral con KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "5",
                        notes: "Puedes usar una mancuerna de poco peso si lo prefieres o el peso de la Kettlebell es demasiado elevado.",
                        videoUrl: "https://youtu.be/INcd--4kK5k",
                        imageUrl: "https://i.ytimg.com/vi/INcd--4kK5k/mqdefault.jpg"
                    },
                    {
                        name: "Sit Up Unilateral con KTB",
                        subOrder: 3,
                        sets: 3,
                        reps: "5",
                        notes: "Puedes usar una mancuerna de poco peso si lo prefieres o el peso de la Kettlebell es demasiado elevado.",
                        rest: "90s",
                        videoUrl: "https://youtu.be/INcd--4kK5k",
                        imageUrl: "https://i.ytimg.com/vi/INcd--4kK5k/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Jalón al Pecho Supino en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho Supino en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/rimdRzyIJkA",
                        imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas de Pie",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/8STuQuoDMR0",
                        imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Split Unilateral con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Split Unilateral con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 4,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/o8-Oc19pGn8",
                        imageUrl: "https://i.ytimg.com/vi/o8-Oc19pGn8/mqdefault.jpg"
                    },
                    {
                        name: "Split Unilateral con Mancuernas/KTB",
                        subOrder: 2,
                        sets: 4,
                        reps: "12",
                        videoUrl: "https://www.youtube.com/shorts/o8-Oc19pGn8",
                        imageUrl: "https://i.ytimg.com/vi/o8-Oc19pGn8/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 3,
                        sets: 4,
                        reps: "8",
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Funcional - Mountain Climber",
                        subOrder: 4,
                        sets: 4,
                        reps: "40",
                        rest: "90s",
                        videoUrl: "https://youtu.be/GZWmYzClS3s",
                        imageUrl: "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/o8-Oc19pGn8",
                imageUrl: "https://i.ytimg.com/vi/o8-Oc19pGn8/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Cardio y Core",
        exercises: [
            {
                order: 1,
                name: "FOR TIME Metabólico",
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
                        name: "Cuerpo Libre - Cardio - Burpee Completo",
                        subOrder: 3,
                        reps: "12, 10, 8, 6, 4, 2",
                        isForTimeItem: true,
                        videoUrl: "https://youtu.be/qfBhsTabWN0",
                        imageUrl: "https://i.ytimg.com/vi/qfBhsTabWN0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Core y Lumbar",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Crunch Bicicleta Alterno",
                        subOrder: 1,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/nUIfDzuMR00",
                        imageUrl: "https://i.ytimg.com/vi/nUIfDzuMR00/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Pierna",
                        subOrder: 2,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/-3PDE3ztwzU",
                        imageUrl: "https://i.ytimg.com/vi/-3PDE3ztwzU/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Pierna",
                        subOrder: 3,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/-3PDE3ztwzU",
                        imageUrl: "https://i.ytimg.com/vi/-3PDE3ztwzU/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Abrir y Cerrar Piernas",
                        subOrder: 4,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/G8GPAq4110U",
                        imageUrl: "https://i.ytimg.com/vi/G8GPAq4110U/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Extensión Lumbar",
                        subOrder: 5,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/BJTJdFViRsU",
                        imageUrl: "https://i.ytimg.com/vi/BJTJdFViRsU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/nUIfDzuMR00",
                imageUrl: "https://i.ytimg.com/vi/nUIfDzuMR00/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca en Multipower": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ],
    "Dominadas Australianas con Pies en el Suelo": [
        { name: "Jalón al Pecho en Polea", videoUrl: "https://youtu.be/GYIhmy1P4vY", imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg" }
    ],
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "", imageUrl: "" }
    ]
};
