// ================= AUTO SAVE GLOBAL =================

function autoSaveAll() {
  const data = {};

  // pega TODOS inputs
  const inputs = document.querySelectorAll("input, textarea, select");

  inputs.forEach(input => {
    const id = input.id;
    if (!id) return;

    if (input.type === "checkbox") {
      data[id] = input.checked;
    } else {
      data[id] = input.value;
    }
  });

  saveData("auto", data);
}

function autoLoadAll() {
  const data = loadData("auto");
  if (!data) return;

  Object.keys(data).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    if (el.type === "checkbox") {
      el.checked = data[id];
    } else {
      el.value = data[id];
    }
  });
}

// dispara quando qualquer coisa muda
function initAutoSave() {

  document.addEventListener("input", autoSaveAll);
  document.addEventListener("change", autoSaveAll);

}

// inicialização
window.addEventListener("load", () => {
  autoLoadAll();
  initAutoSave();
});