// Titulo: IVAN_DT_4D_TRACCION_EMPUJE_1
// Notas: Calentamiento en superserie 2x12; básico con series 7, 7 y 12 (120s); dos ejercicios 3x10; un ejercicio 3x8; superserie final 2x12 (60s). Los básicos usan objetivos por serie 7,7,12, también detallados en notas.

const workoutData = {
    "dia1": {
        "name": "Tracción 1",
        "exercises": [
            {
                "name": "Pull Over en Polea Alta",
                "isSuperset": true,
                "isWarmup": true,
                "items": [
                    {
                        "name": "Pull Over en Polea Alta",
                        "sets": 2,
                        "reps": "12",
                        "rest": "",
                        "notes": "Carga suave de calentamiento, sin llegar al fallo.",
                        "videoUrl": "https://www.youtube.com/shorts/zWGbrVxoUpk",
                        "imageUrl": "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true,
                        "isWarmup": true
                    },
                    {
                        "name": "Aducción de Piernas en Máquina",
                        "sets": 2,
                        "reps": "12",
                        "rest": "60s",
                        "notes": "Carga suave de calentamiento, sin llegar al fallo.",
                        "videoUrl": "https://www.youtube.com/shorts/7TPklhKZRrc",
                        "imageUrl": "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg",
                        "subOrder": 2,
                        "isWarmup": true
                    }
                ],
                "notes": "Completa ambos ejercicios seguidos y descansa 60 segundos al terminar la pareja. Dos vueltas.",
                "videoUrl": "https://www.youtube.com/shorts/zWGbrVxoUpk",
                "imageUrl": "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg",
                "order": 1
            },
            {
                "name": "Dominadas Supinas",
                "sets": 3,
                "reps": "7,7,12",
                "rest": "120s",
                "notes": "Serie 1: 7 repeticiones. Serie 2: 7 repeticiones. Serie 3: 12 repeticiones. Ajusta la carga o asistencia en la última serie si lo necesitas. Realiza aproximaciones progresivas antes de las series efectivas.",
                "videoUrl": "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                "imageUrl": "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Prensa Inclinada en Máquina de Discos",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
                "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Remo Gironda en Polea",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
                "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Curl de Bíceps Apoyado en Banco con Mancuernas",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/hQ3ojFx5soY",
                "imageUrl": "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Curl Martillo con Cuerda en Polea Baja",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Curl Martillo con Cuerda en Polea Baja",
                        "sets": 2,
                        "reps": "12",
                        "rest": "",
                        "notes": "",
                        "videoUrl": "https://www.youtube.com/shorts/fSTgTQr1WCk",
                        "imageUrl": "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Face Pull al Cuello en Polea Alta",
                        "sets": 2,
                        "reps": "12",
                        "rest": "60s",
                        "notes": "Usa cuerda y lleva las manos hacia el cuello o la cara, separando los extremos. Mantén el tronco estable y controla la vuelta sin balancearte.",
                        "videoUrl": "https://www.youtube.com/shorts/TaTjLum-_qI",
                        "imageUrl": "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg",
                        "subOrder": 2
                    }
                ],
                "notes": "Completa ambos ejercicios seguidos y descansa 60 segundos al terminar la pareja. Dos vueltas.",
                "videoUrl": "https://www.youtube.com/shorts/fSTgTQr1WCk",
                "imageUrl": "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg",
                "order": 6
            }
        ]
    },
    "dia2": {
        "name": "Tracción 2",
        "exercises": [
            {
                "name": "Jalón al Pecho Neutro en Polea",
                "isSuperset": true,
                "isWarmup": true,
                "items": [
                    {
                        "name": "Jalón al Pecho Neutro en Polea",
                        "sets": 2,
                        "reps": "12",
                        "rest": "",
                        "notes": "Carga suave de calentamiento, sin llegar al fallo.",
                        "videoUrl": "https://youtu.be/5YzMH2KkMHc",
                        "imageUrl": "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true,
                        "isWarmup": true
                    },
                    {
                        "name": "Abducción de Glúteo Unilat en el Suelo",
                        "sets": 2,
                        "reps": "12",
                        "rest": "60s",
                        "notes": "Carga suave de calentamiento, sin llegar al fallo.",
                        "videoUrl": "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        "imageUrl": "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg",
                        "subOrder": 2,
                        "isWarmup": true
                    }
                ],
                "notes": "Completa ambos ejercicios seguidos y descansa 60 segundos al terminar la pareja. Dos vueltas.",
                "videoUrl": "https://youtu.be/5YzMH2KkMHc",
                "imageUrl": "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg",
                "order": 1
            },
            {
                "name": "Dominadas con Peso Corporal",
                "sets": 3,
                "reps": "7,7,12",
                "rest": "120s",
                "notes": "Serie 1: 7 repeticiones. Serie 2: 7 repeticiones. Serie 3: 12 repeticiones. Ajusta la carga o asistencia en la última serie si lo necesitas. Realiza aproximaciones progresivas antes de las series efectivas.",
                "videoUrl": "https://www.youtube.com/shorts/pb-14sP_R4M",
                "imageUrl": "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Curl Femoral Tumbado en Máquina",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "Mantén la pelvis apoyada y evita arquear la zona lumbar.",
                "videoUrl": "https://www.youtube.com/shorts/-VfGwgG23OM",
                "imageUrl": "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Remo en Máquina T Agarre Estrecho",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "Usa el apoyo de pecho si la máquina dispone de él y evita balancear o extender el tronco.",
                "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
                "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Curl Scott con Barra Z",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                "imageUrl": "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Curl Bayesian Unilateral en Polea Baja",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Curl Bayesian Unilateral en Polea Baja",
                        "sets": 2,
                        "reps": "12",
                        "rest": "",
                        "notes": "",
                        "videoUrl": "https://www.youtube.com/shorts/dCI2pPQmq_k",
                        "imageUrl": "https://i.ytimg.com/vi/dCI2pPQmq_k/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Remo Dante en Polea",
                        "sets": 2,
                        "reps": "12",
                        "rest": "60s",
                        "notes": "",
                        "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
                        "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg",
                        "subOrder": 2
                    }
                ],
                "notes": "Completa ambos ejercicios seguidos y descansa 60 segundos al terminar la pareja. Dos vueltas.",
                "videoUrl": "https://www.youtube.com/shorts/dCI2pPQmq_k",
                "imageUrl": "https://i.ytimg.com/vi/dCI2pPQmq_k/mqdefault.jpg",
                "order": 6
            }
        ]
    },
    "dia3": {
        "name": "Empuje 1",
        "exercises": [
            {
                "name": "Cruces en Polea Alta",
                "isSuperset": true,
                "isWarmup": true,
                "items": [
                    {
                        "name": "Cruces en Polea Alta",
                        "sets": 2,
                        "reps": "12",
                        "rest": "",
                        "notes": "Carga suave de calentamiento, sin llegar al fallo.",
                        "videoUrl": "https://youtu.be/Ht9awbF2fBA",
                        "imageUrl": "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true,
                        "isWarmup": true
                    },
                    {
                        "name": "Rotación Externa de Hombro Unilat con Polea",
                        "sets": 2,
                        "reps": "12",
                        "rest": "60s",
                        "notes": "Carga suave de calentamiento, sin llegar al fallo.",
                        "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                        "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg",
                        "subOrder": 2,
                        "isWarmup": true
                    }
                ],
                "notes": "Completa ambos ejercicios seguidos y descansa 60 segundos al terminar la pareja. Dos vueltas.",
                "videoUrl": "https://youtu.be/Ht9awbF2fBA",
                "imageUrl": "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg",
                "order": 1
            },
            {
                "name": "Press Inclinado con Mancuernas",
                "sets": 3,
                "reps": "7,7,12",
                "rest": "120s",
                "notes": "Serie 1: 7 repeticiones. Serie 2: 7 repeticiones. Serie 3: 12 repeticiones. Ajusta la carga o asistencia en la última serie si lo necesitas. Realiza aproximaciones progresivas antes de las series efectivas.",
                "videoUrl": "https://youtu.be/ZE4M73kXB5A",
                "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Press Banca con Barra",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://youtu.be/PKpsrFS2uac",
                "imageUrl": "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Press Militar Sentado con Mancuernas",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                "imageUrl": "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Press Francés con Mancuernas en Banco Inclinado",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://youtu.be/L__Q6Jl9Ics",
                "imageUrl": "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Elevaciones Laterales en Polea",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Elevaciones Laterales en Polea",
                        "sets": 2,
                        "reps": "12",
                        "rest": "",
                        "notes": "",
                        "videoUrl": "https://youtu.be/UxII1sPTa9U",
                        "imageUrl": "https://i.ytimg.com/vi/UxII1sPTa9U/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Extensión de Tríceps en Polea con Cuerda",
                        "sets": 2,
                        "reps": "12",
                        "rest": "60s",
                        "notes": "",
                        "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg",
                        "subOrder": 2
                    }
                ],
                "notes": "Completa ambos ejercicios seguidos y descansa 60 segundos al terminar la pareja. Dos vueltas.",
                "videoUrl": "https://youtu.be/UxII1sPTa9U",
                "imageUrl": "https://i.ytimg.com/vi/UxII1sPTa9U/mqdefault.jpg",
                "order": 6
            }
        ]
    },
    "dia4": {
        "name": "Empuje 2",
        "exercises": [
            {
                "name": "Aperturas en Banco con Mancuernas",
                "isSuperset": true,
                "isWarmup": true,
                "items": [
                    {
                        "name": "Aperturas en Banco con Mancuernas",
                        "sets": 2,
                        "reps": "12",
                        "rest": "",
                        "notes": "Carga suave de calentamiento, sin llegar al fallo.",
                        "videoUrl": "https://www.youtube.com/watch?v=dfmq1UOuUXo",
                        "imageUrl": "https://i.ytimg.com/vi/dfmq1UOuUXo/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true,
                        "isWarmup": true
                    },
                    {
                        "name": "Press Militar Sentado con Mancuernas (ExPLICADO)",
                        "sets": 2,
                        "reps": "12",
                        "rest": "60s",
                        "notes": "Carga suave de calentamiento, sin llegar al fallo.",
                        "videoUrl": "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                        "imageUrl": "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg",
                        "subOrder": 2,
                        "isWarmup": true
                    }
                ],
                "notes": "Completa ambos ejercicios seguidos y descansa 60 segundos al terminar la pareja. Dos vueltas.",
                "videoUrl": "https://www.youtube.com/watch?v=dfmq1UOuUXo",
                "imageUrl": "https://i.ytimg.com/vi/dfmq1UOuUXo/mqdefault.jpg",
                "order": 1
            },
            {
                "name": "Press Banca en Multipower",
                "sets": 3,
                "reps": "7,7,12",
                "rest": "120s",
                "notes": "Serie 1: 7 repeticiones. Serie 2: 7 repeticiones. Serie 3: 12 repeticiones. Ajusta la carga o asistencia en la última serie si lo necesitas. Realiza aproximaciones progresivas antes de las series efectivas.",
                "videoUrl": "https://youtu.be/w-5ovE5O5iU",
                "imageUrl": "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Fondos en Paralelas para Pecho",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://youtu.be/W9TfhUAvteE",
                "imageUrl": "https://i.ytimg.com/vi/W9TfhUAvteE/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Press Militar en Multipower",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=iATqshmFPnI",
                "imageUrl": "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Extensión de Tríceps Unilat en Polea",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://youtube.com/shorts/yH6WAUNKO6c",
                "imageUrl": "https://i.ytimg.com/vi/yH6WAUNKO6c/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Elevaciones Laterales con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Elevaciones Laterales con Mancuernas",
                        "sets": 2,
                        "reps": "12",
                        "rest": "",
                        "notes": "",
                        "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                        "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Press Cerrado en Banco Inclinado con Mancuernas",
                        "sets": 2,
                        "reps": "12",
                        "rest": "60s",
                        "notes": "",
                        "videoUrl": "https://youtu.be/tdh7LSxUj1s",
                        "imageUrl": "https://i.ytimg.com/vi/tdh7LSxUj1s/mqdefault.jpg",
                        "subOrder": 2
                    }
                ],
                "notes": "Completa ambos ejercicios seguidos y descansa 60 segundos al terminar la pareja. Dos vueltas.",
                "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
                "order": 6
            }
        ]
    }
};

const exerciseAlternatives = {};
