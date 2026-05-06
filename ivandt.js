// Titulo: IMPORT_43534

const workoutData = {
    "dia1": {
        name: "A1 - Pecho/Hombros/Tríceps/Espalda",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado en Multipower",
                setTechniques: {"1":"CLUSTER"},
                sets: 4,
                reps: "6",
                rest: "90s",
                notes: "Stretch: aperturas cable bajo (60s)",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar en Multipower",
                setTechniques: {"1":"CLUSTER","3":"REST-PAUSE"},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Stretch: elevación lateral cable (45s)",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Cruces en Polea Alta",
                setTechniques: {"1":"CLUSTER","3":"REST-PAUSE"},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Stretch: elevación lateral cable (45s)",
                videoUrl: "https://youtu.be/Ht9awbF2fBA",
                imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Francés con Barra Z en Banco Inclinado",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: extensión overhead cable (45s)",
                videoUrl: "https://youtu.be/hFk6xzt1DWM",
                imageUrl: "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Jalón al Pecho Supino en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho Supino en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Stretch: pullover cable (60s)",
                        videoUrl: "https://youtu.be/rimdRzyIJkA",
                        imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Tríceps en Polea con Cuerda",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
                    }
                ],
                notes: "Stretch: pullover cable (60s)",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "A2 - Pecho/Hombros/Tríceps/Espalda",
        exercises: [
            {
                order: 1,
                name: "Remo en Banco con Pecho Apoyado con Mancuernas",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: aperturas con mancuernas (60s)",
                videoUrl: "https://www.youtube.com/watch?v=tlGl_Svh6Mk",
                imageUrl: "https://i.ytimg.com/vi/tlGl_Svh6Mk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar con Barra Sentado (Half Press)",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: elevación frontal cable (45s)",
                videoUrl: "https://www.youtube.com/watch?v=q0C0BaHITAc",
                imageUrl: "https://i.ytimg.com/vi/q0C0BaHITAc/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Fondos en Paralelas Lastrados",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: extensión overhead mancuerna (45s)",
                videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Flexiones con Lastre",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: pullover con mancuerna (60s)",
                videoUrl: "https://www.youtube.com/shorts/gLBrKowP2eo",
                imageUrl: "https://i.ytimg.com/vi/gLBrKowP2eo/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo en Banco con Pecho Apoyado con Mancuernas",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "6-8",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=tlGl_Svh6Mk",
                imageUrl: "https://i.ytimg.com/vi/tlGl_Svh6Mk/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Gomas - Curl de Bíceps de Pie",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "12-15",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/w4AydDM5bjU",
                imageUrl: "https://i.ytimg.com/vi/w4AydDM5bjU/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "A3 - Pecho/Hombros/Tríceps/Espalda",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado con Barra",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: cruce en polea alta (60s)",
                videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ",
                imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar Sentado con Mancuernas",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: elevación lateral mancuerna (45s)",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Extensión de Codo en Polea Alta agarre V",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: extensión triángulo cable (45s)",
                videoUrl: "https://www.youtube.com/watch?v=bGyuC_5Wtcs",
                imageUrl: "https://i.ytimg.com/vi/bGyuC_5Wtcs/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Jalón al Pecho Neutro en Polea",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: straight-arm pulldown (60s)",
                videoUrl: "https://youtu.be/5YzMH2KkMHc",
                imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Banca Inclinado con Barra",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "6-8",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ",
                imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Gomas - Curl de Bíceps de Pie",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "12-15",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/w4AydDM5bjU",
                imageUrl: "https://i.ytimg.com/vi/w4AydDM5bjU/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "B1 - Espalda/Bíceps/Cuádriceps/Femoral/Gemelos",
        exercises: [
            {
                order: 1,
                name: "Remo con Barra",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: remo en cable (60s)",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Gomas - Curl de Bíceps de Pie",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: curl Scott cable (45s)",
                videoUrl: "https://youtu.be/w4AydDM5bjU",
                imageUrl: "https://i.ytimg.com/vi/w4AydDM5bjU/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Trasera con Barra",
                setTechniques: {},
                sets: 4,
                reps: "5",
                rest: "120s",
                notes: "Stretch: sentadilla sissy (60s)",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Femoral Tumbado en Máquina",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "10-15",
                rest: "90s",
                notes: "Stretch: posición estirada en máquina (60s)",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Gomas - Curl de Bíceps de Pie",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "10-15",
                rest: "90s",
                notes: "Stretch: estiramiento con peso (30s)",
                videoUrl: "https://youtu.be/w4AydDM5bjU",
                imageUrl: "https://i.ytimg.com/vi/w4AydDM5bjU/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Remo con Barra",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "6-8",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Gomas - Curl de Bíceps de Pie",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "12-15",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/w4AydDM5bjU",
                imageUrl: "https://i.ytimg.com/vi/w4AydDM5bjU/mqdefault.jpg"
            }
        ]
    },
    "dia5": {
        name: "B2 - Espalda/Bíceps/Cuádriceps/Femoral/Gemelos",
        exercises: [
            {
                order: 1,
                name: "Remo Unilat en Plancha Mano con Mancuerna",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: remo en máquina (60s)",
                videoUrl: "https://youtube.com/shorts/F1UGMK4xO-Y",
                imageUrl: "https://i.ytimg.com/vi/F1UGMK4xO-Y/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Curl Martillo con Mancuernas",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: curl en banco inclinado (45s)",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Gomas - Curl de Bíceps de Pie",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "10-20",
                rest: "90s",
                notes: "Stretch: sentadilla profunda con peso (60s)",
                videoUrl: "https://youtu.be/w4AydDM5bjU",
                imageUrl: "https://i.ytimg.com/vi/w4AydDM5bjU/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Peso Muerto Rumano con KTB",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "10-15",
                rest: "90s",
                notes: "Stretch: estiramiento tumbado con carga (60s)",
                videoUrl: "https://www.youtube.com/watch?v=jDSKi9vIt34",
                imageUrl: "https://i.ytimg.com/vi/jDSKi9vIt34/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Sentado en Máquina",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "10-15",
                rest: "90s",
                notes: "Stretch: estiramiento con peso (30s)",
                videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Remo Unilat en Plancha Mano con Mancuerna",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "6-8",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/F1UGMK4xO-Y",
                imageUrl: "https://i.ytimg.com/vi/F1UGMK4xO-Y/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Gomas - Curl de Bíceps de Pie",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "12-15",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/w4AydDM5bjU",
                imageUrl: "https://i.ytimg.com/vi/w4AydDM5bjU/mqdefault.jpg"
            }
        ]
    },
    "dia6": {
        name: "B3 - Espalda/Bíceps/Cuádriceps/Femoral/Gemelos",
        exercises: [
            {
                order: 1,
                name: "Remo en Máquina T Agarre Abierto",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: remo bajo en polea (60s)",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Curl con Barra Recta",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "11-15",
                rest: "90s",
                notes: "Stretch: curl en polea baja (45s)",
                videoUrl: "https://youtu.be/0TjnWWqQfUw",
                imageUrl: "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Step Up en Máquina Jaca",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "10-20",
                rest: "90s",
                notes: "Stretch: sentadilla búlgara (60s)",
                videoUrl: "https://youtube.com/shorts/TkfFh3cZizQ",
                imageUrl: "https://i.ytimg.com/vi/TkfFh3cZizQ/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Gomas - Curl de Bíceps de Pie",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "10-15",
                rest: "90s",
                notes: "Stretch: posición estirada con carga (60s)",
                videoUrl: "https://youtu.be/w4AydDM5bjU",
                imageUrl: "https://i.ytimg.com/vi/w4AydDM5bjU/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Fondos en Paralelas con Pies en el Suelo",
                setTechniques: {"1":"CLUSTER"},
                sets: 1,
                reps: "10-15",
                rest: "90s",
                notes: "Stretch: estiramiento con peso (30s)",
                videoUrl: "https://youtu.be/ih3eslbM2Wo",
                imageUrl: "https://i.ytimg.com/vi/ih3eslbM2Wo/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Remo en Máquina T Agarre Abierto",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "6-8",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Gomas - Curl de Bíceps de Pie",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "12-15",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/w4AydDM5bjU",
                imageUrl: "https://i.ytimg.com/vi/w4AydDM5bjU/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};
