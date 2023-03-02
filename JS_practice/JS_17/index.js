function divisibleByThree(number) {
  let sum = 0;
  for (const num of number) {
    sum += Number(num);
  }
  return sum % 3 == 0;
}