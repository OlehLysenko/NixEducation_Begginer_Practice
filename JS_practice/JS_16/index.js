function limitStr(string, strLength) {
  const arrFromStr = string.split(/(?:[,\s.]+)/);
  return arrFromStr.filter((word) => word.length >= strLength && word);
}
