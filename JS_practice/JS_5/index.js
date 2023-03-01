const num1 = prompt("Введіть перше число");
const num2 = prompt("Введіть друге число");

if (num1 > num2) {
  alert(`Сума чисел: ${Number(num1) + Number(num2)}`);
} else if (num1 < num2) {
  alert(`Добуток чисел: ${num1 * num2}`);
} else alert("Цифри однакові");
