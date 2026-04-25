let items = [];

function addItem() {
  const nome = prompt("Nome do item");
  if (!nome) return;

  const tipo = prompt("Tipo (arma, armadura, item)");
  const dano = prompt("Dano");
  const distancia = prompt("Distância");
  const peso = prompt("Peso");
  const valor = prompt("Valor");

  const item = { nome, tipo, dano, distancia, peso, valor };

  items.push(item);
  saveData("inventory", items);

  renderItems();
}

function renderItems() {
  const list = document.getElementById("inventory-list");
  if (!list) return;

  list.innerHTML = "";

  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "inv-card";
    div.dataset.tipo = item.tipo;

    div.innerHTML = `
      <div class="inv-title" onclick="toggleItem(${index})">
        <strong>${item.nome}</strong>
        <span class="tag">${item.tipo}</span>
      </div>

      <div class="inv-body hidden" id="item-${index}">
        <p><b>Dano:</b> ${item.dano || "-"}</p>
        <p><b>Distância:</b> ${item.distancia || "-"}</p>
        <p><b>Peso:</b> ${item.peso || "-"}</p>
        <p><b>Valor:</b> ${item.valor || "-"}</p>
      </div>
    `;

    list.appendChild(div);
  });
}

function toggleItem(index) {
  document.getElementById(`item-${index}`).classList.toggle("hidden");
}

function filterItems() {
  const filter = document.getElementById("item-filter").value;
  const cards = document.querySelectorAll(".inv-card");

  cards.forEach(card => {
    card.style.display =
      filter === "all" || card.dataset.tipo === filter ? "block" : "none";
  });
}