// Titulo: P1_4D_hyp_01

const workoutData = {
    "dia1": {
        name: "Torso",
        exercises: [
            {
                order: 1,
                name: "Flexiones / Push Ups",
                sets: 2,
                reps: "8",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk",
                imageUrl: "https://i.ytimg.com/vi/GFUw7S0wDxk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca con Barra",
                sets: 5,
                reps: "5",
                rest: "150s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Aperturas en Banco con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Aperturas en Banco con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=dfmq1UOuUXo",
                        imageUrl: "https://i.ytimg.com/vi/dfmq1UOuUXo/mqdefault.jpg"
                    },
                    {
                        name: "Jalón al Pecho en Polea",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/GYIhmy1P4vY",
                        imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
                    }
                ],
                videoUrl: "https://www.youtube.com/watch?v=dfmq1UOuUXo",
                imageUrl: "https://i.ytimg.com/vi/dfmq1UOuUXo/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Inclinado con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 5,
                name: "40s trabajo + 20s descanso",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 1,
                    restBetweenExercisesSeconds: 0,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "Face Pull en Polea Alta",
                        subOrder: 1,
                        sets: 1,
                        reps: "5",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo",
                        imageUrl: "https://i.ytimg.com/vi/tZN8KYDSCRo/mqdefault.jpg"
                    }
                ],
                videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk",
                imageUrl: "https://i.ytimg.com/vi/GFUw7S0wDxk/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Piernas",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Búlgara con Peso Corporal",
                sets: 2,
                reps: "8",
                notes: "",
                videoUrl: "https://youtu.be/YtzdcxjEb8s",
                imageUrl: "https://i.ytimg.com/vi/YtzdcxjEb8s/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Trasera con Barra",
                sets: 5,
                reps: "5",
                rest: "150s",
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Peso Muerto Rumano con Barra",
                sets: 3,
                reps: "10",
                notes: "",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Unilateral con Barra",
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/6Mjkjmkhd5o",
                imageUrl: "https://i.ytimg.com/vi/6Mjkjmkhd5o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl con Barra Recta",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/0TjnWWqQfUw",
                imageUrl: "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg"
            },
            {
                order: 6,
                name: "4 rondas",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 1,
                    restBetweenExercisesSeconds: 0,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "Step Up Unilat al Cajón/Step con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isSupersetStart: true,
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/cabSAbO0YLY",
                        imageUrl: "https://i.ytimg.com/vi/cabSAbO0YLY/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Codo en Polea Alta",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0",
                        imageUrl: "https://i.ytimg.com/vi/z7gqbcjkzU0/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas de Pie",
                        subOrder: 3,
                        sets: 1,
                        reps: "5",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/8STuQuoDMR0",
                        imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
                    }
                ],
                videoUrl: "https://youtu.be/cabSAbO0YLY",
                imageUrl: "https://i.ytimg.com/vi/cabSAbO0YLY/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso",
        exercises: [
            {
                order: 1,
                name: "Flexiones / Push Ups",
                sets: 2,
                reps: "8",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk",
                imageUrl: "https://i.ytimg.com/vi/GFUw7S0wDxk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca en Multipower",
                sets: 5,
                reps: "5",
                rest: "150s",
                notes: "",
                videoUrl: "https://youtu.be/w-5ovE5O5iU",
                imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Aperturas en Banco Inclinado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Aperturas en Banco Inclinado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/Lx8d28YlcbQ",
                        imageUrl: "https://i.ytimg.com/vi/Lx8d28YlcbQ/mqdefault.jpg"
                    },
                    {
                        name: "Dominadas / Pull Ups",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=7ht8tmdAyqw",
                        imageUrl: "https://i.ytimg.com/vi/7ht8tmdAyqw/mqdefault.jpg"
                    }
                ],
                videoUrl: "https://youtu.be/Lx8d28YlcbQ",
                imageUrl: "https://i.ytimg.com/vi/Lx8d28YlcbQ/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Inclinado con Barra",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: ""
            },
            {
                order: 5,
                name: "40s trabajo + 20s descanso",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 1,
                    restBetweenExercisesSeconds: 0,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "Flexiones / Push Ups Inclinadas",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isSupersetStart: true,
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=6sG0u2WNMY4",
                        imageUrl: "https://i.ytimg.com/vi/6sG0u2WNMY4/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull en TRX / Anillas",
                        subOrder: 3,
                        sets: 1,
                        reps: "5",
                        isCircuitItem: true
                    }
                ],
                videoUrl: "https://www.youtube.com/watch?v=6sG0u2WNMY4",
                imageUrl: "https://i.ytimg.com/vi/6sG0u2WNMY4/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Piernas",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Trasera con Barra",
                sets: 2,
                reps: "8",
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Frontal con Barra",
                sets: 5,
                reps: "5",
                rest: "150s",
                notes: "",
                videoUrl: "https://youtu.be/ErXO1WKVlPI",
                imageUrl: "https://i.ytimg.com/vi/ErXO1WKVlPI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Peso Muerto Convencional con Barra",
                sets: 3,
                reps: "10",
                notes: "",
                videoUrl: "https://youtu.be/wgq70sy0c_xA",
                imageUrl: "https://i.ytimg.com/vi/wgq70sy0c_xA/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Unilateral en Multipower",
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/yfNWlh9rp6o",
                imageUrl: "https://i.ytimg.com/vi/yfNWlh9rp6o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Codo Trasnuca con Barra Z",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: ""
            },
            {
                order: 6,
                name: "4 rondas",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 1,
                    restBetweenExercisesSeconds: 0,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "Step Up Unilat al Cajón/Step con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isSupersetStart: true,
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/cabSAbO0YLY",
                        imageUrl: "https://i.ytimg.com/vi/cabSAbO0YLY/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas Sentado",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/JSKFPXyV1z_c",
                        imageUrl: "https://i.ytimg.com/vi/JSKFPXyV1z_c/mqdefault.jpg"
                    },
                    {
                        name: "Patada de Glúteo en Polea",
                        subOrder: 3,
                        sets: 1,
                        reps: "5",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                        imageUrl: "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg"
                    }
                ],
                videoUrl: "https://youtu.be/cabSAbO0YLY",
                imageUrl: "https://i.ytimg.com/vi/cabSAbO0YLY/mqdefault.jpg"
            }
        ]
    }
};
