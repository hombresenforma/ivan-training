// Titulo: P16_4D_TORPIER_FUERZATOP_1_ FEM 2

const workoutData = {
    "dia1": {
        name: "Posterior",
        exercises: [
            {
                order: 1,
                name: "Prensa Inclinada en Máquina de Discos",
                setTechniques: {"1":"REST-PAUSE","2":"REST-PAUSE","3":"REST-PAUSE","4":"REST-PAUSE"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Máquina de Remo (Gironda)",
                setTechniques: {"1":"DROPSET","2":"DROPSET","3":"DROPSET","4":"DROPSET"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A",
                imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Jalón al Pecho Supino en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho Supino en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/rimdRzyIJkA",
                        imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Peso Muerto Rumano con Mancuernas/KTB",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Espalda recta en todo momento",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Dominadas Australianas en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas Australianas en TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                        imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Anterior",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Trasera en Multipower",
                setTechniques: {"1":"REST-PAUSE","2":"REST-PAUSE","3":"REST-PAUSE","4":"REST-PAUSE"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                setTechniques: {"1":"DROPSET","2":"DROPSET","3":"DROPSET","4":"DROPSET"},
                sets: 4,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Flexiones / Deficit Push Ups con Discos al lado",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Militar Unilateral en Landmine",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=p2OLvWOo9l0",
                imageUrl: "https://i.ytimg.com/vi/p2OLvWOo9l0/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Extensión de Tríceps Unilat en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Tríceps Unilat en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/yH6WAUNKO6c",
                        imageUrl: "https://i.ytimg.com/vi/yH6WAUNKO6c/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/yH6WAUNKO6c",
                imageUrl: "https://i.ytimg.com/vi/yH6WAUNKO6c/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Foco GLÚTEO",
        exercises: [
            {
                order: 1,
                name: "Hip Thrust con Barra (ExPLICADO)",
                setTechniques: {"1":"REST-PAUSE","2":"REST-PAUSE","3":"REST-PAUSE","4":"REST-PAUSE"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Box Glute Step Up Unilat con Mancuerna/KTB",
                setTechniques: {"1":"DROPSET","2":"DROPSET","3":"DROPSET","4":"DROPSET"},
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/h73RCZp007M",
                imageUrl: "https://i.ytimg.com/vi/h73RCZp007M/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Patada de Glúteo en Polea",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "Usa un disco o step para elevar el otro pie",
                videoUrl: "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                imageUrl: "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Sit Up Abdominal con Disco",
                isSuperset: true,
                items: [
                    {
                        name: "Sit Up Abdominal con Disco",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/GHLO76YCyHE",
                        imageUrl: "https://i.ytimg.com/vi/GHLO76YCyHE/mqdefault.jpg"
                    },
                    {
                        name: "Crunch Abdominal Piernas Extendidas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        videoUrl: "https://youtu.be/TYNp3OsGKL0",
                        imageUrl: "https://i.ytimg.com/vi/TYNp3OsGKL0/mqdefault.jpg"
                    },
                    {
                        name: "Abducción de Glúteo Unilat en el Suelo",
                        subOrder: 3,
                        sets: 3,
                        reps: "10",
                        videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    },
                    {
                        name: "Abducción de Glúteo Unilat en el Suelo",
                        subOrder: 4,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/GHLO76YCyHE",
                imageUrl: "https://i.ytimg.com/vi/GHLO76YCyHE/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Sentadilla Anterior en Máquina Jaca", videoUrl: "https://youtube.com/shorts/saLWdiUe5eE", imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg" }
    ],
    "Máquina de Remo (Gironda)": [
        { name: "Remo Gironda en Polea", videoUrl: "https://youtube.com/shorts/11xkWdyYWus", imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg" }
    ],
    "Sentadilla Trasera en Multipower": [
        { name: "Sentadilla Trasera con Barra", videoUrl: "https://youtu.be/FK5XU_gaxAE", imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg" }
    ],
    "Press Militar Sentado con Mancuernas (ExPLICADO)": [
        { name: "Remo Gironda en Polea", videoUrl: "https://youtube.com/shorts/11xkWdyYWus", imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg" }
    ],
    "Hip Thrust con Barra (ExPLICADO)": [
        { name: "Sentadilla Trasera con Barra", videoUrl: "https://youtu.be/FK5XU_gaxAE", imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg" }
    ]
};
