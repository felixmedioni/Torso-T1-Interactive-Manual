const esControls = {
  "STEPS": {
    "description": "Longitud del patrón (número de pasos). Al cambiar STEPS, los pulsos euclidianos se redistribuyen. La longitud se puede ampliar más allá de 16, hasta 64 pasos en 4 páginas.",
    "shortcuts": [
      { "key": "Gira", "action": "Ajusta el número de pasos (1-16)" },
      { "key": "Pulsa y gira STEPS", "action": "Edita los pasos viendo la página de STEPS" },
      { "key": "Mantén STEPS", "action": "Muestra la vista de pasos en los VB" },
      { "key": "Doble pulsación STEPS", "action": "Fija la vista de pasos" },
      { "key": "Mantén CTRL + gira STEPS", "action": "Alarga/acorta el patrón hasta 64 pasos" },
      { "key": "En la vista STEPS: mantén STEPS + pulsa VBx", "action": "Fija directamente el último paso activo" },
      { "key": "En la vista STEPS: mantén CTRL + BANK/PATTERN/TEMP/MUTE", "action": "Navega por las páginas 1–4 (1–64)" },
      { "key": "En la vista STEPS: pulsa CLEAR", "action": "Redispara el paso (reinicia la secuencia)" }
    ]
  },
  "PULSES": {
    "description": "Número de pulsos euclidianos repartidos entre los pasos. También puedes añadir o quitar pulsos a mano en la vista PULSES con los VBx.",
    "shortcuts": [
      { "key": "Gira PULSES", "action": "Añade/quita pulsos euclidianos" },
      { "key": "Pulsa y gira PULSES", "action": "Edita los pulsos viendo la página" },
      { "key": "Mantén o doble pulsación PULSES", "action": "Muestra/fija la vista de pulsos" },
      { "key": "En la vista de pulsos: pulsa VBx", "action": "Añade/quita un pulso manual" },
      { "key": "En la vista de pulsos: CTRL + VBx", "action": "Entra a la edición por paso en ese paso" },
      { "key": "En la edición por paso: pulsa BANK", "action": "Sale de la edición por paso" },
      { "key": "CTRL + gira PULSES", "action": "ROTATE: desplaza el inicio del patrón" }
    ]
  },
  "CYCLES": {
    "description": "Variaciones de la pista que se reproducen en secuencia dentro del patrón. Por defecto hay 4 ciclos activos. Puedes editar algunos ciclos para crear una progresión. Cada ciclo reproduce su propia versión de los parámetros.",
    "shortcuts": [
      { "key": "Mantén o doble pulsación CYCLES", "action": "Muestra/fija la vista de ciclos" },
      { "key": "En la vista de ciclos: pulsa VBx", "action": "Elige el ciclo o los ciclos a editar" },
      { "key": "BANK parpadeando en rojo", "action": "Indica que estás en modo de edición de ciclos" },
      { "key": "Gira un parámetro (p. ej. PITCH/REPEATS)", "action": "Fija ese valor en el ciclo elegido" },
      { "key": "Pulsa BANK", "action": "Sale del modo de edición de ciclos" },
      { "key": "CTRL + gira CYCLES", "action": "Cambia cuántos ciclos están activos" },
      { "key": "CTRL + CYCLES + VBx", "action": "Fija directamente de 1 a 16 ciclos activos" },
      { "key": "En la vista de ciclos: CLEAR + VBx", "action": "Borra las ediciones del ciclo" }
    ]
  },
  "DIVISION": {
    "description": "Valor rítmico de los pasos (el compás de la pista): eliges un preset de división con los VBx. También hay un modo libre con resolución de 96 PPQN.",
    "shortcuts": [
      { "key": "Gira DIVISION", "action": "Recorre las divisiones predefinidas" },
      { "key": "Mantén o doble pulsación DIVISION", "action": "Muestra/fija la vista de división" },
      { "key": "Pulsa y gira DIVISION", "action": "Edita la división viendo la página de DIVISION" },
      { "key": "En la vista de división: pulsa VB1–VB7", "action": "Elige una división binaria (de 1/1 a 1/64)" },
      { "key": "En la vista de división: pulsa VB11–VB15", "action": "Elige un tresillo (de 1/3 a 1/48)" },
      { "key": "Mantén DIVISION + pulsa VBx", "action": "Elige una división directamente desde la vista" },
      { "key": "CTRL + gira DIVISION", "action": "División libre (96 PPQN)" }
    ]
  },
  "VELOCITY": {
    "description": "Velocity base de las notas (1–127, 100 por defecto). PROBABILITY actúa al azar y es bipolar: hacia la izquierda primero corta pulsos (y sus repeticiones); hacia la derecha corta notas sueltas (pulso o repetición).",
    "shortcuts": [
      { "key": "Gira", "action": "Cambia la velocity base" },
      { "key": "Mantén / doble pulsación", "action": "Muestra/fija la vista de VELOCITY en los VB" },
      { "key": "[CTRL] + gira", "action": "PROBABILITY: ajusta la probabilidad de silencio (bipolar)" },
      { "key": "[CTRL] + (PROBABILITY) + [VB9]-[VB11]", "action": "Ajuste grueso a la izquierda: probabilidad de cortar pulsos (y sus repeticiones)" },
      { "key": "[CTRL] + (PROBABILITY) + [VB13]-[VB15]", "action": "Ajuste grueso a la derecha: probabilidad de cortar notas (pulso o repetición)" },
      { "key": "[CTRL] + (PROBABILITY) + [VB1]-[VB7]", "action": "Ajuste fino de la probabilidad" },
      { "key": "[CTRL] + (PROBABILITY) + [VB8]/[VB16]", "action": "Desplaza la fase de la modulación" }
    ]
  },
  "SUSTAIN": {
    "description": "Duración de las notas respecto a DIVISION. Se aplica a pulsos y repeticiones; un disparo nuevo corta la nota anterior.",
    "shortcuts": [
      { "key": "Gira", "action": "Cambia la duración de las notas" },
      { "key": "Mantén / doble pulsación", "action": "Muestra/fija la vista de SUSTAIN en los VB" },
      { "key": "[VB1]-[VB16] (en la vista)", "action": "Elige una duración concreta (VB8≈50 %, VB16=100 %)" },
      { "key": "Mantén [VBx] + toca [CLEAR]", "action": "Modo de paso sostenido (latch)" }
    ],
    "notes": "La duración se aplica a notas y repeticiones; un disparo nuevo corta la nota anterior. Sustain al 100 % no es lo mismo que latch."
  },
  "REPEATS": {
    "description": "Repeticiones de nota después de cada pulso. RAMP crea una rampa de velocity sobre las repeticiones (hacia arriba o hacia abajo).",
    "shortcuts": [
      { "key": "Gira", "action": "Cambia el número de repeticiones" },
      { "key": "[CTRL] + gira", "action": "RAMP: rampa de velocity sobre las repeticiones" },
      { "key": "En la vista REPEATS: pulsa VB8", "action": "Choke: un pulso nuevo corta las repeticiones" },
      { "key": "En la vista REPEATS: pulsa VB16", "action": "Tail: las repeticiones se solapan" },
      { "key": "En la vista REPEATS: pulsa CLEAR", "action": "Para las repeticiones" }
    ]
  },
  "TIME": {
    "description": "Intervalo de tiempo entre las repeticiones de nota. PACE ajusta la aceleración o desaceleración del ritmo de repetición.",
    "shortcuts": [
      { "key": "Gira", "action": "Cambia el intervalo entre repeticiones" },
      { "key": "[CTRL] + gira", "action": "PACE: ajusta la aceleración/desaceleración" }
    ]
  },
  "ACCENT": {
    "description": "ACCENT ajusta cuánta variación se aplica a la velocity base (VELOCITY). GROOVE elige la forma de esa variación (8 plantillas: presets y ondas). Los dos trabajan juntos.",
    "shortcuts": [
      { "key": "Gira", "action": "Ajusta cuánto se acentúa (variación de velocity)" },
      { "key": "Mantén / doble pulsación", "action": "Muestra/fija la vista de ACCENT" },
      { "key": "[CTRL] + gira", "action": "GROOVE: elige la plantilla" },
      { "key": "[CTRL] + pulsa (GROOVE)", "action": "Muestra la vista de GROOVE en los VB" },
      { "key": "[VB1]-[VB7] (vista ACCENT)", "action": "Acento fino" },
      { "key": "[VB9]-[VB15] (vista ACCENT)", "action": "Acento grueso, bipolar" },
      { "key": "[VB8]/[VB16] (vista ACCENT)", "action": "Tempo del groove ÷2 / ×2" },
      { "key": "[VB1]-[VB4] / [VB9]-[VB12] (vista GROOVE)", "action": "Presets / ondas" }
    ]
  },
  "TIMING": {
    "description": "TIMING adelanta o atrasa algunas notas (microtiempo) para humanizar el groove. DELAY desplaza todas las notas de la pista hacia delante o hacia atrás según divisiones de nota.",
    "shortcuts": [
      { "key": "Gira", "action": "Ajusta el microtiempo de las notas afectadas" },
      { "key": "Pulsa y gira TIMING", "action": "Microtiempo paso a paso viendo la página" },
      { "key": "Mantén / doble pulsación", "action": "Muestra/fija la vista de TIMING" },
      { "key": "[VB9]-[VB11] / [VB13]-[VB15]", "action": "Grueso: adelantado/atrasado" },
      { "key": "[VB1]-[VB7]", "action": "Timing fino" },
      { "key": "[VB4] + [VB12]", "action": "Sin desplazamiento (en la rejilla)" },
      { "key": "[VB8] / [VB16]", "action": "División de nota afectada x2/x4 (las dos encendidas = x1)" },
      { "key": "[CTRL] + gira", "action": "DELAY: retardo de toda la pista" },
      { "key": "[CTRL] + pulsa y gira DELAY", "action": "Retardo paso a paso, viéndolo" },
      { "key": "[CTRL] + (DELAY) + [VB11|10|9]", "action": "Adelantar: 1/16, 1/8, 1/4" },
      { "key": "[CTRL] + (DELAY) + [VB13|14|15]", "action": "Atrasar: 1/16, 1/8, 1/4" }
    ]
  },
  "PITCH": {
    "description": "Transposición de altura, estilo teclado, dentro de la escala activa. HARMONY crea variaciones de acorde: cada clic mueve una nota dentro de la escala.",
    "shortcuts": [
      { "key": "Gira", "action": "Transpone por grados de la escala" },
      { "key": "Doble pulsación", "action": "Fija la vista de teclado (VB)" },
      { "key": "Mantén PITCH + VBx", "action": "Añade/quita notas en el menú de altura" },
      { "key": "[CTRL] + gira", "action": "HARMONY: variación de acorde (1 nota por clic)" },
      { "key": "[CTRL] + [VB16] en la vista de teclado", "action": "Octava −1" }
    ],
    "notes": "Doble pulsación en (PITCH) fija la vista de teclado. [CTRL]+[VB16] = una octava abajo. Sin notas en Pitch, VOICING no hace sonar nada."
  },
  "VOICING": {
    "description": "Reordena entre octavas las notas fijadas en PITCH. STYLE fija el algoritmo de reproducción (Poly/Mono, Ramp/Climb/Up-Down) e influye directamente en el comportamiento melódico.",
    "shortcuts": [
      { "key": "Gira", "action": "Cambia el orden de las voces (bipolar)" },
      { "key": "[CTRL] + (STYLE) → [VBx]", "action": "Elige el estilo de toque" }
    ],
    "details": [
      "VB1 PolyFixed",
      "VB2 PolyRamp",
      "VB3 PolyClimb",
      "VB4 PolyUp/Down ✦",
      "VB5 PolyClimbUp/Down ✦",
      "VB8 Dirección UP",
      "VB9 MonoFixed",
      "VB10 MonoRamp",
      "VB11 MonoClimb",
      "VB12 MonoUp/Down ✦",
      "VB13 MonoClimbUp/Down ✦",
      "VB16 Dirección DOWN"
    ],
    "notes": "✦ Estilos nuevos de la v2.1.0. VB8 = dirección UP, VB16 = dirección DOWN. Sin notas en Pitch no suena nada."
  },
  "RANGE": {
    "description": "Controla el alcance y la velocidad con que se transforman las notas de PITCH. PHRASE elige la forma melódica entre 8 plantillas (Cad 1–4, sierra, triángulo, senoidal, pulso).",
    "shortcuts": [
      { "key": "Gira", "action": "Cambia el rango de la modulación" },
      { "key": "[CTRL] + gira", "action": "PHRASE: elige la forma (cadencia/LFO)" },
      { "key": "[CTRL] + PHRASE + [VBx]", "action": "Elige directamente la plantilla de frase" }
    ],
    "details": [
      "VB1 Cad 1",
      "VB2 Cad 2",
      "VB3 Cad 3",
      "VB4 Cad 4",
      "VB9 Sierra",
      "VB10 Triángulo",
      "VB11 Senoidal",
      "VB12 Pulso"
    ]
  },
  "SCALE": {
    "description": "Escala que usa la pista. ROOT define la tónica. 8 escalas predefinidas y 1 personalizable (User).",
    "shortcuts": [
      { "key": "Gira", "action": "Elige la escala" },
      { "key": "Mantén SCALE + VBx", "action": "Elige la escala directamente en los VB" },
      { "key": "[CTRL] + gira", "action": "ROOT: fija la tónica" }
    ],
    "details": [
      "VB9 Cromática",
      "VB10 Mayor",
      "VB11 Menor",
      "VB12 Pentatónica",
      "VB13 Hirajoshi",
      "VB14 Iwato",
      "VB15 Tetratónica",
      "VB16 User"
    ]
  },
  "TEMPO": {
    "description": "BPM del reloj interno (24–280, 120 por defecto). El tempo afecta a todo el banco y se guarda con él.",
    "shortcuts": [
      { "key": "Gira TEMPO", "action": "Cambia el BPM (1 BPM por paso)" },
      { "key": "Mantén y gira TEMPO", "action": "Ajuste fino viéndolo directamente" },
      { "key": "Mantén / doble pulsación TEMPO", "action": "Muestra/fija la vista de tempo" },
      { "key": "Mantén TEMPO + VBx", "action": "Salto rápido por escalones (24 → 280)" },
      { "key": "Mantén TEMPO + VB6", "action": "Vuelve rápido a 120 BPM" },
      { "key": "[CTRL] + gira", "action": "Ajusta el brillo de los LED" }
    ],
    "notes": "Si manda un reloj externo (analógico > MIDI > Link), el tempo interno se ignora."
  },
  "LENGTH": {
    "description": "Acorta el bucle de la pista. QUANTIZE (función secundaria) fija cuándo arranca un patrón en espera (compás o subdivisión).",
    "shortcuts": [
      { "key": "Gira LENGTH", "action": "Acorta el bucle de la pista" },
      { "key": "Mantén / doble pulsación LENGTH", "action": "Muestra/fija la vista de longitud" },
      { "key": "[CTRL] + pulsa QUANTIZE", "action": "Muestra la vista de cuantización" },
      { "key": "[CTRL] + gira QUANTIZE", "action": "Cambia la cuantización del patrón" },
      { "key": "En la vista QUANTIZE: pulsa VBx", "action": "Elección directa (1–8, 16, 1/2, 1/4, 1/8)" }
    ],
    "notes": "LENGTH se guarda a nivel de pista. QUANTIZE se guarda a nivel de patrón."
  },
  "CHANNEL": {
    "description": "Canal MIDI de la pista (1–16). Una misma pista puede tener varios canales. OUTPUT envía una pista a la entrada de otra.",
    "shortcuts": [
      { "key": "Gira CHANNEL", "action": "Cambia el canal MIDI de la pista" },
      { "key": "Pulsa y gira CHANNEL", "action": "Cambia el canal viendo la página" },
      { "key": "Mantén / doble pulsación CHANNEL", "action": "Muestra/fija la vista de canales" },
      { "key": "En la vista CHANNEL: pulsa VBx", "action": "Elige uno o varios canales" },
      { "key": "[CTRL] + CHANNEL + [VBx]", "action": "OUTPUT: envía a otra pista" }
    ],
    "notes": "Por defecto, la pista N corresponde al canal N."
  },
  "RANDOM": {
    "description": "RANDOM controla una secuencia de modulación aleatoria de 16 pasos. Girar RANDOM fija la probabilidad de que se aplique (0–100 %). CTRL + girar RANDOM (RATE) fija la velocidad o división de esa secuencia. Mantener RANDOM + girar otra perilla ajusta la intensidad bipolar de ese parámetro.",
    "shortcuts": [
      { "key": "Gira RANDOM", "action": "Ajusta la probabilidad general de aleatoriedad (0–100 %)" },
      { "key": "Mantén / doble pulsación RANDOM", "action": "Muestra/fija la vista de aleatoriedad" },
      { "key": "Mantén RANDOM + gira una perilla", "action": "Ajusta la intensidad bipolar de ese parámetro" },
      { "key": "Mantén RANDOM + pulsa una perilla + VBx", "action": "Afina y elige el valor aleatorio del parámetro" },
      { "key": "Mantén RANDOM + pulsa una perilla + VB8 / VB16", "action": "Desplaza la fase de la secuencia aleatoria (antes/después)" },
      { "key": "CTRL + RANDOM + gira una perilla", "action": "Aplica slew (suavizado) a la línea aleatoria del parámetro" },
      { "key": "CTRL + gira RANDOM (RATE)", "action": "Fija la división/velocidad de la secuencia aleatoria" }
    ],
    "notes": "Según el manual, TEMPO no es uno de los parámetros que se pueden aleatorizar."
  },
  "PLAY": {
    "description": "Transporte global del T-1: arranca/para la reproducción. El LED de estado refleja el estado del reloj (reproducción activa, Link, etc.).",
    "shortcuts": [
      { "key": "[PLAY]", "action": "Arranca/para el transporte" },
      { "key": "[CTRL] + [PLAY]", "action": "Reproducción aislada (sin MIDI / Link / reset analógico)" },
      { "key": "[CLEAR] + [PLAY]", "action": "Corta todas las notas MIDI colgadas (pánico)" }
    ],
    "notes": "[CTRL]+[PLAY] arranca en modo aislado (sin Start/Stop MIDI, Link ni reset analógico). [CLEAR]+[PLAY] manda un pánico para cortar las notas MIDI colgadas."
  },
  "BANK": {
    "description": "Elige el banco activo (1–16). En cualquier modo: vuelve a la vista de inicio (pistas). SAVE es el único nivel de guardado del T-1.",
    "shortcuts": [
      { "key": "[BANK]", "action": "Vuelve al inicio / sale del modo actual" },
      { "key": "Mantén [BANK]", "action": "Muestra la vista de bancos" },
      { "key": "Mantén [BANK] + [VBx]", "action": "Elige el banco 1–16" },
      { "key": "[CTRL] + [BANK] + [VBx]", "action": "Guarda el banco actual" },
      { "key": "Mantén [BANK] + [VBx] (1 s)", "action": "Recarga el banco (destello verde = OK)" },
      { "key": "[CLEAR] + [BANK] + [VBx] + [VBx]", "action": "Borra el banco (doble confirmación)" },
      { "key": "Mantén [CTRL]+[COPY]+[BANK]+[origen→destino]", "action": "Copia un banco" },
      { "key": "Enciende el T-1 manteniendo [BANK]", "action": "Recarga completa" }
    ],
    "notes": "El manual lo aclara: no hay un guardado manual de pista o de patrón por separado; se guarda a nivel de BANK. El T-1 además guarda solo y recarga el banco anterior al arrancar."
  },
  "PATTERN": {
    "description": "Elige el patrón activo (1–16). SELECT (función secundaria) permite una selección silenciosa sin cortar la reproducción.",
    "shortcuts": [
      { "key": "Mantén [PATTERN]", "action": "Muestra la vista de patrones" },
      { "key": "[PATTERN] + [VBx]", "action": "Elige el patrón" },
      { "key": "[CTRL] + [PATTERN] + [VBx]", "action": "Selección silenciosa (sin cortar la reproducción)" },
      { "key": "Pulsa [VBx] + [VBy] + ...", "action": "Encadena patrones en orden" },
      { "key": "[CLEAR] + [PATTERN] + [VBx]", "action": "Borra el patrón" },
      { "key": "Mantén [CTRL]+[COPY]+[PATTERN]+[origen→destino]", "action": "Copia un patrón" }
    ]
  },
  "CTRL": {
    "description": "Modificador global del T-1. Mantenido, da acceso a las funciones secundarias de perillas y botones, y a acciones avanzadas de selección y edición.",
    "shortcuts": [
      { "key": "Mantén [CTRL] + gira (perilla)", "action": "Accede a la función secundaria de la perilla" },
      { "key": "Mantén [CTRL] + [botón]", "action": "Accede a la función secundaria" },
      { "key": "Mantén [CTRL] + [VBx] + [VBy]", "action": "Selección múltiple con los VB (cuando el modo lo permite)" },
      { "key": "[CTRL] + doble toque (pista)", "action": "Pone el estado MAGENTA (pista FX)" },
      { "key": "[CTRL] + [VB16] (vista de teclado)", "action": "Octava −1" },
      { "key": "[CTRL] + gira (TEMPO)", "action": "Ajusta el brillo de los LED" },
      { "key": "[CTRL] + [PLAY]", "action": "Reproducción aislada, sin MIDI / Link" },
      { "key": "[CTRL] + [BANK] + [VBx]", "action": "Guarda el banco" }
    ]
  },
  "CLEAR": {
    "description": "Borra el objetivo actual (pista, patrón o banco, según la combinación). Con [CTRL] pasa al modo COPY para duplicar pistas, patrones o bancos.",
    "shortcuts": [
      { "key": "[CLEAR]", "action": "Entra al modo de borrado del objetivo actual" },
      { "key": "[CTRL] + [CLEAR]", "action": "Entra al modo de copia" },
      { "key": "[CLEAR] + [VBx]", "action": "Borra la pista" },
      { "key": "[CLEAR] + [BANK] + [VBx] + [VBx]", "action": "Borra el banco (doble confirmación)" },
      { "key": "[CLEAR] + [PATTERN] + [VBx]", "action": "Borra el patrón" },
      { "key": "Mantén [CTRL]+[COPY]+[origen→destino]", "action": "Copia una pista" },
      { "key": "Mantén [CTRL]+[COPY]+[BANK]+[origen→destino]", "action": "Copia un banco" },
      { "key": "Mantén [CTRL]+[COPY]+[PATTERN]+[origen→destino]", "action": "Copia un patrón" },
      { "key": "Mantén [VBx] + toca [CLEAR]", "action": "Modo de paso sostenido (latch)" }
    ]
  },
  "TEMP": {
    "description": "Modificador temporal para tocar en vivo: mantener [TEMP] + girar (parámetro) aplica una variación momentánea. Al soltar [TEMP] vuelve el valor original.",
    "shortcuts": [
      { "key": "Mantén [TEMP] + gira (parámetro)", "action": "Cambia un ajuste de forma temporal" },
      { "key": "Mantén [TEMP] + [PATTERN] + gira (parámetro)", "action": "Aplica cambios relativos a los parámetros de todo el patrón" },
      { "key": "Doble toque [TEMP]", "action": "Fija la selección de TEMP activa" },
      { "key": "Mantén [TEMP] + [PATTERN] + [VBx]", "action": "Guarda los cambios temporales en el patrón x" }
    ],
    "notes": "Ideal en vivo para un corte o un barrido y volver al instante al ajuste base, sin reescribir el valor final."
  },
  "MUTE": {
    "description": "Silenciado de pistas. Mantener [MUTE] + [VBx] prepara el cambio de mute, que se aplica al soltar. [CTRL]+[MUTE]+[VBx] silencia/reactiva al momento.",
    "shortcuts": [
      { "key": "Mantén [MUTE] + [VBx]", "action": "Silencia/reactiva (se aplica al soltar)" },
      { "key": "Suelta [MUTE]", "action": "Aplica lo preparado a las pistas elegidas" },
      { "key": "Doble toque [MUTE]", "action": "Fija la selección de mute activa" },
      { "key": "[CTRL] + [MUTE] + [VBx]", "action": "Mute / unmute inmediato" }
    ]
  },
  "VB": {
    "description": "16 botones multifunción iluminados (Value Buttons). El color de la luz indica el modo activo. Por defecto: selección y visualización de las pistas.",
    "shortcuts": [
      { "key": "[VBx] (modo BANK)", "action": "Elige el banco 1–16" },
      { "key": "[VBx] (modo PATTERN)", "action": "Elige el patrón 1–16" },
      { "key": "[VBx] (modo TRACK)", "action": "Elige la pista 1–16" },
      { "key": "[VBx] + [VBy] (vista de pistas)", "action": "Selección de varias pistas" },
      { "key": "[CTRL] + [VBx] (vista de pistas)", "action": "Cambia el tipo de pista: Note / CC / FX" },
      { "key": "Doble toque [VBx] (según el tipo)", "action": "Pasa a la vista Pulse/CC/FX" },
      { "key": "[VBx] (vista de teclado)", "action": "Toca/elige notas de la escala" },
      { "key": "VB8", "action": "Dirección UP (voicing)" },
      { "key": "VB16", "action": "Dirección DOWN · [CTRL]+VB16 = octava −1" },
      { "key": "Mantén [VBx] + toca [CLEAR]", "action": "Modo de paso sostenido (latch)" }
    ]
  }
}

export default esControls
