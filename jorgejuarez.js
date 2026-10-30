// Titulo: P6_3D_ANTPOSTFB_RESTPAUSE_2
// Notas: AntPost:
// - Ejercicio 1 añadimos 1 serie más con REST-PAUSE.
// - Ejercicio 2 añadimos 1 serie más y cambiamos todo a DROP-SET.
// 
// Fullbody:
// - EMOMs 1 y 2: Añadimos 1 vuelta y bajamos tiempo de 120 a 90s

const workoutData = {
    "dia1": {
        name: "Posterior",
        exercises: [
            {
                order: 1,
                name: "Prensa Inclinada en Máquina de Discos",
                setTechniques: {"4":"REST-PAUSE"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Máquina de Remo (Gironda)",
                setTechniques: {"4":"CLUSTER"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A",
                imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Jalón al Pecho Supino en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho Supino en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/rimdRzyIJkA",
                        imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Hip Thrust con Barra (ExPLICADO)",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
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
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                        imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Anterior",
        exercises: [
            {
                order: 1,
                name: "Press Banca en Multipower",
                setTechniques: {"4":"REST-PAUSE"},
                sets: 4,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/w-5ovE5O5iU",
                imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                setTechniques: {"4":"CLUSTER"},
                sets: 4,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Flexiones / Deficit Push Ups con Discos al lado",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Militar Unilateral en Landmine",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=p2OLvWOo9l0",
                imageUrl: "https://i.ytimg.com/vi/p2OLvWOo9l0/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Extensión de Tríceps Unilat en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Tríceps Unilat en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/yH6WAUNKO6c",
                        imageUrl: "https://i.ytimg.com/vi/yH6WAUNKO6c/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/yH6WAUNKO6c",
                imageUrl: "https://i.ytimg.com/vi/yH6WAUNKO6c/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody",
        exercises: [
            {
                order: 1,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Dominadas Supinas",
                        subOrder: 1,
                        sets: 1,
                        reps: "6",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                        imageUrl: "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Paralelas Lastrados",
                        subOrder: 2,
                        sets: 1,
                        reps: "6",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                        imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                imageUrl: "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
            },
            {
                order: 2,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Sentadilla Búlgara con Mancuerna o KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/kA6bHiDdTO4",
                        imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Soft Swing",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                        imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 3,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 3,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Curl Araña con Barra Z",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/ZGa2E8bi9Eg",
                        imageUrl: "https://i.ytimg.com/vi/ZGa2E8bi9Eg/mqdefault.jpg"
                    },
                    {
                        name: "Press Francés con Barra Z en Banco Inclinado",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/hFk6xzt1DWM",
                        imageUrl: "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/ZGa2E8bi9Eg",
                imageUrl: "https://i.ytimg.com/vi/ZGa2E8bi9Eg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Hollow Abdominal Encogido",
                        subOrder: 2,
                        sets: 1,
                        reps: "60",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/DUYZEFKjYxs",
                        imageUrl: "https://i.ytimg.com/vi/DUYZEFKjYxs/mqdefault.jpg"
                    }
                ],
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "FOR TIME (TWS) - ABS CARGA",
        exercises: [
            {
                order: 1,
                name: "FOR TIME (Thruster+Worm+SitUp)",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 3
                },
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        notes: "Objetivo: Mejorar el tiempo en cada entreno. ",
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Burpee",
                        subOrder: 2,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=qTLp4wcAAtQ",
                        imageUrl: "https://i.ytimg.com/vi/qTLp4wcAAtQ/mqdefault.jpg"
                    },
                    {
                        name: "Sit Up Abdominal con Disco",
                        subOrder: 3,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/shorts/GHLO76YCyHE",
                        imageUrl: "https://i.ytimg.com/vi/GHLO76YCyHE/mqdefault.jpg"
                    }
                ],
                notes: "Objetivo: Mejorar el tiempo en cada entreno. ",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Crunch en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Crunch en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                        imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
                    },
                    {
                        name: "Press Pallof Excéntrico Unilat en Polea",
                        subOrder: 2,
                        sets: 3,
                        reps: "8",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/r89c9qr-CB0",
                        imageUrl: "https://i.ytimg.com/vi/r89c9qr-CB0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
            }
        ]
    }
,
    dia5: {
    "name": "EMPUJES — TORSO",
    "exercises": [
        {
            "name": "Movilidad - Cintura Escapular",
            "sets": 2,
            "reps": "8",
            "rest": "30s",
            "notes": "Estabilizando el tronco con mucho control motor. Calentamiento breve y controlado.",
            "videoUrl": "https://youtu.be/qFt3RmTDmXI",
            "imageUrl": "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg",
            "isWarmup": true,
            "order": 1
        },
        {
            "name": "Press Banca en Multipower",
            "sets": 4,
            "reps": "8",
            "rest": "150s",
            "notes": "Realiza aproximaciones progresivas antes de las series efectivas. Series de trabajo con 1 repetición en recámara, bajada controlada y sin rebotes. En la última serie realiza un único DROPSET: reduce la carga un 20% y continúa sin descanso hasta el fallo técnico, sin perder el control ni forzar repeticiones.",
            "videoUrl": "https://youtu.be/w-5ovE5O5iU",
            "imageUrl": "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg",
            "setTechniques": {
                "4": "DROPSET"
            },
            "order": 2
        },
        {
            "name": "Press Militar en Multipower",
            "sets": 3,
            "reps": "8",
            "rest": "150s",
            "notes": "Realiza aproximaciones progresivas antes de las series efectivas. Series de trabajo con 1 repetición en recámara, bajada controlada y sin rebotes. En la última serie realiza un único DROPSET: reduce la carga un 20% y continúa sin descanso hasta el fallo técnico, sin perder el control ni forzar repeticiones.",
            "videoUrl": "https://www.youtube.com/watch?v=iATqshmFPnI",
            "imageUrl": "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg",
            "setTechniques": {
                "3": "DROPSET"
            },
            "order": 3
        },
        {
            "name": "Cruces en Polea Alta",
            "sets": 3,
            "reps": "12",
            "rest": "75s",
            "notes": "Recorrido cómodo y 2 repeticiones en recámara.",
            "videoUrl": "https://youtu.be/Ht9awbF2fBA",
            "imageUrl": "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg",
            "order": 4
        },
        {
            "name": "Elevaciones Laterales con Mancuernas",
            "isSuperset": true,
            "items": [
                {
                    "name": "Elevaciones Laterales con Mancuernas",
                    "sets": 3,
                    "reps": "15",
                    "rest": "",
                    "notes": "",
                    "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                    "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
                    "subOrder": 1,
                    "isSupersetStart": true
                },
                {
                    "name": "Press Francés con Mancuernas en Banco Inclinado",
                    "sets": 3,
                    "reps": "12",
                    "rest": "90s",
                    "notes": "",
                    "videoUrl": "https://youtu.be/L__Q6Jl9Ics",
                    "imageUrl": "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg",
                    "subOrder": 2
                }
            ],
            "notes": "Tres vueltas, usando el mismo banco y mancuernas. Deja 2 repeticiones en recámara.",
            "videoUrl": "https://youtu.be/rhmW_fhB4cs",
            "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
            "order": 5
        },
        {
            "name": "CIRCUITO",
            "isSuperset": true,
            "circuitDetails": {
                "totalRounds": 3,
                "restBetweenExercisesSeconds": 15,
                "restBetweenRoundsSeconds": 60
            },
            "items": [
                {
                    "name": "Flexiones con Peso Corporal",
                    "sets": 1,
                    "reps": "30s",
                    "rest": "",
                    "notes": "Carga ligera y ritmo continuo con control. Sin impulso de piernas. No busques el fallo; ajusta la resistencia para sostener los 30 segundos.",
                    "videoUrl": "https://www.youtube.com/shorts/jqnnetMI-4s",
                    "imageUrl": "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg",
                    "subOrder": 1,
                    "isCircuitItem": true
                },
                {
                    "name": "Press Militar Sentado con Mancuernas",
                    "sets": 1,
                    "reps": "30s",
                    "rest": "",
                    "notes": "Carga ligera y ritmo continuo con control. Sin impulso de piernas. No busques el fallo; ajusta la resistencia para sostener los 30 segundos.",
                    "videoUrl": "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                    "imageUrl": "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg",
                    "subOrder": 2,
                    "isCircuitItem": true
                },
                {
                    "name": "Fondos de Tríceps con Pies en el Suelo",
                    "sets": 1,
                    "reps": "30s",
                    "rest": "",
                    "notes": "Carga ligera y ritmo continuo con control. Sin impulso de piernas. No busques el fallo; ajusta la resistencia para sostener los 30 segundos.",
                    "videoUrl": "https://youtube.com/shorts/7mpEJQC_gRk",
                    "imageUrl": "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg",
                    "subOrder": 3,
                    "isCircuitItem": true
                }
            ],
            "notes": "Tres rondas. 30 segundos de trabajo por ejercicio; 15 segundos entre ejercicios y 60 segundos entre rondas. Solo torso; las piernas estabilizan. Completa los tres movimientos sin llegar al fallo y prioriza ritmo constante.",
            "videoUrl": "https://www.youtube.com/shorts/jqnnetMI-4s",
            "imageUrl": "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg",
            "order": 6
        }
    ]
},
    dia6: {
    "name": "TRACCIONES — TORSO",
    "exercises": [
        {
            "name": "Movilidad - Activación de Escápulas",
            "sets": 2,
            "reps": "8",
            "rest": "30s",
            "notes": "Buscar control motor. Calentamiento breve; añade dos aproximaciones progresivas de jalón antes del trabajo pesado.",
            "videoUrl": "https://youtu.be/6Kj_rg_7tYQ",
            "imageUrl": "https://i.ytimg.com/vi/6Kj_rg_7tYQ/mqdefault.jpg",
            "isWarmup": true,
            "order": 1
        },
        {
            "name": "Jalón al Pecho Neutro en Polea",
            "sets": 4,
            "reps": "8",
            "rest": "150s",
            "notes": "Realiza aproximaciones progresivas antes de las series efectivas. Series de trabajo con 1 repetición en recámara, bajada controlada y sin rebotes. En la última serie realiza un único DROPSET: reduce la carga un 20% y continúa sin descanso hasta el fallo técnico, sin perder el control ni forzar repeticiones.",
            "videoUrl": "https://youtu.be/5YzMH2KkMHc",
            "imageUrl": "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg",
            "setTechniques": {
                "4": "DROPSET"
            },
            "order": 2
        },
        {
            "name": "Remo Gironda en Polea",
            "sets": 4,
            "reps": "8",
            "rest": "150s",
            "notes": "Realiza aproximaciones progresivas antes de las series efectivas. Series de trabajo con 1 repetición en recámara, bajada controlada y sin rebotes. En la última serie realiza un único DROPSET: reduce la carga un 20% y continúa sin descanso hasta el fallo técnico, sin perder el control ni forzar repeticiones.",
            "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
            "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg",
            "setTechniques": {
                "4": "DROPSET"
            },
            "order": 3
        },
        {
            "name": "Pull Over en Polea Alta",
            "sets": 3,
            "reps": "12",
            "rest": "75s",
            "notes": "Brazos casi extendidos, sin balancear el tronco y con 2 repeticiones en recámara.",
            "videoUrl": "https://www.youtube.com/shorts/zWGbrVxoUpk",
            "imageUrl": "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg",
            "order": 4
        },
        {
            "name": "Curl con Mancuernas Sentado en Banco Inclinado",
            "isSuperset": true,
            "items": [
                {
                    "name": "Curl con Mancuernas Sentado en Banco Inclinado",
                    "sets": 3,
                    "reps": "12",
                    "rest": "",
                    "notes": "",
                    "videoUrl": "https://youtu.be/S32a3nYiWko",
                    "imageUrl": "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg",
                    "subOrder": 1,
                    "isSupersetStart": true
                },
                {
                    "name": "Pájaros con Mancuernas",
                    "sets": 3,
                    "reps": "15",
                    "rest": "90s",
                    "notes": "",
                    "videoUrl": "https://youtu.be/EMrOS6P90lM",
                    "imageUrl": "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg",
                    "subOrder": 2
                }
            ],
            "notes": "Tres vueltas, usando el mismo banco y mancuernas. Deja 2 repeticiones en recámara.",
            "videoUrl": "https://youtu.be/S32a3nYiWko",
            "imageUrl": "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg",
            "order": 5
        },
        {
            "name": "CIRCUITO",
            "isSuperset": true,
            "circuitDetails": {
                "totalRounds": 3,
                "restBetweenExercisesSeconds": 15,
                "restBetweenRoundsSeconds": 60
            },
            "items": [
                {
                    "name": "Remo en TRX",
                    "sets": 1,
                    "reps": "30s",
                    "rest": "",
                    "notes": "Carga ligera y ritmo continuo con control. Sin impulso de piernas. No busques el fallo; ajusta la resistencia para sostener los 30 segundos.",
                    "videoUrl": "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                    "imageUrl": "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg",
                    "subOrder": 1,
                    "isCircuitItem": true
                },
                {
                    "name": "Face Pull con TRX",
                    "sets": 1,
                    "reps": "30s",
                    "rest": "",
                    "notes": "Carga ligera y ritmo continuo con control. Sin impulso de piernas. No busques el fallo; ajusta la resistencia para sostener los 30 segundos.",
                    "videoUrl": "https://www.youtube.com/shorts/bxzpphpaGSg",
                    "imageUrl": "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg",
                    "subOrder": 2,
                    "isCircuitItem": true
                },
                {
                    "name": "Curl de Biceps con TRX",
                    "sets": 1,
                    "reps": "30s",
                    "rest": "",
                    "notes": "Carga ligera y ritmo continuo con control. Sin impulso de piernas. No busques el fallo; ajusta la resistencia para sostener los 30 segundos.",
                    "videoUrl": "https://www.youtube.com/shorts/W1C5ABPg_Ak",
                    "imageUrl": "https://i.ytimg.com/vi/W1C5ABPg_Ak/mqdefault.jpg",
                    "subOrder": 3,
                    "isCircuitItem": true
                }
            ],
            "notes": "Tres rondas. 30 segundos de trabajo por ejercicio; 15 segundos entre ejercicios y 60 segundos entre rondas. Solo torso; las piernas estabilizan. Completa los tres movimientos sin llegar al fallo y prioriza ritmo constante.",
            "videoUrl": "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
            "imageUrl": "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg",
            "order": 6
        }
    ]
}
};

const exerciseAlternatives = {
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Sentadilla Anterior en Máquina Jaca", videoUrl: "https://youtube.com/shorts/saLWdiUe5eE", imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg" }
    ],
    "Máquina de Remo (Gironda)": [
        { name: "Remo Gironda en Polea", videoUrl: "https://youtube.com/shorts/11xkWdyYWus", imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg" }
    ],
    "Press Banca en Multipower": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ]
};

