// Titulo: IVAN_NUEVOBÁSICOS
// Adaptación personal 28/09/2026: 4 días de hipertrofia, prioridad torso. Pierna moderada: 11 series semanales directas, 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Separar la sesión de pierna del partido. Sin superseries que ocupen dos máquinas. Objetivo 45-60 min por sesión.

const workoutData = {
    "dia1": {
        "name": "Torso A — pecho y espalda",
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
                "sets": 4,
                "reps": "8-10",
                "rest": "120s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/3GS7EjN7KSk",
                "imageUrl": "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Remo en Máquina T Agarre Estrecho",
                "sets": 3,
                "reps": "8-12",
                "rest": "90s",
                "notes": "Usa apoyo de pecho si la máquina lo permite; tronco estable. Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
                "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg",
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
                "name": "Press Banca con Mancuernas",
                "sets": 3,
                "reps": "10-12",
                "rest": "90s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/hXCJC2Apcdg",
                "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Elevaciones Laterales con Mancuernas",
                "sets": 3,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
                "order": 6
            },
            {
                "name": "Extensión de Tríceps en Polea con Cuerda",
                "sets": 3,
                "reps": "10-15",
                "rest": "60s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg",
                "order": 7
            }
        ]
    },
    "dia2": {
        "name": "Pierna moderada, deltoides y abdomen",
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
                "reps": "8-12",
                "rest": "120s",
                "notes": "Deja 3 repeticiones en recámara; sin fallo ni técnicas intensivas. Usa recorrido cómodo y sin dolor. Si aparece dolor, para ese ejercicio y coméntalo al coach. Evita esta sesión en las 48 horas previas al partido.",
                "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Prensa Inclinada en Máquina de Discos",
                "sets": 2,
                "reps": "10-15",
                "rest": "90s",
                "notes": "Deja 3 repeticiones en recámara; sin fallo ni técnicas intensivas. Usa recorrido cómodo y sin dolor. Si aparece dolor, para ese ejercicio y coméntalo al coach. Evita esta sesión en las 48 horas previas al partido.",
                "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
                "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Curl Femoral Sentado en Máquina",
                "sets": 2,
                "reps": "10-15",
                "rest": "75s",
                "notes": "Deja 3 repeticiones en recámara; sin fallo ni técnicas intensivas. Usa recorrido cómodo y sin dolor. Si aparece dolor, para ese ejercicio y coméntalo al coach. Evita esta sesión en las 48 horas previas al partido.",
                "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
                "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Press Militar Sentado con Mancuernas (ExPLICADO)",
                "sets": 3,
                "reps": "8-12",
                "rest": "90s",
                "notes": "Usa respaldo y recorrido cómodo. Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                "imageUrl": "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Elevaciones Laterales con Mancuernas",
                "sets": 3,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
                "order": 6
            },
            {
                "name": "Crunch en Polea Alta",
                "sets": 3,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Controla el movimiento sin provocar molestias lumbares.",
                "videoUrl": "https://youtube.com/shorts/H9QSO6XBRkA",
                "imageUrl": "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg",
                "order": 7
            },
            {
                "name": "Plancha - Lateral",
                "sets": 2,
                "reps": "25 s por lado",
                "rest": "45s",
                "notes": "Mantén el tronco estable y sin dolor.",
                "videoUrl": "https://youtu.be/IBlAMf7LYvI",
                "imageUrl": "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg",
                "order": 8
            }
        ]
    },
    "dia3": {
        "name": "Torso B — espalda y pecho",
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
                "name": "Jalón al Pecho Supino en Polea",
                "sets": 4,
                "reps": "8-12",
                "rest": "90s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/rimdRzyIJkA",
                "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Press Banca en Multipower",
                "sets": 3,
                "reps": "8-12",
                "rest": "120s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/w-5ovE5O5iU",
                "imageUrl": "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Remo Seal con Mancuernas",
                "sets": 3,
                "reps": "10-12",
                "rest": "90s",
                "notes": "Trata de despegar el pecho al final del movimiento Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
                "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Aperturas en Banco Inclinado con Mancuernas",
                "sets": 2,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Recorrido cómodo para el hombro; deja 2 repeticiones en recámara.",
                "videoUrl": "https://youtu.be/Lx8d28YlcbQ",
                "imageUrl": "https://i.ytimg.com/vi/Lx8d28YlcbQ/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Pájaros con Mancuernas",
                "sets": 3,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/EMrOS6P90lM",
                "imageUrl": "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg",
                "order": 6
            },
            {
                "name": "Curl de Bíceps Apoyado en Banco con Mancuernas",
                "sets": 3,
                "reps": "10-12",
                "rest": "60s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtube.com/shorts/hQ3ojFx5soY",
                "imageUrl": "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg",
                "order": 7
            }
        ]
    },
    "dia4": {
        "name": "Fullbody — brazos y torso, pierna ligera",
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
                "reps": "10-12",
                "rest": "90s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/hXCJC2Apcdg",
                "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Remo Gironda en Polea",
                "sets": 3,
                "reps": "10-12",
                "rest": "90s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
                "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Curl Femoral Sentado en Máquina",
                "sets": 2,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Deja 3 repeticiones en recámara; sin fallo ni técnicas intensivas. Usa recorrido cómodo y sin dolor. Si aparece dolor, para ese ejercicio y coméntalo al coach. Evita esta sesión en las 48 horas previas al partido.",
                "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
                "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Extensión de Cuádriceps en Máquina",
                "sets": 2,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Deja 3 repeticiones en recámara; sin fallo ni técnicas intensivas. Usa recorrido cómodo y sin dolor. Si aparece dolor, para ese ejercicio y coméntalo al coach. Evita esta sesión en las 48 horas previas al partido.",
                "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Elevaciones Laterales con Mancuernas",
                "sets": 3,
                "reps": "12-15",
                "rest": "60s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
                "order": 6
            },
            {
                "name": "Curl Martillo con Mancuernas",
                "sets": 3,
                "reps": "10-12",
                "rest": "60s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtu.be/fcFsPoJY9lg",
                "imageUrl": "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg",
                "order": 7
            },
            {
                "name": "Extensión de Tríceps en Polea con Cuerda",
                "sets": 3,
                "reps": "10-15",
                "rest": "60s",
                "notes": "Trabaja con 2 repeticiones en recámara. Cuando completes el máximo del rango en todas las series con buena técnica, sube el menor incremento de carga disponible.",
                "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg",
                "order": 8
            }
        ]
    }
};

const exerciseAlternatives = {
    "Remo en Máquina T Agarre Estrecho": [
        {
            "name": "Remo Gironda en Polea",
            "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
            "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg",
            "notes": ""
        }
    ],
    "Curl Femoral Sentado en Máquina": [
        {
            "name": "Curl Femoral Tumbado en Máquina",
            "videoUrl": "https://www.youtube.com/shorts/-VfGwgG23OM",
            "imageUrl": "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg",
            "notes": ""
        }
    ],
    "Prensa Inclinada en Máquina de Discos": [
        {
            "name": "Sentadilla Anterior en Máquina Jaca",
            "videoUrl": "https://youtube.com/shorts/saLWdiUe5eE",
            "imageUrl": "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg",
            "notes": ""
        }
    ],
    "Jalón al Pecho Neutro en Polea": [
        {
            "name": "Jalón al Pecho en Polea",
            "videoUrl": "https://youtu.be/GYIhmy1P4vY",
            "imageUrl": "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg",
            "notes": ""
        }
    ]
};
