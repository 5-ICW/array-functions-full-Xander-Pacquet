let wagens = [
  { kleur: "zwarte", merk: "Mercedes", bouwjaar: 2000, prijs: 16000 },
  { kleur: "rode", merk: "Ford", bouwjaar: 2020, prijs: 35000 },
  { kleur: "groene", merk: "Volvo", bouwjaar: 2009, prijs: 20000 },
];

wagens.sort((a, b) => a.merk.localeCompare(b.merk));
console.log(wagens);
