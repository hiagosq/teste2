function getImageKey() {
  const player = localStorage.getItem("player") || "default";
  const character = localStorage.getItem("character") || "default";
  return `${player}_${character}_charImg`;
}

window.addEventListener("load", () => {

  const imgInput = document.getElementById("imgUpload");
  const img = document.querySelector(".char-img");

  if (imgInput) {
    imgInput.addEventListener("change", function () {
      const file = this.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        img.src = e.target.result;
        localStorage.setItem(getImageKey(), e.target.result);
      };

      reader.readAsDataURL(file);
    });
  }

  const saved = localStorage.getItem(getImageKey());
  if (saved && img) img.src = saved;

});