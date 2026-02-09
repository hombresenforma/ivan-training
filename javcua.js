// Titulo: Rutina de inicio versión 2
// Notas: Vamos a realizar una rutina de fullbody, donde cada sesión trabajaremos el cuerpo completo. El objetivo de esta rutina es preparar al cuerpo para los movimientos básicos. Como objetivo secundario está el coger adherencia al programa y ver sensaciones físicas y mentales después de cada entrenamiento.

const workoutData = {
    "dia1": {
        name: "Entrenamiento Lunes",
        exercises: [
            {
                order: 1,
                name: "CARDIO - Bicicleta (Ritmo Suave)",
                isWarmup: true,
                sets: 1,
                reps: "3 minutos",
                rest: "0",
                notes: "Ritmo suave que te permita hablar",
                videoUrl: "https://www.youtube.com/watch?v=r6iTJGOftHY",
                imageUrl: "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Movilidad - General",
                sets: 1,
                reps: "1",
                rest: "0",
                notes: "Replica los movimientos que ves en el vídeo",
                videoUrl: "https://youtu.be/5oPBRo8oaag",
                imageUrl: "https://i.ytimg.com/vi/5oPBRo8oaag/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Activación - Dinamic Split 1",
                sets: 1,
                reps: "10",
                rest: "0",
                notes: "10 repeticiones con cada pierna",
                videoUrl: "https://youtu.be/ICFzvsVgOgU",
                imageUrl: "https://i.ytimg.com/vi/ICFzvsVgOgU/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Banca con Barra",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "Si no se pudiera realizar el ejercicio realiza flexiones (push up). Mismas series y repeticiones. Si no puedes hacerlas todas apoya la rodilla en el suelo y me apuntas en los comentarios cuantas has podido hacer sin y con rodillas",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo Gironda en Polea",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "Si no se pudiera realizar el ejercicio, busca una barra horizontal y realiza el ejercicio alternativo. Recuerda la barra va al pecho y codos cerca del tronco al subir. Puedes graduar la intensidad usando las piernas. Si me cuesta mucho de espalda, usa piernas. Sé sincero e intenta trabajar bien la espalda, usando el mínimo las piernas. ",
                videoUrl: "https://youtube.com/shorts/11xkWdyYWus",
                imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Sentadilla Trasera en Multipower",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 10,
                    restBetweenExercisesSeconds: 0,
                    restBetweenRoundsSeconds: 40
                },
                items: [
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 1,
                        sets: 1,
                        reps: "20s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    }
                ],
                notes: "20 segundos de pedaleo a intensidad alta y 40 segundos de intensidad baja",
                videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Entrenamiento Miércoles",
        exercises: [
            {
                order: 1,
                name: "CARDIO - Bicicleta (Ritmo Suave)",
                isWarmup: true,
                sets: 1,
                reps: "3 minutos",
                rest: "0",
                notes: "Ritmo suave que te permita hablar",
                videoUrl: "https://www.youtube.com/watch?v=r6iTJGOftHY",
                imageUrl: "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Movilidad - General",
                sets: 1,
                reps: "1",
                rest: "0",
                notes: "Replica los movimientos que ves en el vídeo",
                videoUrl: "https://youtu.be/5oPBRo8oaag",
                imageUrl: "https://i.ytimg.com/vi/5oPBRo8oaag/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Activación - Push Up Walk - Caminada Sueca",
                sets: 1,
                reps: "10",
                rest: "0",
                notes: "",
                videoUrl: "https://youtu.be/xjgdNAK8l_A",
                imageUrl: "https://i.ytimg.com/vi/xjgdNAK8l_A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Jalón al Pecho Neutro en Polea",
                sets: 4,
                reps: "12",
                rest: "60s",
                notes: "La barra al bajar ha de ir al pecho. Cuando bajes los codos han de intentar estar cerca del tronco\n\nSi no se pudiera realizar el ejercicio de jalón al pecho, busca una barra horizontal y realiza el ejercicio alternativo. Misma técnica, barra al pecho y codos cerca del tronco al subir. Puedes graduar la intensidad usando las piernas. Si me cuesta mucho de espalda, usa piernas. Sé sincero e intenta trabajar bien la espalda, usando el mínimo las piernas. ",
                videoUrl: "https://youtu.be/5YzMH2KkMHc",
                imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Banca con Mancuernas",
                sets: 4,
                reps: "12",
                rest: "60s",
                notes: "Misma técnica que el press banca plano. Recuerda 3 puntos de apoyo: Pies, glúteos y hombros. Priorizar estabilidad a mover más carga.\n\nSi no se pudiera realizar el ejercicio, realiza flexiones (push up). Mismas series y repeticiones. Si no puedes hacerlas todas apoya la rodilla en el suelo y me apuntas en los comentarios cuantas has podido hacer sin y con rodillas",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                sets: 4,
                reps: "12",
                rest: "60s",
                notes: "Sacamos pecho y la bajada la realizaremos con el tronco vertical.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 10,
                    restBetweenExercisesSeconds: 0,
                    restBetweenRoundsSeconds: 40
                },
                items: [
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 1,
                        sets: 1,
                        reps: "20s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    }
                ],
                notes: "20 segundos a intensidad alta y 40 segundos de intensidad baja",
                videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Entrenamiento Viernes",
        exercises: [
            {
                order: 1,
                name: "CARDIO - Bicicleta (Ritmo Suave)",
                isWarmup: true,
                sets: 1,
                reps: "3 minutos",
                rest: "0",
                notes: "Ritmo suave que te permita hablar",
                videoUrl: "https://www.youtube.com/watch?v=r6iTJGOftHY",
                imageUrl: "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Movilidad - General",
                sets: 1,
                reps: "1",
                rest: "0",
                notes: "Replica los movimientos que ves en el vídeo",
                videoUrl: "https://youtu.be/5oPBRo8oaag",
                imageUrl: "https://i.ytimg.com/vi/5oPBRo8oaag/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Activación - Split + Rotación",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "La barra al bajar ha de ir al pecho. Cuando bajes los codos han de intentar estar cerca del tronco\n\nSi no se pudiera realizar el ejercicio de jalón al pecho, busca una barra horizontal y realiza el ejercicio alternativo. Misma técnica, barra al pecho y codos cerca del tronco al subir. Puedes graduar la intensidad usando las piernas. Si me cuesta mucho de espalda, usa piernas. Sé sincero e intenta trabajar bien la espalda, usando el mínimo las piernas. ",
                videoUrl: "https://youtu.be/HBfyzCXAI34",
                imageUrl: "https://i.ytimg.com/vi/HBfyzCXAI34/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Frontal con Barra",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/ErXO1WKVlPI",
                imageUrl: "https://i.ytimg.com/vi/ErXO1WKVlPI/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo en TRX / Anillas",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=ZVM4-F0ZF0w",
                imageUrl: "https://i.ytimg.com/vi/ZVM4-F0ZF0w/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Press Militar con Barra de Pie",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 8,
                    restBetweenExercisesSeconds: 0,
                    restBetweenRoundsSeconds: 40
                },
                items: [
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 1,
                        sets: 1,
                        reps: "20s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    }
                ],
                notes: "20 segundos de pedaleo a intensidad alta y 40 segundos de intensidad baja",
                videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "CARDIO - Bicicleta (Ritmo Suave)": [
        { name: "Cardio - Remo en Máquina", videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc", imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg" }
    ],
    "Press Banca con Barra": [
        { name: "Cuerpo Libre - Empuje - Push-Up", videoUrl: "https://youtu.be/Mq5JZLdYTaE", imageUrl: "https://i.ytimg.com/vi/Mq5JZLdYTaE/mqdefault.jpg" }
    ],
    "Remo Gironda en Polea": [
        { name: "Dominadas Australianas con Pies en el Suelo", videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk", imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg" }
    ],
    "Sentadilla Trasera en Multipower": [
        { name: "Carga Externa - Zancada", videoUrl: "https://youtu.be/FqqcafS91zo", imageUrl: "https://i.ytimg.com/vi/FqqcafS91zo/mqdefault.jpg" }
    ],
    "Jalón al Pecho Neutro en Polea": [
        { name: "Dominadas Australianas con Pies en el Suelo", videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk", imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg" }
    ],
    "Press Banca con Mancuernas": [
        { name: "Cuerpo Libre - Empuje - Push-Up", videoUrl: "https://youtu.be/Mq5JZLdYTaE", imageUrl: "https://i.ytimg.com/vi/Mq5JZLdYTaE/mqdefault.jpg" }
    ],
    "Zancadas Caminando con Mancuernas/Kettlebells": [
        { name: "", videoUrl: "", imageUrl: "" }
    ],
    "Activación - Split + Rotación": [
        { name: "Dominadas Australianas con Pies en el Suelo", videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk", imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg" }
    ],
    "Sentadilla Frontal con Barra": [
        { name: "Carga Externa - Zancada", videoUrl: "https://youtu.be/FqqcafS91zo", imageUrl: "https://i.ytimg.com/vi/FqqcafS91zo/mqdefault.jpg" }
    ],
    "Press Militar con Barra de Pie": [
        { name: "Cuerpo Libre - Empuje - Pike Push-Up", videoUrl: "https://youtu.be/5d8ft4ktyeA", imageUrl: "https://i.ytimg.com/vi/5d8ft4ktyeA/mqdefault.jpg" }
    ]
};


