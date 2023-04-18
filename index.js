const keys = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const decript = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const btnCopiar = document.getElementById("copiar");
const input = document.getElementById("text-in");
const output = document.getElementById("text-out");

function encriptar(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (keys[text[i]]) {
      result += keys[text[i]];
    } else {
      result += text[i];
    }
  }
  return result;
}

function desencriptar(text) {
  let result = text;
  for (let key in decript) {
    result = result.replace(new RegExp(key, "g"), decript[key]);
  }
  return result;
}

function notShow(bool) {
  output.innerHTML = "Ningun mensaje fue encontrado";
}

notShow();

input.addEventListener("input", function () {
  if (input.value == "") {
    output.innerHTML = "Ningun mensaje fue encontrado";
  } else {
    output.innerHTML = "";
  }
});

btnEncriptar.addEventListener("click", () => {
  output.innerHTML = encriptar(input.value);
});

btnDesencriptar.addEventListener("click", () => {
  output.innerHTML = desencriptar(input.value);
});

btnCopiar.addEventListener("click", () => {
  const textoCopia = output.innerText;
  navigator.clipboard.writeText(textoCopia);
});
