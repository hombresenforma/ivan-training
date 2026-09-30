// Titulo: P20_4D_TorPier_DC_0
// Notas: Rutina para AVANZADOS -> ALTA INTENSIDAD, Bajo Volumen
// - Lavado de cara de 4 días con variantes visibles y adaptaciones por molestias de antebrazo.
// - Bíceps directo solo en B1; series y repeticiones conservadas, sin intensificadores en el trabajo de bíceps.

const workoutData = {
    "dia1": {
        name: "A1 - Pecho/Hombros/Tríceps/Espalda",
        exercises: [
            {
                order: 1,
                name: "Press Banca en Multipower",
                setTechniques: {},
                sets: 4,
                reps: "6, 6, 10, 15",
                rest: "120s",
                notes: "En la cuarta serie ajusta la carga para completar 15 repeticiones.",
                videoUrl: "https://youtu.be/w-5ovE5O5iU",
                imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar Sentado con Mancuernas",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Extensión de Tríceps en Polea con Cuerda",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "15",
                rest: "120s",
                notes: "Stretch: elevación lateral cable (45s)",
                videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Inclinado con Mancuernas",
                setTechniques: {},
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
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
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        notes: "Stretch: pullover cable (60s)",
                        videoUrl: "https://youtu.be/5YzMH2KkMHc",
                        imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Tríceps en Polea con Cuerda",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
                    }
                ],
                notes: "Stretch: pullover cable (60s)",
                videoUrl: "https://youtu.be/5YzMH2KkMHc",
                imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "B1 - Espalda/Bíceps/Pierna",
        exercises: [
            {
                order: 1,
                name: "Remo en Máquina T Agarre Estrecho",
                setTechniques: {},
                sets: 4,
                reps: "6, 6, 10, 15",
                rest: "120s",
                notes: "En la cuarta serie ajusta la carga para completar 15 repeticiones.",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Jalón al Pecho Neutro en Polea",
                setTechniques: {},
                sets: 3,
                reps: "10",
                rest: "120s",
                notes: "Agarre neutro y carga controlada; detén la serie si aparece dolor en el antebrazo.",
                videoUrl: "https://youtu.be/5YzMH2KkMHc",
                imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Anterior en Máquina Jaca",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "120",
                notes: "",
                videoUrl: "https://youtube.com/shorts/saLWdiUe5eE",
                imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Tumbado en Máquina",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "15",
                rest: "90s",
                notes: "Stretch: estiramiento con peso (30s)",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Curl Martillo con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales en Poleas Cruzadas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://youtu.be/MtLsD20-EdE",
                        imageUrl: "https://i.ytimg.com/vi/MtLsD20-EdE/mqdefault.jpg"
                    }
                ],
                notes: "Una sola sesión directa de bíceps semanal; detén el ejercicio si duele el antebrazo.",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "A2 - Pecho/Hombros/Tríceps/Espalda",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado en Multipower",
                setTechniques: {},
                sets: 4,
                reps: "6, 6, 10, 15",
                rest: "120s",
                notes: "En la cuarta serie ajusta la carga para completar 15 repeticiones.",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar en Multipower",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Francés con Barra Z en Banco Inclinado",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "15",
                rest: "120",
                notes: "",
                videoUrl: "https://youtu.be/hFk6xzt1DWM",
                imageUrl: "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Fondos en Paralelas Lastrados",
                setTechniques: {},
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Pull Over en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Pull Over en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/zWGbrVxoUpk",
                        imageUrl: "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg"
                    },
                    {
                        name: "Cruces en Polea Alta",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://youtu.be/Ht9awbF2fBA",
                        imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/zWGbrVxoUpk",
                imageUrl: "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "B2 - Espalda/Bíceps/Pierna",
        exercises: [
            {
                order: 1,
                name: "Remo Seal con Mancuernas",
                setTechniques: {},
                sets: 4,
                reps: "6, 6, 10, 15",
                rest: "120s",
                notes: "En la cuarta serie ajusta la carga para completar 15 repeticiones.",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Pájaros con Mancuernas",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "15",
                rest: "120",
                notes: "",
                videoUrl: "https://youtu.be/EMrOS6P90lM",
                imageUrl: "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Prensa Inclinada en Máquina de Discos",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Cuádriceps en Máquina",
                setTechniques: {},
                sets: 3,
                reps: "12",
                rest: "120",
                notes: "Stretch: posición estirada en máquina (60s)",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Face Pull al Cuello en Polea Alta",
                setTechniques: {},
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                notes: "Trabajo de deltoide posterior sin curl directo de bíceps.",
                videoUrl: "https://www.youtube.com/shorts/TaTjLum-_qI",
                imageUrl: "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca en Multipower": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ],
    "Press MIlitar en Multipower - Rodillas": [
        { name: "Press Militar con Barra de Pie", videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0", imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg" }
    ],
    "Remo con Barra": [
        { name: "Remo en Máquina T Agarre Estrecho", videoUrl: "https://youtube.com/shorts/_XOaMY5NumY", imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg" }
    ],
    "Sentadilla Anterior en Máquina Jaca": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Press Inclinado con Mancuernas": [
        { name: "Press Banca Inclinado en Multipower", videoUrl: "https://youtu.be/3GS7EjN7KSk", imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg" }
    ],
    "Remo Gironda en Polea": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ]
};
