// Titulo: P1_3D_FB_HOME_2
// Notas: Primer ejercicio subimos repes 10-12
// Ejercicio 4 4 rondas
// Ejercicio 5 12-15 reps
// circuito final subimos 4 ronda
// 
// Ultimo día primer ejercicio subimos serie 10-12
// Superserie 3 plancha subimos 10 seg extra
// Superserie 4 subimos ronda 4

// Adaptación para Pepe: material HOME y sustituciones aprobadas (flexiones, goblet y sentadilla corporal).
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
                name: "Remo en TRX",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "-Mantener retracción escapular, extensión completa de los codos",
                videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Flexiones con Peso Corporal",
                sets: 4,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                sets: 3,
                reps: "15",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito",
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
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Curl con Mancuernas de Pie",
                        subOrder: 1,
                        sets: 1,
                        reps: "15",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/8STuQuoDMR0",
                        imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Normal",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/wNqGgCjBVaE",
                        imageUrl: "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/8STuQuoDMR0",
                imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
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
                name: "Peso Muerto Rumano con Mancuernas/KTB",
                sets: 3,
                reps: "15",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/tNu9bm3geqY",
                imageUrl: "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla con Peso Corporal",
                sets: 4,
                reps: "15",
                rest: "60s",
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/NWes6fd1Sxs",
                imageUrl: "https://i.ytimg.com/vi/NWes6fd1Sxs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral desde Puente (Con TRX)",
                sets: 3,
                reps: "15",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=6NCkHTG4lHc",
                imageUrl: "https://i.ytimg.com/vi/6NCkHTG4lHc/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Hip Thrust con Banda Elástica",
                        subOrder: 1,
                        sets: 1,
                        reps: "15",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/ewSrH2uFits",
                        imageUrl: "https://i.ytimg.com/vi/ewSrH2uFits/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Pierna Cruzada",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isCircuitItem: true,
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
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/njS9V-rVeTY",
                        imageUrl: "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones con Peso Corporal",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
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
                name: "Peso Muerto Rumano con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Peso Muerto Rumano con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                        imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral",
                        subOrder: 2,
                        sets: 3,
                        reps: "30s",
                        videoUrl: "https://youtu.be/IBlAMf7LYvI",
                        imageUrl: "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/IBlAMf7LYvI",
                        imageUrl: "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                        subOrder: 1,
                        sets: 4,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                        imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas de Pie",
                        subOrder: 2,
                        sets: 4,
                        reps: "12",
                        notes: "En caso de no tener el banco cerca lo puedes hacer de pie",
                        rest: "90s",
                        videoUrl: "https://youtu.be/8STuQuoDMR0",
                        imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");


