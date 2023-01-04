document.getElementById("btn").addEventListener("click", (event) => {
  main();
});

function main() {
  let word = document.getElementById("userin").value;
  let suffix = document
    .getElementById("userin")
    .value.toLowerCase()
    .substring(word.length - 2);

  if (suffix === "ir") {
    irVerbs(word.slice(0, word.length - 2));
  }
  if (suffix === "re") {
    reVerbs(word.slice(0, word.length - 2));
  }
  if (suffix === "er") {
    erVerbs(word.slice(0, word.length - 2));
  }
}

function irVerbs(baseWord) {
  document.getElementById("je").innerHTML = baseWord + "is";
  document.getElementById("tu").innerHTML = baseWord + "is";
  document.getElementById("il/elles/on").innerHTML = baseWord + "it";
  document.getElementById("nous").innerHTML = baseWord + "issons";
  document.getElementById("vous").innerHTML = baseWord + "issez";
  document.getElementById("ils/elles").innerHTML = baseWord + "issent";
  document.getElementById("output").innerHTML = "IR CONJUGATION:";
}

function erVerbs(baseWord) {
  document.getElementById("je").innerHTML = baseWord + "e";
  document.getElementById("tu").innerHTML = baseWord + "es";
  document.getElementById("il/elles/on").innerHTML = baseWord + "e";
  document.getElementById("nous").innerHTML = baseWord + "ons";
  document.getElementById("vous").innerHTML = baseWord + "ez";
  document.getElementById("ils/elles").innerHTML = baseWord + "ent";
  document.getElementById("output").innerHTML = "ER CONJUGATION:";
}

function reVerbs(baseWord) {
  document.getElementById("je").innerHTML = baseWord + "s";
  document.getElementById("tu").innerHTML = baseWord + "s";
  document.getElementById("il/elles/on").innerHTML = baseWord;
  document.getElementById("nous").innerHTML = baseWord + "ons";
  document.getElementById("vous").innerHTML = baseWord + "ez";
  document.getElementById("ils/elles").innerHTML = baseWord + "ent";
  document.getElementById("output").innerHTML = "RE CONJUGATION:";
}
