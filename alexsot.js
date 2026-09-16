// Titulo: P1_3D_fb_01
// Adaptación individual para Alex Sotilla: 3 días de gimnasio fullbody con fuerza e hipertrofia.
// Distribuye las sesiones con al menos 48 h entre ellas. Combínalas con hasta 3 días de funcional, ajustando la intensidad de este si hay fatiga acumulada.
// Empieza con 2-3 repeticiones en reserva. Si el rendimiento cae o las agujetas interfieren con el siguiente día, reduce 1 serie de pierna por sesión durante esa semana.
export const workoutData = {
    "dia1": {
        "name": "Fullbody A · sentadilla y banca",
        "exercises": [
            {
                "order": 1,
                "name": "Movilidad - Rodilla y Tobillo",
                "sets": 2,
                "reps": "8",
                "rest": "30s",
                "notes": "Movilidad controlada; después haz 2 series de aproximación con carga progresiva del primer básico.",
                "videoUrl": "https://youtu.be/wdOGeCaNKS8",
                "imageUrl": "https://i.ytimg.com/vi/wdOGeCaNKS8/mqdefault.jpg",
                "isWarmup": true
            },
            {
                "order": 2,
                "name": "Sentadilla Trasera en Multipower",
                "sets": 3,
                "reps": "6-8",
                "rest": "150s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones.",
                "videoUrl": "https://youtu.be/la-dqygoIuk",
                "imageUrl": "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Press Banca en Multipower",
                "sets": 3,
                "reps": "6-8",
                "rest": "150s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones. Prioriza técnica y recorrido estable.",
                "videoUrl": "https://youtu.be/w-5ovE5O5iU",
                "imageUrl": "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Remo Inclinado en Landmine",
                "sets": 3,
                "reps": "8-10",
                "rest": "90s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones.",
                "videoUrl": "https://youtu.be/5gakUsid-Lg",
                "imageUrl": "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Peso Muerto Rumano con Mancuernas/KTB",
                "sets": 2,
                "reps": "8-10",
                "rest": "90s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones. Mantén espalda neutra.",
                "videoUrl": "https://www.youtube.com/shorts/SMll4DOYvEs",
                "imageUrl": "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "Elevaciones Laterales con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Elevaciones Laterales con Mancuernas",
                        "sets": 2,
                        "reps": "12-15",
                        "notes": "Controla la bajada; sin balanceo.",
                        "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                        "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Extensión de Tríceps en Polea con Cuerda",
                        "sets": 2,
                        "reps": "10-15",
                        "rest": "60s",
                        "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones.",
                        "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg",
                        "subOrder": 2
                    }
                ],
                "notes": "Superserie final: alterna ambos ejercicios y descansa al terminar la pareja.",
                "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        "name": "Fullbody B · bisagra y press vertical",
        "exercises": [
            {
                "order": 1,
                "name": "Movilidad - De Cadera",
                "sets": 2,
                "reps": "8",
                "rest": "30s",
                "notes": "Movilidad controlada; después haz 2 series de aproximación con carga progresiva del primer básico.",
                "videoUrl": "https://youtu.be/7TmNRUP7N_0",
                "imageUrl": "https://i.ytimg.com/vi/7TmNRUP7N_0/mqdefault.jpg",
                "isWarmup": true
            },
            {
                "order": 2,
                "name": "Peso Muerto Rumano con Barra",
                "sets": 3,
                "reps": "6-8",
                "rest": "150s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones. Mantén espalda neutra; reduce carga si el funcional dejó fatiga lumbar.",
                "videoUrl": "https://youtu.be/R7FKam5GyNw",
                "imageUrl": "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Press Militar en Multipower",
                "sets": 3,
                "reps": "6-8",
                "rest": "120s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones.",
                "videoUrl": "https://www.youtube.com/watch?v=iATqshmFPnI",
                "imageUrl": "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Jalón al Pecho en Polea",
                "sets": 3,
                "reps": "8-10",
                "rest": "90s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones.",
                "videoUrl": "https://youtu.be/GYIhmy1P4vY",
                "imageUrl": "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Prensa Inclinada en Máquina de Discos",
                "sets": 2,
                "reps": "10-12",
                "rest": "90s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones.",
                "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
                "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "Curl con Barra Z",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Curl con Barra Z",
                        "sets": 2,
                        "reps": "10-12",
                        "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones.",
                        "videoUrl": "https://youtu.be/4gYLTjNaTmw",
                        "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Plancha - Normal",
                        "sets": 2,
                        "reps": "30-40s",
                        "rest": "60s",
                        "notes": "Tronco firme, sin perder posición.",
                        "videoUrl": "https://youtu.be/DQ4wYExQRJo",
                        "imageUrl": "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg",
                        "subOrder": 2
                    }
                ],
                "notes": "Superserie final: alterna ambos ejercicios y descansa al terminar la pareja.",
                "videoUrl": "https://youtu.be/4gYLTjNaTmw",
                "imageUrl": "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        "name": "Fullbody C · prensa, inclinado y dominadas",
        "exercises": [
            {
                "order": 1,
                "name": "Movilidad - Activación de Escápulas",
                "sets": 2,
                "reps": "8",
                "rest": "30s",
                "notes": "Movilidad controlada; después haz 2 series de aproximación con carga progresiva del primer básico.",
                "videoUrl": "https://youtu.be/6Kj_rg_7tYQ",
                "imageUrl": "https://i.ytimg.com/vi/6Kj_rg_7tYQ/mqdefault.jpg",
                "isWarmup": true
            },
            {
                "order": 2,
                "name": "Prensa Inclinada en Máquina de Discos",
                "sets": 3,
                "reps": "8-10",
                "rest": "150s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones.",
                "videoUrl": "https://www.youtube.com/shorts/je1QdJdvAN0",
                "imageUrl": "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                "order": 3,
                "name": "Press Inclinado con Mancuernas",
                "sets": 3,
                "reps": "8-10",
                "rest": "120s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones.",
                "videoUrl": "https://youtu.be/ZE4M73kXB5A",
                "imageUrl": "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                "order": 4,
                "name": "Dominadas con Peso Corporal",
                "sets": 3,
                "reps": "6-10",
                "rest": "120s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones. Si 10 repeticiones son cómodas, añade lastre pequeño; si llegas fatigado del funcional, usa asistencia.",
                "videoUrl": "https://www.youtube.com/shorts/pb-14sP_R4M",
                "imageUrl": "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                "order": 5,
                "name": "Remo Gironda en Polea",
                "sets": 3,
                "reps": "8-12",
                "rest": "90s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones.",
                "videoUrl": "https://youtube.com/shorts/11xkWdyYWus",
                "imageUrl": "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
            },
            {
                "order": 6,
                "name": "Curl Femoral Sentado en Máquina",
                "sets": 2,
                "reps": "10-12",
                "rest": "75s",
                "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones.",
                "videoUrl": "https://www.youtube.com/shorts/2fXW4I08ov4",
                "imageUrl": "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            },
            {
                "order": 7,
                "name": "Elevaciones Laterales con Mancuernas",
                "isSuperset": true,
                "items": [
                    {
                        "name": "Elevaciones Laterales con Mancuernas",
                        "sets": 2,
                        "reps": "12-15",
                        "notes": "Controla la bajada; sin balanceo.",
                        "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                        "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg",
                        "subOrder": 1,
                        "isSupersetStart": true
                    },
                    {
                        "name": "Extensión de Tríceps en Polea con Cuerda",
                        "sets": 2,
                        "reps": "10-15",
                        "rest": "60s",
                        "notes": "Deja 2-3 repeticiones en reserva; cuando completes el extremo alto en todas las series con buena técnica, sube la carga mínima disponible la próxima sesión. Registra peso y repeticiones.",
                        "videoUrl": "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        "imageUrl": "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg",
                        "subOrder": 2
                    }
                ],
                "notes": "Superserie final: alterna ambos ejercicios y descansa al terminar la pareja.",
                "videoUrl": "https://youtu.be/rhmW_fhB4cs",
                "imageUrl": "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            }
        ]
    }
};
