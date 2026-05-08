// Titulo: P17_5D_PHAT (1)

const workoutData = {
    "dia1": {
        name: "TORSO Fuerza",
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
                        rest: "30s",
                        videoUrl: "https://youtube.com/shorts/3SW4Pxgi1c0",
                        imageUrl: "https://i.ytimg.com/vi/3SW4Pxgi1c0/mqdefault.jpg"
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
                sets: 3,
                reps: "5",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Dominadas con Peso Corporal",
                setTechniques: {},
                sets: 3,
                reps: "5",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar con Barra Sentado (Half Press)",
                setTechniques: {},
                sets: 3,
                reps: "5",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=q0C0BaHITAc",
                imageUrl: "https://i.ytimg.com/vi/q0C0BaHITAc/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo con Barra",
                setTechniques: {},
                sets: 3,
                reps: "5",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Curl Araña con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Araña con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vll2f1bqDlA",
                        imageUrl: "https://i.ytimg.com/vi/vll2f1bqDlA/mqdefault.jpg"
                    },
                    {
                        name: "Press Francés con Mancuernas en Banco Inclinado",
                        subOrder: 2,
                        sets: 3,
                        reps: "8",
                        rest: "90s",
                        videoUrl: "https://youtu.be/L__Q6Jl9Ics",
                        imageUrl: "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vll2f1bqDlA",
                imageUrl: "https://i.ytimg.com/vi/vll2f1bqDlA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "PIERNA Fuerza",
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
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                        imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Trasera con Barra",
                setTechniques: {},
                sets: 3,
                reps: "5",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Peso Muerto Rumano con Barra",
                setTechniques: {},
                sets: 3,
                reps: "5",
                rest: "120s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Prensa Inclinada en Máquina de Discos",
                setTechniques: {},
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Tumbado en Máquina",
                setTechniques: {},
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "FULLBODY Hyrox 1",
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
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Box Step Up Unilat con Mancuerna/KTB",
                setTechniques: {"1":"DROPSET","2":"DROPSET","3":"DROPSET","4":"DROPSET"},
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/8gFbFqy2Y7s",
                imageUrl: "https://i.ytimg.com/vi/8gFbFqy2Y7s/mqdefault.jpg"
            },
            {
                order: 3,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Sentadilla Trasera con Barra Talones Elevados",
                        subOrder: 1,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                        videoUrl: "https://youtube.com/shorts/FYuU4CAAT1I",
                        imageUrl: "https://i.ytimg.com/vi/FYuU4CAAT1I/mqdefault.jpg"
                    },
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 2,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 3,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    }
                ],
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtube.com/shorts/FYuU4CAAT1I",
                imageUrl: "https://i.ytimg.com/vi/FYuU4CAAT1I/mqdefault.jpg"
            },
            {
                order: 5,
                name: "CARDIO - Correr (Suave)",
                sets: 3,
                reps: "1",
                rest: "120s",
                notes: "400m RUN (ritmo moderado-alto)\n- 15 wall balls\n- 10 burpee broad jumps\n- 50m farmer carry (pesado)",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "FULLBODY Hyrox 2",
        exercises: [
            {
                order: 1,
                name: "Abducción de Glúteo Unilat en el Suelo",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Abducción de Glúteo Unilat en el Suelo",
                        subOrder: 1,
                        sets: 2,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Worm + Burpee",
                setTechniques: {"4":"DROPSET"},
                sets: 3,
                reps: "15",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=qTLp4wcAAtQ",
                imageUrl: "https://i.ytimg.com/vi/qTLp4wcAAtQ/mqdefault.jpg"
            },
            {
                order: 3,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 3,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
                        imageUrl: "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "CARDIO - Correr (Suave)",
                sets: 3,
                reps: "1",
                rest: "150s",
                notes: "400m RUN (ritmo moderado-alto)\n- 50 brazadas tirón cuerda vertical\n- 500m remo \n- 50 zancadas caminando (Sin peso)",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca con Barra": [
        { name: "Press Banca en Multipower (ExPLICADO)", videoUrl: "https://www.youtube.com/shorts/EDFhiF1mSKc", imageUrl: "https://i.ytimg.com/vi/EDFhiF1mSKc/mqdefault.jpg" }
    ],
    "Press Militar con Barra Sentado (Half Press)": [
        { name: "Press Militar con Barra de Pie", videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0", imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg" }
    ],
    "Remo con Barra": [
        { name: "Remo Seal con Mancuernas", videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o", imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg" }
    ],
    "Sentadilla Trasera con Barra": [
        { name: "Sentadilla Anterior en Máquina Jaca", videoUrl: "https://youtube.com/shorts/saLWdiUe5eE", imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg" }
    ],
    "Curl Femoral Tumbado en Máquina": [
        { name: "Curl Femoral Sentado en Máquina", videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4", imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg" }
    ]
};
