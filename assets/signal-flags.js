/* Código Internacional de Señales — banderas simplificadas A–Z */
(function (global) {
  const FLAGS = {
    A: { name: 'Alfa', desc: 'Cola de golondrina azul y blanco' },
    B: { name: 'Bravo', desc: 'Cola de golondrina roja' },
    C: { name: 'Charlie', desc: 'Franjas verticales azul, blanco y rojo' },
    D: { name: 'Delta', desc: 'Amarillo sobre azul (bicolor horizontal)' },
    E: { name: 'Echo', desc: 'Franja central azul sobre blanco' },
    F: { name: 'Foxtrot', desc: 'Rombo rojo sobre blanco' },
    G: { name: 'Golf', desc: 'Amarillo con cruz azul' },
    H: { name: 'Hotel', desc: 'Mitades verticales blanco y rojo' },
    I: { name: 'India', desc: 'Círculo amarillo sobre negro' },
    J: { name: 'Juliet', desc: 'Franja azul central sobre blanco' },
    K: { name: 'Kilo', desc: 'Aspas amarillas sobre azul' },
    L: { name: 'Lima', desc: 'Cuadrantes amarillo, negro, rojo y amarillo' },
    M: { name: 'Mike', desc: 'Aspas blancas sobre azul' },
    N: { name: 'November', desc: 'Damero azul y blanco' },
    O: { name: 'Oscar', desc: 'Mitades diagonales amarillo y rojo' },
    P: { name: 'Papa', desc: 'Cuadrado blanco sobre azul' },
    Q: { name: 'Quebec', desc: 'Campo amarillo' },
    R: { name: 'Romeo', desc: 'Triángulo rojo y amarillo' },
    S: { name: 'Sierra', desc: 'Tres círculos blancos sobre azul' },
    T: { name: 'Tango', desc: 'Franjas horizontales rojo, blanco y rojo' },
    U: { name: 'Uniform', desc: 'Cuarteles rojo y blanco' },
    V: { name: 'Victor', desc: 'Cruz roja sobre blanco' },
    W: { name: 'Whiskey', desc: 'Cuadrícula blanca sobre azul' },
    X: { name: 'Xray', desc: 'Cruz blanca sobre azul' },
    Y: { name: 'Yankee', desc: 'Diagonales amarillo y rojo' },
    Z: { name: 'Zulu', desc: 'Triángulos amarillo, rojo, azul y amarillo' }
  };

  function pattern(letter) {
    const L = letter.toUpperCase();
    switch (L) {
      case 'A':
        return '<rect width="60" height="40" fill="#fff"/><polygon points="0,0 30,20 0,40" fill="#0252CD"/>';
      case 'B':
        return '<rect width="60" height="40" fill="#fff"/><polygon points="0,0 30,20 0,40" fill="#c0392b"/>';
      case 'C':
        return '<rect x="0" width="20" height="40" fill="#0252CD"/><rect x="20" width="20" height="40" fill="#fff"/><rect x="40" width="20" height="40" fill="#c0392b"/>';
      case 'D':
        return '<rect width="60" height="20" fill="#f1c40f"/><rect y="20" width="60" height="20" fill="#0252CD"/>';
      case 'E':
        return '<rect width="60" height="40" fill="#fff"/><rect y="14" width="60" height="12" fill="#0252CD"/>';
      case 'F':
        return '<rect width="60" height="40" fill="#fff"/><polygon points="30,6 54,20 30,34 6,20" fill="#c0392b"/>';
      case 'G':
        return '<rect width="60" height="40" fill="#f1c40f"/><rect x="26" width="8" height="40" fill="#0252CD"/><rect y="16" width="60" height="8" fill="#0252CD"/>';
      case 'H':
        return '<rect width="30" height="40" fill="#fff"/><rect x="30" width="30" height="40" fill="#c0392b"/>';
      case 'I':
        return '<rect width="60" height="40" fill="#1a0e05"/><circle cx="30" cy="20" r="10" fill="#f1c40f"/>';
      case 'J':
        return '<rect width="60" height="13" fill="#0252CD"/><rect y="13" width="60" height="14" fill="#fff"/><rect y="27" width="60" height="13" fill="#0252CD"/>';
      case 'K':
        return '<rect width="60" height="40" fill="#0252CD"/><line x1="0" y1="0" x2="60" y2="40" stroke="#f1c40f" stroke-width="6"/><line x1="60" y1="0" x2="0" y2="40" stroke="#f1c40f" stroke-width="6"/>';
      case 'L':
        return '<rect width="30" height="20" fill="#f1c40f"/><rect x="30" width="30" height="20" fill="#1a0e05"/><rect y="20" width="30" height="20" fill="#c0392b"/><rect x="30" y="20" width="30" height="20" fill="#f1c40f"/>';
      case 'M':
        return '<rect width="60" height="40" fill="#0252CD"/><line x1="30" y1="0" x2="30" y2="40" stroke="#fff" stroke-width="5"/><line x1="0" y1="20" x2="60" y2="20" stroke="#fff" stroke-width="5"/>';
      case 'N':
        return '<rect width="60" height="40" fill="#fff"/><g fill="#0252CD"><rect width="15" height="10"/><rect x="15" y="10" width="15" height="10" fill="#fff"/><rect x="30" width="15" height="10"/><rect x="45" y="10" width="15" height="10" fill="#fff"/><rect y="20" width="15" height="10" fill="#fff"/><rect x="15" y="20" width="15" height="10"/><rect x="30" y="20" width="15" height="10" fill="#fff"/><rect x="45" y="20" width="15" height="10"/><rect y="30" width="15" height="10" fill="#fff"/><rect x="15" y="30" width="15" height="10"/><rect x="30" y="30" width="15" height="10" fill="#fff"/><rect x="45" y="30" width="15" height="10"/></g>';
      case 'O':
        return '<polygon points="0,0 60,0 60,40" fill="#f1c40f"/><polygon points="0,0 0,40 60,40" fill="#c0392b"/>';
      case 'P':
        return '<rect width="60" height="40" fill="#0252CD"/><rect x="18" y="10" width="24" height="20" fill="#fff"/>';
      case 'Q':
        return '<rect width="60" height="40" fill="#f1c40f"/>';
      case 'R':
        return '<polygon points="0,0 60,0 30,20" fill="#c0392b"/><polygon points="0,40 60,40 30,20" fill="#f1c40f"/>';
      case 'S':
        return '<rect width="60" height="40" fill="#0252CD"/><circle cx="18" cy="20" r="6" fill="#fff"/><circle cx="30" cy="20" r="6" fill="#fff"/><circle cx="42" cy="20" r="6" fill="#fff"/>';
      case 'T':
        return '<rect width="60" height="13" fill="#c0392b"/><rect y="13" width="60" height="14" fill="#fff"/><rect y="27" width="60" height="13" fill="#c0392b"/>';
      case 'U':
        return '<rect width="30" height="20" fill="#c0392b"/><rect x="30" width="30" height="20" fill="#fff"/><rect y="20" width="30" height="20" fill="#fff"/><rect x="30" y="20" width="30" height="20" fill="#c0392b"/>';
      case 'V':
        return '<rect width="60" height="40" fill="#fff"/><line x1="30" y1="2" x2="30" y2="38" stroke="#c0392b" stroke-width="7"/><line x1="4" y1="20" x2="56" y2="20" stroke="#c0392b" stroke-width="7"/>';
      case 'W':
        return '<rect width="60" height="40" fill="#0252CD"/><circle cx="15" cy="12" r="4" fill="#fff"/><circle cx="45" cy="12" r="4" fill="#fff"/><circle cx="15" cy="28" r="4" fill="#fff"/><circle cx="45" cy="28" r="4" fill="#fff"/>';
      case 'X':
        return '<rect width="60" height="40" fill="#0252CD"/><line x1="30" y1="0" x2="30" y2="40" stroke="#fff" stroke-width="6"/><line x1="0" y1="20" x2="60" y2="20" stroke="#fff" stroke-width="6"/>';
      case 'Y':
        return '<polygon points="0,0 60,40 0,40" fill="#f1c40f"/><polygon points="0,0 60,0 60,40" fill="#c0392b"/>';
      case 'Z':
        return '<polygon points="0,0 30,0 0,20" fill="#f1c40f"/><polygon points="30,0 60,0 60,20" fill="#c0392b"/><polygon points="0,20 30,40 0,40" fill="#0252CD"/><polygon points="30,20 60,20 60,40 30,40" fill="#f1c40f"/>';
      default:
        return '<rect width="60" height="40" fill="#ccc"/>';
    }
  }

  function flagSvg(letter, w, h) {
    const L = (letter || '').toUpperCase();
    const meta = FLAGS[L];
    const label = meta ? meta.name + ' · ' + L : L;
    return (
      '<svg viewBox="0 0 60 40" width="' +
      w +
      '" height="' +
      h +
      '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bandera ' +
      label +
      '">' +
      pattern(L) +
      '</svg>'
    );
  }

  /** Cinco banderas del mensaje (orden NAVES) */
  function deckFlagsStripSvg() {
    const letters = ['N', 'A', 'V', 'E', 'S'];
    const parts = letters
      .map(function (lt) {
        const meta = FLAGS[lt];
        return (
          '<g class="deck-flag-cell">' +
          flagSvg(lt, 72, 48) +
          '<text x="36" y="58" text-anchor="middle" font-family="monospace" font-size="9" fill="#7ecdc4">' +
          meta.name +
          ' · ' +
          lt +
          '</text></g>'
        );
      })
      .join('');
    return (
      '<svg viewBox="0 0 400 64" width="100%" style="max-width:min(100%,420px);height:auto;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cinco banderas en orden">' +
      '<rect width="400" height="64" fill="#08111e" rx="6"/>' +
      parts +
      '</svg>'
    );
  }

  function renderDeckFlagsStrip(container) {
    if (!container) return;
    container.innerHTML =
      '<div style="font-size:8px;color:#4a6a8a;font-family:monospace;margin-bottom:8px;letter-spacing:2px;text-transform:uppercase;">?? Banderas del mensaje (izquierda ? derecha) ??</div>' +
      '<div class="deck-flags-wrap" style="display:flex;flex-wrap:wrap;justify-content:center;gap:clamp(8px,2vw,14px);padding:12px;background:#08111e;border:1px solid #1a2e4a;border-radius:9px;margin-bottom:11px;">' +
      ['N', 'A', 'V', 'E', 'S']
        .map(function (lt) {
          const meta = FLAGS[lt];
          return (
            '<div style="text-align:center;flex:0 0 auto">' +
            flagSvg(lt, 72, 48) +
            '<div style="font-family:monospace;font-size:9px;color:#4ecdc4;margin-top:4px;letter-spacing:.05em">' +
            meta.name +
            ' · ' +
            lt +
            '</div></div>'
          );
        })
        .join('') +
      '</div>';
  }

  function renderAlphabetTable(container) {
    if (!container) return;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const rows = letters
      .map(function (lt) {
        const meta = FLAGS[lt];
        return (
          '<tr><td style="width:72px;text-align:center;padding:6px 4px">' +
          flagSvg(lt, 54, 36) +
          '</td><td><strong>' +
          lt +
          '</strong></td><td>' +
          meta.name +
          '</td><td>' +
          meta.desc +
          '</td></tr>'
        );
      })
      .join('');
    container.innerHTML =
      '<table class="flag-table flag-alphabet-full"><thead><tr><th>Bandera</th><th>Letra</th><th>Nombre</th><th>Descripción</th></tr></thead><tbody>' +
      rows +
      '</tbody></table>';
  }

  global.SignalFlags = {
    FLAGS: FLAGS,
    flagSvg: flagSvg,
    renderDeckFlagsStrip: renderDeckFlagsStrip,
    renderAlphabetTable: renderAlphabetTable
  };
})(typeof window !== 'undefined' ? window : globalThis);
