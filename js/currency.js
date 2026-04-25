let coins = {
pc: 0,
pp: 0,
pe: 0,
po: 0,
pl: 0
};

function toGold() {
return (
coins.pc / 100 +
coins.pp / 10 +
coins.pe / 2 +
coins.po +
coins.pl * 10
);
}

function updateCoins() {
document.getElementById("gold-total").innerText = toGold().toFixed(2);
}
