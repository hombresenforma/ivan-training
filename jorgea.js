// Titulo: P17_3D_FUERZA (2)
// Notas: Básico: 4x4 -> 5x4
// Secundarios: 4x4 > 3x6
// Cambiamos accesorios

const workoutData = {
    "dia1": {
        name: "Fuerza BANCA",
        exercises: [
            {
                order: 1,
                name: "Rotación Externa de Hombro Unilat con Polea",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Rotación Externa de Hombro Unilat con Polea",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/0dw436rzrNU",
                        imageUrl: "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
                    },
                    {
                        name: "Rotación Interna de Hombro Unilat con Polea",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        videoUrl: "https://youtube.com/shorts/3SW4Pxgi1c0",
                        imageUrl: "https://i.ytimg.com/vi/3SW4Pxgi1c0/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Flexión",
                        subOrder: 3,
                        sets: 2,
                        reps: "3",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/0dw436rzrNU",
                imageUrl: "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca con Barra",
                setTechniques: {},
                sets: 5,
                reps: "4",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo con Barra",
                setTechniques: {},
                sets: 3,
                reps: "6",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Anterior en Máquina Jaca",
                setTechniques: {},
                sets: 3,
                reps: "6",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/saLWdiUe5eE",
                imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Press Banca Inclinado en Multipower",
                isSuperset: true,
                items: [
                    {
                        name: "Press Banca Inclinado en Multipower",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/3GS7EjN7KSk",
                        imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 2,
                        sets: 3,
                        reps: "8-10",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fuerza REMO",
        exercises: [
            {
                order: 1,
                name: "Rotación Externa de Hombro Unilat con Polea",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Rotación Externa de Hombro Unilat con Polea",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/0dw436rzrNU",
                        imageUrl: "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
                    },
                    {
                        name: "Rotación Interna de Hombro Unilat con Polea",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        videoUrl: "https://youtube.com/shorts/3SW4Pxgi1c0",
                        imageUrl: "https://i.ytimg.com/vi/3SW4Pxgi1c0/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Flexión",
                        subOrder: 3,
                        sets: 2,
                        reps: "3",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/0dw436rzrNU",
                imageUrl: "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo con Barra",
                setTechniques: {},
                sets: 5,
                reps: "4",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Anterior en Máquina Jaca",
                setTechniques: {},
                sets: 3,
                reps: "6",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/saLWdiUe5eE",
                imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Banca con Barra",
                setTechniques: {},
                sets: 3,
                reps: "6",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo Inclinado en Landmine",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Inclinado en Landmine",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/5gakUsid-Lg",
                        imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "8-10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/5gakUsid-Lg",
                imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fuerza SENTADILLA",
        exercises: [
            {
                order: 1,
                name: "Aducción de Piernas en Máquina",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Aducción de Piernas en Máquina",
                        subOrder: 1,
                        sets: 2,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                        imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Isométrica",
                        subOrder: 2,
                        sets: 2,
                        reps: "30s",
                        rest: "30s",
                        videoUrl: "https://youtu.be/epS5o03foYc",
                        imageUrl: "https://i.ytimg.com/vi/epS5o03foYc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Anterior en Máquina Jaca",
                setTechniques: {},
                sets: 5,
                reps: "4",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/saLWdiUe5eE",
                imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Banca con Barra",
                setTechniques: {},
                sets: 3,
                reps: "6",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo con Barra",
                setTechniques: {},
                sets: 3,
                reps: "6",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "8-10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Extensión Lumbar en GHD",
                sets: 3,
                reps: "8-10",
                rest: "60s",
                notes: "No hace falta que sea horizontal el banco. ",
                videoUrl: "https://www.youtube.com/watch?v=dizQOJZwTDw",
                imageUrl: "https://i.ytimg.com/vi/dizQOJZwTDw/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca con Barra": [
        { name: "Press Banca en Multipower (ExPLICADO)", videoUrl: "https://www.youtube.com/shorts/EDFhiF1mSKc", imageUrl: "https://i.ytimg.com/vi/EDFhiF1mSKc/mqdefault.jpg" }
    ],
    "Remo con Barra": [
        { name: "Remo en Máquina T Agarre Estrecho", videoUrl: "https://youtube.com/shorts/_XOaMY5NumY", imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg" }
    ],
    "Sentadilla Anterior en Máquina Jaca": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ]
};