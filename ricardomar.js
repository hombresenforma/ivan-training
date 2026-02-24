// Titulo: P5_3D_TPFB_1 (OPENBOX)

const workoutData = {
    "dia1": {
        name: "DÍA 1: Tren Superior",
        exercises: [
            {
                order: 1,
                name: "Circuito",
                isWarmup: true,
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Dominadas Australianas en TRX",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                        imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones con Peso Corporal",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                        imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas Supinas",
                sets: 3,
                reps: "6-8",
                rest: "60s",
                notes: "-Mantener retracción escapular, extensión completa de los codos",
                videoUrl: "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                imageUrl: "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Gorilla Row con Kettlebells/Mancuernas",
                sets: 3,
                reps: "16",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/4hKPsdWsXl8",
                imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Banca con Mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Lateral Climbers",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/IKuy2laTdGY",
                        imageUrl: "https://i.ytimg.com/vi/IKuy2laTdGY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 7,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 3,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Curl Araña con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/vll2f1bqDlA",
                        imageUrl: "https://i.ytimg.com/vi/vll2f1bqDlA/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Normal",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/wNqGgCjBVaE",
                        imageUrl: "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vll2f1bqDlA",
                imageUrl: "https://i.ytimg.com/vi/vll2f1bqDlA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "DÍA 1: Tren Inferior",
        exercises: [
            {
                order: 1,
                name: "Circuito",
                isWarmup: true,
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 5,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Jumping Jack",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/K5PMB8CauGM",
                        imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/K5PMB8CauGM",
                imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Kettlebell - Swing con Sentadilla",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/MUJ2UiP5gjc",
                imageUrl: "https://i.ytimg.com/vi/MUJ2UiP5gjc/mqdefault.jpg"
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
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            },
            {
                order: 6,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 3,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Hip Thrust con Barra (ExPLICADO)",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                        imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
                    },
                    {
                        name: "Crunch Bicicleta Alterno",
                        subOrder: 2,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/nUIfDzuMR00",
                        imageUrl: "https://i.ytimg.com/vi/nUIfDzuMR00/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "DÍA 3: Fullbody",
        exercises: [
            {
                order: 1,
                name: "Circuito",
                isWarmup: true,
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 5,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                        imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Peso Corporal",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/NWes6fd1Sxs",
                        imageUrl: "https://i.ytimg.com/vi/NWes6fd1Sxs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Devil Press + Thruster con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Devil Press + Thruster con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/njS9V-rVeTY",
                        imageUrl: "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
                    },
                    {
                        name: "Crunch Abdominal Piernas Extendidas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        notes: "En caso de no llegar a las repeticiones pautadas, se pueden hacer con rodilla",
                        rest: "90s",
                        videoUrl: "https://youtu.be/TYNp3OsGKL0",
                        imageUrl: "https://i.ytimg.com/vi/TYNp3OsGKL0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/njS9V-rVeTY",
                imageUrl: "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Kettlebell - Soft Swing",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                        imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/IBlAMf7LYvI",
                        imageUrl: "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral",
                        subOrder: 3,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/IBlAMf7LYvI",
                        imageUrl: "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo con Barra",
                isSuperset: true,
                items: [
                    {
                        name: "Remo con Barra",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/MjnZ52mZgT0",
                        imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo Alterno Sentado con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        notes: "En caso de no tener el banco cerca lo puedes hacer de pie",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/1cRT5C0klJc",
                        imageUrl: "https://i.ytimg.com/vi/1cRT5C0klJc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 5,
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
                        name: "Fondos de Tríceps con Pies en el Suelo",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        notes: "En caso de no tener el banco cerca lo puedes hacer de pie",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/7mpEJQC_gRk",
                        imageUrl: "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};
