function getModifier(value) {
  return Math.floor((value - 10) / 2);
}

const attrs = ["str","dex","con","int","wis","cha"];

function getModifier(v) {
return Math.floor((v - 10) / 2);
}

attrs.forEach(attr => {
document.getElementById(attr).addEventListener("input", () => {
const val = parseInt(document.getElementById(attr).value) || 0;
const mod = getModifier(val);

```
document.getElementById(attr + "-mod").innerText =
  mod >= 0 ? "+" + mod : mod;
```

});
});
