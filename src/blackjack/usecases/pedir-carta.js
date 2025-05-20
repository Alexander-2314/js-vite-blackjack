
/**
 * Esta función me permite tomar una carta
 * @param {Array <String>} deck Es un arreglo de String
 * @returns {String} Retorna la carta pedida
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay más cartas en la baraja';
    }
    const carta = deck.pop();
    return carta;
}