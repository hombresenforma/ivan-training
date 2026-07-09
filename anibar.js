// Titulo: Fullbody home
// Notas: - Añadimos 2 ejercicios en super-serie antes del HIIT.
// - HIIT 1:1 y añadimos 2 vueltas más (6).
// - En el día de Torso, añadimos 1 serie a los 2 básicos de brazos. 
// Contenido de app_datos.js
// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================

const workoutData = {
    "dia1": {
        name: "DÍA 1: Fullbody",
        exercises: [
            {
                order: 1,
                name: "Jumping Jack",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Jumping Jack",
                        subOrder: 1,
                        sets: 2,
                        reps: "30",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/K5PMB8CauGM",
                        imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
                    },
                    {
                        name: "Burpee Completo",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/qfBhsTabWN0",
                        imageUrl: "https://i.ytimg.com/vi/qfBhsTabWN0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/K5PMB8CauGM",
                imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                setTechniques: {"2":"REST-PAUSE","3":"REST-PAUSE"},
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Floor Press con Mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl + Press con Mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/siOTRSu2ORY",
                imageUrl: "https://i.ytimg.com/vi/siOTRSu2ORY/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Mountain Climber",
                isSuperset: true,
                items: [
                    {
                        name: "Mountain Climber",
                        subOrder: 1,
                        sets: 2,
                        reps: "30",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/GZWmYzClS3s",
                        imageUrl: "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones con Peso Corporal",
                        subOrder: 2,
                        sets: 2,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                        imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/GZWmYzClS3s",
                imageUrl: "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Crunch - Normal",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "Mantén la Lumbar pegada al suelo",
                videoUrl: "https://youtu.be/wNqGgCjBVaE",
                imageUrl: "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "DÍA 2: Fullbody Superseries",
        exercises: [
            {
                order: 1,
                name: "Worm",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Worm",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/KTB y Pies Elevados",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/E2n7V0o8B5A",
                        imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "CARDIO - Burpees con Jumping Jacks",
                isSuperset: true,
                items: [
                    {
                        name: "CARDIO - Burpees con Jumping Jacks",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/A21AiXaXi40",
                        imageUrl: "https://i.ytimg.com/vi/A21AiXaXi40/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Lateral Piernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        notes: "10 por lado",
                        rest: "90s",
                        videoUrl: "https://youtu.be/jjoqs9YMyrM",
                        imageUrl: "https://i.ytimg.com/vi/jjoqs9YMyrM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/A21AiXaXi40",
                imageUrl: "https://i.ytimg.com/vi/A21AiXaXi40/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Gomas - Banded hip thrust",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Banded hip thrust",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        notes: "Con Mancuernas",
                        videoUrl: "https://www.youtube.com/watch?v=z8z0biVVaQY",
                        imageUrl: "https://i.ytimg.com/vi/z8z0biVVaQY/mqdefault.jpg"
                    },
                    {
                        name: "Mountain Climber",
                        subOrder: 2,
                        sets: 3,
                        reps: "30",
                        rest: "90s",
                        videoUrl: "https://youtu.be/GZWmYzClS3s",
                        imageUrl: "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg"
                    }
                ],
                notes: "Con Mancuernas",
                videoUrl: "https://www.youtube.com/watch?v=z8z0biVVaQY",
                imageUrl: "https://i.ytimg.com/vi/z8z0biVVaQY/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Elevaciones Laterales con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    },
                    {
                        name: "Truster con Barra",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "Con Mancuernas",
                        rest: "90s",
                        videoUrl: "https://youtu.be/IKNPwb8BSmM",
                        imageUrl: "https://i.ytimg.com/vi/IKNPwb8BSmM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/rhmW_fhB4cs",
                imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};
