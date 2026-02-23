export const RANKS = [
  {
    id: 'aprendiz',
    name: 'Aprendiz',
    level: 1,
    xpRequired: 0,
    xpNext: 300,
    foodMarkup: 29,
    accessoryMarkup: 43,
    avgMarkup: 33,
    earningsPerSale: 8073,
    color: '#94a3b8',
    twClass: 'rank-aprendiz',
    description: 'Punto de partida. Recuperás inversión + ganancia base.',
  },
  {
    id: 'iniciado',
    name: 'Iniciado',
    level: 2,
    xpRequired: 300,
    xpNext: 900,
    foodMarkup: 33,
    accessoryMarkup: 48,
    avgMarkup: 38,
    earningsPerSale: 8946,
    color: '#22c55e',
    twClass: 'rank-iniciado',
    description: '+5 Puntos de Rentabilidad!',
  },
  {
    id: 'avanzado',
    name: 'Avanzado',
    level: 3,
    xpRequired: 900,
    xpNext: 2000,
    foodMarkup: 38,
    accessoryMarkup: 54,
    avgMarkup: 43,
    earningsPerSale: 9778,
    color: '#3b82f6',
    twClass: 'rank-avanzado',
    description: '+6 Puntos! Margen superior al mercado.',
  },
  {
    id: 'experto',
    name: 'Experto',
    level: 4,
    xpRequired: 2000,
    xpNext: 4000,
    foodMarkup: 43,
    accessoryMarkup: 60,
    avgMarkup: 48,
    earningsPerSale: 10574,
    color: '#a855f7',
    twClass: 'rank-experto',
    description: '+6 Puntos! Zona de alta ganancia.',
  },
  {
    id: 'maestro',
    name: 'Maestro',
    level: 5,
    xpRequired: 4000,
    xpNext: null,
    foodMarkup: 48,
    accessoryMarkup: 67,
    avgMarkup: 54,
    earningsPerSale: 11322,
    color: '#f59e0b',
    twClass: 'rank-maestro',
    description: '+7 Puntos! Máximo nivel.',
  },
] as const;

export const AVG_TICKET = 32404;

export const INCOME_SCENARIOS = [
  { label: 'Muy casual', salesPerWeek: 5, level1: 161460, level5: 226440 },
  { label: 'Part-time', salesPerWeek: 10, level1: 322920, level5: 452880 },
  { label: 'Activo', salesPerWeek: 20, level1: 645840, level5: 905760 },
  { label: 'Dedicado', salesPerWeek: 30, level1: 968760, level5: 1358640 },
] as const;

export const STARS = [
  { name: 'Canis Minor', criterion: 'Mayor volumen en Alimento Cachorros', icon: '⭐' },
  { name: 'Canis Major', criterion: 'Mayor volumen en Alimento Adultos', icon: '⭐' },
  { name: 'Vega', criterion: 'Mayor volumen en Accesorios', icon: '💎' },
  { name: 'Antares', criterion: 'Líder en Salud, Higiene y Estética', icon: '❤️' },
  { name: 'Altair', criterion: 'Mayor cantidad de Desafíos completados', icon: '🏁' },
  { name: 'Polaris', criterion: 'Racha de 30 días de ventas consecutivas', icon: '🔄' },
  { name: 'Orión', criterion: 'Mayor captación de clientes nuevos', icon: '🎯' },
  { name: 'Sirio', criterion: 'MVP: Mejor facturación global del mes', icon: '✨' },
] as const;

export const SUPPLY_BOXES = [
  {
    rarity: 'Común',
    chance: 60,
    color: '#94a3b8',
    glowColor: 'rgba(148, 163, 184, 0.3)',
    examples: 'Jaspe/Senda/Liwue x 100g, snacks, accesorios básicos',
  },
  {
    rarity: 'Raro',
    chance: 25,
    color: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.3)',
    examples: 'Piedras sanitarias 3-4kg, Jaspe Premium 1kg, Collar con luz',
  },
  {
    rarity: 'Épico',
    chance: 12,
    color: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.3)',
    examples: 'Piedras NIC 20kg, Arnés con manija, Correa deportiva',
  },
  {
    rarity: 'Legendario',
    chance: 3,
    color: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.3)',
    examples: 'Jaspe/Liwue bolsa grande (15-20kg), Canil Transportador',
  },
] as const;

export const FEATURES = [
  {
    icon: 'BarChart3',
    title: 'Dashboard Financiero',
    description: 'Controlá tus KPIs en tiempo real. Ventas, márgenes, XP acumulado y proyecciones de ingreso.',
  },
  {
    icon: 'CalendarClock',
    title: 'CRM - Agenda de Recompra',
    description: 'Sabé cuándo tu cliente necesita reponer. Notificaciones push automáticas para nunca perder una venta.',
  },
  {
    icon: 'BookOpen',
    title: 'Catálogo Inteligente',
    description: 'Doble vista: modo vendedor con tus márgenes y modo cliente para compartir. Búsqueda rápida y filtros.',
  },
  {
    icon: 'GraduationCap',
    title: 'ASTRA Academy',
    description: 'Módulos de capacitación para convertirte en experto. Técnicas de venta, productos y fidelización.',
  },
] as const;

export const FAQS = [
  {
    question: '¿Necesito experiencia previa en ventas?',
    answer: 'No. ASTRA Academy te capacita desde cero con módulos paso a paso. Además, el CRM inteligente te guía sobre cuándo contactar a cada cliente.',
  },
  {
    question: '¿Cuánto tengo que invertir para empezar?',
    answer: 'El Starter Pack cuesta $100,000 e incluye productos de alta rotación listos para vender. No hay cuotas mensuales ni costos ocultos.',
  },
  {
    question: '¿Cómo recibo los productos?',
    answer: 'Envío gratis a tu domicilio. También tenés 22 puntos de retiro y la opción de dropshipping: vos vendés, nosotros enviamos al cliente.',
  },
  {
    question: '¿Esto es un esquema piramidal?',
    answer: 'No. Ganás dinero VENDIENDO productos, no reclutando personas. El programa de referidos es opcional y ofrece créditos como bonus, pero tu ingreso principal siempre viene de tus ventas directas.',
  },
  {
    question: '¿Puedo hacerlo part-time?',
    answer: 'Sí. Con solo 10 ventas por semana podés generar entre $322,920 y $452,880 mensuales. Muchos de nuestros resellers combinan ASTRA con su trabajo principal.',
  },
  {
    question: '¿Cuál es el pedido mínimo de reposición?',
    answer: '$60,000 pesos. El envío a tu domicilio es siempre gratuito.',
  },
  {
    question: '¿Qué pasa si un producto tiene algún problema?',
    answer: 'Tenés el respaldo de una empresa con 22 sucursales. Gestionamos cambios y garantías de forma directa dentro de las 72 horas.',
  },
  {
    question: '¿Cómo funciona el programa de referidos?',
    answer: 'Por cada persona que referís y hace su primera compra, recibís $3,000 de crédito. Si llega al Nivel 2, $5,000 más. Con 5 referidos activos desbloqueás la insignia "Explorador de Talentos".',
  },
] as const;

export const LEAGUES = [
  {
    name: 'Bronce',
    criterion: 'Nivel 1-2',
    reward: 'Caja Rara + 500 XP',
    color: '#cd7f32',
  },
  {
    name: 'Plata',
    criterion: 'Nivel 3',
    reward: 'Caja Épica + 1,000 XP',
    color: '#c0c0c0',
  },
  {
    name: 'Oro',
    criterion: 'Nivel 4-5',
    reward: 'Caja Legendaria + 2,000 XP + Insignia',
    color: '#ffd700',
  },
] as const;

export const NAV_LINKS = [
  { label: 'Qué es ASTRA', href: '#que-es-astra' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Ganancias', href: '#ganancias' },
  { label: 'Herramientas', href: '#herramientas' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const REGISTER_URL = 'https://www.astrapet.com.ar/astra/register';
