// Titulo: P5_3D_TPFB_1_HOME

const workoutData = {
    "dia1": {
        name: "Tren superior",
        exercises: [
            {
                order: 1,
                name: "Dominadas Australianas en TRX",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas Australianas en TRX",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                        imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones con Peso Corporal",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        rest: "30s",
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
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "-Mantener retracción escapular, extensión completa de los codos",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
                sets: 3,
                reps: "8-10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
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
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Ejercicio por tiempo",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 0,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
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
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
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
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Tren inferior",
        exercises: [
            {
                order: 1,
                name: "Jumping Jack",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Jumping Jack",
                        subOrder: 1,
                        sets: 2,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/K5PMB8CauGM",
                        imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 2,
                        reps: "15",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
                        imageUrl: "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/K5PMB8CauGM",
                imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancadas Caminando con Mancuernas/KTB",
                sets: 3,
                reps: "20",
                rest: "60s",
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Sentadilla Sumo con Mancuerna/Kettlebell",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/ifBHyfgLe8k",
                imageUrl: "https://i.ytimg.com/vi/ifBHyfgLe8k/mqdefault.jpg"
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
                        name: "Sentadilla Goblet con Mancuerna/KTB y Pies Elevados",
                        subOrder: 1,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/E2n7V0o8B5A",
                        imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
                    },
                    {
                        name: "Crunch Bicicleta Alterno",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/nUIfDzuMR00",
                        imageUrl: "https://i.ytimg.com/vi/nUIfDzuMR00/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Cambios de apoyo",
                        subOrder: 3,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/Yg74EfwLBQY",
                        imageUrl: "https://i.ytimg.com/vi/Yg74EfwLBQY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/E2n7V0o8B5A",
                imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody",
        exercises: [
            {
                order: 1,
                name: "Worm",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Worm",
                        subOrder: 1,
                        sets: 2,
                        reps: "5",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con TRX",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                        imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
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
                        reps: "6",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/njS9V-rVeTY",
                        imageUrl: "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones con Peso Corporal",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "En caso de no llegar a las repeticiones pautadas, se pueden hacer con rodilla",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                        imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/njS9V-rVeTY",
                imageUrl: "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                        imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral",
                        subOrder: 2,
                        sets: 3,
                        reps: "20s",
                        videoUrl: "https://youtu.be/IBlAMf7LYvI",
                        imageUrl: "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral",
                        subOrder: 3,
                        sets: 3,
                        reps: "20s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/IBlAMf7LYvI",
                        imageUrl: "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
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
                        name: "Curl con Mancuernas de Pie Alterno",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "En caso de no tener el banco cerca lo puedes hacer de pie",
                        rest: "90s",
                        videoUrl: "https://youtu.be/85KCpAw9CE4",
                        imageUrl: "https://i.ytimg.com/vi/85KCpAw9CE4/mqdefault.jpg"
                    }
                ],
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "16",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Abrir y Cerrar Piernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/G8GPAq4110U",
                        imageUrl: "https://i.ytimg.com/vi/G8GPAq4110U/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca con Mancuernas": [
        { name: "Floor Press con Mancuernas", videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ", imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg" }
    ]
};


