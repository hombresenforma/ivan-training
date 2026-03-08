// Titulo: P16_4D_TORPIER_FUERZATOP_1

const workoutData = {
    "dia1": {
        name: "Pierna Completa (POSTERIOR)",
        exercises: [
            {
                order: 2,
                name: "Hip Thrust con Barra (ExPLICADO)",
                sets: 4,
                reps: "6, 6, 12, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 4,
                reps: "6, 6, 12, 12",
                rest: "120s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Sentado en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral Sentado en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                        imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Soft Swing",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                        imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Torso Completo",
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
                name: "Press Banca Inclinado en Multipower",
                sets: 4,
                reps: "6, 6, 12, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Máquina de Remo (Gironda)",
                sets: 3,
                reps: "6, 12, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A",
                imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones Tempo 1:1",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o",
                        imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Jalón al Pecho Neutro en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho Neutro en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/5YzMH2KkMHc",
                        imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
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
                videoUrl: "https://youtu.be/5YzMH2KkMHc",
                imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Fondos en Paralelas Lastrados",
                isSuperset: true,
                items: [
                    {
                        name: "Fondos en Paralelas Lastrados",
                        subOrder: 1,
                        sets: 2,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                        imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Cuerda en Polea Baja",
                        subOrder: 2,
                        sets: 2,
                        reps: "10-12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                        imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Activación y Descarga PIERNAS",
        exercises: [
            {
                order: 1,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 1,
                    restBetweenExercisesSeconds: 5,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "Liberación Miofascial - Gastrocnemios",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Liberación.",
                        videoUrl: "https://youtu.be/juUqLPfhF2I",
                        imageUrl: "https://i.ytimg.com/vi/juUqLPfhF2I/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Gastrocnemios",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/juUqLPfhF2I",
                        imageUrl: "https://i.ytimg.com/vi/juUqLPfhF2I/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Isquiosurales",
                        subOrder: 3,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/wfP97EW_3B0",
                        imageUrl: "https://i.ytimg.com/vi/wfP97EW_3B0/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Isquiosurales",
                        subOrder: 4,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/wfP97EW_3B0",
                        imageUrl: "https://i.ytimg.com/vi/wfP97EW_3B0/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Glúteo y Piramidal",
                        subOrder: 5,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/H4TxDBt9Oew",
                        imageUrl: "https://i.ytimg.com/vi/H4TxDBt9Oew/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Glúteo y Piramidal",
                        subOrder: 6,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/H4TxDBt9Oew",
                        imageUrl: "https://i.ytimg.com/vi/H4TxDBt9Oew/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Cuádriceps Distal",
                        subOrder: 7,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/q27nZmlg_x8",
                        imageUrl: "https://i.ytimg.com/vi/q27nZmlg_x8/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Cuádriceps Distal",
                        subOrder: 8,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/q27nZmlg_x8",
                        imageUrl: "https://i.ytimg.com/vi/q27nZmlg_x8/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Iliopsoas y Cuádriceps",
                        subOrder: 9,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/4Ic63y0cRgQ",
                        imageUrl: "https://i.ytimg.com/vi/4Ic63y0cRgQ/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Iliopsoas y Cuádriceps",
                        subOrder: 10,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/4Ic63y0cRgQ",
                        imageUrl: "https://i.ytimg.com/vi/4Ic63y0cRgQ/mqdefault.jpg"
                    }
                ],
                notes: "Liberación.",
                videoUrl: "https://youtu.be/juUqLPfhF2I",
                imageUrl: "https://i.ytimg.com/vi/juUqLPfhF2I/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Liberación Miofascial - Isquiosurales",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "Liberación.",
                videoUrl: "https://youtu.be/wfP97EW_3B0",
                imageUrl: "https://i.ytimg.com/vi/wfP97EW_3B0/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Hip Thrust con Barra (ExPLICADO)": [
        { name: "Sentadilla Posterior en Máquina Jaca", videoUrl: "https://youtube.com/shorts/KII1KHKgr8o", imageUrl: "https://i.ytimg.com/vi/KII1KHKgr8o/mqdefault.jpg" }
    ],
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Press Militar con Barra Sentado (Half Press)", videoUrl: "https://www.youtube.com/watch?v=q0C0BaHITAc", imageUrl: "https://i.ytimg.com/vi/q0C0BaHITAc/mqdefault.jpg" }
    ],
    "Press Banca Inclinado en Multipower": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ", imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg" }
    ],
    "Máquina de Remo (Gironda)": [
        { name: "Remo Gironda en Polea", videoUrl: "https://youtube.com/shorts/11xkWdyYWus", imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg" }
    ]
};
