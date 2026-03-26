
const { classifyEvent } = require('./classifier');
const { parsePlayer } = require('./playerParser');
const { parseHeroes } = require('./heroParser');

async function processBattleQuestEvent(event, db) {
    const type = classifyEvent(event.payload);

    switch (type) {
        case 'PLAYER':
            const player = parsePlayer(event.payload);
            if (player) await db.upsertPlayer(player);
            break;

        case 'HERO':
            const heroes = parseHeroes(event.payload);
            for (const hero of heroes) await db.insertGBSnapshot(hero); // hergebruik GB snapshot table voor entities
            break;
    }
}

module.exports = { processBattleQuestEvent };
