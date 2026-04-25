const skillsList = [
  "Atletismo", "Acrobacia", "Furtividade", "Prestidigitação",
  "Arcanismo", "História", "Investigação", "Natureza", "Religião",
  "Adestrar Animais", "Intuição", "Medicina", "Percepção", "Sobrevivência",
  "Atuação", "Enganação", "Intimidação", "Persuasão"
];

let savedSkills = {};

window.addEventListener("load", () => {
  const container = document.getElementById("skills");
  if (!container) return;

  savedSkills = loadData("skills") || {};

  skillsList.forEach(skill => {
    const div = document.createElement("div");

    const isChecked = savedSkills[skill]?.checked || false;
    const value = savedSkills[skill]?.value || 0;

    div.innerHTML = `
      <span>${skill}</span>
      <input type="checkbox" ${isChecked ? "checked" : ""}>
      <input type="number" value="${value}">
    `;

    const checkbox = div.children[1];
    const number = div.children[2];

    checkbox.addEventListener("change", saveSkills);
    number.addEventListener("input", saveSkills);

    container.appendChild(div);
  });
});

function saveSkills() {
  const rows = document.querySelectorAll("#skills div");

  let data = {};

  rows.forEach(row => {
    const name = row.children[0].innerText;
    const checked = row.children[1].checked;
    const value = parseInt(row.children[2].value) || 0;

    data[name] = { checked, value };
  });

  saveData("skills", data);
}