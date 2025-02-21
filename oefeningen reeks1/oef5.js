let wagens = [
  { kleur: "zwarte", merk: "Mercedes", bouwjaar: 2000, prijs: 16000 },
  { kleur: "rode", merk: "Ford", bouwjaar: 2020, prijs: 35000 },
  { kleur: "groene", merk: "Volvo", bouwjaar: 2009, prijs: 20000 },
];

let merkEnBouwjaar = wagens.map((wagen) => ({
  merk: wagen.merk,
  bouwjaar: wagen.bouwjaar,
}));
console.log(merkEnBouwjaar);
