const numArr = [10, 20, 30, 50, 235, 3000];

numArr.forEach((el) => {
  el = el.toString();
  if (el[0] === "1" || el[0] === "2" || el[0] === "5") {
    console.log(el);
  }
});
