let spells = [];

function addSpell() {
  const nome = prompt("Nome da magia");
  if (!nome) return;

  const tipo = prompt("Tipo (magia ou truque)")?.toLowerCase();
  const dano = prompt("Dano");
  const conj = prompt("Tipo de conjuração");
  const ativacao = prompt("Como ativa");
  const desc = prompt("Descrição");

  const spell = { nome, tipo, dano, conj, ativacao, desc };

  spells.push(spell);
  saveData("spells", spells);

  renderSpells();
}

function renderSpells() {
  const list = document.getElementById("spells-list");
  if (!list) return;

  list.innerHTML = "";

  spells.forEach((spell, index) => {
    const card = document.createElement("div");
    card.className = "spell-card";
    card.dataset.tipo = spell.tipo;

    card.innerHTML = `
      <div class="spell-title" onclick="toggleSpell(${index})">
        <strong>${spell.nome}</strong>
        <span class="tag">${spell.tipo}</span>
      </div>

      <div class="spell-body hidden" id="spell-${index}">
        <p><b>Dano:</b> ${spell.dano}</p>
        <p><b>Conjuração:</b> ${spell.conj}</p>
        <p><b>Ativação:</b> ${spell.ativacao}</p>
        <p>${spell.desc}</p>
      </div>
    `;

    list.appendChild(card);
  });
}

function toggleSpell(index) {
  document.getElementById(`spell-${index}`).classList.toggle("hidden");
}

function filterSpells() {
  const filter = document.getElementById("spell-filter").value;
  const cards = document.querySelectorAll(".spell-card");

  cards.forEach(card => {
    card.style.display =
      filter === "all" || card.dataset.tipo === filter ? "block" : "none";
  });
}