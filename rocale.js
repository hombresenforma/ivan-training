// Titulo: P17_3D_TorPierFB_1_ FEM 1

const workoutData = {
    "dia1": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Dominadas Asistidas en Máquina",
                setTechniques: {"4":"DROPSET"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/5OGBlINLP6w",
                imageUrl: "https://i.ytimg.com/vi/5OGBlINLP6w/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar en Multipower",
                setTechniques: {"4":"DROPSET"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Contralat Unilat con Mancuerna",
                setTechniques: {},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Pierna contraria levantada.",
                videoUrl: "https://youtube.com/shorts/O7PAUd4ZMB4",
                imageUrl: "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Pull Over en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Pull Over en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/zWGbrVxoUpk",
                        imageUrl: "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/zWGbrVxoUpk",
                imageUrl: "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/1MgU2PO4_rI",
                        imageUrl: "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo Alterno Sentado con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/1cRT5C0klJc",
                        imageUrl: "https://i.ytimg.com/vi/1cRT5C0klJc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/1MgU2PO4_rI",
                imageUrl: "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Pierna Completo",
        exercises: [
            {
                order: 1,
                name: "Aducción de Piernas en Máquina",
                sets: 3,
                reps: "12, 10, 8",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Anterior en Máquina Jaca",
                setTechniques: {"4":"DROPSET"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/saLWdiUe5eE",
                imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancadas Caminando con Mancuernas/KTB",
                setTechniques: {},
                sets: 3,
                reps: "16",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Cuádriceps en Máquina",
                sets: 3,
                reps: "12, 10, 8",
                rest: "60s",
                notes: "Usa un disco o step para elevar el otro pie",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Hip Thrust con Barra (ExPLICADO)",
                isSuperset: true,
                items: [
                    {
                        name: "Hip Thrust con Barra (ExPLICADO)",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                        imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
                    },
                    {
                        name: "Step Up Lateral Alterno en Step",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        notes: "Aprovecha el banco del hip thrust. (Cuanta más altura tiene el banco, más glúteo trabajamos)",
                        rest: "90s",
                        videoUrl: "https://youtu.be/N26TyhPhSRI",
                        imageUrl: "https://i.ytimg.com/vi/N26TyhPhSRI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody con Circuitos",
        exercises: [
            {
                order: 1,
                name: "Prensa Inclinada en Máquina de Discos",
                isSuperset: true,
                items: [
                    {
                        name: "Prensa Inclinada en Máquina de Discos",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                        imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Flexión",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                        imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                        imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo con Barra",
                isSuperset: true,
                items: [
                    {
                        name: "Remo con Barra",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/MjnZ52mZgT0",
                        imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
                    },
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Trasera con Barra",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Trasera con Barra",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/FK5XU_gaxAE",
                        imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
                    },
                    {
                        name: "Dominadas Australianas con Pies en el Suelo",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                        imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 3,
                        sets: 4,
                        reps: "10",
                        notes: "Haz las flexiones de rodillas si es necesario",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Dominadas Asistidas en Máquina": [
        { name: "Dominadas Australianas con Pies en Banco", videoUrl: "https://youtu.be/WqoNa74DieE", imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg" }
    ],
    "Press Militar en Multipower": [
        { name: "Press Militar con Barra Sentado (Half Press)", videoUrl: "https://www.youtube.com/watch?v=q0C0BaHITAc", imageUrl: "https://i.ytimg.com/vi/q0C0BaHITAc/mqdefault.jpg" }
    ],
    "Sentadilla Anterior en Máquina Jaca": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Press Militar Sentado con Mancuernas (ExPLICADO)": [
        { name: "Remo Gironda en Polea", videoUrl: "https://youtube.com/shorts/11xkWdyYWus", imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg" }
    ],
    "Remo con Barra": [
        { name: "Remo Gironda en Polea", videoUrl: "https://youtube.com/shorts/11xkWdyYWus", imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg" }
    ]
};
