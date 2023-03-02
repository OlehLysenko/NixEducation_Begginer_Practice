function evensAndOdds(num) {
  if (num % 2 == 0) {
    return num.toString(2)
  }
  if (num % 2 != 0) {
    return num.toString(16)
  }
}