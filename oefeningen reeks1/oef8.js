let wagens = [
  { kleur: "zwarte", merk: "Mercedes", bouwjaar: 2000, prijs: 16000 },
  { kleur: "rode", merk: "Ford", bouwjaar: 2020, prijs: 35000 },
  { kleur: "groene", merk: "Volvo", bouwjaar: 2009, prijs: 20000 },
];

function TotaalPrijs(wagenArray) {
  return wagenArray.reduce((totaal, wagen) => totaal + wagen.prijs, 0);
}

let totaalsom = TotaalPrijs(wagens);
console.log("Totale waarde van alle wagens: €" + totaalsom);
