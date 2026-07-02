// Titulo: P3_3D_APFB_INOUT_1 (HOME)

const workoutData = {
    "dia1": {
        name: "Anterior IN-OUT",
        exercises: [
            {
                order: 2,
                name: "Floor Press con Mancuernas",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 3,
                reps: "16",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
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
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
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
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Flexiones + Mountain Climbers",
                isSuperset: true,
                items: [
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies en el Suelo",
                        subOrder: 2,
                        sets: 3,
                        reps: "15, 12, 10",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/7mpEJQC_gRk",
                        imageUrl: "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito IN-OUT",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Utiliza mancuernas de 8-10kg. ",
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Burpee",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=qTLp4wcAAtQ",
                        imageUrl: "https://i.ytimg.com/vi/qTLp4wcAAtQ/mqdefault.jpg"
                    }
                ],
                notes: "Utiliza mancuernas de 8-10kg. ",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Posterior IN-OUT",
        exercises: [
            {
                order: 2,
                name: "Dominadas Australianas en TRX",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Peso Muerto Rumano con Mancuernas/KTB",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "Espalda recta en todo momento",
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
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "10 por cada lado",
                        videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                        imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        notes: "8 por lado",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    }
                ],
                notes: "10 por cada lado",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Face Pull con TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Face Pull con TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                        imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
                    },
                    {
                        name: "Curl de Biceps con TRX",
                        subOrder: 2,
                        sets: 3,
                        reps: "15, 12, 10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/W1C5ABPg_Ak",
                        imageUrl: "https://i.ytimg.com/vi/W1C5ABPg_Ak/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito IN-OUT. ",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Snatch + Thruster Unilat Alterno con Mancuerna",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                        imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
                    },
                    {
                        name: "Lateral Climbers",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/IKuy2laTdGY",
                        imageUrl: "https://i.ytimg.com/vi/IKuy2laTdGY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody IN-OUT",
        exercises: [
            {
                order: 2,
                name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "Puedes apoyarte a una pared.",
                videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Flexiones Diamante / Diamond Pushups",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=6K5n0Lja4Uc",
                imageUrl: "https://i.ytimg.com/vi/6K5n0Lja4Uc/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Martillo con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Extensión Tríceps Trasnuca Unilateral con Mancuerna",
                        subOrder: 2,
                        sets: 3,
                        reps: "15, 12, 10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/jGTquNttoRU",
                        imageUrl: "https://i.ytimg.com/vi/jGTquNttoRU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            },
            {
                order: 8,
                name: "Circuito IN-OUT. ",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Utiliza mancuernas de 8-10kg para ambos ejercicios.",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Burpee sin Flexión",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/_liq4fAscDU",
                        imageUrl: "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
                    }
                ],
                notes: "Utiliza mancuernas de 8-10kg para ambos ejercicios.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Torso",
        exercises: [
            {
                order: 1,
                name: "Curl + Press con Mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/siOTRSu2ORY",
                imageUrl: "https://i.ytimg.com/vi/siOTRSu2ORY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Floor Press con Mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Elevaciones Frontales con Mancuerna",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/7rBxeUNd5tA",
                imageUrl: "https://i.ytimg.com/vi/7rBxeUNd5tA/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar Alterno de Pie con Mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://youtube.com/shorts/0OGSDz6x-QQ",
                imageUrl: "https://i.ytimg.com/vi/0OGSDz6x-QQ/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Hollow - Nivel 4",
                sets: 3,
                reps: "15seg",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/RxFdlQ4oelM",
                imageUrl: "https://i.ytimg.com/vi/RxFdlQ4oelM/mqdefault.jpg"
            }
        ]
    },
    "dia5": {
        name: "Corrección de Postura",
        exercises: [
            {
                order: 1,
                name: "Face Pull con TRX",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "Activación.",
                videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dead Bug",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/0CteMtiMChQ",
                imageUrl: "https://i.ytimg.com/vi/0CteMtiMChQ/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Bird Dog",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/KizkN2buzMw",
                imageUrl: "https://i.ytimg.com/vi/KizkN2buzMw/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Plancha - Normal",
                sets: 3,
                reps: "30-45seg",
                rest: "60s",
                notes: "Mantener espalda recta y glúteo apretado (retroversión de cadera)",
                videoUrl: "https://youtu.be/DQ4wYExQRJo",
                imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Estiramiento - Psoas",
                sets: 2,
                reps: "40seg",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/e5QJv-ORR-E",
                imageUrl: "https://i.ytimg.com/vi/e5QJv-ORR-E/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Estiramiento - Lumbar \"Bebé\"",
                sets: 2,
                reps: "25seg",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/5Jcr_KPTOUM",
                imageUrl: "https://i.ytimg.com/vi/5Jcr_KPTOUM/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Militar Unilat de Pie con Mancuerna/KTB": [
        { name: "Press Militar Sentado con Mancuernas (Explicado)", videoUrl: "", imageUrl: "" }
    ],
    "Dominadas Australianas en TRX": [
        { name: "Dominadas Australianas con Pies en Banco", videoUrl: "https://youtu.be/WqoNa74DieE", imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg" }
    ],
    "Remo Unilat con Mancuerna/KTB (Explicado)": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ]
};
