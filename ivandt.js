// Titulo: Plan de Entrenamiento

const workoutData = {
    "dia1": {
        name: "BÁSICOS 1",
        exercises: [
            {
                order: 2,
                name: "Press Banca con Barra",
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Fondos en Paralelas Lastrados",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Cruces en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Cruces en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/Ht9awbF2fBA",
                        imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
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
                notes: "",
                videoUrl: "https://youtu.be/Ht9awbF2fBA",
                imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        "name": "BÁSICOS TRACCIÓN",
        "exercises": [
            {
                "order": 1,
                "name": "Dominadas Supinas",
                "videoUrl": "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                "imageUrl": "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg",
                "sets": 3,
                "reps": "8",
                "rest": "120s",
                "notes": ""
            },
            {
                "order": 2,
                "name": "Curl con Barra Recta",
                "videoUrl": "https://youtu.be/0TjnWWqQfUw",
                "imageUrl": "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": ""
            },
            {
                "order": 3,
                "name": "Remo Seal con Mancuernas",
                "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
                "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": ""
            },
            {
                "order": 4,
                "name": "Curl con Mancuernas de Pie",
                "videoUrl": "https://youtu.be/8STuQuoDMR0",
                "imageUrl": "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": ""
            },
            {
                "order": 5,
                "name": "Pull Over en Polea Alta",
                "videoUrl": "https://www.youtube.com/shorts/zWGbrVxoUpk",
                "imageUrl": "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Pull Over en Polea Alta",
                        "videoUrl": "https://www.youtube.com/shorts/zWGbrVxoUpk",
                        "imageUrl": "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "10",
                        "isSupersetStart": true
                    },
                    {
                        "name": "Curl Martillo con Mancuernas",
                        "videoUrl": "https://youtu.be/fcFsPoJY9lg",
                        "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "10",
                        "rest": "90s"
                    }
                ],
                "notes": ""
            }
        ]
    }
};

const exerciseAlternatives = {
    "Dominadas Supinas": [
        { name: "Jalón al Pecho Neutro en Polea", videoUrl: "https://youtu.be/5YzMH2KkMHc", imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg" }
    ]
};
