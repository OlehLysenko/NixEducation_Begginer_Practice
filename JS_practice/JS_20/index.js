function arrToNormObj(arr) {
  let objToReturn = {};
  arr.forEach((el) => {
    let type = typeof el;
    if (!objToReturn.hasOwnProperty(type)) {
      objToReturn[type] = [];
    }
    objToReturn[type].push(el);
  });
  return objToReturn;
}
