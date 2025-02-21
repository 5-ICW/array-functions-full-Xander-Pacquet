let takenLijst = [];

function toeVoegen(taak) {
  takenLijst.push(taak);
}

function verwerken() {
  return takenLijst.shift();
}

toeVoegen("Taak 1");
console.log("Console 1:", [...takenLijst]);

toeVoegen("Taak 2");
console.log("Console 2:", [...takenLijst]);

toeVoegen("Taak 3");
console.log("Console 3:", [...takenLijst]);

verwerken();
console.log("Console 4:", [...takenLijst]);

toeVoegen("Taak 4");
console.log("Console 5:", [...takenLijst]);

verwerken();
console.log("Console 6:", [...takenLijst]);

toeVoegen("Taak 5");
console.log("Console 7:", [...takenLijst]);
