const esStructure = {
  hero: {
    title: 'Estructura global del T-1',
    subtitle: 'Una vista simple para moverte entre bancos, patrones, pistas y ciclos sin perderte.',
  },
  cards: {
    hierarchyTitle: 'Jerarquía del secuenciador',
    logicPath: 'Recorrido lógico',
    essentialShortcuts: 'Atajos esenciales',
  },
  levels: {
    sequencer: {
      title: 'SECUENCIADOR T-1',
      subtitle: 'Nivel global',
      count: '16 bancos',
      detail: 'El contenedor global del proyecto. Desde aquí la navegación baja al [BANK] activo.',
      shortcuts: [
        { key: '[PLAY]', action: 'Arranca / para el transporte global.' },
        { key: '[BANK]', action: 'Vuelve al inicio y navega a la capa BANK.' },
        { key: '[CTRL] + [PLAY]', action: 'Arranca en modo aislado (sin transporte externo).' },
      ],
    },
    bank: {
      title: 'Banco',
      subtitle: 'Banco activo',
      count: '16 patrones / banco',
      detail: 'Cada banco tiene 16 patrones. El [TEMPO] se guarda a nivel de banco.',
      shortcuts: [
        { key: 'Mantén [BANK]', action: 'Abre la vista de bancos.' },
        { key: '[BANK] + [VBx]', action: 'Elige el banco 1-16.' },
        { key: '[CTRL] + [BANK] + [VBx]', action: 'Guarda el banco activo.' },
        { key: '[CLEAR] + [BANK] + [VBx] + [VBx]', action: 'Borra un banco (doble confirmación).' },
      ],
    },
    pattern: {
      title: 'Patrón',
      subtitle: 'Arreglo rítmico',
      count: '16 pistas',
      detail: 'Cada patrón tiene 16 pistas. El [QUANTIZE] se guarda a nivel de patrón, y los patrones se pueden encadenar.',
      shortcuts: [
        { key: 'Mantén [PATTERN]', action: 'Abre la vista de patrones.' },
        { key: '[PATTERN] + [VBx]', action: 'Elige el patrón 1-16.' },
        { key: '[CTRL] + [PATTERN] + [VBx]', action: 'Selección silenciosa (sin cortar la reproducción).' },
        { key: 'Pulsa [VBx] + [VBy] + ...', action: 'Encadena patrones en secuencia.' },
      ],
    },
    track: {
      title: 'Pista',
      subtitle: 'Voz / material musical',
      count: '16 ciclos',
      detail: 'Cada patrón tiene 16 pistas. Una pista puede ir en modo Note / CC / FX, y la [LENGTH] se guarda a nivel de pista.',
      shortcuts: [
        { key: '[VBx] (modo TRACK)', action: 'Elige la pista 1-16.' },
        { key: '[VBx] + [VBy] (modo TRACK)', action: 'Selección de varias pistas.' },
        { key: '[CTRL] + [VBx] (modo TRACK)', action: 'Cambia el tipo de pista: Note / CC / FX.' },
        { key: 'Mantén [MUTE] + [VBx]', action: 'Silencia / reactiva la pista.' },
      ],
    },
    cycle: {
      title: 'Ciclo',
      subtitle: 'Variación de parámetros',
      count: 'Ciclo 1-16',
      detail: 'Cada pista puede tener 16 ciclos. Un ciclo es un conjunto de valores de parámetros que se reproduce en el tiempo.',
      shortcuts: [
        { key: 'Mantén / doble pulsación [CYCLES]', action: 'Abre / fija la vista de ciclos.' },
        { key: '[CYCLES] + [VBx]', action: 'Elige el ciclo a editar.' },
        { key: '[CTRL] + gira [CYCLES]', action: 'Cambia cuántos ciclos están activos.' },
        { key: 'Pulsa [BANK]', action: 'Sale del modo de edición de ciclos.' },
      ],
    },
  },
}

export default esStructure
