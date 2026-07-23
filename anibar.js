// Titulo: P0_2D_FULLBODY_MANC+TRX

const workoutData = {
    "dia1": {
        name: "Fullbody 1 (PUSH)",
        exercises: [
            {
                order: 1,
                name: "Floor Press con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Zancadas Caminando con Mancuernas/KTB",
                sets: 3,
                reps: "20",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Flexiones con Peso Corporal",
                isSuperset: true,
                items: [
                    {
                        name: "Flexiones con Peso Corporal",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                        imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies en el Suelo",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        videoUrl: "https://youtube.com/shorts/7mpEJQC_gRk",
                        imageUrl: "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg"
                    },
                    {
                        name: "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
                        subOrder: 3,
                        sets: 3,
                        reps: "15",
                        rest: "60s",
                        videoUrl: "https://youtu.be/1MgU2PO4_rI",
                        imageUrl: "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fullbody 2 (PULL)",
        exercises: [
            {
                order: 1,
                name: "Dominadas Australianas en TRX",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                sets: 3,
                reps: "20",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl + Press Unilateral con Mancuerna",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/JYJyCRWHr_c",
                imageUrl: "https://i.ytimg.com/vi/JYJyCRWHr_c/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                        imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
                    },
                    {
                        name: "Remo en TRX",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                        imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 3,
                        sets: 3,
                        reps: "12",
                        rest: "60s",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Floor Press con Mancuernas": [
        { name: "Press Inclinado con Mancuernas", videoUrl: "https://youtu.be/ZE4M73kXB5A", imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg" }
    ]
};
