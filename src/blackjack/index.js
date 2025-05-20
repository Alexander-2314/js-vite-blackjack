import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCarta, acumularPuntos } from './usecases';

const miModulo = (() => {
  'use strict';

  let deck         = [];
  const tipos      = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];

  let puntosJugadores = [];

  const btnPedir   = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNewGame = document.querySelector('#btnNuevo');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntajeJugador   = document.querySelectorAll('small');

  let puntosJugador = 0;

  
  const inicializarJuego = ( numJugadores = 2 ) => {
          deck = crearDeck(tipos, especiales);

      puntosJugadores = [];
      for( let i = 0; i< numJugadores; i++ ){
          puntosJugadores.push(0);
      }

      puntajeJugador.forEach( elem => elem.innerText = 0)
      divCartasJugadores.forEach( elem => elem.innerText = "");

      btnPedir.disabled = false;
      btnDetener.disabled = false;

      }

  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta(deck);
      puntosJugador = acumularPuntos( carta, 0, puntosJugadores, puntajeJugador);

      crearCarta( carta, 0, divCartasJugadores);

      if ( puntosJugador > 21) {
          console.warn('GAME OVER');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosJugadores, deck, divCartasJugadores, puntajeJugador );
      } else if (puntosJugador === 21){
          console.warn('¡21!');
          btnDetener.disabled = true;
          btnPedir.disabled = true;
        turnoComputadora( puntosJugador, puntosJugadores, deck, divCartasJugadores, puntajeJugador );      
    }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugador, puntosJugadores, deck, divCartasJugadores, puntajeJugador);

  });

  btnNewGame.addEventListener('click', () => {

    inicializarJuego();


});

return {
nuevoJuego: inicializarJuego
};

})();

