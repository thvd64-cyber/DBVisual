// ======================= backend/parser/index.js v0.0.0 =======================
// ======================= IMPORTS =======================

const { processFOEEvent } = require('./FOE/index');          // FOE parser pipeline
const { processBattleQuestEvent } = require('./BattleQuest/index'); // BattleQuest pipeline

// ======================= MULTI-GAME PROCESSOR =======================
async function processEvent(event, db) { // hoofd router
    const { game } = event; // verwacht game key in event payload

    switch (game) {
        case 'FOE': // Forge of Empires
            await processFOEEvent(event, db); // stuur door naar FOE parser
            break;

        case 'BattleQuest': // voorbeeld tweede game
            await processBattleQuestEvent(event, db); // stuur naar BattleQuest parser
            break;

        default:
            console.warn(`Unknown game type: ${game}`); // fallback
    }
}

module.exports = { processEvent };
