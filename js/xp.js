function updateHP() {
const hp = parseInt(document.getElementById("hp-value").value) || 0;
const max = 100; // depois podemos deixar dinâmico

const percent = Math.max(0, Math.min(100, (hp / max) * 100));

document.getElementById("hp-fill").style.width = percent + "%";
}

function updateXP() {
const xp = parseInt(document.getElementById("xp").value) || 0;
const max = 1000;

const percent = Math.max(0, Math.min(100, (xp / max) * 100));
document.getElementById("xp-fill").style.width = percent + "%";
}


