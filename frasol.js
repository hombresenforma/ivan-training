// Titulo: P5_3D_TPFB_1

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: Tren superior",
        exercises: [
            {
                order: 1,
                name: "Dominadas Australianas en TRX",
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
                        rest: "90s",
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
                name: "Dominadas Supinas Asistidas en Máquina",
                sets: 3,
                reps: "8-10",
                rest: "60s",
                notes: "-Mantener retracción escapular, extensión completa de los codos",
                videoUrl: "https://www.youtube.com/shorts/E9DT2pv7Rp0",
                imageUrl: "https://i.ytimg.com/vi/E9DT2pv7Rp0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Gironda Sentado en Polea",
                sets: 3,
                reps: "8-10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jFR7oYwgy5s",
                imageUrl: "https://i.ytimg.com/vi/jFR7oYwgy5s/mqdefault.jpg"
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
                        name: "Curl en Polea Baja con Barra Recta",
                        subOrder: 1,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=obFKEQEAink",
                        imageUrl: "https://i.ytimg.com/vi/obFKEQEAink/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Normal",
                        subOrder: 2,
                        sets: 1,
                        reps: "",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/wNqGgCjBVaE",
                        imageUrl: "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=obFKEQEAink",
                imageUrl: "https://i.ytimg.com/vi/obFKEQEAink/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "DÍA 1: Tren inferior",
        exercises: [
            {
                order: 1,
                name: "Cuerpo Libre - Cardio - Jumping Jack",
                isSuperset: true,
                items: [
                    {
                        name: "Cuerpo Libre - Cardio - Jumping Jack",
                        subOrder: 1,
                        sets: 2,
                        reps: "30s",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/K5PMB8CauGM",
                        imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Sentadilla con Salto en Step",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/7ckSQy2BtWw",
                        imageUrl: "https://i.ytimg.com/vi/7ckSQy2BtWw/mqdefault.jpg"
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
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "8-10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                sets: 3,
                reps: "12-15",
                rest: "60s",
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Sentado en Máquina",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
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
                        name: "Hip Thrust con Banda Elástica",
                        subOrder: 1,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/ewSrH2uFits",
                        imageUrl: "https://i.ytimg.com/vi/ewSrH2uFits/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Pierna Cruzada",
                        subOrder: 2,
                        sets: 1,
                        reps: "",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/0r0GqczoZu4",
                        imageUrl: "https://i.ytimg.com/vi/0r0GqczoZu4/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/ewSrH2uFits",
                imageUrl: "https://i.ytimg.com/vi/ewSrH2uFits/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "DÍA 3: Fullbody",
        exercises: [
            {
                order: 1,
                name: "Worm",
                isSuperset: true,
                items: [
                    {
                        name: "Worm",
                        subOrder: 1,
                        sets: 1,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
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
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/njS9V-rVeTY",
                        imageUrl: "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones / Push Ups",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        notes: "En caso de no llegar a las repeticiones pautadas, se pueden hacer con rodilla",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk",
                        imageUrl: "https://i.ytimg.com/vi/GFUw7S0wDxk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/njS9V-rVeTY",
                imageUrl: "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Kettlebell - Soft Swing",
                isSuperset: true,
                items: [
                    {
                        name: "Kettlebell - Soft Swing",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                        imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
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
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/MjnZ52mZgT0",
                        imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo Alterno Sentado con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "En caso de no tener el banco cerca lo puedes hacer de pie",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/1cRT5C0klJc",
                        imageUrl: "https://i.ytimg.com/vi/1cRT5C0klJc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");

