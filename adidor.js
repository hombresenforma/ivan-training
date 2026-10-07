// Titulo: P3_3D_APFB_INOUT_1_fem

const workoutData = {
    "dia1": {
        name: "Anterior IN-OUT",
        exercises: [
            {
                order: 2,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 3,
                reps: "16",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar con Barra de Pie",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar con Barra de Pie",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                        imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Flexiones Agarre Estrecho de Rodillas",
                isSuperset: true,
                items: [
                    {
                        name: "Flexiones Agarre Estrecho de Rodillas",
                        subOrder: 1,
                        sets: 3,
                        reps: "12,10,8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/xlYUV9xY-lg",
                        imageUrl: "https://i.ytimg.com/vi/xlYUV9xY-lg/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 1",
                        subOrder: 2,
                        sets: 3,
                        reps: "12,10,8",
                        rest: "90s",
                        videoUrl: "https://youtu.be/hqB_aA5phBA",
                        imageUrl: "https://i.ytimg.com/vi/hqB_aA5phBA/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/xlYUV9xY-lg",
                imageUrl: "https://i.ytimg.com/vi/xlYUV9xY-lg/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito IN-OUT",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Step Up Lateral Alterno en Step",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/N26TyhPhSRI",
                        imageUrl: "https://i.ytimg.com/vi/N26TyhPhSRI/mqdefault.jpg"
                    },
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Utiliza mancuernas de 8-10kg. ",
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/N26TyhPhSRI",
                imageUrl: "https://i.ytimg.com/vi/N26TyhPhSRI/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Posterior IN-OUT",
        exercises: [
            {
                order: 2,
                name: "Jalón al Pecho Supino en Polea",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Peso Muerto Rumano con Barra",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
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
                        name: "Plancha - Normal",
                        subOrder: 2,
                        sets: 3,
                        reps: "15\"",
                        rest: "60s",
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Face Pull al Cuello en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Face Pull al Cuello en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/TaTjLum-_qI",
                        imageUrl: "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Cuerda en Polea Baja",
                        subOrder: 2,
                        sets: 3,
                        reps: "15, 12, 10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                        imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/TaTjLum-_qI",
                imageUrl: "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito IN-OUT. ",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 5,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Snatch + Thruster Unilat Alterno con Mancuerna",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Mancuerna de 10-12kg.",
                        videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                        imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - V Agrupado",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/bS10OysdlLg",
                        imageUrl: "https://i.ytimg.com/vi/bS10OysdlLg/mqdefault.jpg"
                    }
                ],
                notes: "Mancuerna de 10-12kg.",
                videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody IN-OUT",
        exercises: [
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Frontal con Barra",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/ErXO1WKVlPI",
                imageUrl: "https://i.ytimg.com/vi/ErXO1WKVlPI/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Aducción de Piernas en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Aducción de Piernas en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                        imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Glute Bridge - Cambiando Piernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://youtu.be/a8GF3uTnUOI",
                        imageUrl: "https://i.ytimg.com/vi/a8GF3uTnUOI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 8,
                name: "Circuito IN-OUT. ",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 5,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Utiliza mancuernas de 8-10kg para ambos ejercicios.",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Burpee sin Flexión",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/_liq4fAscDU",
                        imageUrl: "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
                    }
                ],
                notes: "Utiliza mancuernas de 8-10kg para ambos ejercicios.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Press Inclinado con Mancuernas", videoUrl: "https://youtu.be/ZE4M73kXB5A", imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg" }
    ],
    "Press Militar con Barra de Pie": [
        { name: "Press Militar Sentado con Mancuernas (Explicado)", videoUrl: "", imageUrl: "" }
    ],
    "Flexiones Agarre Estrecho de Rodillas": [
        { name: "Press Banca en Multipower", videoUrl: "https://youtu.be/w-5ovE5O5iU", imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg" }
    ],
    "Jalón al Pecho Supino en Polea": [
        { name: "Dominadas Australianas con Pies en Banco", videoUrl: "https://youtu.be/WqoNa74DieE", imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg" }
    ],
    "Peso Muerto Rumano con Barra": [
        { name: "Peso Muerto Rumano con Mancuernas", videoUrl: "", imageUrl: "" }
    ],
    "Aducción de Piernas en Máquina": [
        { name: "Sentadilla Trasera con Barra", videoUrl: "https://youtu.be/FK5XU_gaxAE", imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg" }
    ]
};
