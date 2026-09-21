// Titulo: Lesión de piernas_2D_Solo tren superior

const workoutData = {
    "dia1": {
        name: "Fullbody Push",
        exercises: [
            {
                order: 2,
                name: "Press Banca con Barra",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Jalón al Pecho Supino en Polea",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Aperturas en Banco Inclinado con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/Lx8d28YlcbQ",
                imageUrl: "https://i.ytimg.com/vi/Lx8d28YlcbQ/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo Seal con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl con Mancuernas de Pie",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Mancuernas de Pie",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/8STuQuoDMR0",
                        imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
                    },
                    {
                        name: "Press Francés con Mancuernas en Banco Inclinado",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "60s",
                        videoUrl: "https://youtu.be/L__Q6Jl9Ics",
                        imageUrl: "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/8STuQuoDMR0",
                imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fullbody Pull",
        exercises: [
            {
                order: 2,
                name: "Dominadas Supinas Asistidas en Máquina",
                sets: 3,
                reps: "5",
                rest: "90s",
                notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                videoUrl: "https://www.youtube.com/shorts/E9DT2pv7Rp0",
                imageUrl: "https://i.ytimg.com/vi/E9DT2pv7Rp0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar con Barra de Pie",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Contralat Unilat con Mancuerna",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/O7PAUd4ZMB4",
                imageUrl: "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Pájaros con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://youtu.be/EMrOS6P90lM",
                imageUrl: "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Tríceps en Polea con Cuerda",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Tríceps en Polea con Cuerda",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Cuerda en Polea Baja",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                        imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
                    },
                    {
                        name: "",
                        subOrder: 3,
                        sets: 3,
                        reps: "",
                        rest: "90s",
                        videoUrl: "",
                        imageUrl: ""
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca con Barra": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ],
    "Dominadas Supinas Asistidas en Máquina": [
        { name: "Jalón al Pecho en Polea", videoUrl: "https://youtu.be/GYIhmy1P4vY", imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg" }
    ]
};
