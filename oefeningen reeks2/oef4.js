const fruits = ["banaan", "appel", "aardbei", "passivrucht", "kiwi"];
const sortedFruits = [...fruits].sort((a, b) => a.length - b.length);
console.log(sortedFruits);
