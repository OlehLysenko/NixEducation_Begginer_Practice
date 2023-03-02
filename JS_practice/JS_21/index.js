function switcheroo(str) {
  let str1 = "";
  for (const char of str) {
    if (char == "a") {
      str1 += "b";
    } else if (char == "b") {
      str1 += "a";
    } else str1 += char;
  }
  return str1;
}
