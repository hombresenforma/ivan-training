// Titulo: PX_2D_AP_PREFATIGASS

const workoutData = {
    "dia1": {
        name: "EXTRA Básicos ",
        exercises: [
            {
                order: 1,
                name: "Hip Thrust con Barra (ExPLICADO)",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "8, 8, 25",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo Inclinado en Landmine",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Inclinado en Landmine",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/5gakUsid-Lg",
                        imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
                    },
                    {
                        name: "Press Militar en Landmine",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/czeWFmHVKzM",
                        imageUrl: "https://i.ytimg.com/vi/czeWFmHVKzM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/5gakUsid-Lg",
                imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                        imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
                    },
                    {
                        name: "Press Francés con Mancuernas en Banco Inclinado",
                        subOrder: 2,
                        sets: 3,
                        reps: "10-12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/L__Q6Jl9Ics",
                        imageUrl: "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Día COMPLETO",
        exercises: [
            {
                order: 2,
                name: "Press Cerrado con Barra",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "8, 8, 25",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/_062fQmtry8",
                imageUrl: "https://i.ytimg.com/vi/_062fQmtry8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Box Step Up Unilat con Mancuerna/KTB",
                sets: 3,
                reps: "12, 10 , 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/8gFbFqy2Y7s",
                imageUrl: "https://i.ytimg.com/vi/8gFbFqy2Y7s/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Seal con Mancuernas",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Thruster con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            },
            {
                order: 6,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 45
                },
                items: [
                    {
                        name: "Sit Up Unilateral con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        notes: "5 por cada lado.",
                        videoUrl: "https://youtu.be/INcd--4kK5k",
                        imageUrl: "https://i.ytimg.com/vi/INcd--4kK5k/mqdefault.jpg"
                    },
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    }
                ],
                notes: "5 por cada lado.",
                videoUrl: "https://youtu.be/INcd--4kK5k",
                imageUrl: "https://i.ytimg.com/vi/INcd--4kK5k/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};
