// Titulo: P23_4D_PostAntTorPier_VOLUMEN_1_FEM

const workoutData = {
    "dia1": {
        name: "Anterior Volumen",
        exercises: [
            {
                order: 1,
                name: "Press Militar en Máquina",
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://youtube.com/shorts/48CmkF61E7M",
                imageUrl: "https://i.ytimg.com/vi/48CmkF61E7M/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Trasera en Multipower",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Utiliza la máquina jaca inclinada de tu gimnasio.",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Flexiones Tempo 1:1",
                isSuperset: true,
                items: [
                    {
                        name: "Flexiones Tempo 1:1",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o",
                        imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
                    },
                    {
                        name: "Curl + Press con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/siOTRSu2ORY",
                        imageUrl: "https://i.ytimg.com/vi/siOTRSu2ORY/mqdefault.jpg"
                    }
                ],
                videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o",
                imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
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
                        name: "Extensión de Tríceps en Polea con Cuerda",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
                    }
                ],
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Posterior Volumen ",
        exercises: [
            {
                order: 1,
                name: "Dominadas / Pull Ups asistidas con Goma",
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://www.youtube.com/watch?v=pll4AdUg17g",
                imageUrl: "https://i.ytimg.com/vi/pll4AdUg17g/mqdefault.jpg"
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
                name: "Remo Abierto en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Abierto en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Trata de despegar el pecho al final del movimiento",
                        videoUrl: "https://youtube.com/shorts/h_meCpwdm-8?feature=share",
                        imageUrl: "https://i.ytimg.com/vi/h_meCpwdm-8/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull al Cuello en Polea Alta",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/TaTjLum-_qI",
                        imageUrl: "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
                    }
                ],
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://youtube.com/shorts/h_meCpwdm-8?feature=share",
                imageUrl: "https://i.ytimg.com/vi/h_meCpwdm-8/mqdefault.jpg"
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
                        name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                        imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
                    }
                ],
                videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Pierna Volumen ",
        exercises: [
            {
                order: 1,
                name: "Hip Thrust con Barra (ExPLICADO)",
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Aducción de Piernas en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Aducción de Piernas en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                        videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                        imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
                    },
                    {
                        name: "Abducción de Glúteo Unilat en el Suelo",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    }
                ],
                notes: "Haz con el mismo peso todas las series hasta no ser capaz de llegar a 8.",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Unilat con Mancuerna/Kettlebell",
                sets: 3,
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
    }
,
    dia4: {
    "name": "Elena prueba pierna",
    "exercises": [
        {
            "name": "Abducción de Glúteo Unilat en el Suelo",
            "sets": 2,
            "reps": "10",
            "rest": "30s",
            "notes": "Calentamiento suave: completa las repeticiones con cada pierna sin llegar a fatigar. Antes de la búlgara, realiza dos aproximaciones progresivas con poca carga.",
            "videoUrl": "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
            "imageUrl": "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg",
            "isWarmup": true,
            "order": 1
        },
        {
    "name": "Sentadilla Búlgara en Máquina",
    "sets": 3,
    "reps": "8",
    "rest": "120s",
    "notes": "El vídeo muestra la variante en máquina de sentadilla Hammer Strength. Ajusta los apoyos de la máquina, mantén el pie delantero firme y el pie trasero elevado en un soporte estable. Baja con control y empuja con la pierna delantera. Realiza las repeticiones con cada pierna. Descansa después de completar ambas piernas. Ajusta la carga para terminar con 1–2 repeticiones en recámara.",
    "videoUrl": "https://www.youtube.com/watch?v=wqDidBdygbY",
    "imageUrl": "https://i.ytimg.com/vi/wqDidBdygbY/mqdefault.jpg",
    "order": 2
},
        {
    "name": "Sentadilla Posterior en Máquina Jaca",
    "sets": 3,
    "reps": "10",
    "rest": "120s",
    "notes": "Colócate como en el vídeo y baja de forma controlada, sin rebotes.",
    "videoUrl": "https://youtube.com/shorts/KII1KHKgr8o",
    "imageUrl": "https://i.ytimg.com/vi/KII1KHKgr8o/mqdefault.jpg",
    "order": 3
},
        {
            "name": "Prensa Inclinada en Máquina de Discos",
            "sets": 3,
            "reps": "10",
            "rest": "120s",
            "notes": "Mantén la pelvis apoyada durante todo el recorrido y controla la bajada.",
            "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
            "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg",
            "order": 4
        },
        {
            "name": "Hip Thrust en Máquina",
            "sets": 3,
            "reps": "12",
            "rest": "90s",
            "notes": "Ajusta el apoyo y el cinturón o rodillo de la máquina sobre la cadera. Eleva la cadera con control, contrae el glúteo arriba sin arquear la zona lumbar y baja sin rebotes. Haz una pausa breve contrayendo el glúteo arriba.",
            "videoUrl": "https://www.youtube.com/watch?v=BhoKmsSZNGM",
            "imageUrl": "https://i.ytimg.com/vi/BhoKmsSZNGM/mqdefault.jpg",
            "order": 5
        },
        {
            "name": "Patada de Glúteo en Polea",
            "sets": 3,
            "reps": "15",
            "rest": "75s",
            "notes": "Usa un disco o step para elevar el otro pie Completa las repeticiones con cada pierna sin girar la pelvis ni arquear la zona lumbar. Descansa después de ambas piernas.",
            "videoUrl": "https://www.youtube.com/watch?v=3KdH7vkEW6s",
            "imageUrl": "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg",
            "order": 6
        }
    ]
}
};

const exerciseAlternatives = {};


