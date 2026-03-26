// ======================= backend/parser/index.js v0.0.0 =======================
const { classifyEvent } = require('./classifier');
const { parsePlayer } = require('./playerParser');
const { parseGreatBuildings } = require('./gbParser');

async function processFOEEvent(event, db) {
    const type = classifyEvent(event.payload);

    switch (type) {
        case 'PLAYER':
            const player = parsePlayer(event.payload);
            if (player) await db.upsertPlayer(player);

            const gbs = parseGreatBuildings(event.payload);
            for (const gb of gbs) await db.insertGBSnapshot(gb);
            break;

        // future types: RANKING, CITY
    }
}

module.exports = { processFOEEvent };
