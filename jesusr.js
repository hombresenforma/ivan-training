// Titulo: P18_3D_DESCARGA_1
// Notas: 2 Semanas de DESCARGA: Lejos del Fallo y volumen. 

const workoutData = {
    "dia1": {
        name: "EMPUJE - Descarga",
        exercises: [
            {
                order: 1,
                name: "AMRAP",
                isWarmup: true,
                isSuperset: true,
                isAMRAP: true,
                amrapDetails: {
                    timeLimitSeconds: 300
                },
                items: [
                    {
                        name: "CARDIO - Correr (Suave)",
                        subOrder: 1,
                        reps: "",
                        isAMRAPItem: true,
                        notes: "Puedes hacerlo al aire libre si lo prefieres.",
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "Puedes hacerlo al aire libre si lo prefieres.",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca con Mancuernas",
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "Lejos del fallo. Coge un peso para 15-16reps. ",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "FOR TIME",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 15
                },
                items: [
                    {
                        name: "Fondos en Paralelas con Peso Corporal",
                        subOrder: 1,
                        reps: "5",
                        isForTimeItem: true,
                        videoUrl: "https://youtube.com/shorts/om9U8WY5HoY",
                        imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones / Deficit Push Ups con Discos al lado",
                        subOrder: 2,
                        reps: "5",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                        imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/om9U8WY5HoY",
                imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Tríceps en Polea con Cuerda",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "TRACCIÓN - Descarga",
        exercises: [
            {
                order: 1,
                name: "AMRAP",
                isWarmup: true,
                isSuperset: true,
                isAMRAP: true,
                amrapDetails: {
                    timeLimitSeconds: 300
                },
                items: [
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 1,
                        reps: "",
                        isAMRAPItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Jalón al Pecho Supino en Polea",
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "Lejos del fallo. Coge un peso para 15-16reps. ",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 3,
                name: "FOR TIME",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 15
                },
                items: [
                    {
                        name: "Dominadas Australianas con Pies en el Suelo",
                        subOrder: 1,
                        reps: "5",
                        isForTimeItem: true,
                        notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                        videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                        imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
                    },
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 2,
                        reps: "10",
                        isForTimeItem: true,
                        notes: "Mancuernas/Kettlebells de 16-20kg",
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    }
                ],
                notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl de Biceps en Polea Baja",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "Puedes estirarte en el suelo o hacerlo de pie si lo prefieres",
                videoUrl: "https://youtube.com/shorts/0GHLPYa_jzo",
                imageUrl: "https://i.ytimg.com/vi/0GHLPYa_jzo/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "PIERNAS - Descarga ",
        exercises: [
            {
                order: 1,
                name: "AMRAP",
                isWarmup: true,
                isSuperset: true,
                isAMRAP: true,
                amrapDetails: {
                    timeLimitSeconds: 300
                },
                items: [
                    {
                        name: "CARDIO - Bicicleta (Ritmo Suave)",
                        subOrder: 1,
                        reps: "",
                        isAMRAPItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=r6iTJGOftHY",
                        imageUrl: "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=r6iTJGOftHY",
                imageUrl: "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "Lejos del fallo. Coge un peso para 15-16reps. ",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "FOR TIME",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 15
                },
                items: [
                    {
                        name: "Sentadilla Goblet con Mancuerna/KTB y Pies Elevados",
                        subOrder: 1,
                        reps: "5",
                        isForTimeItem: true,
                        notes: "Mancuerna/ktb de 16-24kg",
                        videoUrl: "https://youtu.be/E2n7V0o8B5A",
                        imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 2,
                        reps: "10",
                        isForTimeItem: true,
                        notes: "Mancuernas/Kettlebells de 10-16kg",
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    }
                ],
                notes: "Mancuerna/ktb de 16-24kg",
                videoUrl: "https://youtu.be/E2n7V0o8B5A",
                imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Femoral Tumbado en Máquina",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "Puedes estirarte en el suelo o hacerlo de pie si lo prefieres",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Curl Femoral Tumbado en Máquina": [
        { name: "Curl Femoral Sentado en Máquina", videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4", imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg" }
    ]
};