function maxDiff(array) {
  if (array.length != 0) {
    array.sort((a, b) => a - b);
    return array[array.length - 1] - array[0];
  } else return 0;
}
