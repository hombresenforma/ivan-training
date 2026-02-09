// Titulo: vicpun
// Notas: Mancuernas/KTB y TRX
// Principal hemos subido 12-15 reps
// Superserie 3 subimos  seg extr
// superserie 4 Mount flex subimos a 15 reps
// Circuito final añadimos 4 ronda
// Contenido de app_datos.js
// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
// Añadimos un 6 ejercicio de super serie y el 5 ejerecicio pasa a normal
// hemos añadido un press militra con barra dia 1 ejercicio 5
// y un remo con barra dia 2 ejercicio 5

const workoutData = {
    "dia1": {
        name: "Fullbody Push",
        exercises: [
            {
                order: 1,
                name: "Worm + Rotaciones de Tronco",
                isSuperset: true,
                items: [
                    {
                        name: "Worm + Rotaciones de Tronco",
                        subOrder: 1,
                        sets: 2,
                        reps: "4",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=A8MFPgYNoGs",
                        imageUrl: "https://i.ytimg.com/vi/A8MFPgYNoGs/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        notes: "Puedes hacerlas sin salto si lo prefieres.",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=A8MFPgYNoGs",
                imageUrl: "https://i.ytimg.com/vi/A8MFPgYNoGs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Floor Press con Mancuernas",
                sets: 3,
                reps: "12-15",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                        imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
                    },
                    {
                        name: "Plancha Lateral Dinámica sobre Antebrazo",
                        subOrder: 2,
                        sets: 3,
                        reps: "30s",
                        notes: "Haz ambos lados.",
                        videoUrl: "https://www.youtube.com/watch?v=fhCo3uoboAU",
                        imageUrl: "https://i.ytimg.com/vi/fhCo3uoboAU/mqdefault.jpg"
                    },
                    {
                        name: "Plancha Lateral Dinámica sobre Antebrazo",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=fhCo3uoboAU",
                        imageUrl: "https://i.ytimg.com/vi/fhCo3uoboAU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        notes: "Puedes hacerlas de rodillas.",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Militar con Barra de Pie",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Worm + Flexión",
                isSuperset: true,
                items: [
                    {
                        name: "Worm + Flexión",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Jumping Jack",
                        subOrder: 2,
                        sets: 3,
                        reps: "40s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/K5PMB8CauGM",
                        imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fullbody Pull",
        exercises: [
            {
                order: 1,
                name: "Remo en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Remo en TRX",
                        subOrder: 1,
                        sets: 2,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                        imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
                    },
                    {
                        name: "Shoulder Taps",
                        subOrder: 2,
                        sets: 2,
                        reps: "16",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/shorts/viyHk_K7I48",
                        imageUrl: "https://i.ytimg.com/vi/viyHk_K7I48/mqdefault.jpg"
                    }
                ],
                notes: "Asegúrate de que no se mueva la cadera en el segundo ejercicio.",
                videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Face Pull con TRX",
                sets: 3,
                reps: "12-15",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/lfb6neUpfP8",
                        imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Rodilla",
                        subOrder: 2,
                        sets: 3,
                        reps: "30s",
                        notes: "Haz ambos lados.",
                        videoUrl: "https://youtu.be/ROVRkBnD4zg",
                        imageUrl: "https://i.ytimg.com/vi/ROVRkBnD4zg/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Rodilla",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/ROVRkBnD4zg",
                        imageUrl: "https://i.ytimg.com/vi/ROVRkBnD4zg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo con Barra",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Crunch - Normal",
                isSuperset: true,
                items: [
                    {
                        name: "Crunch - Normal",
                        subOrder: 1,
                        sets: 3,
                        reps: "40s",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/wNqGgCjBVaE",
                        imageUrl: "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg"
                    },
                    {
                        name: "Funcional - Mountain Climber",
                        subOrder: 2,
                        sets: 3,
                        reps: "40s",
                        rest: "40s",
                        videoUrl: "https://youtu.be/GZWmYzClS3s",
                        imageUrl: "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/wNqGgCjBVaE",
                imageUrl: "https://i.ytimg.com/vi/wNqGgCjBVaE/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody Legs",
        exercises: [
            {
                order: 1,
                name: "Abducción de Glúteo Unilat en el Suelo",
                isSuperset: true,
                items: [
                    {
                        name: "Abducción de Glúteo Unilat en el Suelo",
                        subOrder: 1,
                        sets: 2,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 2,
                        sets: 2,
                        reps: "16",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                sets: 3,
                reps: "16",
                rest: "90s",
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Gomas - Aperturas en Columna",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Aperturas en Columna",
                        subOrder: 1,
                        sets: 3,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/_FBdkpZ5FTs",
                        imageUrl: "https://i.ytimg.com/vi/_FBdkpZ5FTs/mqdefault.jpg"
                    },
                    {
                        name: "Sit Up Unilateral con KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "5",
                        notes: "Puedes usar una mancuerna de poco peso si lo prefieres o el peso de la Kettlebell es demasiado elevado.",
                        videoUrl: "https://youtu.be/INcd--4kK5k",
                        imageUrl: "https://i.ytimg.com/vi/INcd--4kK5k/mqdefault.jpg"
                    },
                    {
                        name: "Sit Up Unilateral con KTB",
                        subOrder: 3,
                        sets: 3,
                        reps: "5",
                        rest: "90s",
                        videoUrl: "https://youtu.be/INcd--4kK5k",
                        imageUrl: "https://i.ytimg.com/vi/INcd--4kK5k/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/_FBdkpZ5FTs",
                imageUrl: "https://i.ytimg.com/vi/_FBdkpZ5FTs/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Elevaciones Laterales con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas de Pie",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/8STuQuoDMR0",
                        imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/rhmW_fhB4cs",
                imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Split Unilateral con Mancuernas/KTB",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/o8-Oc19pGn8",
                imageUrl: "https://i.ytimg.com/vi/o8-Oc19pGn8/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Cuerpo Libre - Cardio - Jumping Jack",
                isSuperset: true,
                items: [
                    {
                        name: "Cuerpo Libre - Cardio - Jumping Jack",
                        subOrder: 1,
                        sets: 3,
                        reps: "40s",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/K5PMB8CauGM",
                        imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Burpee Completo",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "40s",
                        videoUrl: "https://youtu.be/qfBhsTabWN0",
                        imageUrl: "https://i.ytimg.com/vi/qfBhsTabWN0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/K5PMB8CauGM",
                imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Floor Press con Mancuernas": [
        { name: "Flexiones Tempo 1:1", videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o", imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg" }
    ],
    "Face Pull con TRX": [
        { name: "Gomas - FacePull en Columna", videoUrl: "https://youtu.be/KnnWfHUjsKg", imageUrl: "https://i.ytimg.com/vi/KnnWfHUjsKg/mqdefault.jpg" }
    ]
};
