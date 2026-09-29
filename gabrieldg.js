// Titulo: P22_4D_TORPIER_MIXTO_1
// Adaptación personal 29/09/2026: cuatro días; se conservan sin cambios los tres días actuales y se añade COMPLEMENTO TORSO. Trabajo de tren superior con posiciones sentadas o apoyadas para reducir la demanda de la pierna lesionada.

const workoutData = {
    "dia1": {
        "name": "Torso completo — pecho y espalda",
        "exercises": [
            {
                "name": "Rotación Externa de Hombro Unilat con Polea",
                "sets": 2,
                "reps": "10",
                "rest": "30s",
                "notes": "Después, dos series de aproximación ligeras del primer básico; no cuentan como trabajo.",
                "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg",
                "isWarmup": true,
                "order": 1
            },
            {
                "name": "Press Banca Inclinado en Multipower",
                "sets": 3,
                "reps": "8-10",
                "rest": "120s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/3GS7EjN7KSk",
                "imageUrl": "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Remo Gironda en Polea",
                "sets": 3,
                "reps": "8-12",
                "rest": "90s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
                "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Jalón al Pecho Neutro en Polea",
                "sets": 3,
                "reps": "10-12",
                "rest": "90s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/5YzMH2KkMHc",
                "imageUrl": "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Press Militar Sentado con Mancuernas (ExPLICADO)",
                "sets": 3,
                "reps": "8-12",
                "rest": "90s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                "imageUrl": "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Elevaciones Laterales con Mancuernas",
                "sets": 2,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
                "order": 6
            },
            {
                "name": "Curl Martillo con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Curl Martillo con Mancuernas",
                        "sets": 2,
                        "reps": "10-12",
                        "rest": "",
                        "notes": "",
                        "videoUrl": "https://youtu.be/fcFsPoJY9lg",
                        "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
                        "sets": 2,
                        "reps": "10-12",
                        "rest": "75s",
                        "notes": "",
                        "videoUrl": "https://youtu.be/1MgU2PO4_rI",
                        "imageUrl": "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg",
                        "subOrder": 2,
                        "isSupersetStart": false
                    }
                ],
                "notes": "Dos vueltas con las mismas mancuernas; sin ocupar dos máquinas. Deja 2 repeticiones en recámara.",
                "videoUrl": "https://youtu.be/fcFsPoJY9lg",
                "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg",
                "order": 7
            }
        ]
    },
    "dia2": {
        "name": "Pierna moderada y abdomen",
        "exercises": [
            {
                "name": "Movilidad - De Cadera",
                "sets": 2,
                "reps": "8",
                "rest": "30s",
                "notes": "Controlar que los pies no se desplacen del sitio. Añade dos aproximaciones progresivas del primer ejercicio de pierna, sin fatiga.",
                "videoUrl": "https://youtu.be/7TmNRUP7N_0",
                "imageUrl": "https://i.ytimg.com/vi/7TmNRUP7N_0/mqdefault.jpg",
                "isWarmup": true,
                "order": 1
            },
            {
                "name": "Hip Thrust con Barra (ExPLICADO)",
                "sets": 3,
                "reps": "8-10",
                "rest": "120s",
                "notes": "Deja 3 repeticiones en recámara; sin fallo ni técnicas intensivas. Usa recorrido cómodo y sin dolor. Si aparece dolor, para ese ejercicio y coméntalo al coach. Evita esta sesión en las 48 horas previas al partido.",
                "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Sentadilla Trasera con Barra Talones Elevados",
                "sets": 3,
                "reps": "8-10",
                "rest": "90s",
                "notes": "Deja 3 repeticiones en recámara; sin fallo ni técnicas intensivas. Usa recorrido cómodo y sin dolor. Si aparece dolor, para ese ejercicio y coméntalo al coach. Evita esta sesión en las 48 horas previas al partido.",
                "videoUrl": "https://youtube.com/shorts/FYuU4CAAT1I",
                "imageUrl": "https://i.ytimg.com/vi/FYuU4CAAT1I/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Sentadilla Búlgara con Mancuerna o KTB",
                "sets": 2,
                "reps": "8 por pierna",
                "rest": "90s",
                "notes": "Deja 3 repeticiones en recámara; sin fallo ni técnicas intensivas. Usa recorrido cómodo y sin dolor. Si aparece dolor, para ese ejercicio y coméntalo al coach. Evita esta sesión en las 48 horas previas al partido.",
                "videoUrl": "https://youtu.be/kA6bHiDdTO4",
                "imageUrl": "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Curl Femoral Sentado en Máquina",
                "sets": 3,
                "reps": "10-12",
                "rest": "75s",
                "notes": "Deja 3 repeticiones en recámara; sin fallo ni técnicas intensivas. Usa recorrido cómodo y sin dolor. Si aparece dolor, para ese ejercicio y coméntalo al coach. Evita esta sesión en las 48 horas previas al partido.",
                "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
                "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Aducción de Piernas en Máquina",
                "sets": 2,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Deja 3 repeticiones en recámara; sin fallo ni técnicas intensivas. Usa recorrido cómodo y sin dolor. Si aparece dolor, para ese ejercicio y coméntalo al coach. Evita esta sesión en las 48 horas previas al partido.",
                "videoUrl": "https://www.youtube.com/shorts/7TPklhKZRrc",
                "imageUrl": "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg",
                "order": 6
            },
            {
                "name": "Crunch en Polea Alta",
                "sets": 3,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Controla el movimiento; sin tirar con los brazos.",
                "videoUrl": "https://youtube.com/shorts/H9QSO6XBRkA",
                "imageUrl": "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg",
                "order": 7
            },
            {
                "name": "Plancha - Lateral",
                "sets": 2,
                "reps": "25 s por lado",
                "rest": "45s",
                "notes": "Controla pelvis y tronco.",
                "videoUrl": "https://youtu.be/IBlAMf7LYvI",
                "imageUrl": "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg",
                "order": 8
            }
        ]
    },
    "dia3": {
        "name": "Fullbody — prioridad torso",
        "exercises": [
            {
                "name": "Rotación Externa de Hombro Unilat con Polea",
                "sets": 2,
                "reps": "10",
                "rest": "30s",
                "notes": "Después, dos series de aproximación ligeras del primer básico; no cuentan como trabajo.",
                "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg",
                "isWarmup": true,
                "order": 1
            },
            {
                "name": "Press Banca con Mancuernas",
                "sets": 3,
                "reps": "8-12",
                "rest": "120s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/hXCJC2Apcdg",
                "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Remo Seal con Mancuernas",
                "sets": 3,
                "reps": "10-12",
                "rest": "90s",
                "notes": "Trata de despegar el pecho al final del movimiento Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
                "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Jalón al Pecho Supino en Polea",
                "sets": 3,
                "reps": "10-12",
                "rest": "90s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/rimdRzyIJkA",
                "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Extensión de Cuádriceps en Máquina",
                "sets": 2,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Complemento de pierna: deja 3 repeticiones en recámara y no llegues al fallo.",
                "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Curl Femoral Sentado en Máquina",
                "sets": 2,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Complemento de pierna: deja 3 repeticiones en recámara.",
                "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
                "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg",
                "order": 6
            },
            {
                "name": "Elevaciones Laterales con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Elevaciones Laterales con Mancuernas",
                        "sets": 3,
                        "reps": "12-15",
                        "rest": "",
                        "notes": "",
                        "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                        "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Curl Martillo con Mancuernas",
                        "sets": 3,
                        "reps": "10-12",
                        "rest": "75s",
                        "notes": "",
                        "videoUrl": "https://youtu.be/fcFsPoJY9lg",
                        "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg",
                        "subOrder": 2,
                        "isSupersetStart": false
                    }
                ],
                "notes": "Mantén 2 repeticiones en recámara.",
                "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
                "order": 7
            }
        ]
    },
    "dia4": {
        "name": "COMPLEMENTO TORSO",
        "exercises": [
            {
                "name": "Rotación Externa de Hombro Unilat con Polea",
                "sets": 2,
                "reps": "10 por lado",
                "rest": "30s",
                "notes": "Calentamiento suave sentado y estable.",
                "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
                "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg",
                "isWarmup": true,
                "order": 1
            },
            {
                "name": "Cruces en Polea Alta",
                "sets": 3,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Realízalo sentado si así evitas cargar la pierna; sin impulso.",
                "videoUrl": "https://youtu.be/Ht9awbF2fBA",
                "imageUrl": "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Remo en Máquina T Agarre Estrecho",
                "sets": 3,
                "reps": "8-12",
                "rest": "90s",
                "notes": "Pecho apoyado si la máquina lo permite; evita impulsarte con las piernas.",
                "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
                "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Press Militar Sentado con Mancuernas (ExPLICADO)",
                "sets": 3,
                "reps": "10-12",
                "rest": "75s",
                "notes": "Sentado con respaldo y sin empuje de piernas.",
                "videoUrl": "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                "imageUrl": "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Elevaciones Laterales en Poleas Cruzadas",
                "sets": 2,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Hazlas sentado si es más cómodo para la pierna.",
                "videoUrl": "https://youtu.be/MtLsD20-EdE",
                "imageUrl": "https://i.ytimg.com/vi/MtLsD20-EdE/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Curl Scott con Barra Z",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Curl Scott con Barra Z",
                        "sets": 2,
                        "reps": "10-12",
                        "rest": "",
                        "notes": "",
                        "videoUrl": "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                        "imageUrl": "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Extensión de Tríceps en Polea con Cuerda",
                        "sets": 2,
                        "reps": "10-12",
                        "rest": "75s",
                        "notes": "Sentado y estable si lo necesitas.",
                        "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg",
                        "subOrder": 2,
                        "isSupersetStart": false
                    }
                ],
                "notes": "Dos vueltas, sentado y sin apoyo doloroso de la pierna.",
                "videoUrl": "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                "imageUrl": "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg",
                "order": 6
            }
        ]
    }
};

const exerciseAlternatives = {};
