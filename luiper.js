// Titulo: P7_3D_CIRCUITOSFULLBODY_1

const workoutData = {
    "dia1": {
        "name": "Superseries 1",
        "exercises": [
            {
                "order": 1,
                "name": "Press Militar Sentado con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Press Militar Sentado con Mancuernas",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "10",
                        "isSupersetStart": true,
                        "videoUrl": "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                        "imageUrl": "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg",
                        "notes": ""
                    },
                    {
                        "name": "Sentadilla Frontal con Mancuernas/Kettlebells",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15",
                        "rest": "90s",
                        "videoUrl": "https://youtu.be/lfb6neUpfP8",
                        "imageUrl": "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                "imageUrl": "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "CARDIO - Correr (Suave)",
                "sets": 1,
                "reps": "240s",
                "rest": "60s",
                "notes": "Puedes hacerlo al aire libre si lo prefieres.",
                "videoUrl": "https://youtu.be/KKvRtNn904g",
                "imageUrl": "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Press Banca con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Press Banca con Mancuernas",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "8",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/hXCJC2Apcdg",
                        "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
                    },
                    {
                        "name": "Remo Unilat con Mancuerna/KTB (Explicado)",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "10",
                        "rest": "60s",
                        "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
                        "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/hXCJC2Apcdg",
                "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "CARDIO - Correr (Sprint)",
                "sets": 1,
                "reps": "180s",
                "rest": "60s",
                "notes": "Puedes hacerlo al aire libre si lo prefieres.",
                "videoUrl": "https://youtu.be/KKvRtNn904g",
                "imageUrl": "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Press Inclinado con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Press Inclinado con Mancuernas",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "8",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/ZE4M73kXB5A",
                        "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
                    },
                    {
                        "name": "Remo Seal con Mancuernas",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "8",
                        "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
                        "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg",
                        "notes": "Trata de despegar el pecho al final del movimiento"
                    },
                    {
                        "name": "Sit Up Abdominal con Disco",
                        "subOrder": 3,
                        "sets": 3,
                        "reps": "15",
                        "rest": "60s",
                        "videoUrl": "https://www.youtube.com/shorts/GHLO76YCyHE",
                        "imageUrl": "https://i.ytimg.com/vi/GHLO76YCyHE/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/ZE4M73kXB5A",
                "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "CARDIO - Bicicleta (Ritmo Fuerte)",
                "sets": 1,
                "reps": "120s",
                "rest": "60s",
                "notes": "Liberación.",
                "videoUrl": "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                "imageUrl": "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
            },
            {
                "order": 7,
                "name": "Zancadas Caminando con Mancuernas/KTB",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Zancadas Caminando con Mancuernas/KTB",
                        "subOrder": 1,
                        "sets": 2,
                        "reps": "20",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/7tRy9X0ibnk",
                        "imageUrl": "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg",
                        "notes": "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera."
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/7tRy9X0ibnk",
                "imageUrl": "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        "name": "Superseries 2",
        "exercises": [
            {
                "order": 1,
                "name": "Muscle Clean-Jerk Unilat Alterno con Mancuerna",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Muscle Clean-Jerk Unilat Alterno con Mancuerna",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "12",
                        "isSupersetStart": true,
                        "notes": "Alterna entre brazos",
                        "videoUrl": "https://www.youtube.com/shorts/2sOV3aayUCI",
                        "imageUrl": "https://i.ytimg.com/vi/2sOV3aayUCI/mqdefault.jpg"
                    },
                    {
                        "name": "Worm + Flexión",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "6",
                        "rest": "30s",
                        "videoUrl": "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        "imageUrl": "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    }
                ],
                "notes": "Alterna entre brazos",
                "videoUrl": "https://www.youtube.com/shorts/2sOV3aayUCI",
                "imageUrl": "https://i.ytimg.com/vi/2sOV3aayUCI/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Cardio - Remo en Máquina",
                "sets": 1,
                "reps": "240s",
                "rest": "60s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                "imageUrl": "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Curl con Barra Z",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Curl con Barra Z",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "12",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/4gYLTjNaTmw",
                        "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    },
                    {
                        "name": "Shoulder Taps con Salto Adelante",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "12",
                        "rest": "60s",
                        "videoUrl": "https://www.youtube.com/shorts/xWUxD4rzmfQ",
                        "imageUrl": "https://i.ytimg.com/vi/xWUxD4rzmfQ/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/4gYLTjNaTmw",
                "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Assault Bike",
                "sets": 1,
                "reps": "180s",
                "rest": "60s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=AqDZi0p7kN4",
                "imageUrl": "https://i.ytimg.com/vi/AqDZi0p7kN4/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Extensión de Cuádriceps en Máquina",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Extensión de Cuádriceps en Máquina",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "20",
                        "isSupersetStart": true,
                        "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        "name": "Zancada Dinámica",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "20",
                        "rest": "60s",
                        "videoUrl": "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        "imageUrl": "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "Jumping Jack",
                "sets": 1,
                "reps": "120s",
                "rest": "60s",
                "notes": "",
                "videoUrl": "https://youtu.be/K5PMB8CauGM",
                "imageUrl": "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
            },
            {
                "order": 7,
                "name": "Step Up Lateral Alterno en Step",
                "sets": 2,
                "reps": "20",
                "rest": "60s",
                "notes": "",
                "videoUrl": "https://youtu.be/N26TyhPhSRI",
                "imageUrl": "https://i.ytimg.com/vi/N26TyhPhSRI/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        "name": "Superseries 3",
        "exercises": [
            {
                "order": 1,
                "name": "Cardio - Press Dinámico Unilat con Landmine",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Cardio - Press Dinámico Unilat con Landmine",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/9_faYEjxCTU",
                        "imageUrl": "https://i.ytimg.com/vi/9_faYEjxCTU/mqdefault.jpg"
                    },
                    {
                        "name": "Gorilla Row con Kettlebells/Mancuernas",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "20",
                        "rest": "90s",
                        "videoUrl": "https://youtu.be/4hKPsdWsXl8",
                        "imageUrl": "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/9_faYEjxCTU",
                "imageUrl": "https://i.ytimg.com/vi/9_faYEjxCTU/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "CARDIO - Bicicleta (Ritmo Suave)",
                "sets": 1,
                "reps": "240s",
                "rest": "60s",
                "notes": "Liberación.",
                "videoUrl": "https://www.youtube.com/watch?v=r6iTJGOftHY",
                "imageUrl": "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Remo Horizontal en TRX",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Remo Horizontal en TRX",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "15",
                        "isSupersetStart": true,
                        "notes": "Mantén una inclinación paralela al suelo.",
                        "videoUrl": "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                        "imageUrl": "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
                    },
                    {
                        "name": "Crunch - V",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "20",
                        "rest": "60s",
                        "videoUrl": "https://youtu.be/_SCqc7BCW9A",
                        "imageUrl": "https://i.ytimg.com/vi/_SCqc7BCW9A/mqdefault.jpg"
                    }
                ],
                "notes": "Mantén una inclinación paralela al suelo.",
                "videoUrl": "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                "imageUrl": "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Over-Head Jumping Jack",
                "sets": 1,
                "reps": "180s",
                "rest": "60s",
                "notes": "",
                "videoUrl": "https://youtu.be/ZU5OglDiAQY",
                "imageUrl": "https://i.ytimg.com/vi/ZU5OglDiAQY/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Jalón al Pecho Supino en Polea",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Jalón al Pecho Supino en Polea",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/rimdRzyIJkA",
                        "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
                    },
                    {
                        "name": "Flexiones + Mountain Climbers",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "10",
                        "rest": "60s",
                        "videoUrl": "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        "imageUrl": "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/rimdRzyIJkA",
                "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "Predator Jacks",
                "sets": 1,
                "reps": "120s",
                "rest": "60s",
                "notes": "",
                "videoUrl": "https://youtu.be/uGmzXjFM0d8",
                "imageUrl": "https://i.ytimg.com/vi/uGmzXjFM0d8/mqdefault.jpg"
            },
            {
                "order": 7,
                "name": "Kettlebell - Thruster",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Kettlebell - Thruster",
                        "subOrder": 1,
                        "sets": 2,
                        "reps": "12",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtube.com/shorts/52JAS52W8Hw",
                        "imageUrl": "https://i.ytimg.com/vi/52JAS52W8Hw/mqdefault.jpg"
                    },
                    {
                        "name": "Kettlebell - Swing Americano",
                        "subOrder": 2,
                        "sets": 2,
                        "reps": "12",
                        "rest": "60s",
                        "videoUrl": "https://youtu.be/_kVSgpKXc_k",
                        "imageUrl": "https://i.ytimg.com/vi/_kVSgpKXc_k/mqdefault.jpg"
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/52JAS52W8Hw",
                "imageUrl": "https://i.ytimg.com/vi/52JAS52W8Hw/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {};