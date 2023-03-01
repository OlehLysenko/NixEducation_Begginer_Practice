let weight = 5.5;
let recommendation = "";

if (weight < 4) {
  recommendation = "Пора перекусити";
} else if ( weight >= 4 && weight < 5.5) {
  recommendation = "Вага в нормі";
} else if (weight >= 5.5) {
  recommendation = "Пора на тренування";
}

console.log(recommendation);
