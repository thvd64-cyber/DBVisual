# DBVisual

DBVisual is een data platform voor het verzamelen, verwerken en visualiseren van game data.

## Features
- Data capture via browser extension
- Event-driven parsing pipeline
- PostgreSQL opslag met historiek
- Replay & debugging tools
- Multi-game support (FOE + uitbreidbaar)

## Status
🚧 In ontwikkeling – data pipeline wordt opgebouwd

Uitleg per sectie
Imports
fs → lees sample JSON file
fetch → stuurt events naar backend endpoint
Config
BACKEND_URL → waar je ingest endpoint draait
SAMPLE_FILE → path naar sample events
Read events
Parse JSON naar array zodat we meerdere events kunnen afhandelen
Send events
Loop door events
POST naar backend
console logs voor success/failure
Run
replay() start de tool
