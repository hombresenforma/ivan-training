// Titulo: Plan de Entrenamiento

const workoutData = {
    "dia1": {
        name: "Fullbody 1",
        exercises: [
            {
                order: 1,
                name: "Gomas - Zancada Avançada",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/rlfgAEO58no",
                imageUrl: "https://i.ytimg.com/vi/rlfgAEO58no/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Gomas - Aperturas en Columna",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/_FBdkpZ5FTs",
                imageUrl: "https://i.ytimg.com/vi/_FBdkpZ5FTs/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Gomas - Thruster",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Thruster",
                        subOrder: 1,
                        sets: 4,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/fCXPsC8Mk6A",
                        imageUrl: "https://i.ytimg.com/vi/fCXPsC8Mk6A/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - Squat",
                        subOrder: 2,
                        sets: 4,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/203_Zzz_Z_0",
                        imageUrl: "https://i.ytimg.com/vi/203_Zzz_Z_0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fCXPsC8Mk6A",
                imageUrl: "https://i.ytimg.com/vi/fCXPsC8Mk6A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Fondos de Tríceps con Pies Elevados",
                isSuperset: true,
                items: [
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 1,
                        sets: 3,
                        reps: "15-20",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica + Sentadilla",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=kRm4s1Aemew",
                        imageUrl: "https://i.ytimg.com/vi/kRm4s1Aemew/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Worm",
                isSuperset: true,
                items: [
                    {
                        name: "Worm",
                        subOrder: 1,
                        sets: 3,
                        reps: "6",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 2",
                        subOrder: 2,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/lFEg3UQYM3g",
                        imageUrl: "https://i.ytimg.com/vi/lFEg3UQYM3g/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fullbody 2",
        exercises: [
            {
                order: 1,
                name: "Gomas - Peso Muerto",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/o3vMmkN9JnQ",
                imageUrl: "https://i.ytimg.com/vi/o3vMmkN9JnQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Gomas - Remo Unilateral en Columna",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/SaitEaEDD5Q",
                imageUrl: "https://i.ytimg.com/vi/SaitEaEDD5Q/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancadas Caminando con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 4,
                        reps: "20",
                        isSupersetStart: true,
                        notes: "Haz sin peso las zancadas si no tienes.",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - Remo Vertical en Columna",
                        subOrder: 2,
                        sets: 4,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/KFCTeV1AIGU",
                        imageUrl: "https://i.ytimg.com/vi/KFCTeV1AIGU/mqdefault.jpg"
                    }
                ],
                notes: "Haz sin peso las zancadas si no tienes.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Gomas - Curl de Bíceps en Columna",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Curl de Bíceps en Columna",
                        subOrder: 1,
                        sets: 3,
                        reps: "15-20",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/JogvxqdpbMU",
                        imageUrl: "https://i.ytimg.com/vi/JogvxqdpbMU/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - FacePull en Columna",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/KnnWfHUjsKg",
                        imageUrl: "https://i.ytimg.com/vi/KnnWfHUjsKg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/JogvxqdpbMU",
                imageUrl: "https://i.ytimg.com/vi/JogvxqdpbMU/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Gomas - Remo al Mentón de Pie",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Remo al Mentón de Pie",
                        subOrder: 1,
                        sets: 3,
                        reps: "6",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/K1o3Sviayko",
                        imageUrl: "https://i.ytimg.com/vi/K1o3Sviayko/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 2",
                        subOrder: 2,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/lFEg3UQYM3g",
                        imageUrl: "https://i.ytimg.com/vi/lFEg3UQYM3g/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/K1o3Sviayko",
                imageUrl: "https://i.ytimg.com/vi/K1o3Sviayko/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Básicos 1",
        exercises: [
            {
                order: 1,
                name: "Remo Horizontal en TRX",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Plancha - Cambios de apoyo",
                isSuperset: true,
                items: [
                    {
                        name: "Plancha - Cambios de apoyo",
                        subOrder: 1,
                        sets: 3,
                        reps: "12\"",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/Yg74EfwLBQY",
                        imageUrl: "https://i.ytimg.com/vi/Yg74EfwLBQY/mqdefault.jpg"
                    },
                    {
                        name: "Spider Climber",
                        subOrder: 2,
                        sets: 3,
                        reps: "14",
                        rest: "60s",
                        videoUrl: "https://youtu.be/bzzJ0zeO70A",
                        imageUrl: "https://i.ytimg.com/vi/bzzJ0zeO70A/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/Yg74EfwLBQY",
                imageUrl: "https://i.ytimg.com/vi/Yg74EfwLBQY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancadas Caminando con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Burpee sin Flexión",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/_liq4fAscDU",
                        imageUrl: "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
                    }
                ],
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Worm",
                isSuperset: true,
                items: [
                    {
                        name: "Worm",
                        subOrder: 1,
                        sets: 3,
                        reps: "6",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Flexión de Cadera",
                        subOrder: 2,
                        sets: 3,
                        reps: "10-12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/XJFii9NYHNs",
                        imageUrl: "https://i.ytimg.com/vi/XJFii9NYHNs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Básicos 2",
        exercises: [
            {
                order: 1,
                name: "Gomas - Press Militar",
                sets: 4,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/PaVq5VuHYEg",
                imageUrl: "https://i.ytimg.com/vi/PaVq5VuHYEg/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas Australianas en TRX",
                sets: 4,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 4,
                reps: "16-20",
                rest: "90s",
                notes: "8-10 POR PIERNA",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Horizontal en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Horizontal en TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        notes: "Mantén una inclinación paralela al suelo.",
                        videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                        imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 3,
                        reps: "4",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    }
                ],
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Fondos de Tríceps con Pies en el Suelo",
                isSuperset: true,
                items: [
                    {
                        name: "Fondos de Tríceps con Pies en el Suelo",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/7mpEJQC_gRk",
                        imageUrl: "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - V Agrupado",
                        subOrder: 2,
                        sets: 3,
                        reps: "10-12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/bS10OysdlLg",
                        imageUrl: "https://i.ytimg.com/vi/bS10OysdlLg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/7mpEJQC_gRk",
                imageUrl: "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Gomas - Zancada Avançada": [
        { name: "Gomas - Zancada Básica", videoUrl: "https://youtu.be/-NtzcHwp6fo", imageUrl: "https://i.ytimg.com/vi/-NtzcHwp6fo/mqdefault.jpg" }
    ],
    "Gomas - Peso Muerto": [
        { name: "Gomas - Zancada Básica", videoUrl: "https://youtu.be/-NtzcHwp6fo", imageUrl: "https://i.ytimg.com/vi/-NtzcHwp6fo/mqdefault.jpg" }
    ],
    "Remo Horizontal en TRX": [
        { name: "Gomas - Remo Unilateral en Columna", videoUrl: "https://youtu.be/SaitEaEDD5Q", imageUrl: "https://i.ytimg.com/vi/SaitEaEDD5Q/mqdefault.jpg" }
    ],
    "Gomas - Press Militar": [
        { name: "Gomas - Press Militar", videoUrl: "https://youtu.be/PaVq5VuHYEg", imageUrl: "https://i.ytimg.com/vi/PaVq5VuHYEg/mqdefault.jpg" }
    ],
    "Dominadas Australianas en TRX": [
        { name: "Gomas - Remo Vertical en Columna", videoUrl: "https://youtu.be/KFCTeV1AIGU", imageUrl: "https://i.ytimg.com/vi/KFCTeV1AIGU/mqdefault.jpg" }
    ]
};
