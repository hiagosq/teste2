function getDB() {
  return JSON.parse(localStorage.getItem("rpgDB")) || {};
}

function saveDB(db) {
  localStorage.setItem("rpgDB", JSON.stringify(db));
}

function saveData(key, value) {
  const player = localStorage.getItem("player") || "default";
  const character = localStorage.getItem("character") || "default";

  let db = getDB();

  if (!db[player]) db[player] = {};
  if (!db[player][character]) db[player][character] = {};

  db[player][character][key] = value;

  saveDB(db);
}

function loadData(key) {
  const player = localStorage.getItem("player") || "default";
  const character = localStorage.getItem("character") || "default";

  let db = getDB();

  return db?.[player]?.[character]?.[key] || null;
}