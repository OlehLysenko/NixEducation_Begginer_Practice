const unwantedNames = ["Діма", "Саша", "Ольга", "Микита"];

function deleteUnwantNames(array){
    unwantedNames.forEach(name1=> {
        array.forEach((name2,i)=> {
            if (name1 == name2) {
                array.splice(i,1)
            }
        })
    })
    return array
}