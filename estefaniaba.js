// Titulo: P17_3D_TorPierFB_1_ FEM_2
// Notas: - Cambiamos ejercicios básicos de cada día y cambiamos ejercicios del circuito final del día 3. 

const workoutData = {
    "dia1": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Remo Diagonal Unilat en Polea Alta",
                setTechniques: {"4":"DROPSET"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/ikKQhcynKmg",
                imageUrl: "https://i.ytimg.com/vi/ikKQhcynKmg/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Push Press en Multipower de Rodillas",
                setTechniques: {"4":"DROPSET"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/PY6nrqJazYw?feature=share",
                imageUrl: "https://i.ytimg.com/vi/PY6nrqJazYw/mqdefault.jpg"
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
                name: "Prensa Inclinada en Máquina de Discos",
                setTechniques: {"4":"DROPSET"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "Coge peso ELEVADO y sube piernas si hace falta (pon un disco bajo cada pie). ",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Trasera en Multipower",
                setTechniques: {},
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
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
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
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
                name: "Curl Cruzado + Zancada con KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Cruzado + Zancada con KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/osSjzEvbOAY",
                        imageUrl: "https://i.ytimg.com/vi/osSjzEvbOAY/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Burpees con Jumping Jacks",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/A21AiXaXi40",
                        imageUrl: "https://i.ytimg.com/vi/A21AiXaXi40/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/osSjzEvbOAY",
                imageUrl: "https://i.ytimg.com/vi/osSjzEvbOAY/mqdefault.jpg"
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
                name: "Jalón al Pecho en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho en Polea",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/GYIhmy1P4vY",
                        imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet + Sentadilla Sumo con KTB",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        videoUrl: "https://youtu.be/oz1SagvDVe8",
                        imageUrl: "https://i.ytimg.com/vi/oz1SagvDVe8/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con KTB",
                        subOrder: 3,
                        sets: 4,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vY",
                imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Remo Diagonal Unilat en Polea Alta": [
        { name: "Dominadas Australianas con Pies en Banco", videoUrl: "https://youtu.be/WqoNa74DieE", imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg" }
    ],
    "Push Press en Multipower de Rodillas": [
        { name: "Press Militar con Barra Sentado (Half Press)", videoUrl: "https://www.youtube.com/watch?v=q0C0BaHITAc", imageUrl: "https://i.ytimg.com/vi/q0C0BaHITAc/mqdefault.jpg" }
    ],
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Sentadilla Sumo con Mancuerna/Kettlebell", videoUrl: "https://youtu.be/ifBHyfgLe8k", imageUrl: "https://i.ytimg.com/vi/ifBHyfgLe8k/mqdefault.jpg" }
    ],
    "Press Militar Sentado con Mancuernas (ExPLICADO)": [
        { name: "Remo Gironda en Polea", videoUrl: "https://youtube.com/shorts/11xkWdyYWus", imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg" }
    ],
    "Remo con Barra": [
        { name: "Remo Gironda en Polea", videoUrl: "https://youtube.com/shorts/11xkWdyYWus", imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg" }
    ]
};
