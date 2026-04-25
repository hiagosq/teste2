async function login() {
  const player = document.getElementById("player").value.trim();
  const character = document.getElementById("character").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (!player || !character) {
    errorMsg.innerText = "Preencha todos os campos.";
    return;
  }

  const res = await fetch("data/players.json");
  const data = await res.json();

  const valid = data.find(
    p => p.player === player && p.character === character
  );

  if (valid) {
    localStorage.setItem("player", player);
    localStorage.setItem("character", character);
    window.location.href = "ficha.html";
  } else {
    errorMsg.innerText = "Player ou personagem inválido.";
  }
}