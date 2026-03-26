// ======================= IMPORTS =======================
const fs = require('fs');          // bestanden lezen
const fetch = require('node-fetch'); // HTTP POST naar backend

// ======================= CONFIG =======================
const BACKEND_URL = 'http://localhost:3000/ingest'; // backend endpoint
const SAMPLE_FILE = './database/sample-data.json'; // sample events

// ======================= READ EVENTS =======================
const rawData = fs.readFileSync(SAMPLE_FILE, 'utf-8'); // lees JSON file
const events = JSON.parse(rawData);                    // parse naar array

// ======================= SEND EVENTS =======================
async function replay() {
    console.log(`🔁 Replaying ${events.length} events...`);

    for (const event of events) {
        try {
            const res = await fetch(BACKEND_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(event)
            });

            if (res.ok) {
                console.log(`✅ Event ${event.timestamp} sent`);
            } else {
                console.warn(`⚠️ Failed to send event ${event.timestamp}`);
            }
        } catch (err) {
            console.error(`❌ Error sending event ${event.timestamp}:`, err);
        }
    }

    console.log('🎯 Replay complete!');
}

// ======================= RUN =======================
replay();
