// 2.1.5 and 2.1.4 come from the official Torso changelog:
// https://docs.torsoelectronics.com/t1/changelog/
const esChangelog = {
  title: 'Cambios',
  officialButton: 'Changelog oficial',
  subtitle: 'Historial de las actualizaciones de firmware del T-1.',
  types: {
    major: 'Mayor',
    bugfix: 'Corrección',
  },
  categories: {
    features: 'Funciones nuevas',
    enhancements: 'Mejoras',
    bugfixes: 'Correcciones',
  },
  versions: [
  {
    "version": "2.1.5",
    "date": "5 de agosto de 2026",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "TEMP + SAVE ya no salta al principio de la secuencia.",
        "COPY/PASTE BANKS ya no puede borrar patrones y pistas en algunos casos.",
        "T1 Config: se accede a todos los ajustes de CV/GATE.",
        "T1 Config: ERASE ALL ya borra todo en todos los casos."
      ]
    }
  },
  {
    "version": "2.1.4",
    "date": "27 de mayo de 2026",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Nueva versión de T1 Config: guardar y cargar backups ya no se queda esperando hasta fallar en algunos equipos."
      ]
    }
  },
  {
    "version": "2.1.3",
    "date": "2 de marzo de 2026",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "La cuantización de patrones no funcionaba con SYNC IN.",
        "Los ajustes de CC se enviaban duplicados durante la reproducción."
      ]
    }
  },
  {
    "version": "2.1.2",
    "date": "2 de febrero de 2026",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Los bancos que usaban los nuevos estilos de voicing no se podían cargar."
      ]
    }
  },
  {
    "version": "2.1.1",
    "date": "18 de diciembre de 2025",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Se colgaba al tocar una perilla después de cambiar de pista en la vista fijada."
      ]
    }
  },
  {
    "version": "2.1.0",
    "date": "16 de diciembre de 2025",
    "type": "major",
    "highlight": true,
    "entries": {
      "features": [
        "Guardar/cargar el proyecto con T1 Config: copia y restauración completas del estado del aparato (.zip).",
        "Modo Hold: sostiene notas del teclado interno o de MIDI externo.",
        "Dos estilos de voicing nuevos: Up/Down y Climb Up/Down (Poly y Mono).",
        "Bloqueo de la secuencia aleatoria por parámetro.",
        "Opciones de enrutado del modo FX: Omni, Same, Fixed.",
        "Filtrar las pistas activas en modo FX."
      ],
      "enhancements": [
        "Guardado y carga más rápidos.",
        "Los CC se guardan solos en las pistas.",
        "Borrar PITCH devuelve la tónica.",
        "RATE y TIME aleatorios ya no siguen a DIVISION.",
        "Las pistas FX siguen corriendo aunque el T-1 esté parado.",
        "Mejor rango de valores de los Value Buttons en modo CC.",
        "Opción en T1 Config para sacar los CC y el Pitch Bend que entran."
      ],
      "bugfixes": [
        "Visualización del tempo en los LED más precisa.",
        "Los bancos guardados a mano cargan bien al arrancar.",
        "Bajar VOICING ya no dispara notas incorrectas.",
        "Selección de notas corregida con escalas alternativas en los ciclos.",
        "Corregido el Program Change de los bancos 9–16 en el canal MIDI 2.",
        "Se colgaba al cambiar de pista en la vista fijada.",
        "Los ciclos ya no cambian solos con el T-1 parado.",
        "El tempo se guarda y se recarga bien en los bancos.",
        "Arrancar/parar con reloj analógico ya reinicia bien el punto de partida.",
        "La selección de patrón sigue bien a la reproducción.",
        "Los CC ya se pueden mandar por todos los canales.",
        "Ya se pueden borrar alturas en el menú de PITCH.",
        "El Program Change es instantáneo con la reproducción parada.",
        "Comportamiento de edición de CC actualizado (selección de botón correcta).",
        "Un retardo de pista hacía arrancar el ciclo 2.",
        "El Time de las repeticiones aleatorias funciona bien (ya no se queda en el máximo)."
      ]
    }
  },
  {
    "version": "2.0.14",
    "date": "1 de mayo de 2023",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Se quita el límite de 8 ediciones por paso."
      ]
    }
  },
  {
    "version": "2.0.13",
    "date": "27 de abril de 2023",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Corregida la copia de ediciones de paso entre páginas (>16 pasos)."
      ]
    }
  },
  {
    "version": "2.0.12",
    "date": "21 de abril de 2023",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Temp + CC no funcionaba (regresión desde la v2.0.7)."
      ]
    }
  },
  {
    "version": "2.0.11",
    "date": "21 de abril de 2023",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Corregido el parpadeo de los LED en los lotes recientes del T-1."
      ]
    }
  },
  {
    "version": "2.0.10",
    "date": "23 de marzo de 2023",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Corregido un fallo al hacer ediciones de paso relativas en cambios de CC."
      ]
    }
  },
  {
    "version": "2.0.9",
    "date": "14 de marzo de 2023",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "La selección múltiple no funcionaba con más de 2 elementos (regresión desde la v2.0.7)."
      ]
    }
  },
  {
    "version": "2.0.8",
    "date": "13 de marzo de 2023",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Los menús de las perillas se quedaban trabados a veces al abrirlos con [CTRL] o RANDOM.",
        "El acento y la velocity aleatoria se comportaban mal (regresión desde la v2.0.7)."
      ]
    }
  },
  {
    "version": "2.0.7",
    "date": "8 de marzo de 2023",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Estabilidad general muy mejorada gracias a pruebas de fuzzing.",
        "Resincronización de los ciclos al salir del modo de edición/bucle y al cambiar el número de ciclos.",
        "Corregido un cuelgue con ciclos aleatorios durante la edición.",
        "Las ediciones de paso vacías se copian bien.",
        "Corregida la lógica de acordes y ediciones de paso entre ciclos.",
        "La edición del timing por paso queda desactivada temporalmente para rehacerla."
      ]
    }
  },
  {
    "version": "2.0.6",
    "date": "13 de febrero de 2023",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Los ciclos silenciados no se borraban con [CLEAR]."
      ]
    }
  },
  {
    "version": "2.0.5",
    "date": "5 de febrero de 2023",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Editar las ediciones de paso en las páginas 2–4 no funcionaba (regresión desde la v2.0.3)."
      ]
    }
  },
  {
    "version": "2.0.4",
    "date": "3 de febrero de 2023",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Los valores de CC no se enviaban al pulsar un VB en la vista CC durante la reproducción."
      ]
    }
  },
  {
    "version": "2.0.3",
    "date": "30 de enero de 2023",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Versión de estabilidad general (corrige la mayoría de los cuelgues)."
      ]
    }
  },
  {
    "version": "2.0.2",
    "date": "21 de noviembre de 2022",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Corregido un fallo en el algoritmo de voicing (regresión desde la v2.0.0)."
      ]
    }
  },
  {
    "version": "2.0.1",
    "date": "13 de diciembre de 2022",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Corregido un cuelgue al encontrar patrones o bancos inválidos."
      ]
    }
  },
  {
    "version": "2.0.0",
    "date": "9 de diciembre de 2022",
    "type": "major",
    "entries": {
      "features": [
        "Edición de parámetros por paso, CC incluidos.",
        "Tipo de pista FX para procesar el MIDI que entra.",
        "Vista rápida de los parámetros.",
        "Flujo de ciclos rediseñado: bucle y selección múltiple.",
        "Enrutado de notas entre pistas.",
        "Varios canales por pista.",
        "Ajuste de slew en las modulaciones aleatorias.",
        "Ajuste libre de los parámetros Division / Time.",
        "Opciones aleatorias polifónicas/monofónicas.",
        "El búfer de repeticiones se guarda en las pistas (función de looper)."
      ],
      "enhancements": [
        "Doble toque en una pista para entrar a la vista de pulsos.",
        "Menú de ciclos reorganizado.",
        "Comportamiento de macro de Division para Time y Rate.",
        "Parar todas las repeticiones de la pista: [CLEAR].",
        "Comportamiento del voicing aleatorio actualizado.",
        "Compatibilidad del tempo con los CC.",
        "Manual nuevo de Synthdawg."
      ]
    }
  },
  {
    "version": "1.3.2",
    "date": "22 de septiembre de 2022",
    "type": "bugfix",
    "entries": {
      "bugfixes": [
        "Saltos de pasos con reloj externo.",
        "Posible cuelgue del T-1 con T1 Config."
      ]
    }
  }
],
}

export default esChangelog
