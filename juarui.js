// Titulo: Entrenamiento con TRX
// Notas: Para realizar aquellos días que no dispones de gimnasio

const workoutData = {
    "dia1": {
        name: "DÍA 1: Fullbody",
        exercises: [
            {
                order: 1,
                name: "Movilidad - Activación de Cadera",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Movilidad - Activación de Cadera",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Haz los ejercicios y repeticiones del vídeo",
                        videoUrl: "https://youtu.be/ltzWjXiHXao",
                        imageUrl: "https://i.ytimg.com/vi/ltzWjXiHXao/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - Cintura Escapular",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        videoUrl: "https://youtu.be/qFt3RmTDmXI",
                        imageUrl: "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - Activación de Escápulas",
                        subOrder: 3,
                        sets: 2,
                        reps: "10",
                        rest: "20s",
                        videoUrl: "https://youtu.be/6Kj_rg_7tYQ",
                        imageUrl: "https://i.ytimg.com/vi/6Kj_rg_7tYQ/mqdefault.jpg"
                    }
                ],
                notes: "Haz los ejercicios y repeticiones del vídeo",
                videoUrl: "https://youtu.be/ltzWjXiHXao",
                imageUrl: "https://i.ytimg.com/vi/ltzWjXiHXao/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Face Pull con TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Face Pull con TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                        imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 2,
                        sets: 3,
                        reps: "15\"",
                        rest: "45s",
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Flexiones / Push Ups en TRX / Anillas",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "Mantener espalda recta y glúteo apretado (retroversión de cadera)\nTambién puedes hacerla con los pies en el suelo. Cuanto más paralelo al suelo estés mayor la intensidad (como en el vídeo).",
                videoUrl: "https://www.youtube.com/watch?v=i8tpN3KPXLE",
                imageUrl: "https://i.ytimg.com/vi/i8tpN3KPXLE/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo en TRX",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Sentadilla Búlgara en TRX",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "10 repeticiones con cada pierna",
                videoUrl: "https://www.youtube.com/shorts/1IiEF0y17pM",
                imageUrl: "https://i.ytimg.com/vi/1IiEF0y17pM/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 8,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "Worm",
                        subOrder: 1,
                        sets: 1,
                        reps: "20",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Burpee Completo",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/qfBhsTabWN0",
                        imageUrl: "https://i.ytimg.com/vi/qfBhsTabWN0/mqdefault.jpg"
                    },
                    {
                        name: "Jumping Jack",
                        subOrder: 3,
                        sets: 1,
                        reps: "20",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/K5PMB8CauGM",
                        imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 4,
                        sets: 1,
                        reps: "20",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
                        imageUrl: "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};