// Titulo: Iván JUNIO_2
// Notas: - Añadimos en el principal 4ta serie a 20 reps.
// - Añadimos día de TORSO COMPLETO. 

const workoutData = {
    "dia1": {
        name: "Posterior",
        exercises: [
            {
                order: 1,
                name: "Crunch en Polea Alta",
                isWarmup: true,
                sets: 2,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo en Máquina T Agarre Estrecho",
                sets: 4,
                reps: "6, 6, 12, 20",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl Scott con Barra Z",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Peso Muerto Rumano con Barra",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Jalón al Pecho en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho en Polea",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                        videoUrl: "https://youtu.be/GYIhmy1P4vY",
                        imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
                    },
                    {
                        name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                        imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
                    }
                ],
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/GYIhmy1P4vY",
                imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Curl Femoral Tumbado en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral Tumbado en Máquina",
                        subOrder: 1,
                        sets: 4,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                        imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull al Cuello en Polea Alta",
                        subOrder: 2,
                        sets: 4,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/TaTjLum-_qI",
                        imageUrl: "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Anterior",
        exercises: [
            {
                order: 1,
                name: "Press Pallof Unilat con Rotación en Polea",
                isWarmup: true,
                sets: 2,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/5lo528rQAx8",
                imageUrl: "https://i.ytimg.com/vi/5lo528rQAx8/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca con Barra",
                sets: 4,
                reps: "6, 6, 12, 20",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Trasera con Barra",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar Sentado con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Aperturas en Máquina Contractora",
                isSuperset: true,
                items: [
                    {
                        name: "Aperturas en Máquina Contractora",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                        videoUrl: "https://youtu.be/_cTQ9xk5B4o",
                        imageUrl: "https://i.ytimg.com/vi/_cTQ9xk5B4o/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Tríceps Trasnuca en Polea Alta",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/HSPEHrwmOv8",
                        imageUrl: "https://i.ytimg.com/vi/HSPEHrwmOv8/mqdefault.jpg"
                    }
                ],
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/_cTQ9xk5B4o",
                imageUrl: "https://i.ytimg.com/vi/_cTQ9xk5B4o/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Extensión de Cuádriceps en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Cuádriceps en Máquina",
                        subOrder: 1,
                        sets: 4,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Tríceps en Polea con Cuerda",
                        subOrder: 2,
                        sets: 4,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Crunch - V",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Crunch - V",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/_SCqc7BCW9A",
                        imageUrl: "https://i.ytimg.com/vi/_SCqc7BCW9A/mqdefault.jpg"
                    },
                    {
                        name: "Hollow Abdominal con Brazos a los Lados",
                        subOrder: 2,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/Ewp7N3-NYAY",
                        imageUrl: "https://i.ytimg.com/vi/Ewp7N3-NYAY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/_SCqc7BCW9A",
                imageUrl: "https://i.ytimg.com/vi/_SCqc7BCW9A/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar con Barra de Pie",
                sets: 4,
                reps: "6, 6, 12, 20",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Dominadas Supinas",
                sets: 4,
                reps: "6, 6, 12, 20",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                imageUrl: "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Inclinado Alterno con Mancuernas",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtube.com/shorts/s6AaBOdiE6M?feature=share",
                imageUrl: "https://i.ytimg.com/vi/s6AaBOdiE6M/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo Abierto Alterno en Máquina",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtube.com/shorts/13Xv87XBLLA?feature=share",
                imageUrl: "https://i.ytimg.com/vi/13Xv87XBLLA/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Curl de Biceps Sentado con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl de Biceps Sentado con Barra Z",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                        videoUrl: "https://www.youtube.com/shorts/D1Ix4-fxyhE",
                        imageUrl: "https://i.ytimg.com/vi/D1Ix4-fxyhE/mqdefault.jpg"
                    },
                    {
                        name: "Press Francés + Press Cerrado con Barra Z",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/MpF94C3Z8_g",
                        imageUrl: "https://i.ytimg.com/vi/MpF94C3Z8_g/mqdefault.jpg"
                    }
                ],
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://www.youtube.com/shorts/D1Ix4-fxyhE",
                imageUrl: "https://i.ytimg.com/vi/D1Ix4-fxyhE/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Remo en Máquina T Agarre Estrecho": [
        { name: "Remo Gironda en Polea", videoUrl: "https://youtube.com/shorts/11xkWdyYWus", imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg" }
    ],
    "Curl Scott con Barra Z": [
        { name: "Curl con Barra Recta", videoUrl: "https://youtu.be/0TjnWWqQfUw", imageUrl: "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg" }
    ],
    "Peso Muerto Rumano con Barra": [
        { name: "Remo Diagonal Unilat en Polea Alta", videoUrl: "https://youtube.com/shorts/ikKQhcynKmg", imageUrl: "https://i.ytimg.com/vi/ikKQhcynKmg/mqdefault.jpg" }
    ],
    "Press Banca con Barra": [
        { name: "Press Banca Inclinado en Multipower", videoUrl: "https://youtu.be/3GS7EjN7KSk", imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg" }
    ],
    "Sentadilla Trasera con Barra": [
        { name: "Sentadilla Anterior en Máquina Jaca", videoUrl: "https://youtube.com/shorts/saLWdiUe5eE", imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg" }
    ],
    "Press Militar Sentado con Mancuernas": [
        { name: "Press Militar en Multipower", videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI", imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg" }
    ],
    "Press Militar con Barra de Pie": [
        { name: "Press MIlitar en Multipower - Rodillas", videoUrl: "https://youtube.com/shorts/ZtBQT2bnKEw?feature=share", imageUrl: "https://i.ytimg.com/vi/ZtBQT2bnKEw/mqdefault.jpg" }
    ],
    "Dominadas Supinas": [
        { name: "Press MIlitar en Multipower - Rodillas", videoUrl: "https://youtube.com/shorts/ZtBQT2bnKEw?feature=share", imageUrl: "https://i.ytimg.com/vi/ZtBQT2bnKEw/mqdefault.jpg" }
    ],
    "Press Inclinado Alterno con Mancuernas": [
        { name: "Press Militar en Multipower", videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI", imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg" }
    ],
    "Remo Abierto Alterno en Máquina": [
        { name: "Remo Seal con Mancuernas", videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o", imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg" }
    ]
};
