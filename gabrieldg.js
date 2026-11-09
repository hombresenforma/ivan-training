// Titulo: P25_4D_EmpujePiernaTraccionFullBody_CARGAS_1
// Notas: Cuatro sesiones base y una quinta opcional en gimnasio completo. Progresión de cargas en series rectas. Empuje, pierna dominante de rodilla, tracción y cuerpo completo con énfasis posterior.
// Progresión: conserva la técnica y el recorrido. Sube el mínimo incremento disponible cuando completes todas las series al objetivo con RIR 1–2. Si no lo consigues, repite la carga en la siguiente sesión.
// Opcional: hombros, brazos y abdomen si estás recuperado. Prioriza las cuatro sesiones base.

const workoutData = {
  "dia1": {
    "name": "Empuje · carga",
    "exercises": [
      {
        "order": 1,
        "name": "Rotación Externa de Hombro Unilat con Polea",
        "sets": 2,
        "reps": "10",
        "rest": "30s",
        "notes": "Activación ligera.",
        "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
        "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Press Inclinado con Mancuernas",
        "sets": 4,
        "reps": "6",
        "rest": "150s",
        "notes": "Haz 2–3 aproximaciones antes de las series efectivas. Mantén RIR 2 al arrancar el bloque.",
        "videoUrl": "https://youtu.be/ZE4M73kXB5A",
        "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Press Banca en Máquina",
        "sets": 3,
        "reps": "8",
        "rest": "105s",
        "notes": "Ajusta el asiento para que las empuñaduras queden a la altura del pecho. Mantén la espalda apoyada y las muñecas alineadas; empuja y vuelve con control, sin rebotes. Mantén el mismo ajuste del asiento al comparar cargas.",
        "videoUrl": "https://www.youtube.com/watch?v=lw4uUkBl_HE",
        "imageUrl": "https://i.ytimg.com/vi/lw4uUkBl_HE/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Press Militar en Máquina",
        "sets": 3,
        "reps": "8",
        "rest": "90s",
        "notes": "Ajusta el asiento y mantén la espalda apoyada. Empuja por encima de la cabeza con control, sin compensar arqueando la zona lumbar. Pausa breve abajo, sin rebote.",
        "videoUrl": "https://www.youtube.com/shorts/48CmkF61E7M",
        "imageUrl": "https://i.ytimg.com/vi/48CmkF61E7M/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Cruces en Polea Alta",
        "sets": 3,
        "reps": "12",
        "rest": "75s",
        "notes": "Recorrido estable y excéntrica controlada.",
        "videoUrl": "https://youtu.be/Ht9awbF2fBA",
        "imageUrl": "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Elevaciones Laterales en Poleas Cruzadas",
        "sets": 3,
        "reps": "15",
        "rest": "75s",
        "notes": "En la última serie reduce la carga un 20–25% y haz una sola bajada con técnica limpia.",
        "videoUrl": "https://youtu.be/MtLsD20-EdE",
        "imageUrl": "https://i.ytimg.com/vi/MtLsD20-EdE/mqdefault.jpg",
        "setTechniques": {
          "3": "DROPSET"
        }
      },
      {
        "order": 7,
        "name": "Extensión de Tríceps en Polea con Barra",
        "sets": 3,
        "reps": "12",
        "rest": "75s",
        "notes": "Sujeta la barra de la polea alta en pronación. Extiende los codos llevando la barra hacia abajo, manteniendo los brazos junto al torso y sin balancearte. Controla la vuelta. Mantén los codos fijos.",
        "videoUrl": "https://www.youtube.com/watch?v=mcae9hNQn50",
        "imageUrl": "https://i.ytimg.com/vi/mcae9hNQn50/mqdefault.jpg"
      }
    ]
  },
  "dia2": {
    "name": "Pierna · dominante de rodilla",
    "exercises": [
      {
        "order": 1,
        "name": "Movilidad - Rodilla y Tobillo",
        "sets": 2,
        "reps": "8",
        "rest": "30s",
        "notes": "Buscar ROM. Calentamiento sin fatiga.",
        "videoUrl": "https://youtu.be/wdOGeCaNKS8",
        "imageUrl": "https://i.ytimg.com/vi/wdOGeCaNKS8/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Sentadilla Anterior en Máquina Jaca",
        "sets": 4,
        "reps": "6",
        "rest": "150s",
        "notes": "Haz 2–3 aproximaciones. Registra carga, profundidad y ajuste de la máquina.",
        "videoUrl": "https://youtube.com/shorts/saLWdiUe5eE",
        "imageUrl": "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Sentadilla Búlgara en Multipower",
        "sets": 3,
        "reps": "8",
        "rest": "105s",
        "notes": "Apoya el pie trasero en un banco estable y coloca el delantero para bajar con control. Mantén el apoyo del pie delantero y evita impulsarte con la pierna trasera. Realiza las repeticiones con cada pierna. Completa ambos lados antes del descanso.",
        "videoUrl": "https://www.youtube.com/watch?v=UHoRtCnxuXI",
        "imageUrl": "https://i.ytimg.com/vi/UHoRtCnxuXI/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Curl Femoral Sentado en Máquina",
        "sets": 4,
        "reps": "10",
        "rest": "90s",
        "notes": "Controla el estiramiento sin levantar la cadera.",
        "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
        "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Extensión de Cuádriceps en Máquina",
        "sets": 3,
        "reps": "12",
        "rest": "75s",
        "notes": "Mantén el recorrido constante en cada sesión.",
        "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
        "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Sit Up Abdominal con Disco",
        "sets": 3,
        "reps": "12",
        "rest": "60s",
        "notes": "Progresión de carga solo si mantienes el control.",
        "videoUrl": "https://www.youtube.com/shorts/GHLO76YCyHE",
        "imageUrl": "https://i.ytimg.com/vi/GHLO76YCyHE/mqdefault.jpg"
      }
    ]
  },
  "dia3": {
    "name": "Tracción · carga",
    "exercises": [
      {
        "order": 1,
        "name": "Movilidad - Activación de Escápulas",
        "sets": 2,
        "reps": "10",
        "rest": "30s",
        "notes": "Buscar control motor. Activa sin fatigar.",
        "videoUrl": "https://youtu.be/6Kj_rg_7tYQ",
        "imageUrl": "https://i.ytimg.com/vi/6Kj_rg_7tYQ/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Remo en Máquina T Agarre Abierto",
        "sets": 4,
        "reps": "6",
        "rest": "150s",
        "notes": "Haz 2–3 aproximaciones. Evita acortar el recorrido al subir carga.",
        "videoUrl": "https://youtube.com/shorts/_XOaMY5NumY",
        "imageUrl": "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Jalón al Pecho Supino en Polea",
        "sets": 4,
        "reps": "8",
        "rest": "105s",
        "notes": "Usa el mismo ajuste de musleras y recorrido.",
        "videoUrl": "https://youtu.be/rimdRzyIJkA",
        "imageUrl": "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Remo Unilat Sentado en Polea Media",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "Completa ambos lados antes del descanso.",
        "videoUrl": "https://youtube.com/shorts/kjbRoWIl7eI",
        "imageUrl": "https://i.ytimg.com/vi/kjbRoWIl7eI/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Face Pull al Cuello en Polea Alta",
        "sets": 3,
        "reps": "15",
        "rest": "75s",
        "notes": "Usa cuerda y lleva las manos hacia el cuello o la cara, separando los extremos. Mantén el tronco estable y controla la vuelta sin balancearte. Mantén el tronco quieto.",
        "videoUrl": "https://www.youtube.com/shorts/TaTjLum-_qI",
        "imageUrl": "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Curl Bayesian Unilateral en Polea Baja",
        "sets": 3,
        "reps": "12",
        "rest": "75s",
        "notes": "Completa ambos lados sin adelantar el hombro.",
        "videoUrl": "https://www.youtube.com/shorts/dCI2pPQmq_k",
        "imageUrl": "https://i.ytimg.com/vi/dCI2pPQmq_k/mqdefault.jpg"
      },
      {
        "order": 7,
        "name": "Curl Martillo con Cuerda en Polea Baja",
        "sets": 3,
        "reps": "10",
        "rest": "75s",
        "notes": "Acaba con una repetición limpia en recámara.",
        "videoUrl": "https://www.youtube.com/shorts/fSTgTQr1WCk",
        "imageUrl": "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
      }
    ]
  },
  "dia4": {
    "name": "Cuerpo completo · cadena posterior",
    "exercises": [
      {
        "order": 1,
        "name": "Movilidad - Activación de Cadera",
        "sets": 2,
        "reps": "8",
        "rest": "30s",
        "notes": "Controlar que los pies no se desplacen del sitio. Prepara la bisagra antes de cargar.",
        "videoUrl": "https://youtu.be/ltzWjXiHXao",
        "imageUrl": "https://i.ytimg.com/vi/ltzWjXiHXao/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Peso Muerto Rumano con Barra",
        "sets": 4,
        "reps": "6",
        "rest": "150s",
        "notes": "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta). Haz 2–3 aproximaciones. Mantén RIR 2 y el mismo recorrido en cada serie.",
        "videoUrl": "https://youtu.be/R7FKam5GyNw",
        "imageUrl": "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Press Banca con Barra",
        "sets": 3,
        "reps": "8",
        "rest": "120s",
        "notes": "Referencia de la P24. Recalibra la carga para 8 repeticiones y RIR 2.",
        "videoUrl": "https://youtu.be/PKpsrFS2uac",
        "imageUrl": "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Prensa Inclinada en Máquina de Discos",
        "sets": 3,
        "reps": "10",
        "rest": "105s",
        "notes": "Mantén apoyo y profundidad constantes.",
        "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
        "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Jalón al Pecho Neutro en Polea",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "Referencia de la P24. Trabaja en series rectas.",
        "videoUrl": "https://youtu.be/5YzMH2KkMHc",
        "imageUrl": "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Curl Femoral Tumbado en Máquina",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "Tras la última serie descansa 15–20 segundos y añade una sola miniserie limpia, sin perder el apoyo de la cadera.",
        "videoUrl": "https://www.youtube.com/shorts/-VfGwgG23OM",
        "imageUrl": "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg",
        "setTechniques": {
          "3": "REST-PAUSE"
        }
      },
      {
        "order": 7,
        "name": "Plancha - Lateral",
        "sets": 3,
        "reps": "30s",
        "rest": "60s",
        "notes": "Completa ambos lados antes de descansar.",
        "videoUrl": "https://youtu.be/IBlAMf7LYvI",
        "imageUrl": "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg"
      }
    ]
  },
  "dia5": {
    "name": "Opcional · hombros, brazos y abdomen",
    "exercises": [
      {
        "order": 1,
        "name": "Movilidad - Cintura Escapular",
        "sets": 2,
        "reps": "10",
        "rest": "30s",
        "notes": "Estabilizando el tronco con mucho control motor. Este día es opcional. Hazlo si estás recuperado y mantén RIR 2–3 en los accesorios.",
        "videoUrl": "https://youtu.be/qFt3RmTDmXI",
        "imageUrl": "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg"
      },
      {
        "order": 2,
        "name": "Elevaciones Laterales con Mancuernas",
        "sets": 3,
        "reps": "15",
        "rest": "75s",
        "notes": "Haz las repeticiones sin impulso.",
        "videoUrl": "https://youtu.be/rhmW_fhB4cs",
        "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
      },
      {
        "order": 3,
        "name": "Pájaros con Mancuernas",
        "sets": 3,
        "reps": "15",
        "rest": "75s",
        "notes": "No conviertas la serie en un remo.",
        "videoUrl": "https://youtu.be/EMrOS6P90lM",
        "imageUrl": "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg"
      },
      {
        "order": 4,
        "name": "Curl Araña con Barra Z",
        "sets": 3,
        "reps": "12",
        "rest": "75s",
        "notes": "Mantén el apoyo y evita el balanceo.",
        "videoUrl": "https://www.youtube.com/shorts/ZGa2E8bi9Eg",
        "imageUrl": "https://i.ytimg.com/vi/ZGa2E8bi9Eg/mqdefault.jpg"
      },
      {
        "order": 5,
        "name": "Press Francés con Barra Z en Banco Inclinado",
        "sets": 3,
        "reps": "12",
        "rest": "75s",
        "notes": "Controla el descenso y usa una carga cómoda.",
        "videoUrl": "https://youtu.be/hFk6xzt1DWM",
        "imageUrl": "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
      },
      {
        "order": 6,
        "name": "Press Pallof Excéntrico Unilat en Polea",
        "sets": 3,
        "reps": "10",
        "rest": "60s",
        "notes": "Completa ambos lados antes del descanso.",
        "videoUrl": "https://youtube.com/shorts/r89c9qr-CB0",
        "imageUrl": "https://i.ytimg.com/vi/r89c9qr-CB0/mqdefault.jpg"
      },
      {
        "order": 7,
        "name": "Crunch Tuck Up Completo",
        "sets": 3,
        "reps": "12",
        "rest": "60s",
        "notes": "Pausa breve arriba y baja con control.",
        "videoUrl": "https://www.youtube.com/shorts/LJNB5djT4LI",
        "imageUrl": "https://i.ytimg.com/vi/LJNB5djT4LI/mqdefault.jpg"
      }
    ]
  }
};

const exerciseAlternatives = {};
