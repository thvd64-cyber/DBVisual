// ============ backend/server.js v0.0.0 ================
// ======================= IMPORTS =======================
const express = require('express'); // web server framework
const cors = require('cors'); // cross-origin requests toestaan

// ======================= INIT =======================
const app = express(); // maak express app
app.use(cors()); // enable CORS zodat extension kan connecteren
app.use(express.json()); // parse JSON body

// ======================= TEST ROUTE =======================
app.get('/', (req, res) => { // simpele test endpoint
    res.send('DBVisual backend running'); // response tekst
});

// ======================= INGEST ENDPOINT =======================
app.post('/ingest', (req, res) => { // endpoint voor binnenkomende data
    console.log('📥 Event ontvangen:'); // log start
    console.log(JSON.stringify(req.body, null, 2)); // toon JSON netjes

    res.status(200).send('OK'); // bevestiging terug naar client
});

// ======================= START SERVER =======================
app.listen(3000, () => { // start server op poort 3000
    console.log('🚀 Server running on http://localhost:3000'); // log
});
