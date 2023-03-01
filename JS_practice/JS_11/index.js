function muliplyArrsDiff(arr1, arr2) {
  return (
    arr1.reduce((acc, val) => acc * val, 1) -
    arr2.reduce((acc, val) => acc * val, 1)
  );
}