// Titulo: p2_3d_fbcardio_1_home

const workoutData = {
    "dia1": {
        name: "Fullbody Anterior",
        exercises: [
            {
                order: 1,
                name: "Press Militar con Barra de Pie",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
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
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica",
                        subOrder: 2,
                        sets: 3,
                        reps: "90s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Flexiones con Peso Corporal",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Snatch + Thruster Unilat Alterno con Mancuerna",
                sets: 3,
                reps: "16, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Zancadas Caminando con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "16",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "",
                        imageUrl: ""
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fullbody Posterior",
        exercises: [
            {
                order: 1,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Isométrica",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Isométrica",
                        subOrder: 1,
                        sets: 3,
                        reps: "30s",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/epS5o03foYc",
                        imageUrl: "https://i.ytimg.com/vi/epS5o03foYc/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Burpee sin Flexión",
                        subOrder: 2,
                        sets: 3,
                        reps: "90s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/_liq4fAscDU",
                        imageUrl: "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/epS5o03foYc",
                imageUrl: "https://i.ytimg.com/vi/epS5o03foYc/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Martillo con Mancuernas",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Dominadas Australianas en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas Australianas en TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                        imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Shoulder Taps con Salto Adelante",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/xWUxD4rzmfQ",
                        imageUrl: "https://i.ytimg.com/vi/xWUxD4rzmfQ/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Floor Press con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo Unilateral con Banda Elástica",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/90NfKSOGEVI",
                imageUrl: "https://i.ytimg.com/vi/90NfKSOGEVI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Gorilla Row con Kettlebells/Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "16",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    },
                    {
                        name: "Saltos - Vertical Jump",
                        subOrder: 2,
                        sets: 3,
                        reps: "90s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=UH-3LUWzBpU",
                        imageUrl: "https://i.ytimg.com/vi/UH-3LUWzBpU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4hKPsdWsXl8",
                imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Curl de Biceps con TRX",
                        subOrder: 3,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/W1C5ABPg_Ak",
                        imageUrl: "https://i.ytimg.com/vi/W1C5ABPg_Ak/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Militar con Barra de Pie": [
        { name: "Press Militar Unilat de Pie con Mancuerna/KTB", videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0", imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg" }
    ],
    "Remo Unilat con Mancuerna/KTB (Explicado)": [
        { name: "Remo Unilat en TRX", videoUrl: "https://www.youtube.com/watch?v=sIM4_aMGdlk", imageUrl: "https://i.ytimg.com/vi/sIM4_aMGdlk/mqdefault.jpg" }
    ]
};
