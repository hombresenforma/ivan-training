// Titulo: Plan de Entrenamiento

const workoutData = {
    "dia1": {
        name: "Posterior",
        exercises: [
            {
                order: 1,
                name: "Crunch en Polea Alta",
                isWarmup: true,
                sets: 2,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo en Máquina T Agarre Estrecho",
                sets: 3,
                reps: "6, 6, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl Scott con Barra Z",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Peso Muerto Rumano con Barra",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Jalón al Pecho en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                        videoUrl: "https://youtu.be/GYIhmy1P4vY",
                        imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
                    },
                    {
                        name: "",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "",
                        imageUrl: ""
                    }
                ],
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/GYIhmy1P4vY",
                imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
            },
            {
                order: 6,
                name: "",
                isSuperset: true,
                items: [
                    {
                        name: "",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "",
                        imageUrl: ""
                    }
                ],
                notes: "",
                videoUrl: "",
                imageUrl: ""
            }
        ]
    }
};

const exerciseAlternatives = {
};
