function remove(str, chars) {
  while (chars != 0) {
    str = str.replace(/!/, "");
    chars--;
  }
  return str;
}
