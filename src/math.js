function addizione(a, b) {
    return a + b;
} 

function sottrazione(a, b) {
    return a - b;
}

function moltiplicazione(a, b) {
    return a * b;
}

function divisione(a, b) {
    if (b === 0) throw new Error("Divisione per zero non consentita.");
    return a / b;
}

function potenza(a, b) {
    return Math.pow(a, b);
}

module.exports = { addizione, sottrazione, moltiplicazione, divisione, potenza };