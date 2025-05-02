#Studente: Spada Roberto

# (Prima parte) Progetto di Test con Jest e CI con GitHub Actions

Questo progetto si concentra sulla creazione di un'applicazione di test con Jest e sull'integrazione della **Continuous Integration (CI)** tramite **GitHub Actions**. Di seguito sono riportati i passaggi che ho seguito per configurare il progetto, eseguire i test e configurare una pipeline CI.

## Contenuto del progetto

- **Framework di Test**: Jest
- **Automazione CI**: GitHub Actions
- **Gestione delle Dipendenze**: npm (Node.js)
- **Struttura del Progetto**: Una struttura di base che include una cartella di test (`ssgs-calc`), all'interno della quale si trovano i test.

## Configurazione dell'ambiente di test

### 1. Creazione dei Test

Ho creato un modulo di test per l'operazione di **addizione**. Questo modulo eseguiva un semplice test per verificare che l'addizione tra due numeri restituisse il risultato corretto.

```javascript
test('addizione di due numeri positivi (3 + 4 = 7)', () => {
    expect(math.addizione(3, 4)).toBe(7);
});
```

### 2. Test Errati (Test Destinati a Fallire)

Ho creato anche un test che era destinato a fallire, per testare il comportamento di Jest quando i test non passano e verificare che la pipeline CI riportasse correttamente l'errore. 
Questo è stato fatto per simulare un errore di test e per gestire correttamente i fallimenti dei test all'interno della pipeline.

```javascript
test('should add 3 and 5 correctly', () => {
  expect(3 + 5).toBe(7);
});
```
### 3. Configurazione di Jest

Ho configurato Jest come framework di test per eseguire i test. 
Jest è una libreria di testing molto potente per JavaScript, che ci permette di scrivere test unitari in modo semplice e di eseguire il test delle nostre funzioni.
Ho installato Jest come dipendenza di sviluppo:

```bash
npm install --save-dev jest
```
### 4. Configurazione della Pipeline CI con GitHub Actions
Per eseguire automaticamente i test ogni volta che viene fatto un push o una pull request sul ramo main, ho configurato una pipeline CI/CD utilizzando GitHub Actions. La configurazione di GitHub Actions è definita in un file YAML che si trova nella cartella .github/workflows/.

```yml

name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies in ssgs-calc
        run: |
          cd ssgs-calc
          npm install

      - name: Run tests in ssgs-calc
        run: |
          cd ssgs-calc
          npm test
```

### 5. Ignorare un Test Fallito

Per evitare che un test fallito interrompesse l'esecuzione della pipeline, ho utilizzato .skip per ignorare temporaneamente il test fallito.

```javascript
test.skip('should add 3 and 5 correctly', () => {
  expect(3 + 5).toBe(7);  // Questo test è errato e lo ignoriamo per ora
});
```

### 6. Pipeline e Gestione dei Risultati

Ogni volta che veniva fatto un push o una pull request, la pipeline CI eseguiva i test nel repository. 
Nel mio caso, uno dei test è stato ignorato (con .skip) per evitare che il fallimento di quel test compromettesse l'intero processo.
Ho anche esaminato i risultati della pipeline CI per vedere i test passati e ignorati:
 1. Quando un test fallito veniva ignorato, il risultato finale mostrava solo il test passato.
 2. Se un test veniva eseguito con successo, veniva segnalato come "success".

# (Seconda parte) Progetto cacolatrice con "coverage 100%"

questo progetto si conncentra invece sulla realizzazione di una piccola calcolatrice e della creazione di test che permettano una coverage del 100%

## Contenuto del progetto

- **Framework di Test**: Jest
- **Automazione CI**: GitHub Actions
- **Gestione delle Dipendenze**: npm (Node.js)
- **Struttura del Progetto**: Una struttura di base che include una cartella di test (`ssgs-calc`), all'interno della quale si trovano i test e la calcolatrice.

### 1. Creazione della cacolatrice

Ho creato una piccola calcolatrice che permettesse, tramite iterazione con l'utente, di scegliere quale operazione adoperare tra una scelta limitata (Addizione, moltiplicazione, sottrazione, divisone e potenza).
L'iterazione avviene tramite passi specifici e sequenziali:
 1. Viene stampato un menù che illustra le operazioni tra cui scegliere
 2. Viene chiesto all'utente di scegliere una delle operazioni
 3. Una volta scelta viene chiesto di inserire il primo numero
 4. Una volta inserito viene chiesto di inserire il secondo numero
 5. Se quello che viene inserito è accettabile viene stampato il risultato, altrimenti, si ritorna al punto 1

### 2. Creazione di test con coverage 100%

Ho modificatio il file di test della prima parte, aggiungedo nuovi test che andassero a coprire tutte le altre operazioni oltre la somma.
I test aggiunti sono:

```javascript
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
```

# 3. Verifica della coverage 100% (no Github actions)

Ho verificato che i test coprissero interamente le 5 operazioni, scritte del file math.js.
per farlo ho modificato il file .json aggiungento questa linea di codice:

```json 
"test:coverage": "jest --coverage"
```
Eseguendo il comando:
```bash
  npm test:coverage
```
Il risultato ha dato esito positivo, ovvero 100% coverage.

# 4. Verifica della coverage 100% (Github actions)

Ho verificato che anche con Github actions tutto andaase come previsto.
Ho aggiunto delle linee di codice al mio file ci.yml:

```yml 
 name: Run tests with coverage
        run: |
          cd ssgs-calc
          npm run test:coverage
```
Il risultato ha dato esito positivo, ovvero 100% coverage.
