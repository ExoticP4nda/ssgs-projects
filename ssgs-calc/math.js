const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


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

const greetings = [
    "Alla prossima!",
    "Ciao ciao",
    "Torna presto!",
];

function mostraMenu() {
    console.log("\nBenvenuto!");
    console.log("Operazioni disponibili:");
    console.log("1. Addizione");
    console.log("2. Sottrazione");
    console.log("3. Moltiplicazione");
    console.log("4. Divisione");
    console.log("5. Potenza");
    console.log("0. Esci");
}

function chiediOp() {
    mostraMenu();
    rl.question("Seleziona un'operazione (0-5): ", (opInput) => {
        const op = parseInt(opInput);

        if (op === 0) {
            const farewell = greetings[Math.floor(Math.random() * greetings.length)];
            console.log(`\n${farewell}\n`);
            rl.close();
            return;
        }

        if (![1, 2, 3, 4, 5].includes(op)) {
            console.log("Operazione non valida. Riprova.");
            return chiediOp();
        }

        mostraNum(op);
    });
}

function mostraNum(op) {
    rl.question("Inserisci il primo numero: ", (num1) => {
        rl.question("Inserisci il secondo numero: ", (num2) => {
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Valori non validi. Riprova.");
                return mostraNum(op);
            }

            const a = parseFloat(num1);
            const b = parseFloat(num2);

            try {
                let result;
                switch (op) {
                    case 1:
                        result = addizione(a, b);
                        break;
                    case 2:
                        result = sottrazione(a, b);
                        break;
                    case 3:
                        result = moltiplicazione(a, b);
                        break;
                    case 4:
                        result = divisione(a, b);
                        break;
                    case 5:
                        result = potenza(a, b);
                        break;
                }
                console.log(`Risultato: ${result}\n`);
            } catch (err) {
                console.log(`Errore: ${err.message}\n`);
            }

            chiediOp(); 
        });
    });
}

chiediOp();