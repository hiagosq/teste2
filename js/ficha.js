function openTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  const selected = document.getElementById(tab);
  if (selected) selected.classList.add("active");
}

/* ================= XP TABLE ================= */
const xpTable = [
  300, 600, 1800, 3800, 7500, 9000, 11000, 14000, 16000, 21000,
  15000, 20000, 20000, 25000, 30000, 30000, 40000, 40000, 50000
];

/* ================= VIDA ================= */
function updateHP() {
  const current = parseInt(document.getElementById("hp-current")?.value) || 0;
  const max = parseInt(document.getElementById("hp-max")?.value) || 1;

  const percent = Math.max(0, Math.min(100, (current / max) * 100));
  document.getElementById("hp-fill").style.width = percent + "%";

  saveData("hp", { current, max });
}

/* ================= XP ================= */
function updateXP() {
  const xpInput = document.getElementById("xp-current");
  const levelInput = document.getElementById("level");

  let xp = parseInt(xpInput?.value) || 0;
  let level = parseInt(levelInput?.value) || 1;

  let xpMax = xpTable[level - 1] || xpTable[xpTable.length - 1];

  /* LEVEL UP */
  if (xp >= xpMax && level < 20) {
    let oldLevel = level;
    level++;

    alert("Você subiu de nível!\n" + oldLevel + " → " + level);

    levelInput.value = level;
    xpInput.value = 0;

    saveData("xp", { xp: 0, level });

    updateXP();
    return;
  }

  const percent = Math.max(0, Math.min(100, (xp / xpMax) * 100));
  document.getElementById("xp-fill").style.width = percent + "%";

  document.getElementById("xp-max").value = xpMax;

  saveData("xp", { xp, level });
}

/* ================= INFO PERSONAGEM ================= */
function saveCharacterInfo() {
  const data = {
    name: document.getElementById("char-name")?.value || "",
    race: document.getElementById("char-race")?.value || "",
    class: document.getElementById("char-class")?.value || "",
    subclass: document.getElementById("char-subclass")?.value || "",
    origin: document.getElementById("char-origin")?.value || ""
  };

  saveData("characterInfo", data);
}

/* ================= LOAD ================= */
window.onload = () => {

  /* VIDA */
  const hp = loadData("hp");
  if (hp) {
    document.getElementById("hp-current").value = hp.current;
    document.getElementById("hp-max").value = hp.max;
    updateHP();
  }

  /* XP */
  const xpData = loadData("xp");
  if (xpData) {
    document.getElementById("xp-current").value = xpData.xp;
    document.getElementById("level").value = xpData.level;
    updateXP();
  }

  /* INFO PERSONAGEM */
  const info = loadData("characterInfo");
  if (info) {
    if (document.getElementById("char-name")) document.getElementById("char-name").value = info.name;
    if (document.getElementById("char-race")) document.getElementById("char-race").value = info.race;
    if (document.getElementById("char-class")) document.getElementById("char-class").value = info.class;
    if (document.getElementById("char-subclass")) document.getElementById("char-subclass").value = info.subclass;
    if (document.getElementById("char-origin")) document.getElementById("char-origin").value = info.origin;
  }

  /* INVENTÁRIO */
  const savedItems = loadData("inventory");
  if (savedItems) {
    items = savedItems;
    renderItems();
  }

  /* MAGIAS */
  const savedSpells = loadData("spells");
  if (savedSpells) {
    spells = savedSpells;
    renderSpells();
  }
};

// AUTO SAVE DE TODOS OS INPUTS
window.addEventListener("load", () => {

  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      saveCharacterInfo();
    });
  });

});