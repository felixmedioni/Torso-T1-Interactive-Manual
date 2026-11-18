const esQuickref = {
  title: 'Esenciales',
  subtitle: 'Una selección corta de las funciones clave para navegar, editar y tocar sin saturarte.',
  cards: {
    session: {
      title: 'Sesión: Bank / Pattern',
      items: {
        selectBank: { label: 'Elegir banco' },
        saveBank: { label: 'Guardar banco' },
        selectPattern: { label: 'Elegir patrón' },
        silentSelect: { label: 'Selección silenciosa', note: 'sin cortar la reproducción' },
      },
    },
    edit: {
      title: 'Edición: Copy / Clear',
      items: {
        copyTrack: { label: 'Copiar pista' },
        copyPattern: { label: 'Copiar patrón' },
        clearTrack: { label: 'Borrar pista' },
        clearPattern: { label: 'Borrar patrón' },
      },
    },
    performance: {
      title: 'En vivo',
      items: {
        mutePrepare: { label: 'Preparar mutes (al soltar)' },
        quickMute: { label: 'Mute inmediato' },
        tempVariation: { label: 'Variación temporal' },
        patternVariation: { label: 'Variación relativa en todo el patrón' },
      },
    },
    transport: {
      title: 'Transporte y seguridad',
      items: {
        startStop: { label: 'Arrancar / parar' },
        isolatedPlay: { label: 'Reproducción aislada', note: 'sin transporte externo' },
        midiPanic: { label: 'Pánico MIDI', note: 'corta las notas colgadas' },
        home: { label: 'Volver al inicio' },
      },
    },
    shape: {
      title: 'Shape rápido',
      items: {
        patternLength: { label: 'Longitud del patrón' },
        euclideanDensity: { label: 'Densidad euclidiana' },
        cycleCount: { label: 'Número de ciclos' },
        timeDivision: { label: 'División de tiempo' },
        noteRepeats: { label: 'Repeticiones de nota' },
      },
    },
    groove: {
      title: 'Groove rápido',
      items: {
        baseVelocity: { label: 'Velocity base' },
        noteLength: { label: 'Duración de nota' },
        microTiming: { label: 'Microtiempo' },
        dynamicAccent: { label: 'Acento dinámico' },
        repeatSpacing: { label: 'Separación de las repeticiones' },
      },
    },
    tonal: {
      title: 'Tonal rápido',
      items: {
        lockKeyboard: { label: 'Fijar la vista de teclado' },
        harmonyVariation: { label: 'Variación armónica' },
        playStyle: { label: 'Elegir estilo de toque' },
        melodicRange: { label: 'Rango melódico' },
        changeRoot: { label: 'Cambiar la tónica' },
      },
    },
    setup: {
      title: 'Configuración básica',
      items: {
        globalTempo: { label: 'Tempo global' },
        trackLoopLength: { label: 'Longitud del bucle de la pista' },
        trackMidiChannel: { label: 'Canal MIDI de la pista' },
        randomAmountRate: { label: 'Cantidad / velocidad de lo aleatorio' },
      },
    },
    advanced: {
      title: 'Funciones avanzadas útiles',
      items: {
        cyclesView: { label: 'Entrar a la vista de ciclos' },
        editCycle: { label: 'Editar un ciclo' },
        holdStepLatch: { label: 'Sostener un paso (latch)' },
        keyboardOctaveDown: { label: 'Teclado una octava abajo', note: 'en la vista de teclado' },
      },
    },
  },
}

export default esQuickref
