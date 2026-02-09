// Titulo: Plan de Entrenamiento

const workoutData = {
    "dia1": {
        name: "DÍA 1: ",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado en Multipower",
                isWarmup: true,
                setTechniques: {"1":"DROPSET"},
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 8,
                    workIntervalSeconds: 45
                },
                items: [
                    {
                        name: "Remo Contralat Unilat con Mancuerna",
                        subOrder: 1,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/O7PAUd4ZMB4",
                        imageUrl: "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg"
                    },
                    {
                        name: "Press Banca Contralat Unilat con Mancuerna",
                        subOrder: 2,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/7kAl5bVSYUc",
                        imageUrl: "https://i.ytimg.com/vi/7kAl5bVSYUc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/O7PAUd4ZMB4",
                imageUrl: "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Activación - Deep Squat + Rotación",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/sFbhjaZfdd8",
                        imageUrl: "https://i.ytimg.com/vi/sFbhjaZfdd8/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Correr (Sprint)",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/sFbhjaZfdd8",
                imageUrl: "https://i.ytimg.com/vi/sFbhjaZfdd8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "FOR TIME",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 3
                },
                items: [
                    {
                        name: "Abducción de Glúteo Unilat en el Suelo",
                        subOrder: 1,
                        reps: "10",
                        isForTimeItem: true,
                        videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    },
                    {
                        name: "Aperturas en Banco Inclinado con Mancuernas",
                        subOrder: 2,
                        reps: "15",
                        isForTimeItem: true,
                        videoUrl: "https://youtu.be/Lx8d28YlcbQ",
                        imageUrl: "https://i.ytimg.com/vi/Lx8d28YlcbQ/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
            },
            {
                order: 5,
                name: "AMRAP",
                isSuperset: true,
                isAMRAP: true,
                amrapDetails: {
                    timeLimitSeconds: 8
                },
                items: [
                    {
                        name: "Activación - Deep Squat + Squat Iso",
                        subOrder: 1,
                        reps: "10",
                        isAMRAPItem: true,
                        videoUrl: "https://youtu.be/_YjFKJNErh8",
                        imageUrl: "https://i.ytimg.com/vi/_YjFKJNErh8/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Snatch",
                        subOrder: 2,
                        reps: "10",
                        isAMRAPItem: true,
                        videoUrl: "https://youtu.be/KlzSHIMdPTc",
                        imageUrl: "https://i.ytimg.com/vi/KlzSHIMdPTc/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Clean Alterno",
                        subOrder: 3,
                        reps: "10",
                        isAMRAPItem: true,
                        videoUrl: "https://youtu.be/xBOoNSv9LlY",
                        imageUrl: "https://i.ytimg.com/vi/xBOoNSv9LlY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/_YjFKJNErh8",
                imageUrl: "https://i.ytimg.com/vi/_YjFKJNErh8/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};
