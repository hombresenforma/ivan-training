// Titulo: PX. FEM 3D

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Empuje Completo",
        exercises: [
            {
                order: 1,
                name: "Aducción de Piernas en Máquina",
                setTechniques: {},
                sets: 2,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Jaca en Máquina",
                setTechniques: {},
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/P4iHoym5SxM",
                imageUrl: "https://i.ytimg.com/vi/P4iHoym5SxM/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar en Multipower",
                setTechniques: {},
                sets: 3,
                reps: "8-10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Trasera en Multipower",
                setTechniques: {},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Cuádriceps en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Cuádriceps en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        rest: "90s",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 6,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "6",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Codo en Polea Alta",
                        subOrder: 2,
                        sets: 1,
                        reps: "",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0",
                        imageUrl: "https://i.ytimg.com/vi/z7gqbcjkzU0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Tracción Completa",
        exercises: [
            {
                order: 1,
                name: "Patada de Glúteo en Polea",
                setTechniques: {},
                sets: 2,
                reps: "10-12",
                rest: "60s",
                notes: "Usa un disco o step para elevar el otro pie",
                videoUrl: "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                imageUrl: "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Hip Thrust con Barra (Explicado)",
                setTechniques: {},
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Gironda Sentado en Polea",
                setTechniques: {},
                sets: 3,
                reps: "8-10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jFR7oYwgy5s",
                imageUrl: "https://i.ytimg.com/vi/jFR7oYwgy5s/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Jalón al Pecho Neutro en Polea",
                setTechniques: {},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/5YzMH2KkMHc",
                imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Tumbado en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral Tumbado en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                        imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            },
            {
                order: 6,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Curl Martillo con Cuerda en Polea Baja",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                        imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull en Polea Alta",
                        subOrder: 2,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo",
                        imageUrl: "https://i.ytimg.com/vi/tZN8KYDSCRo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Pierna Completa",
        exercises: [
            {
                order: 1,
                name: "Abducción de Glúteo Unilat en el Suelo",
                setTechniques: {},
                sets: 3,
                reps: "10-12",
                rest: "90s",
                notes: "Puedes hacerla en máquina de abducción",
                videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Peso Muerto Rumano con Barra",
                setTechniques: {},
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Prensa Inclinada en Máquina de Discos",
                setTechniques: {},
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                setTechniques: {},
                sets: 3,
                reps: "16",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Movilidad y CORE",
        exercises: [
            {
                order: 1,
                name: "Activación",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 1,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "Movilidad - Cintura Escapular",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/qFt3RmTDmXI",
                        imageUrl: "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - Columna",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/48_aYaSLNRY",
                        imageUrl: "https://i.ytimg.com/vi/48_aYaSLNRY/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - Activación de Escápulas",
                        subOrder: 3,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/6Kj_rg_7tYQ",
                        imageUrl: "https://i.ytimg.com/vi/6Kj_rg_7tYQ/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - Activación de Cadera",
                        subOrder: 4,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/ltzWjXiHXao",
                        imageUrl: "https://i.ytimg.com/vi/ltzWjXiHXao/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - Rodilla y Tobillo",
                        subOrder: 5,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/wdOGeCaNKS8",
                        imageUrl: "https://i.ytimg.com/vi/wdOGeCaNKS8/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - Rodilla y Tobillo",
                        subOrder: 6,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/wdOGeCaNKS8",
                        imageUrl: "https://i.ytimg.com/vi/wdOGeCaNKS8/mqdefault.jpg"
                    }
                ],
                notes: "Estabilizando el tronco con mucho control motor.",
                videoUrl: "https://youtu.be/qFt3RmTDmXI",
                imageUrl: "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Circuito CORE",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Rotación Alterna con Mancuerna Tumbado",
                        subOrder: 1,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtube.com/shorts/v80J_r4cXvk",
                        imageUrl: "https://i.ytimg.com/vi/v80J_r4cXvk/mqdefault.jpg"
                    },
                    {
                        name: "Hollow Abdominal Completo",
                        subOrder: 2,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/S7nIyMHLO98",
                        imageUrl: "https://i.ytimg.com/vi/S7nIyMHLO98/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Superman",
                        subOrder: 3,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/4JCCPi4z3Kg",
                        imageUrl: "https://i.ytimg.com/vi/4JCCPi4z3Kg/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 4,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/v80J_r4cXvk",
                imageUrl: "https://i.ytimg.com/vi/v80J_r4cXvk/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Sentadilla Jaca en Máquina": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ],
    "Press Militar en Multipower": [
        { name: "Press en Máquina inclinado", videoUrl: "https://www.youtube.com/watch?v=nna4gQD-v9Y", imageUrl: "https://i.ytimg.com/vi/nna4gQD-v9Y/mqdefault.jpg" }
    ],
    "Patada de Glúteo en Polea": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ],
    "Hip Thrust con Barra (Explicado)": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ],
    "Remo Gironda Sentado en Polea": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ],
    "Peso Muerto Rumano con Barra": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ],
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ],
    "Zancada Trasera Alterna con Mancuernas/KTB": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
