import { pedirCarta } from ".";
import { crearCarta } from ".";
import { acumularPuntos } from ".";
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosJugadores Elemento HTML para mostrar los puntos 
 * @param {Array<String>} deck
 */
export const turnoComputadora = ( puntosMinimos, puntosJugadores, deck = [], divCartasJugadores, puntajeJugador ) => {
  let puntosComputadora = 0;

  if ( !puntosMinimos ) throw new Error ('Puntos mínimos son necesarios');

  do {
    const carta = pedirCarta( deck );
    const turno = puntosJugadores.length - 1;
    puntosComputadora = acumularPuntos(carta, turno, puntosJugadores, puntajeJugador);
    crearCarta(carta, turno, divCartasJugadores);
  } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 ) );
  

  determinarGanador(puntosJugadores);
}
const determinarGanador = (puntosJugadores) => {

    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
  
  setTimeout(() => { 
          
      if(puntosComputadora === puntosMinimos ){
          alert('No winner :(' );
      } else if ( puntosMinimos > 21){
          alert('Game over, computer win :(');
      } else if ( puntosComputadora > 21 ) {
          alert('Player win');
      } else if ( puntosMinimos === 21 && puntosComputadora <21){
          alert('Player win');
      }
          else{
          alert(('Computer win'));
      }
          ; 
  }, 600 );

}

