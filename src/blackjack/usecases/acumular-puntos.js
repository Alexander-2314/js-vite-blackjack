import { valorCarta } from './valor-carta.js';


export const acumularPuntos = ( carta, turno, puntosJugadores, puntajeJugador ) => {
    
      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
      puntajeJugador[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno];
  }
