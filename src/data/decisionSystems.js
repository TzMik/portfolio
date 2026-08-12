// Fuente única de verdad de los sistemas de decisión.
// Al crear un nuevo sistema: crea su página en src/pages/sistemas-de-decision/<slug>.astro
// y añade una entrada aquí. El índice y el sitemap se actualizan automáticamente.
export const decisionSystems = [
    {
        slug: 'vale-la-pena-esta-compra',
        url: '/sistemas-de-decision/vale-la-pena-esta-compra/',
        lastmod: '2026-08-12',
        title: '¿Vale la pena esta compra?',
        description:
            'Sistema de decisión gratuito para saber si una compra vale la pena. Responde 4 pasos: necesidad, valor, finanzas y desapego.',
        icon: 'fas fa-cart-plus',
        summary:
            'Checklist minimalista en 4 pasos: necesidad, valor, finanzas y desapego. El sistema decide por ti.',
    },
    {
        slug: 'anti-euforia',
        url: '/sistemas-de-decision/anti-euforia/',
        lastmod: '2026-08-12',
        title: 'Anti-euforia: ¿tu idea de proyecto es real?',
        description:
            'Evalúa una idea de proyecto antes de invertir tiempo y dinero con 4 filtros: viabilidad real, validación de mercado, costo de oportunidad e impacto.',
        icon: 'fas fa-thermometer-half',
        summary:
            'Evalúa una idea con 4 filtros (viabilidad, mercado, oportunidad e impacto) antes de invertir tiempo y dinero.',
    },
];