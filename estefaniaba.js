// Titulo: P23_4D_PostAntTorPier_VOLUMEN_2
// Adaptación individual 28/09/2026 a 3 días: anterior, posterior y pierna. Se conserva la frecuencia de la variante FEM anterior.
// Base del catálogo: una serie más en básicos (máximo 5) y tercer ejercicio en bloques de pecho/espalda. Sin asignar el cuarto día de torso de la plantilla.
// Se mantienen jaca, trabajo de glúteo y accesorios de la variante previa; recursos actualizados al catálogo canónico. Antecedentes cervicales: cuello neutro y recorrido tolerado, sin fallo ni repeticiones forzadas.
const workoutData = {
  "dia1": {
    "name": "Anterior — volumen 2",
    "exercises": [
      {
        "name": "Rotación Externa de Hombro Unilat con Polea",
        "sets": 2,
        "reps": "8",
        "rest": "30s",
        "notes": "Después realiza dos series de aproximación del primer básico, sin fatiga.",
        "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
        "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg",
        "isWarmup": true,
        "order": 1
      },
      {
        "name": "Press Militar Sentado con Mancuernas (ExPLICADO)",
        "sets": 5,
        "reps": "8-10",
        "rest": "120s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible. Cuello neutro, sin encoger hombros ni forzar el recorrido. Si reaparece molestia cervical, para ese ejercicio y avisa al coach.",
        "videoUrl": "https://www.youtube.com/shorts/2ZkYyh4ic0o",
        "imageUrl": "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg",
        "order": 2
      },
      {
        "name": "Sentadilla Anterior en Máquina Jaca",
        "sets": 3,
        "reps": "10-12",
        "rest": "90s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible.",
        "videoUrl": "https://youtube.com/shorts/saLWdiUe5eE",
        "imageUrl": "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg",
        "order": 3
      },
      {
        "name": "Press Banca con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Press Banca con Mancuernas",
            "sets": 3,
            "reps": "8-10",
            "rest": "",
            "notes": "",
            "videoUrl": "https://youtu.be/hXCJC2Apcdg",
            "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg",
            "subOrder": 1,
            "isSupersetStart": true
          },
          {
            "name": "Aperturas en Banco con Mancuernas",
            "sets": 3,
            "reps": "10-12",
            "rest": "",
            "notes": "",
            "videoUrl": "https://www.youtube.com/watch?v=dfmq1UOuUXo",
            "imageUrl": "https://i.ytimg.com/vi/dfmq1UOuUXo/mqdefault.jpg",
            "subOrder": 2,
            "isSupersetStart": false
          },
          {
            "name": "Flexiones con Peso Corporal",
            "sets": 3,
            "reps": "8-12",
            "rest": "90s",
            "notes": "",
            "videoUrl": "https://www.youtube.com/shorts/jqnnetMI-4s",
            "imageUrl": "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg",
            "subOrder": 3,
            "isSupersetStart": false
          }
        ],
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible. Completa las vueltas en el mismo banco con mancuernas; no reserves otra máquina. Cuello neutro, sin encoger hombros ni forzar el recorrido. Si reaparece molestia cervical, para ese ejercicio y avisa al coach.",
        "videoUrl": "https://youtu.be/hXCJC2Apcdg",
        "imageUrl": "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg",
        "order": 4
      },
      {
        "name": "Extensión de Cuádriceps en Máquina",
        "sets": 3,
        "reps": "10-12",
        "rest": "75s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible.",
        "videoUrl": "https://www.youtube.com/watch?v=k1Nn0cJOMng",
        "imageUrl": "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg",
        "order": 5
      },
      {
        "name": "Extensión de Tríceps en Polea con Cuerda",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible.",
        "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
        "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg",
        "order": 6
      }
    ]
  },
  "dia2": {
    "name": "Posterior — volumen 2",
    "exercises": [
      {
        "name": "Rotación Externa de Hombro Unilat con Polea",
        "sets": 2,
        "reps": "8",
        "rest": "30s",
        "notes": "Después realiza dos series de aproximación del primer básico, sin fatiga.",
        "videoUrl": "https://youtube.com/shorts/0dw436rzrNU",
        "imageUrl": "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg",
        "isWarmup": true,
        "order": 1
      },
      {
        "name": "Dominadas / Pull Ups asistidas con Goma",
        "sets": 5,
        "reps": "8-10",
        "rest": "120s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible. Cuello neutro, sin encoger hombros ni forzar el recorrido. Si reaparece molestia cervical, para ese ejercicio y avisa al coach. Ajusta la ayuda de la goma para completar el rango sin forzar el cuello.",
        "videoUrl": "https://www.youtube.com/watch?v=pll4AdUg17g",
        "imageUrl": "https://i.ytimg.com/vi/pll4AdUg17g/mqdefault.jpg",
        "order": 2
      },
      {
        "name": "Peso Muerto Rumano con Barra",
        "sets": 3,
        "reps": "10",
        "rest": "90s",
        "notes": "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta). Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible. Cuello neutro, sin encoger hombros ni forzar el recorrido. Si reaparece molestia cervical, para ese ejercicio y avisa al coach.",
        "videoUrl": "https://youtu.be/R7FKam5GyNw",
        "imageUrl": "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg",
        "order": 3
      },
      {
        "name": "Remo Seal con Mancuernas",
        "isSuperset": true,
        "items": [
          {
            "name": "Remo Seal con Mancuernas",
            "sets": 3,
            "reps": "8-10",
            "rest": "",
            "notes": "Trata de despegar el pecho al final del movimiento",
            "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
            "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg",
            "subOrder": 1,
            "isSupersetStart": true
          },
          {
            "name": "Remo Unilat con Mancuerna/KTB (Explicado)",
            "sets": 3,
            "reps": "10 por lado",
            "rest": "",
            "notes": "",
            "videoUrl": "https://youtu.be/uH9Hg4nWOG8",
            "imageUrl": "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg",
            "subOrder": 2,
            "isSupersetStart": false
          },
          {
            "name": "Pájaros con Mancuernas",
            "sets": 3,
            "reps": "12-15",
            "rest": "90s",
            "notes": "",
            "videoUrl": "https://youtu.be/EMrOS6P90lM",
            "imageUrl": "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg",
            "subOrder": 3,
            "isSupersetStart": false
          }
        ],
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible. Completa las vueltas en el mismo banco con mancuernas; no reserves otra máquina. Cuello neutro, sin encoger hombros ni forzar el recorrido. Si reaparece molestia cervical, para ese ejercicio y avisa al coach.",
        "videoUrl": "https://www.youtube.com/shorts/6tLfn99dO8o",
        "imageUrl": "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg",
        "order": 4
      },
      {
        "name": "Curl Femoral Sentado en Máquina",
        "sets": 3,
        "reps": "10-12",
        "rest": "75s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible.",
        "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
        "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg",
        "order": 5
      },
      {
        "name": "Curl de Bíceps Apoyado en Banco con Mancuernas",
        "sets": 3,
        "reps": "10-12",
        "rest": "60s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible.",
        "videoUrl": "https://youtube.com/shorts/hQ3ojFx5soY",
        "imageUrl": "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg",
        "order": 6
      }
    ]
  },
  "dia3": {
    "name": "Pierna — volumen 2",
    "exercises": [
      {
        "name": "Movilidad - De Cadera",
        "sets": 2,
        "reps": "8",
        "rest": "30s",
        "notes": "Controlar que los pies no se desplacen del sitio. Después realiza dos series de aproximación del primer básico, sin fatiga.",
        "videoUrl": "https://youtu.be/7TmNRUP7N_0",
        "imageUrl": "https://i.ytimg.com/vi/7TmNRUP7N_0/mqdefault.jpg",
        "isWarmup": true,
        "order": 1
      },
      {
        "name": "Hip Thrust con Barra (ExPLICADO)",
        "sets": 5,
        "reps": "8-10",
        "rest": "120s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible. Cuello neutro, sin encoger hombros ni forzar el recorrido. Si reaparece molestia cervical, para ese ejercicio y avisa al coach.",
        "videoUrl": "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
        "imageUrl": "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg",
        "order": 2
      },
      {
        "name": "Prensa Inclinada en Máquina de Discos",
        "sets": 5,
        "reps": "8-10",
        "rest": "120s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible.",
        "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
        "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg",
        "order": 3
      },
      {
        "name": "Aducción de Piernas en Máquina",
        "sets": 3,
        "reps": "12-15",
        "rest": "75s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible.",
        "videoUrl": "https://www.youtube.com/shorts/7TPklhKZRrc",
        "imageUrl": "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg",
        "order": 4
      },
      {
        "name": "Abducción de Glúteo Unilat en el Suelo",
        "sets": 3,
        "reps": "15 por lado",
        "rest": "60s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible.",
        "videoUrl": "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
        "imageUrl": "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg",
        "order": 5
      },
      {
        "name": "Zancada Unilat con Mancuerna/Kettlebell",
        "sets": 3,
        "reps": "10 por pierna",
        "rest": "75s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible.",
        "videoUrl": "https://youtu.be/xyl28TxLlsM",
        "imageUrl": "https://i.ytimg.com/vi/xyl28TxLlsM/mqdefault.jpg",
        "order": 6
      },
      {
        "name": "Sentadilla Trasera en Multipower",
        "sets": 3,
        "reps": "10",
        "rest": "75s",
        "notes": "Deja 2 repeticiones en recámara. Completa el rango en todas las series con técnica estable antes de subir el menor incremento de carga disponible.",
        "videoUrl": "https://youtu.be/la-dqygoIuk",
        "imageUrl": "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg",
        "order": 7
      }
    ]
  }
};
const exerciseAlternatives = {};
