// Titulo: P19_TRISERIES

const workoutData = {
    "dia1": {
        name: "Tracción",
        exercises: [
            {
                order: 1,
                name: "Remo con Barra",
                sets: 3,
                reps: "6",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas con Peso Corporal",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas con Peso Corporal",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                        imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
                    },
                    {
                        name: "Remo Gironda en Polea",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        videoUrl: "https://youtube.com/shorts/11xkWdyYWus",
                        imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
                    },
                    {
                        name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                        subOrder: 3,
                        sets: 3,
                        reps: "20",
                        rest: "120s",
                        videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                        imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                        imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "120s",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Femoral Tumbado en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral Tumbado en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                        imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "120s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Remo con Barra": [
        { name: "Peso Muerto Rumano con Barra", videoUrl: "https://youtu.be/R7FKam5GyNw", imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg" }
    ]
};
