// Titulo: P3_3D_APFB_INOUT_3_HOME_3D
// Notas: Tres días Anterior, Posterior y Fullbody. Básicos y superseries renovados, sin dropsets y con circuitos sin salto de tres rondas. Descanso de 60 s entre rondas.

const workoutData = {
    "dia1": {
        "name": "Anterior IN-OUT",
        "exercises": [
            {
                "order": 1,
                "name": "Flexiones Tempo 1:1",
                "sets": 4,
                "reps": "15, 12, 10, 8",
                "rest": "90s",
                "notes": "Deja 2–3 repeticiones en recámara.",
                "videoUrl": "https://www.youtube.com/shorts/-9Md7Htla-o",
                "imageUrl": "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Split Unilateral con Mancuernas/KTB",
                "sets": 3,
                "reps": "16",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/shorts/o8-Oc19pGn8",
                "imageUrl": "https://i.ytimg.com/vi/o8-Oc19pGn8/mqdefault.jpg"
            },
            {
                "order": 3,
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
                        "name": "Elevaciones Laterales con Mancuernas",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "15",
                        "rest": "90s",
                        "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                        "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
                        "notes": ""
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                "imageUrl": "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Floor Press con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Floor Press con Mancuernas",
                        "subOrder": 1,
                        "sets": 4,
                        "reps": "15, 12, 10, 10",
                        "isSupersetStart": true,
                        "videoUrl": "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                        "imageUrl": "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg",
                        "notes": ""
                    },
                    {
                        "name": "Flexiones con Rodillas",
                        "subOrder": 2,
                        "sets": 4,
                        "reps": "15, 12, 10, 10",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/shorts/bmKPWM_b85Y",
                        "imageUrl": "https://i.ytimg.com/vi/bmKPWM_b85Y/mqdefault.jpg",
                        "notes": ""
                    }
                ],
                "notes": "",
                "videoUrl": "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                "imageUrl": "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Circuito IN-OUT",
                "isSuperset": true,
                "circuitDetails": {
                    "totalRounds": 3,
                    "restBetweenExercisesSeconds": 30,
                    "restBetweenRoundsSeconds": 60
                },
                "items": [
                    {
                        "name": "Sentadilla Lateral",
                        "subOrder": 1,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://youtu.be/RkmdE5WBOy4",
                        "imageUrl": "https://i.ytimg.com/vi/RkmdE5WBOy4/mqdefault.jpg",
                        "notes": ""
                    },
                    {
                        "name": "Plancha - Cambios de apoyo",
                        "subOrder": 2,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://youtu.be/Yg74EfwLBQY",
                        "imageUrl": "https://i.ytimg.com/vi/Yg74EfwLBQY/mqdefault.jpg",
                        "notes": ""
                    }
                ],
                "notes": "Ritmo controlado, sin saltos.",
                "videoUrl": "https://youtu.be/RkmdE5WBOy4",
                "imageUrl": "https://i.ytimg.com/vi/RkmdE5WBOy4/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        "name": "Posterior IN-OUT",
        "exercises": [
            {
                "order": 1,
                "name": "Remo en TRX",
                "sets": 4,
                "reps": "15, 12, 10, 8",
                "rest": "90s",
                "notes": "Deja 2–3 repeticiones en recámara.",
                "videoUrl": "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                "imageUrl": "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Curl Femoral desde Puente (Con TRX)",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=6NCkHTG4lHc",
                "imageUrl": "https://i.ytimg.com/vi/6NCkHTG4lHc/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Remo Contralat Unilat con Mancuerna",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Remo Contralat Unilat con Mancuerna",
                        "subOrder": 1,
                        "sets": 3,
                        "reps": "10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtube.com/shorts/O7PAUd4ZMB4",
                        "imageUrl": "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg",
                        "notes": ""
                    },
                    {
                        "name": "Curl de Biceps con TRX+Banda",
                        "subOrder": 2,
                        "sets": 3,
                        "reps": "16",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/shorts/O-iK5Fb7gYc",
                        "imageUrl": "https://i.ytimg.com/vi/O-iK5Fb7gYc/mqdefault.jpg",
                        "notes": ""
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/O7PAUd4ZMB4",
                "imageUrl": "https://i.ytimg.com/vi/O7PAUd4ZMB4/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Gorilla Row con Kettlebells/Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Gorilla Row con Kettlebells/Mancuernas",
                        "subOrder": 1,
                        "sets": 4,
                        "reps": "15, 12, 10, 10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/4hKPsdWsXl8",
                        "imageUrl": "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg",
                        "notes": ""
                    },
                    {
                        "name": "Pájaros con Mancuernas",
                        "subOrder": 2,
                        "sets": 4,
                        "reps": "15, 12, 10, 10",
                        "rest": "90s",
                        "videoUrl": "https://youtu.be/EMrOS6P90lM",
                        "imageUrl": "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg",
                        "notes": ""
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/4hKPsdWsXl8",
                "imageUrl": "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Circuito IN-OUT",
                "isSuperset": true,
                "circuitDetails": {
                    "totalRounds": 3,
                    "restBetweenExercisesSeconds": 30,
                    "restBetweenRoundsSeconds": 60
                },
                "items": [
                    {
                        "name": "Hip Thrust con Banda Elástica",
                        "subOrder": 1,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://www.youtube.com/shorts/ewSrH2uFits",
                        "imageUrl": "https://i.ytimg.com/vi/ewSrH2uFits/mqdefault.jpg",
                        "notes": ""
                    },
                    {
                        "name": "Bird Dog",
                        "subOrder": 2,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://youtu.be/KizkN2buzMw",
                        "imageUrl": "https://i.ytimg.com/vi/KizkN2buzMw/mqdefault.jpg",
                        "notes": ""
                    }
                ],
                "notes": "Ritmo controlado, sin saltos.",
                "videoUrl": "https://www.youtube.com/shorts/ewSrH2uFits",
                "imageUrl": "https://i.ytimg.com/vi/ewSrH2uFits/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        "name": "Fullbody IN-OUT",
        "exercises": [
            {
                "order": 1,
                "name": "Curl con Mancuernas Sentado en Banco Inclinado",
                "sets": 4,
                "reps": "15, 12, 10, 8",
                "rest": "90s",
                "notes": "Deja 2–3 repeticiones en recámara.",
                "videoUrl": "https://youtu.be/S32a3nYiWko",
                "imageUrl": "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
            },
            {
                "order": 2,
                "name": "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
                "sets": 4,
                "reps": "15, 12, 10, 8",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://youtu.be/1MgU2PO4_rI",
                "imageUrl": "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/shorts/tNu9bm3geqY",
                "imageUrl": "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Gomas - Press Militar",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Gomas - Press Militar",
                        "subOrder": 1,
                        "sets": 4,
                        "reps": "15, 12, 10, 10",
                        "isSupersetStart": true,
                        "videoUrl": "https://youtu.be/PaVq5VuHYEg",
                        "imageUrl": "https://i.ytimg.com/vi/PaVq5VuHYEg/mqdefault.jpg",
                        "notes": ""
                    },
                    {
                        "name": "Remo Unilat en TRX",
                        "subOrder": 2,
                        "sets": 4,
                        "reps": "12, 10, 8, 8",
                        "rest": "90s",
                        "videoUrl": "https://www.youtube.com/watch?v=sIM4_aMGdlk",
                        "imageUrl": "https://i.ytimg.com/vi/sIM4_aMGdlk/mqdefault.jpg",
                        "notes": "Controla el Torso que no se gire."
                    }
                ],
                "notes": "",
                "videoUrl": "https://youtu.be/PaVq5VuHYEg",
                "imageUrl": "https://i.ytimg.com/vi/PaVq5VuHYEg/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Circuito IN-OUT",
                "isSuperset": true,
                "circuitDetails": {
                    "totalRounds": 3,
                    "restBetweenExercisesSeconds": 30,
                    "restBetweenRoundsSeconds": 60
                },
                "items": [
                    {
                        "name": "Sentadilla Sumo con Peso Corporal",
                        "subOrder": 1,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://youtu.be/gJRjDiTSPYk",
                        "imageUrl": "https://i.ytimg.com/vi/gJRjDiTSPYk/mqdefault.jpg",
                        "notes": ""
                    },
                    {
                        "name": "Dead Bug",
                        "subOrder": 2,
                        "sets": 1,
                        "reps": "30s",
                        "isCircuitItem": true,
                        "videoUrl": "https://youtu.be/0CteMtiMChQ",
                        "imageUrl": "https://i.ytimg.com/vi/0CteMtiMChQ/mqdefault.jpg",
                        "notes": ""
                    }
                ],
                "notes": "Ritmo controlado, sin saltos.",
                "videoUrl": "https://youtu.be/gJRjDiTSPYk",
                "imageUrl": "https://i.ytimg.com/vi/gJRjDiTSPYk/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Remo en TRX": [
        {
            "name": "Gomas - Remo en Columna",
            "videoUrl": "https://youtu.be/oaNDZ4glMKY",
            "imageUrl": "https://i.ytimg.com/vi/oaNDZ4glMKY/mqdefault.jpg",
            "notes": ""
        }
    ],
    "Curl Femoral desde Puente (Con TRX)": [
        {
            "name": "Curl Femoral desde Puente (Con Sliders / Toalla)",
            "videoUrl": "https://www.youtube.com/watch?v=HI3Bb1SAru8",
            "imageUrl": "https://i.ytimg.com/vi/HI3Bb1SAru8/mqdefault.jpg",
            "notes": ""
        }
    ],
    "Remo Unilat en TRX": [
        {
            "name": "Remo Unilateral con Banda Elástica",
            "videoUrl": "https://www.youtube.com/shorts/90NfKSOGEVI",
            "imageUrl": "https://i.ytimg.com/vi/90NfKSOGEVI/mqdefault.jpg",
            "notes": ""
        }
    ]
};
