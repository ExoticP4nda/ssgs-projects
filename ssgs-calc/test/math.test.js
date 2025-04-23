const math = require('../math');


test('addizione di due numeri positivi (3 + 4 = 7)', () => {
    expect(math.addizione(3, 4)).toBe(7);
});

/* Test sbagliato (fallirà)
test.skip('3 + 5 dovrebbe essere 7(test sbagliato)', () => {
    const result = math.addizione(3, 5);
    expect(result).toBe(7);
});
*/


test('sottrazione tra due numeri (10 - 4 = 6)', () => {
    expect(math.sottrazione(10, 4)).toBe(6);
});


test('moltiplicazione tra due numeri (3 * 5 = 15)', () => {
    expect(math.moltiplicazione(3, 5)).toBe(15);
});


test('divisione tra due numeri (10 / 2 = 5)', () => {
    expect(math.divisione(10, 2)).toBe(5);
});


test('divisione per zero genera errore', () => {
    expect(() => math.divisione(5, 0)).toThrow("Divisione per zero non consentita.");
});


test('potenza con base positiva ed esponente positivo (2^3 = 8)', () => {
    expect(math.potenza(2, 3)).toBe(8);
});


test('potenza con esponente zero restituisce 1 (5^0 = 1)', () => {
    expect(math.potenza(5, 0)).toBe(1);
});


test('potenza con base zero restituisce 0 (0^5 = 0)', () => {
    expect(math.potenza(0, 5)).toBe(0);
});