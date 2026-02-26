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
    description: 'Ventas, margen y XP.',
  },
  {
    icon: 'CalendarClock',
    title: 'CRM',
    description: 'Avisos automáticos.',
  },
  {
    icon: 'BookOpen',
    title: 'Catálogo Inteligente',
    description: 'Listo para compartir.',
  },
  {
    icon: 'GraduationCap',
    title: 'ASTRA Academy',
    description: 'Capacitaciones rápidas.',
  },
  {
    icon: 'Target',
    title: 'Objetivos y desafíos',
    description: 'Metas simples para motivarte.',
  },
  {
    icon: 'Gift',
    title: 'Recompensas',
    description: 'Completá metas y ganá cajas con productos reales.',
  },
] as const;

export const FAQS = [
  {
    question: '¿Cuánto cuesta registrarse?',
    answer: 'Registrarse en ASTRA es completamente gratis. Solo invertís cuando decidís hacer tu primer pedido de productos para vender.',
  },
  {
    question: '¿Tengo que comprar productos obligatoriamente para empezar?',
    answer: 'No. Podés explorar el catálogo, conocer las herramientas y capacitarte antes de hacer tu primera compra. Cuando estés listo, el pedido mínimo es de $60.000.',
  },
  {
    question: '¿ASTRA es una estafa piramidal o un sistema multinivel?',
    answer: 'No. En ASTRA ganás dinero vendiendo productos reales a clientes reales. No hay reclutamiento obligatorio, no hay niveles de comisiones por referidos y no necesitás sumar personas para ganar. Tu ingreso viene 100% de tus ventas.',
  },
  {
    question: '¿De dónde provienen mis ganancias?',
    answer: 'Tus ganancias son la diferencia entre el precio de costo (que te da ASTRA) y el precio de venta al público. Según tu rango, el mark-up va del 29% al 70%, lo que significa que en cada venta te quedás con un margen real y transparente.',
  },
  {
    question: '¿ASTRA me garantiza un ingreso mínimo?',
    answer: 'No. ASTRA te da las herramientas, los productos, la capacitación y el soporte, pero tus ingresos dependen de tu dedicación y tus ventas. Es un emprendimiento real: cuanto más vendés, más ganás.',
  },
  {
    question: '¿Soy empleado de ASTRA?',
    answer: 'No. Sos un seller independiente. No tenés horarios, no tenés jefe y decidís cuándo, cuánto y cómo vender. ASTRA es tu proveedor y tu plataforma de gestión.',
  },
  {
    question: '¿Cuáles son los rangos y qué Mark-up ofrece cada uno?',
    answer: 'ASTRA tiene 5 rangos: Aprendiz (29-43%), Iniciado (33-48%), Avanzado (38-55%), Experto (43-62%) y Maestro (50-70%). Subís de rango ganando XP con cada venta, desbloqueando mejores márgenes automáticamente.',
  },
  {
    question: '¿Cuáles son las formas de vender con ASTRA?',
    answer: 'Tenés dos modalidades: Stock propio (comprás los productos y los entregás vos, con mayor margen y control) y Dropshipping (vos vendés, ASTRA envía directo al cliente, ideal para empezar sin stock). Podés combinar ambas según te convenga.',
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
    reward: 'Caja Épica + 1.000 XP',
    color: '#c0c0c0',
  },
  {
    name: 'Oro',
    criterion: 'Nivel 4-5',
    reward: 'Caja Legendaria + 2.000 XP + Insignia',
    color: '#ffd700',
  },
] as const;

export const NAV_LINKS = [
  { label: '¿Qué es ASTRA?', href: '#que-es-astra' },
  { label: '¿Cómo funciona?', href: '#como-funciona' },
  { label: 'Ganancias', href: '#ganancias' },
  { label: 'Herramientas', href: '#herramientas' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const REGISTER_URL = 'https://www.astrapet.com.ar/astra/login';
