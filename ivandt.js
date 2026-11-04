// Titulo: IVAN_DT_4D_TRACCION_EMPUJE_1
// Notas: Calentamiento en superserie 2x12 (60s); básico con objetivos por serie 7,7,12 (120s); accesorios con series y repeticiones indicadas en cada día; superserie final 2x12 (60s). Tracción 2 tiene cuatro ejercicios individuales: remo T, sentadilla trasera con barra, curl Scott y extensión de cuádriceps.

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
                "name": "Curl Femoral Sentado en Máquina",
                "isSuperset": true,
                "isWarmup": true,
                "items": [
                    {
                        "name": "Curl Femoral Sentado en Máquina",
                        "sets": 2,
                        "reps": "12",
                        "rest": "",
                        "notes": "Carga suave de calentamiento, sin llegar al fallo.",
                        "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
                        "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true,
                        "isWarmup": true
                    },
                    {
                        "name": "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
                        "sets": 2,
                        "reps": "12",
                        "rest": "60s",
                        "notes": "Carga suave de calentamiento, sin llegar al fallo.",
                        "videoUrl": "https://www.youtube.com/shorts/NMlvYALcyBc",
                        "imageUrl": "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg",
                        "subOrder": 2,
                        "isWarmup": true
                    }
                ],
                "notes": "Completa ambos ejercicios seguidos y descansa 60 segundos al terminar la pareja. Dos vueltas.",
                "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
                "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg",
                "order": 1
            },
            {
                "name": "Remo en Máquina T Agarre Abierto",
                "sets": 3,
                "reps": "7,7,12",
                "rest": "120s",
                "notes": "Serie 1: 7 repeticiones. Serie 2: 7 repeticiones. Serie 3: 12 repeticiones. Ajusta la carga en la última serie si lo necesitas. Realiza aproximaciones progresivas antes de las series efectivas.",
                "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
                "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Sentadilla Trasera con Barra",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "Realiza aproximaciones progresivas antes de las series efectivas. Mantén el tronco estable y usa un recorrido sin molestias. Si aparece molestia lumbar, detén el ejercicio.",
                "videoUrl": "https://youtu.be/FK5XU_gaxAE",
                "imageUrl": "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Curl Scott con Barra Z",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                "imageUrl": "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Extensión de Cuádriceps en Máquina",
                "sets": 3,
                "reps": "12",
                "rest": "90s",
                "notes": "Movimiento controlado y recorrido cómodo, sin rebotes ni bloqueo brusco de la rodilla.",
                "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Jalón al Pecho en Polea",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Jalón al Pecho en Polea",
                        "sets": 2,
                        "reps": "12",
                        "rest": "",
                        "notes": "",
                        "videoUrl": "https://youtu.be/GYIhmy1P4vY",
                        "imageUrl": "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Curl Bayesian Unilateral en Polea Baja",
                        "sets": 2,
                        "reps": "12",
                        "rest": "60s",
                        "notes": "",
                        "videoUrl": "https://www.youtube.com/shorts/dCI2pPQmq_k",
                        "imageUrl": "https://i.ytimg.com/vi/dCI2pPQmq_k/mqdefault.jpg",
                        "subOrder": 2
                    }
                ],
                "notes": "Completa ambos ejercicios seguidos y descansa 60 segundos al terminar la pareja. Dos vueltas.",
                "videoUrl": "https://youtu.be/GYIhmy1P4vY",
                "imageUrl": "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg",
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
                "name": "Press Banca en Máquina",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "Ajusta el asiento para que las empuñaduras queden a la altura del pecho. Mantén la espalda apoyada y las muñecas alineadas; empuja y vuelve con control, sin rebotes.",
                "videoUrl": "https://www.youtube.com/watch?v=lw4uUkBl_HE",
                "imageUrl": "https://i.ytimg.com/vi/lw4uUkBl_HE/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Press Militar en Máquina",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "Ajusta el asiento y mantén la espalda apoyada. Empuja por encima de la cabeza con control, sin compensar arqueando la zona lumbar.",
                "videoUrl": "https://www.youtube.com/shorts/48CmkF61E7M",
                "imageUrl": "https://i.ytimg.com/vi/48CmkF61E7M/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Press Francés con Barra Z en Banco Inclinado",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://youtu.be/hFk6xzt1DWM",
                "imageUrl": "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg",
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
                "videoUrl": "https://www.youtube.com/watch?v=dfmq1UOuUXo",
                "imageUrl": "https://i.ytimg.com/vi/dfmq1UOuUXo/mqdefault.jpg",
                "order": 1
            },
            {
                "name": "Press Banca con Barra",
                "sets": 3,
                "reps": "7,7,12",
                "rest": "120s",
                "notes": "Serie 1: 7 repeticiones. Serie 2: 7 repeticiones. Serie 3: 12 repeticiones. Ajusta la carga en la última serie si lo necesitas. Realiza aproximaciones progresivas antes de las series efectivas.",
                "videoUrl": "https://youtu.be/PKpsrFS2uac",
                "imageUrl": "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg",
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
                "name": "Press Militar Sentado con Mancuernas (ExPLICADO)",
                "sets": 3,
                "reps": "10",
                "rest": "90s",
                "notes": "",
                "videoUrl": "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                "imageUrl": "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Extensión de Tríceps en Polea con Barra",
                "sets": 3,
                "reps": "8",
                "rest": "90s",
                "notes": "Sujeta la barra de la polea alta en pronación. Extiende los codos llevando la barra hacia abajo, manteniendo los brazos junto al torso y sin balancearte. Controla la vuelta.",
                "videoUrl": "https://www.youtube.com/watch?v=mcae9hNQn50",
                "imageUrl": "https://i.ytimg.com/vi/mcae9hNQn50/mqdefault.jpg",
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

