# Studente: Spada Roberto

# Calcolatrice con Test Automatizzati e CI

Un semplice progetto Node.js che implementa una calcolatrice da linea di comando e una suite completa di test unitari con Jest. Include una pipeline CI/CD automatizzata tramite GitHub Actions, con coverage dei test al 100%.

## 📦 Contenuto del progetto

- **Framework di Test**: Jest
- **Automazione CI**: GitHub Actions
- **Gestione delle Dipendenze**: npm (Node.js)
- **Struttura del Progetto**:
```lua
  ssgs-calc/
     ├── src/
       ├── math.js
       ├── calc.js
     ├── test/
       ├── math.test.js
├── package.json
└── ...
```

## ⚙️ Prerequisiti

1. Node.js versione 18.x o superiore
2. npm (incluso con Node.js)
3. Accesso a un terminale per esecuzione

## 🚀 Installazione

1. Clona il repository:

```bash
git clone https://github.com/ExoticP4nda/ssgs-calc.git
cd ssgs-calc
```

2. Installa le dipendenze:

```bash
npm ci
```

## 🧮 Utilizzo della Calcolatrice

Avvia la calcolatrice dalla cartella src:

```bash
cd src
node calc.js
```
L'iterazione avviene tramite passi specifici e sequenziali:
 1. Viene stampato un menù che illustra le operazioni tra cui scegliere
 2. Viene chiesto all'utente di scegliere una delle operazioni
 3. Una volta scelta viene chiesto di inserire il primo numero
 4. Una volta inserito viene chiesto di inserire il secondo numero
 5. Se quello che viene inserito è accettabile viene stampato il risultato, altrimenti, si ritorna al punto 1


## 🧪 Esecuzione dei Test

Per eseguire i test unitari con coverage:

```bash
npm test
```

## 🔁 Integrazione Continua (CI)

Il progetto utilizza GitHub Actions per eseguire automaticamente i test su ogni push o pull request verso il branch main.

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
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies in ssgs-calc
        run: |
          npm ci 

      - name: Run tests in ssgs-calc
        run: |
          npm test

      - name: Upload coverage report as artifact
        uses: actions/upload-artifact@v4
        with:
          name: coverage-report
          path: ./coverage
```

## ✅ Coverage 100%

La suite di test copre tutte le funzioni della calcolatrice:

Addizione

Sottrazione

Moltiplicazione

Divisione (compresi casi di errore)

Potenza (inclusi casi particolari come esponente 0 o base 0)
