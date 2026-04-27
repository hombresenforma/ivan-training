// Titulo: P0_2D_BÁSICOS_2_HOME
// Notas: Subimos de 3 a 4 series en TODOS los BÁSICOS.
// Contenido de app_datos.js
// =================================================================================
// DATOS DE LA RUTINA (2 DÍAS)
// =================================================================================

const workoutData = {
    "dia1": {
        name: "Básicos 1",
        exercises: [
            {
                order: 1,
                name: "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        notes: "Mantén una inclinación paralela al suelo.",
                        videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                        imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 3,
                        reps: "3",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    }
                ],
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Floor Press con Mancuernas",
                sets: 3,
                reps: "15",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
                sets: 3,
                reps: "20",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/tNu9bm3geqY",
                imageUrl: "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Aperturas en Banco Inclinado con Mancuernas",
                sets: 3,
                reps: "20",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/Lx8d28YlcbQ",
                imageUrl: "https://i.ytimg.com/vi/Lx8d28YlcbQ/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl con Mancuernas de Pie",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Mancuernas de Pie",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/8STuQuoDMR0",
                        imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones con Rodillas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        videoUrl: "https://www.youtube.com/shorts/bmKPWM_b85Y",
                        imageUrl: "https://i.ytimg.com/vi/bmKPWM_b85Y/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 3,
                        sets: 3,
                        reps: "20seg",
                        rest: "90s",
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/8STuQuoDMR0",
                imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Básicos 2",
        exercises: [
            {
                order: 1,
                name: "Remo Horizontal en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Horizontal en TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Mantén una inclinación paralela al suelo.",
                        videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                        imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 3,
                        reps: "3",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    }
                ],
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Elevaciones Laterales con Mancuernas",
                sets: 3,
                reps: "20",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/rhmW_fhB4cs",
                imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 4,
                reps: "20",
                rest: "90s",
                notes: "8-10 POR PIERNA",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                sets: 4,
                reps: "15",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Fondos de Tríceps con Pies en el Suelo",
                isSuperset: true,
                items: [
                    {
                        name: "Fondos de Tríceps con Pies en el Suelo",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/7mpEJQC_gRk",
                        imageUrl: "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/7mpEJQC_gRk",
                imageUrl: "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};
