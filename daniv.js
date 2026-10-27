// Titulo: IVAN_NUEVOBÁSICOS
// Adaptación personal 28/09/2026: 4 días de hipertrofia, prioridad torso. Pierna moderada: 11 series semanales directas, 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Separar la sesión de pierna del partido. Sin superseries que ocupen dos máquinas. Objetivo 45-60 min por sesión.

// Refresh personal 27/10/2026: mismos cuatro básicos y cuatro días; 22 sustituciones de accesorios, objetivos de repeticiones concretos, progresión de carga y dos dropsets de torso en la tercera serie (laterales del día 1 y curl Scott del día 3). Pierna: 11 series directas semanales, RIR 3, sin técnicas intensivas y separada del fútbol. Torso RIR 2 y última serie RIR 1 sin molestias; primera sesión de nuevos ejercicios RIR 2 y sin dropset. Duración estimada 45-60 minutos.

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
                "reps": "10",
                "rest": "120s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtu.be/3GS7EjN7KSk",
                "imageUrl": "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Remo Gironda en Polea",
                "sets": 3,
                "reps": "12",
                "rest": "90s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
                "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Jalón al Pecho Unilateral con Polea",
                "sets": 3,
                "reps": "12",
                "rest": "90s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtu.be/fxMPLrCpzeA",
                "imageUrl": "https://i.ytimg.com/vi/fxMPLrCpzeA/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Cruces en Polea Alta",
                "sets": 3,
                "reps": "12",
                "rest": "90s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtu.be/Ht9awbF2fBA",
                "imageUrl": "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Elevaciones Laterales en Polea",
                "sets": 3,
                "reps": "15",
                "rest": "60s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach. Desde la segunda sesión, en la tercera serie realiza un único DROPSET: baja la carga un 20% y continúa sin descanso hasta quedar a 1 repetición del fallo técnico. No lo hagas si hay molestias.",
                "videoUrl": "https://youtu.be/UxII1sPTa9U",
                "imageUrl": "https://i.ytimg.com/vi/UxII1sPTa9U/mqdefault.jpg",
                "order": 6,
                "setTechniques": {
                    "3": "DROPSET"
                }
            },
            {
                "name": "Extensión Tríceps Trasnuca Unilateral con Mancuerna",
                "sets": 3,
                "reps": "15",
                "rest": "60s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtu.be/jGTquNttoRU",
                "imageUrl": "https://i.ytimg.com/vi/jGTquNttoRU/mqdefault.jpg",
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
                "reps": "12",
                "rest": "120s",
                "notes": "Deja 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Recorrido cómodo y sin dolor; baja la carga para aprender la variante. Si aparece dolor, detén el ejercicio y avisa al coach. Separa la sesión de las 48 horas previas al partido.",
                "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Sentadilla Anterior en Máquina Jaca",
                "sets": 2,
                "reps": "15",
                "rest": "90s",
                "notes": "Deja 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Recorrido cómodo y sin dolor; baja la carga para aprender la variante. Si aparece dolor, detén el ejercicio y avisa al coach. Separa la sesión de las 48 horas previas al partido.",
                "videoUrl": "https://youtube.com/shorts/saLWdiUe5eE",
                "imageUrl": "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Curl Femoral Tumbado en Máquina",
                "sets": 2,
                "reps": "15",
                "rest": "75s",
                "notes": "Deja 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Recorrido cómodo y sin dolor; baja la carga para aprender la variante. Si aparece dolor, detén el ejercicio y avisa al coach. Separa la sesión de las 48 horas previas al partido.",
                "videoUrl": "https://www.youtube.com/shorts/-VfGwgG23OM",
                "imageUrl": "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Press Militar en Multipower",
                "sets": 3,
                "reps": "12",
                "rest": "90s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://www.youtube.com/watch?v=iATqshmFPnI",
                "imageUrl": "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Pájaros con Mancuernas",
                "sets": 3,
                "reps": "15",
                "rest": "60s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtu.be/EMrOS6P90lM",
                "imageUrl": "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg",
                "order": 6
            },
            {
                "name": "Press Pallof Alterno con Rotación en Polea",
                "sets": 3,
                "reps": "15",
                "rest": "60s",
                "notes": "Tronco estable y movimiento controlado. No busques el fallo; detén el ejercicio si provoca molestias.",
                "videoUrl": "https://youtube.com/shorts/vqBP-GHoW5k",
                "imageUrl": "https://i.ytimg.com/vi/vqBP-GHoW5k/mqdefault.jpg",
                "order": 7
            },
            {
                "name": "Plancha - Normal",
                "sets": 2,
                "reps": "25s",
                "rest": "45s",
                "notes": "Mantener espalda recta y glúteo apretado (retroversión de cadera) Mantén el tronco estable durante 25 segundos. Detén la serie si pierdes la posición.",
                "videoUrl": "https://youtu.be/DQ4wYExQRJo",
                "imageUrl": "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg",
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
                "reps": "12",
                "rest": "120s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtu.be/rimdRzyIJkA",
                "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Press Inclinado con Mancuernas",
                "sets": 3,
                "reps": "12",
                "rest": "120s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtu.be/ZE4M73kXB5A",
                "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Remo en Máquina T Agarre Abierto",
                "sets": 3,
                "reps": "12",
                "rest": "90s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
                "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Aperturas en Banco con Mancuernas",
                "sets": 2,
                "reps": "15",
                "rest": "60s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://www.youtube.com/watch?v=dfmq1UOuUXo",
                "imageUrl": "https://i.ytimg.com/vi/dfmq1UOuUXo/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Elevaciones Laterales en Poleas Cruzadas",
                "sets": 3,
                "reps": "15",
                "rest": "60s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtu.be/MtLsD20-EdE",
                "imageUrl": "https://i.ytimg.com/vi/MtLsD20-EdE/mqdefault.jpg",
                "order": 6
            },
            {
                "name": "Curl Scott con Barra Z",
                "sets": 3,
                "reps": "12",
                "rest": "60s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach. Desde la segunda sesión, en la tercera serie realiza un único DROPSET: baja la carga un 20% y continúa sin descanso hasta quedar a 1 repetición del fallo técnico. No lo hagas si hay molestias.",
                "videoUrl": "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                "imageUrl": "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg",
                "order": 7,
                "setTechniques": {
                    "3": "DROPSET"
                }
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
                "reps": "12",
                "rest": "90s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtu.be/hXCJC2Apcdg",
                "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg",
                "order": 2
            },
            {
                "name": "Remo con Mancuerna Unilateral",
                "sets": 3,
                "reps": "12",
                "rest": "90s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtu.be/EPXL9QIasLM",
                "imageUrl": "https://i.ytimg.com/vi/EPXL9QIasLM/mqdefault.jpg",
                "order": 3
            },
            {
                "name": "Curl Femoral Tumbado en Máquina",
                "sets": 2,
                "reps": "15",
                "rest": "60s",
                "notes": "Deja 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Recorrido cómodo y sin dolor; baja la carga para aprender la variante. Si aparece dolor, detén el ejercicio y avisa al coach. Separa la sesión de las 48 horas previas al partido.",
                "videoUrl": "https://www.youtube.com/shorts/-VfGwgG23OM",
                "imageUrl": "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg",
                "order": 4
            },
            {
                "name": "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
                "sets": 2,
                "reps": "15",
                "rest": "60s",
                "notes": "Deja 3 repeticiones en recámara, sin fallo ni técnicas intensivas. Carga ligera, bajada controlada y recorrido cómodo sin dolor; evita esta sesión en las 48 horas previas al partido. Si aparecen molestias, detén el ejercicio y avisa al coach.",
                "videoUrl": "https://www.youtube.com/shorts/tNu9bm3geqY",
                "imageUrl": "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg",
                "order": 5
            },
            {
                "name": "Press Militar Unilateral en Landmine",
                "sets": 3,
                "reps": "15",
                "rest": "60s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://www.youtube.com/watch?v=p2OLvWOo9l0",
                "imageUrl": "https://i.ytimg.com/vi/p2OLvWOo9l0/mqdefault.jpg",
                "order": 6
            },
            {
                "name": "Curl Martillo con Cuerda en Polea Baja",
                "sets": 3,
                "reps": "12",
                "rest": "60s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://www.youtube.com/shorts/fSTgTQr1WCk",
                "imageUrl": "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg",
                "order": 7
            },
            {
                "name": "Press Francés con Barra Z en Banco Inclinado",
                "sets": 3,
                "reps": "15",
                "rest": "60s",
                "notes": "Mantén 2 repeticiones en recámara; en la última serie puedes llegar a 1 si no hay molestias. Controla la bajada durante 2 segundos. Cuando completes el objetivo en todas las series, sube el menor incremento de carga disponible. Primera sesión de los ejercicios nuevos con 2 repeticiones en recámara. Si aparece dolor, detén ese ejercicio y avisa al coach.",
                "videoUrl": "https://youtu.be/hFk6xzt1DWM",
                "imageUrl": "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg",
                "order": 8
            }
        ]
    }
};

const exerciseAlternatives = {
    "Sentadilla Anterior en Máquina Jaca": [
        {
            "name": "Prensa Inclinada en Máquina de Discos",
            "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
            "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg",
            "notes": "Alternativa si falta el material; conserva las series, repeticiones y el margen de esfuerzo del principal."
        }
    ],
    "Curl Femoral Tumbado en Máquina": [
        {
            "name": "Curl Femoral Sentado en Máquina",
            "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
            "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg",
            "notes": "Alternativa si falta el material; conserva las series, repeticiones y el margen de esfuerzo del principal."
        }
    ],
    "Press Militar Unilateral en Landmine": [
        {
            "name": "Press Militar Unilat de Pie con Mancuerna/KTB",
            "videoUrl": "https://www.youtube.com/shorts/vIK0qkXP_f0",
            "imageUrl": "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg",
            "notes": "Alternativa si falta el material; conserva las series, repeticiones y el margen de esfuerzo del principal."
        }
    ]
};

