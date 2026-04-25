// Titulo: P1_3D_fb_01

const workoutData = {
    "dia1": {
        name: "PIERNAS",
        exercises: [
            {
                order: 1,
                name: "Worm + Flexión",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Worm + Flexión",
                        subOrder: 1,
                        sets: 2,
                        reps: "5",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Peso Corporal",
                        subOrder: 2,
                        sets: 2,
                        reps: "20",
                        notes: "Puedes hacerlas sin salto si lo prefieres.",
                        rest: "30s",
                        videoUrl: "https://youtu.be/NWes6fd1Sxs",
                        imageUrl: "https://i.ytimg.com/vi/NWes6fd1Sxs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                setTechniques: {"1":"DROPSET","2":"DROPSET","3":"DROPSET"},
                sets: 4,
                reps: "8",
                rest: "90s",
                notes: "USA DOS MANCUENRAS Y DEJA UNA EN LA DROPSET. (50%)",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Trasera con Barra Talones Elevados",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Trasera con Barra Talones Elevados",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/FYuU4CAAT1I",
                        imageUrl: "https://i.ytimg.com/vi/FYuU4CAAT1I/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/FYuU4CAAT1I",
                imageUrl: "https://i.ytimg.com/vi/FYuU4CAAT1I/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 90
                },
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Peso Muerto Rumano con Mancuernas/KTB",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                        imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
                    },
                    {
                        name: "Hollow Abdominal con Brazos a los Lados",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/Ewp7N3-NYAY",
                        imageUrl: "https://i.ytimg.com/vi/Ewp7N3-NYAY/mqdefault.jpg"
                    },
                    {
                        name: "",
                        subOrder: 4,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "",
                        imageUrl: ""
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Torso COMPLETO",
        exercises: [
            {
                order: 1,
                name: "Remo Horizontal en TRX",
                isWarmup: true,
                sets: 2,
                reps: "12",
                rest: "30s",
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas Supinas",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas Supinas",
                        subOrder: 1,
                        sets: 4,
                        reps: "6",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                        imageUrl: "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con TRX",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                        imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                imageUrl: "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Cerrado con Barra",
                isSuperset: true,
                items: [
                    {
                        name: "Press Cerrado con Barra",
                        subOrder: 1,
                        sets: 4,
                        reps: "6",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/_062fQmtry8",
                        imageUrl: "https://i.ytimg.com/vi/_062fQmtry8/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/_062fQmtry8",
                imageUrl: "https://i.ytimg.com/vi/_062fQmtry8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar con Barra de Pie",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar con Barra de Pie",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        notes: "Utiliza 10kg más en REMO (añade 5kg por lado)",
                        videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                        imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
                    },
                    {
                        name: "Remo con Barra",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/MjnZ52mZgT0",
                        imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
                    }
                ],
                notes: "Utiliza 10kg más en REMO (añade 5kg por lado)",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Banca con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Banca con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/hXCJC2Apcdg",
                        imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
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
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};
