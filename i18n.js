// Traducciones ES/EN para Ruteando
const translations = {
    es: {
        // Navegación
        "nav.features": "Funciones",
        "nav.train": "🚂 Tren",
        "nav.friends": "📍 Amigos",
        "nav.achievements": "🏆 Logros",
        "nav.support": "🍺 Apoyar",
        "nav.privacy": "Privacidad",
        "nav.notify": "🔔 Avísame",
        "nav.trainFull": "🚂 Alertas del Tren",
        "nav.friendsFull": "📍 Amigos en el Mapa",

        // Hero
        "hero.title1": "Deja de adivinar.",
        "hero.title2": "Empieza a llegar.",
        "hero.subtitle": "La primera app que te dice <strong>cómo llegar en transporte público</strong> en Tepic.",
        "hero.feature1": "🚌 Qué ruta tomar y dónde subirte",
        "hero.feature2": "📍 Dónde bajarte (sin pasarte, y si tienes que transbordar)",
        "hero.feature3": "🚂 Alertas del tren en tiempo real",
        "hero.feature4": "🏆 Desbloquea logros mientras ruteas",
        "hero.feature5": "🎁 Gana premios REALES por usar la app",
        "hero.feature6": "😎 Agrega amigos, comparte tu ubicación con quien tú quieras (todo de forma anónima)",
        "hero.feature7": "💚 <strong>100% GRATIS</strong>, sin anuncios molestos",
        "hero.badge": "🚀 PRÓXIMAMENTE",
        "hero.btnNotify": "🔔 Avísame cuando salga",
        "hero.btnHow": "Ver cómo funciona →",
        "hero.visitors": "personas ya checaron Ruteando",

        // Phone mockup
        "phone.location": "Mi ubicación",
        "phone.destination": "Plaza Fórum",
        "phone.routeBadge": "AGR-UNI",
        "phone.routeName": "Agrónomos - Universidad",
        "phone.time": "~22 min",
        "phone.step1Title": "Camina aprox 3 min",
        "phone.step1Desc": "Hacia Av. Insurgentes",
        "phone.step2Title": "Súbete aquí",
        "phone.step2Desc": "Pide la parada aquí",
        "phone.step3Title": "Viaja aprox 15 min",
        "phone.step3Desc": "Aproximadamente",
        "phone.step4Title": "Bájate aquí",
        "phone.step4Desc": "Recuerda pedir la parada 😏",
        "phone.step5Title": "¡Llegaste!",
        "phone.step5Desc": "Plaza Fórum",

        // Features section
        "features.tag": "FUNCIONES",
        "features.title": "Lo único que necesitas para moverte en el transporte público.",
        "features.subtitle": "Sin complicaciones, sin adivinar, sin preguntar.",
        "features.search.title": "Busca por nombre",
        "features.search.desc": "Escribe \"Walmart\", \"Catedral\" o cualquier lugar. La app lo encuentra.",
        "features.route.title": "Qué ruta tomar",
        "features.route.desc": "Te dice exactamente qué ruta te lleva a tu destino.",
        "features.getOn.title": "Dónde subirte",
        "features.getOn.desc": "Te marca el punto exacto donde pasa el camión cerca de ti.",
        "features.getOff.title": "Dónde bajarte",
        "features.getOff.desc": "Sabes exactamente cuándo pedir la parada. Sin pasarte.",
        "features.transfer.title": "Transbordos",
        "features.transfer.desc": "Si necesitas más de un camión, te dice cómo hacer el cambio.",
        "features.time.title": "Tiempo estimado",
        "features.time.desc": "Calcula cuánto vas a tardar para que planees mejor.",

        // How it works
        "how.tag": "ASÍ DE FÁCIL",
        "how.title": "¿Cómo funciona?",
        "how.subtitle": "3 pasos y listo. En serio.",
        "how.step1.title": "Pon tu destino",
        "how.step1.desc": "Escribe a dónde quieres ir. Puede ser un lugar, una dirección o un punto en el mapa.",
        "how.step2.title": "Ve tus opciones",
        "how.step2.desc": "La app te muestra las rutas que te llevan, con tiempo estimado y transbordos si los hay.",
        "how.step3.title": "Sigue las instrucciones",
        "how.step3.desc": "Te dice dónde subirte, cuándo bajarte y cómo llegar caminando. Fácil.",

        // Comparison
        "compare.tag": "LA NETA",
        "compare.title": "Otras apps vs Ruteando®",
        "compare.before": "❌ Otras apps",
        "compare.before1": "🗺️ \"Aquí están las rutas, bro, hazte bolas\"",
        "compare.before2": "🤷 Te muestran rutas (rayitas de colores) pero no cuál tomar",
        "compare.before3": "😵 Cero instrucciones de dónde bajar",
        "compare.before4": "🔄 Transbordos? Ni de pedo jaja",
        "compare.before5": "🚂 ¿Alertas del tren?, pfff",
        "compare.before6": "🚌 ¿Rutas en vivo?... sííí chuy",
        "compare.before7": "📍 Mapas bonitos pero no usables",
        "compare.before8": "🌐 \"Apps\" que solo abren una página web... genios",
        "compare.before9": "💀 Abandonadas o \"en mantenimiento\"",
        "compare.before10": "📱 Tumbadas de PlayStore y AppStore",
        "compare.after": "✅ Ruteando®",
        "compare.after1": "🎯 \"Toma el Progreso 1, bájate en 15 min\"",
        "compare.after2": "📍 Te dice dónde subirte",
        "compare.after3": "🔔 Te avisa cuándo pedir la parada",
        "compare.after4": "🗺️ Transbordos calculados",
        "compare.after5": "⚡ Instrucciones paso a paso con transbordos y todo el show",
        "compare.after6": "🚂 Alertas del tren, entre todos nos salvamos de quedarse atorados en las vías",
        "compare.after7": "🚌 Rutas en vivo, gracias a tí 🙏",
        "compare.after8": "⭐ Desbloquea logros por usar la app",
        "compare.after9": "🔄 Actualizaciones y soporte activo",
        "compare.after10": "📱 App nativa, real, bien hecha, para Android e iOS (tiendas oficiales)",
        "compare.note": "Ruteando® es diferente.",

        // Availability
        "avail.tag": "DISPONIBILIDAD",
        "avail.title": "Android e iOS. Para todos.",
        "avail.subtitle": "Porque no importa qué teléfono tengas, aquí todos rutearemos 🤘.",
        "avail.ready": "App lista",
        "avail.coming": "Próximamente",
        "avail.dev.title": "Desarrollo",
        "avail.dev.desc": "App terminada y funcional",
        "avail.review.title": "En validación de Google y Apple",
        "avail.review.desc": "Proceso de revisión de las tiendas (puede tardar unos días)",
        "avail.launch.title": "¡A rutear!",
        "avail.launch.desc": "Disponible para descargar",
        "avail.note": "Una vez que pase la validación y puedas descargarla, te avisaré de volada.",

        // Live Tracking
        "live.badge": "🔮 LO QUE SE ESTÁ HORNEANDO",
        "live.title": "Rutas en vivo.<br><span class=\"orange\">Gracias a ti.</span>",
        "live.desc": "¿Y si pudieras ver dónde va el camión/combi en tiempo real? Sin depender de que los transportes tengan GPS.<strong><br>Nosotros podemos ser el GPS 🤝</strong>",
        "live.feat1.title": "\"Empezar a rutear 🤘\"",
        "live.feat1.desc": "Cuando te subes al camión/combi, presionas un botón y compartes tu trayecto de forma anónima.",
        "live.feat2.title": "Todos ayudan",
        "live.feat2.desc": "Entre más personas usen la app, más preciso es el tracking. La comunidad hace la chamba 🙏.",
        "live.feat3.title": "Gana reconocimiento",
        "live.feat3.desc": "Acumula kilómetros, desbloquea logros y presume cuánto has aportado a la comunidad 😎.",
        "live.mock.route": "Ruta México",
        "live.mock.update": "Última actualización hace 2 min",
        "live.mock.live": "EN VIVO",
        "live.mock.sharing": "3 compartiendo",
        "live.stat.km": "km compartidos hoy",
        "live.stat.users": "usuarios activos",
        "live.stat.routes": "rutas en vivo",

        // Active Community
        "active.tag": "EL PODER DE TODOS",
        "active.title": "Tepic, conectado.",
        "active.subtitle": "Cada punto es alguien como tú, moviéndose por la ciudad y ayudando a otros a llegar, sin querer queriendo.",
        "active.stat1": "personas ruteando ahora",
        "active.stat2": "rutas activas",
        "active.stat3": "km compartidos hoy",
        "active.quote": "¿GPS en los camiones?<br><strong>Nosotros podemos ser el GPS</strong>",

        // Train alerts
        "train.tag": "ALERTAS DEL TREN",
        "train.title": "El tren ya no te agarra desprevenido 🚂",
        "train.subtitle": "Notificaciones en tiempo real cuando el tren está cerca de tu zona. Así planeas mejor tu salida.",
        "train.feature1.title": "Notificación push",
        "train.feature1.desc": "Te avisamos cuando el tren está por pasar cerca de ti.",
        "train.feature2.title": "Mapa en tiempo real",
        "train.feature2.desc": "Ve exactamente dónde está el tren ahora mismo.",
        "train.feature3.title": "Historial de pasos",
        "train.feature3.desc": "Aprende los horarios más frecuentes del tren en tu zona.",
        "train.mockup.title": "Alerta de Tren",
        "train.mockup.subtitle": "El tren está pasando cerca de ti",
        "train.mockup.location": "📍 Cerca de Av. Insurgentes",
        "train.mockup.time": "⏱️ Hace 2 min",
        "train.mockup.eta": "🚂 ~5 min para cruzar",

        // Friends on map
        "friends.tag": "AMIGOS EN EL MAPA",
        "friends.title": "¿Dónde anda la banda? 📍",
        "friends.subtitle": "Comparte tu ubicación con tus amigos (solo si tú quieres). Ideal para encontrarse o saber si ya vienen.",
        "friends.feature1.title": "Tú decides quién ve tu ubicación",
        "friends.feature1.desc": "Control total de tu privacidad. Actívalo o desactívalo cuando quieras.",
        "friends.feature2.title": "Ve dónde están tus amigos",
        "friends.feature2.desc": "Perfecto para coordinarse y encontrarse más fácil.",
        "friends.feature3.title": "Sin rastros",
        "friends.feature3.desc": "No guardamos historial de ubicaciones. Cuando lo apagas, se borra.",

        // Achievements
        "achievements.tag": "LOGROS Y RECOMPENSAS",
        "achievements.title": "Rutea, desbloquea, presume 🏆",
        "achievements.subtitle": "Entre más uses la app, más logros desbloqueas. Y sí, habrá premios reales.",
        "achievements.cat1": "🚌 Rutero",
        "achievements.cat2": "🤝 Social",
        "achievements.cat3": "🚂 Tren",
        "achievements.cat4": "⭐ Especial",

        // Community
        "community.title": "Esto no es solo será una app.<br>Es un esfuerzo de todos.",
        "community.text1": "Ruteando® es <strong>100% gratis</strong>. No hay empresa detrás, no hay inversionistas, no hay publicidad molesta. Solo un wey de Tepic <small>(sí, nomás yo)</small>, que quiere que moverse en la ciudad sea menos complicado.",
        "community.text2": "Eso sí, una app sin usuarios no sirve de nada. <strong>El éxito de Ruteando® depende de que la gente la adopte.</strong> Nada me cuesta venderla al mejor postor. Pero quiero que sea de todos, para todos.",
        "community.highlight": "Si te late la idea, compártela. Paro 💚.",
        "community.text3": "Entre más personas la usemos, mejor funciona para todos. Especialmente el tracking en vivo que depende 100% de los ruteros, ruteras y ruteres 😎.",

        // Share
        "share.title": "📢 Comparte Ruteando®",
        "share.text": "Tira paro 🙏. Ayúdame a que más personas conozcan la app que está por llegar. Cada compartida cuenta.",
        "share.facebook": "📘 Compartir en Facebook",
        "share.twitter": "🐦 Compartir en X",
        "share.whatsapp": "💬 Compartir en WhatsApp",
        "share.copy": "🔗 Copiar enlace",

        // Notebook / El trabajo que nadie hizo
        "notebook.tag": "PRIMERO A MANO",
        "notebook.title": "El trabajo que <span>nadie hizo</span>",
        "notebook.subtitle": "Alguien tenía que sentarse, matemáticamente hablando, a calcular distancias, determinar intersecciones, armar cada conexión y sobre todo armar una app funcional. Ese alguien un día se perdió en las rutas 🤣.",
        "notebook.heading": "¿Cómo calculo una ruta? 😖😵‍💫",
        "notebook.step1": "¿Dónde estoy?",
        "notebook.step2": "<span class=\"notebook-circle\">2</span> ¿A dónde voy? → Ciudad Universitaria",
        "notebook.step3": "<span class=\"notebook-circle\">3</span> Buscar rutas que pasen cerca...",
        "notebook.route7": "→ Ruta 7: ❌ no pasa por destino",
        "notebook.route12a": "→ Ruta 12: ✓ pasa a 127m del origen",
        "notebook.route12b": "→ Ruta 12: ✓ pasa a 89m del destino",
        "notebook.step4": "<span class=\"notebook-circle\">4</span> Calcular distancia total:",
        "notebook.step5": "Tiempo: 3.2km ÷ 18km/h =",
        "notebook.result": "✅ Resultado: Ruta 12, sin transbordos! 🤯😎",

        // CTA / Notify
        "cta.badge": "🚀 LANZAMIENTO YA MERITO",
        "cta.title": "Sé de los primeros en tenerla",
        "cta.text": "Deja tu correo y te enviaré una notificación cuando esté disponible. Cero spam, neta, es sólo para que sepas que ya puedes rutear 😉.",
        "cta.placeholder": "tu@correo.com",
        "cta.button": "🔔 Avísame",
        "cta.waitingPre": "Ya hay",
        "cta.waiting": "personas esperando",
        "cta.platform.android": "<span class=\"platform-emoji\">🤖</span> Android",
        "cta.platform.ios": "<span class=\"platform-emoji\">🍎</span> iOS",

        // Donations
        "donate.title": "¿Quieres apoyar Ruteando®?",
        "donate.text": "Ruteando® es y será <strong>100% gratis</strong>. Si te late lo que estoy haciendo y quieres picharte un chesco o una cheve, aquí puedes. Todo se usará para los gastos (servidores, dominio, cuota de Play Store, cuota de AppStore) para mantener la app funcionando sin costo para la banda.",
        "donate.note": "Digo, no es obligatorio, pero se agradece un chingo 🙏",
        "donate.sponsor": "Si eres una empresa o alguien con varo y quieres donar para que aparezca tu nombre en la app como patrocinador oficial de la champions, tírame un mensaje y me comunico contigo, sin compromiso.",
        "donate.contact": "📨 Aquí mero",

        // Contact modal
        "modal.title": "📨 Tírame un mensaje",
        "modal.subtitle": "Cuéntame tu propuesta y me pongo en contacto contigo.",
        "modal.name": "Tu nombre / El de tu empresa",
        "modal.namePlaceholder": "Ej: Juan Pérez / Tacos El Güero",
        "modal.phone": "Teléfono",
        "modal.phonePlaceholder": "Ej: 311 123 4567",
        "modal.message": "Mensaje",
        "modal.messagePlaceholder": "Cuéntame tu idea o propuesta...",
        "modal.send": "🚀 Enviar mensaje",

        // Footer
        "footer.madeWith": "Hecho con <span class=\"footer-heart\">❤️</span> por un Kora <small>(Nayarita)</small> en Tepic, Nayarit",
        "footer.rights": "© 2025 Ruteando®. Todos los derechos reservados.",

        // Messages (for JS)
        "msg.saving": "⏳ Guardando...",
        "msg.sending": "⏳ Enviando...",
        "msg.registered": "✅ ¡Registrado!",
        "msg.copied": "✅ ¡Copiado!",
        "msg.alreadyRegistered": "😎 ¡Ya me habías dejado tu correo! Tranquilo, te aviso en cuanto esté lista.",
        "msg.success": "🎉 ¡Listo! Te aviso cuando esté disponible. ¡Gracias por el apoyo!",
        "msg.error": "❌ Hubo un error, intenta de nuevo.",
        "msg.connectionError": "❌ Error de conexión, intenta de nuevo.",
        "msg.contactSuccess": "🎉 ¡Gracias! Me pondré en contacto contigo (si es que no te pasaste de lanza 😏)",
        "msg.fillFields": "Por favor llena todos los campos"
    },

    en: {
        // Navigation
        "nav.features": "Features",
        "nav.train": "🚂 Train",
        "nav.friends": "📍 Friends",
        "nav.achievements": "🏆 Achievements",
        "nav.support": "🍺 Support",
        "nav.privacy": "Privacy",
        "nav.notify": "🔔 Notify Me",
        "nav.trainFull": "🚂 Train Alerts",
        "nav.friendsFull": "📍 Friends on Map",

        // Hero
        "hero.title1": "Stop guessing.",
        "hero.title2": "Start arriving.",
        "hero.subtitle": "The first app that tells you <strong>how to get around on public transit</strong> in Tepic.",
        "hero.feature1": "🚌 Which route to take and where to get on",
        "hero.feature2": "📍 Where to get off (without missing your stop, including transfers)",
        "hero.feature3": "🚂 Real-time train alerts",
        "hero.feature4": "🏆 Unlock achievements while you ride",
        "hero.feature5": "🎁 Win REAL prizes for using the app",
        "hero.feature6": "😎 Add friends, share your location with whoever you want (all anonymously)",
        "hero.feature7": "💚 <strong>100% FREE</strong>, no annoying ads",
        "hero.badge": "🚀 COMING SOON",
        "hero.btnNotify": "🔔 Notify me when it launches",
        "hero.btnHow": "See how it works →",
        "hero.visitors": "people have checked out Ruteando",

        // Phone mockup
        "phone.location": "My location",
        "phone.destination": "Plaza Fórum",
        "phone.routeBadge": "AGR-UNI",
        "phone.routeName": "Agrónomos - Universidad",
        "phone.time": "~22 min",
        "phone.step1Title": "Walk about 3 min",
        "phone.step1Desc": "Towards Av. Insurgentes",
        "phone.step2Title": "Get on here",
        "phone.step2Desc": "Request the stop here",
        "phone.step3Title": "Ride about 15 min",
        "phone.step3Desc": "Approximately",
        "phone.step4Title": "Get off here",
        "phone.step4Desc": "Remember to request the stop 😏",
        "phone.step5Title": "You arrived!",
        "phone.step5Desc": "Plaza Fórum",

        // Features section
        "features.tag": "FEATURES",
        "features.title": "Everything you need to get around on public transit.",
        "features.subtitle": "No hassle, no guessing, no asking around.",
        "features.search.title": "Search by name",
        "features.search.desc": "Type \"Walmart\", \"Cathedral\" or any place. The app finds it.",
        "features.route.title": "Which route to take",
        "features.route.desc": "Tells you exactly which route takes you to your destination.",
        "features.getOn.title": "Where to get on",
        "features.getOn.desc": "Shows you the exact spot where the bus passes near you.",
        "features.getOff.title": "Where to get off",
        "features.getOff.desc": "Know exactly when to request the stop. No missing it.",
        "features.transfer.title": "Transfers",
        "features.transfer.desc": "If you need more than one bus, it tells you how to make the connection.",
        "features.time.title": "Estimated time",
        "features.time.desc": "Calculates how long it will take so you can plan better.",

        // How it works
        "how.tag": "SUPER EASY",
        "how.title": "How does it work?",
        "how.subtitle": "3 steps and done. Seriously.",
        "how.step1.title": "Enter your destination",
        "how.step1.desc": "Type where you want to go. It can be a place, an address, or a point on the map.",
        "how.step2.title": "See your options",
        "how.step2.desc": "The app shows you the routes that take you there, with estimated time and transfers if needed.",
        "how.step3.title": "Follow the instructions",
        "how.step3.desc": "It tells you where to get on, when to get off, and how to walk there. Easy.",

        // Comparison
        "compare.tag": "THE REAL DEAL",
        "compare.title": "Other apps vs Ruteando®",
        "compare.before": "❌ Other apps",
        "compare.before1": "🗺️ \"Here are the routes, figure it out yourself\"",
        "compare.before2": "🤷 They show routes (colorful lines) but not which one to take",
        "compare.before3": "😵 Zero instructions on where to get off",
        "compare.before4": "🔄 Transfers? Nope",
        "compare.before5": "🚂 Train alerts?, lol",
        "compare.before6": "🚌 Live routes?... yeah right",
        "compare.before7": "📍 Pretty maps but unusable",
        "compare.before8": "🌐 \"Apps\" that just open a webpage... genius",
        "compare.before9": "💀 Abandoned or \"under maintenance\"",
        "compare.before10": "📱 Removed from PlayStore and AppStore",
        "compare.after": "✅ Ruteando®",
        "compare.after1": "🎯 \"Take Progress 1, get off in 15 min\"",
        "compare.after2": "📍 Tells you where to get on",
        "compare.after3": "🔔 Alerts you when to request the stop",
        "compare.after4": "🗺️ Transfers calculated",
        "compare.after5": "⚡ Step-by-step instructions with transfers and everything",
        "compare.after6": "🚂 Train alerts, we all help each other avoid getting stuck at the tracks",
        "compare.after7": "🚌 Live routes, thanks to you 🙏",
        "compare.after8": "⭐ Unlock achievements for using the app",
        "compare.after9": "🔄 Active updates and support",
        "compare.after10": "📱 Native app, real, well-made, for Android and iOS (official stores)",
        "compare.note": "Ruteando® is different.",

        // Availability
        "avail.tag": "AVAILABILITY",
        "avail.title": "Android & iOS. For everyone.",
        "avail.subtitle": "No matter what phone you have, we all ride together 🤘.",
        "avail.ready": "App ready",
        "avail.coming": "Coming soon",
        "avail.dev.title": "Development",
        "avail.dev.desc": "App finished and functional",
        "avail.review.title": "Under Google and Apple review",
        "avail.review.desc": "Store review process (may take a few days)",
        "avail.launch.title": "Let's ride!",
        "avail.launch.desc": "Available for download",
        "avail.note": "Once it passes validation and you can download it, I'll let you know right away.",

        // Live Tracking
        "live.badge": "🔮 WHAT'S COOKING",
        "live.title": "Live routes.<br><span class=\"orange\">Thanks to you.</span>",
        "live.desc": "What if you could see where the bus is in real time? Without depending on GPS in the vehicles.<strong><br>We can be the GPS 🤝</strong>",
        "live.feat1.title": "\"Start riding 🤘\"",
        "live.feat1.desc": "When you get on the bus, press a button and share your route anonymously.",
        "live.feat2.title": "Everyone helps",
        "live.feat2.desc": "The more people use the app, the more accurate the tracking. The community does the work 🙏.",
        "live.feat3.title": "Earn recognition",
        "live.feat3.desc": "Accumulate kilometers, unlock achievements, and show off how much you've contributed 😎.",
        "live.mock.route": "Mexico Route",
        "live.mock.update": "Last update 2 min ago",
        "live.mock.live": "LIVE",
        "live.mock.sharing": "3 sharing",
        "live.stat.km": "km shared today",
        "live.stat.users": "active users",
        "live.stat.routes": "live routes",

        // Active Community
        "active.tag": "THE POWER OF ALL",
        "active.title": "Tepic, connected.",
        "active.subtitle": "Each dot is someone like you, moving around the city and helping others arrive, without even trying.",
        "active.stat1": "people riding now",
        "active.stat2": "active routes",
        "active.stat3": "km shared today",
        "active.quote": "GPS on buses?<br><strong>We can be the GPS</strong>",

        // Train alerts
        "train.tag": "TRAIN ALERTS",
        "train.title": "The train won't catch you off guard anymore 🚂",
        "train.subtitle": "Real-time notifications when the train is near your area. Plan your departure better.",
        "train.feature1.title": "Push notification",
        "train.feature1.desc": "We notify you when the train is about to pass near you.",
        "train.feature2.title": "Real-time map",
        "train.feature2.desc": "See exactly where the train is right now.",
        "train.feature3.title": "History of crossings",
        "train.feature3.desc": "Learn the most frequent train schedules in your area.",
        "train.mockup.title": "Train Alert",
        "train.mockup.subtitle": "The train is passing near you",
        "train.mockup.location": "📍 Near Av. Insurgentes",
        "train.mockup.time": "⏱️ 2 min ago",
        "train.mockup.eta": "🚂 ~5 min to cross",

        // Friends on map
        "friends.tag": "FRIENDS ON MAP",
        "friends.title": "Where's the crew? 📍",
        "friends.subtitle": "Share your location with your friends (only if you want). Perfect for meeting up or knowing if they're on their way.",
        "friends.feature1.title": "You decide who sees your location",
        "friends.feature1.desc": "Total control of your privacy. Turn it on or off whenever you want.",
        "friends.feature2.title": "See where your friends are",
        "friends.feature2.desc": "Perfect for coordinating and meeting up more easily.",
        "friends.feature3.title": "No traces",
        "friends.feature3.desc": "We don't store location history. When you turn it off, it's deleted.",

        // Achievements
        "achievements.tag": "ACHIEVEMENTS & REWARDS",
        "achievements.title": "Ride, unlock, show off 🏆",
        "achievements.subtitle": "The more you use the app, the more achievements you unlock. And yes, there will be real prizes.",
        "achievements.cat1": "🚌 Rider",
        "achievements.cat2": "🤝 Social",
        "achievements.cat3": "🚂 Train",
        "achievements.cat4": "⭐ Special",

        // Community
        "community.title": "This isn't just an app.<br>It's a community effort.",
        "community.text1": "Ruteando® is <strong>100% free</strong>. There's no company behind it, no investors, no annoying ads. Just a guy from Tepic <small>(yeah, just me)</small>, who wants to make getting around the city less complicated.",
        "community.text2": "That said, an app without users is useless. <strong>Ruteando's success depends on people adopting it.</strong> I could easily sell it to the highest bidder. But I want it to be for everyone, by everyone.",
        "community.highlight": "If you like the idea, share it. Thanks 💚.",
        "community.text3": "The more people use it, the better it works for everyone. Especially the live tracking which depends 100% on the riders 😎.",

        // Share
        "share.title": "📢 Share Ruteando®",
        "share.text": "Help me out 🙏. Help more people discover the app that's about to launch. Every share counts.",
        "share.facebook": "📘 Share on Facebook",
        "share.twitter": "🐦 Share on X",
        "share.whatsapp": "💬 Share on WhatsApp",
        "share.copy": "🔗 Copy link",

        // Notebook / The work nobody did
        "notebook.tag": "HANDCRAFTED FIRST",
        "notebook.title": "The work <span>nobody did</span>",
        "notebook.subtitle": "Someone had to sit down, mathematically speaking, to calculate distances, determine intersections, build every connection, and most importantly build a functional app. That someone once got lost on the routes 🤣.",
        "notebook.heading": "How do I calculate a route? 😖😵‍💫",
        "notebook.step1": "Where am I?",
        "notebook.step2": "<span class=\"notebook-circle\">2</span> Where am I going? → Ciudad Universitaria",
        "notebook.step3": "<span class=\"notebook-circle\">3</span> Find routes that pass nearby...",
        "notebook.route7": "→ Route 7: ❌ doesn't pass destination",
        "notebook.route12a": "→ Route 12: ✓ passes 127m from origin",
        "notebook.route12b": "→ Route 12: ✓ passes 89m from destination",
        "notebook.step4": "<span class=\"notebook-circle\">4</span> Calculate total distance:",
        "notebook.step5": "Time: 3.2km ÷ 18km/h =",
        "notebook.result": "✅ Result: Route 12, no transfers! 🤯😎",

        // CTA / Notify
        "cta.badge": "🚀 LAUNCHING SOON",
        "cta.title": "Be one of the first to have it",
        "cta.text": "Leave your email and I'll send you a notification when it's available. Zero spam, I promise, it's just to let you know you can start riding 😉.",
        "cta.placeholder": "your@email.com",
        "cta.button": "🔔 Notify Me",
        "cta.waitingPre": "Already",
        "cta.waiting": "people waiting",
        "cta.platform.android": "<span class=\"platform-emoji\">🤖</span> Android",
        "cta.platform.ios": "<span class=\"platform-emoji\">🍎</span> iOS",

        // Donations
        "donate.title": "Want to support Ruteando®?",
        "donate.text": "Ruteando® is and will always be <strong>100% free</strong>. If you like what I'm doing and want to buy me a coffee or a beer, you can do it here. Everything goes to expenses (servers, domain, Play Store fee, App Store fee) to keep the app running free for everyone.",
        "donate.note": "I mean, it's not mandatory, but it's really appreciated 🙏",
        "donate.sponsor": "If you're a company or someone who wants to donate to have your name appear in the app as an official sponsor, send me a message and I'll get back to you, no strings attached.",
        "donate.contact": "📨 Right here",

        // Contact modal
        "modal.title": "📨 Send me a message",
        "modal.subtitle": "Tell me your proposal and I'll get in touch with you.",
        "modal.name": "Your name / Company name",
        "modal.namePlaceholder": "E.g.: John Doe / Tacos Place",
        "modal.phone": "Phone",
        "modal.phonePlaceholder": "E.g.: 311 123 4567",
        "modal.message": "Message",
        "modal.messagePlaceholder": "Tell me your idea or proposal...",
        "modal.send": "🚀 Send message",

        // Footer
        "footer.madeWith": "Made with <span class=\"footer-heart\">❤️</span> by a Kora <small>(from Nayarit)</small> in Tepic, Nayarit",
        "footer.rights": "© 2025 Ruteando®. All rights reserved.",

        // Messages (for JS)
        "msg.saving": "⏳ Saving...",
        "msg.sending": "⏳ Sending...",
        "msg.registered": "✅ Registered!",
        "msg.copied": "✅ Copied!",
        "msg.alreadyRegistered": "😎 You already gave me your email! Don't worry, I'll let you know when it's ready.",
        "msg.success": "🎉 Done! I'll notify you when it's available. Thanks for the support!",
        "msg.error": "❌ There was an error, please try again.",
        "msg.connectionError": "❌ Connection error, please try again.",
        "msg.contactSuccess": "🎉 Thanks! I'll get in touch with you (if you didn't go overboard 😏)",
        "msg.fillFields": "Please fill in all fields"
    }
};

// Idioma actual
let currentLang = localStorage.getItem('ruteando_lang') || 'es';

// Función para obtener traducción
function t(key) {
    return translations[currentLang][key] || translations['es'][key] || key;
}

// Función para cambiar idioma
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ruteando_lang', lang);

    // Actualizar botones activos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const translation = t(key);

        // Verificar si tiene HTML (como <strong>)
        if (translation.includes('<')) {
            el.innerHTML = translation;
        } else {
            el.textContent = translation;
        }
    });

    // Actualizar placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    // Actualizar el atributo lang del HTML
    document.documentElement.lang = lang;
}

// Inicializar cuando cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Configurar event listeners para botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Aplicar idioma guardado
    setLanguage(currentLang);
});
