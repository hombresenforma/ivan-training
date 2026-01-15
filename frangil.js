// Titulo: PX_2D_AP_PREFATIGAS HOME

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (2 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Pre-Fatiga ANTERIOR",
        exercises: [
            {
                order: 1,
                name: "Flexiones con Peso Corporal",
                sets: 3,
                reps: "FALLO",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla con Salto",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://youtu.be/lfb6neUpfP8",
                        imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Elevaciones Laterales con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    },
                    {
                        name: "Press Militar Sentado con Mancuernas (Explicado)",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                        imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/rhmW_fhB4cs",
                imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Gomas - Aperturas en Columna",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Aperturas en Columna",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/_FBdkpZ5FTs",
                        imageUrl: "https://i.ytimg.com/vi/_FBdkpZ5FTs/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/_FBdkpZ5FTs",
                imageUrl: "https://i.ytimg.com/vi/_FBdkpZ5FTs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Muscle Clean-Jerk Unilat Alterno con Mancuerna",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/2sOV3aayUCI",
                        imageUrl: "https://i.ytimg.com/vi/2sOV3aayUCI/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    }
                ],
                notes: "Alterna entre brazos",
                videoUrl: "https://www.youtube.com/shorts/2sOV3aayUCI",
                imageUrl: "https://i.ytimg.com/vi/2sOV3aayUCI/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Pre-Fatiga POSTERIOR",
        exercises: [
            {
                order: 1,
                name: "Dominadas Australianas en TRX",
                sets: 3,
                reps: "FALLO",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Zancada Dinámica",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Dinámica",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    },
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 2,
                        sets: 3,
                        reps: "20, 16, 12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Inclinado con Mancuernas/KTB (Explicado)",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Inclinado con Mancuernas/KTB (Explicado)",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                        imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
                    },
                    {
                        name: "Remo en TRX",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                        imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Gomas - Curl de Bíceps en Columna",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Curl de Bíceps en Columna",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/JogvxqdpbMU",
                        imageUrl: "https://i.ytimg.com/vi/JogvxqdpbMU/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/JogvxqdpbMU",
                imageUrl: "https://i.ytimg.com/vi/JogvxqdpbMU/mqdefault.jpg"
            },
            {
                order: 5,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "6",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                        imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
                    },
                    {
                        name: "Funcional - Lateral Climber",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/wvDHQxUC1E8",
                        imageUrl: "https://i.ytimg.com/vi/wvDHQxUC1E8/mqdefault.jpg"
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
};

console.log("Datos de rutina cargados desde el creador.");
