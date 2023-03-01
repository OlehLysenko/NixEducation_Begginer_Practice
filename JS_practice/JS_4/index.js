const arr1 = ["Саша", "Петя", "Оксана"];

//1
arr1[1] = "Олег";
arr1.reverse();

//2
const arr2 = [];
for (let i = arr1.length-1; i >= 0; i--) {
    arr2.push(arr1[i])
}
arr2[1]="Олег"