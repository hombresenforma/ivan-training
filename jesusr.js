// Titulo: P23_5D_PostAntTorPier_VOLUMEN_2_PERSONALIZADO
// Notas: - Añadimos 1 serie a los básicos (máximo 5)
// - Añadimos tercer ejercicio a las series de Pecho y Espalda
// - Día 5 complementario de deltoides, brazos, core y cardio suave (45-60 min)

const workoutData = {
    "dia1": {
        name: "Anterior Volumen",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado en Multipower",
                sets: 5,
                reps: "8",
                rest: "120s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Puedes hacerla cogido con una mano a alguna máquina.",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Banca con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Banca con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/hXCJC2Apcdg",
                        imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
                    },
                    {
                        name: "Aperturas en Banco Inclinado con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        videoUrl: "https://youtu.be/Lx8d28YlcbQ",
                        imageUrl: "https://i.ytimg.com/vi/Lx8d28YlcbQ/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones con Peso Corporal",
                        subOrder: 3,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                        imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Cuádriceps en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Cuádriceps en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/KTB y Pies Elevados",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://youtu.be/E2n7V0o8B5A",
                        imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Tríceps Trasnuca en Polea Alta",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/HSPEHrwmOv8",
                imageUrl: "https://i.ytimg.com/vi/HSPEHrwmOv8/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Posterior Volumen ",
        exercises: [
            {
                order: 1,
                name: "Dominadas con Peso Corporal",
                sets: 5,
                reps: "8",
                rest: "120s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Peso Muerto Rumano con Barra",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Seal con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Seal con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        notes: "Trata de despegar el pecho al final del movimiento",
                        videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                        imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
                    },
                    {
                        name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                        imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull al Cuello en Polea Alta",
                        subOrder: 3,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/TaTjLum-_qI",
                        imageUrl: "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
                    }
                ],
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Femoral Sentado en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral Sentado en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                        imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Swing Ruso",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://youtu.be/eKN0tj8q6Qc",
                        imageUrl: "https://i.ytimg.com/vi/eKN0tj8q6Qc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Toro Volumen",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 5,
                reps: "8",
                rest: "120s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo en Máquina T Agarre Estrecho",
                sets: 5,
                reps: "8",
                rest: "120s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Jalón al Pecho Supino en Polea",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Cerrado con Barra",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://youtu.be/_062fQmtry8",
                imageUrl: "https://i.ytimg.com/vi/_062fQmtry8/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Curl con Barra Recta",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://youtu.be/0TjnWWqQfUw",
                imageUrl: "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Pierna Volumen ",
        exercises: [
            {
                order: 1,
                name: "Hip Thrust con Barra (ExPLICADO)",
                sets: 5,
                reps: "8",
                rest: "120s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 5,
                reps: "8",
                rest: "120s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Aducción de Piernas en Máquina",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Unilat con Mancuerna/Kettlebell",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://youtu.be/xyl28TxLlsM",
                imageUrl: "https://i.ytimg.com/vi/xyl28TxLlsM/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Sentadilla Trasera en Multipower",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            }
        ]
    },
    "dia5": {
        name: "Deltoides, Brazos y Core",
        exercises: [
            {
                order: 1,
                name: "Movilidad - General",
                isWarmup: true,
                sets: 2,
                reps: "10",
                rest: "60s",
                notes: "Calentamiento general antes del trabajo accesorio.",
                videoUrl: "https://youtu.be/5oPBRo8oaag",
                imageUrl: "https://i.ytimg.com/vi/5oPBRo8oaag/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Elevaciones Laterales en Poleas Cruzadas",
                isSuperset: true,
                items: [
                    {
                        name: "Elevaciones Laterales en Poleas Cruzadas",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/MtLsD20-EdE",
                        imageUrl: "https://i.ytimg.com/vi/MtLsD20-EdE/mqdefault.jpg"
                    },
                    {
                        name: "Pájaros con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "75s",
                        videoUrl: "https://youtu.be/EMrOS6P90lM",
                        imageUrl: "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg"
                    }
                ],
                notes: "Trabajo accesorio controlado; deja 2 repeticiones en recámara.",
                videoUrl: "https://youtu.be/MtLsD20-EdE",
                imageUrl: "https://i.ytimg.com/vi/MtLsD20-EdE/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl Scott con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Scott con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                        imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Tríceps en Polea con Cuerda",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "75s",
                        videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
                    }
                ],
                notes: "Sin llegar al fallo para no interferir con los otros días de torso.",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Crunch en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Crunch en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                        imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
                    },
                    {
                        name: "Press Pallof Alterno con Rotación en Polea",
                        subOrder: 2,
                        sets: 3,
                        reps: "10 por lado",
                        rest: "60s",
                        videoUrl: "https://youtube.com/shorts/vqBP-GHoW5k",
                        imageUrl: "https://i.ytimg.com/vi/vqBP-GHoW5k/mqdefault.jpg"
                    }
                ],
                notes: "Mantén el tronco estable y controla la vuelta.",
                videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
            },
            {
                order: 5,
                name: "CARDIO - Bicicleta (Ritmo Suave)",
                sets: 1,
                reps: "15 min",
                rest: "0s",
                notes: "Ritmo continuo cómodo para terminar la sesión sin añadir fatiga muscular alta.",
                videoUrl: "https://www.youtube.com/watch?v=r6iTJGOftHY",
                imageUrl: "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};