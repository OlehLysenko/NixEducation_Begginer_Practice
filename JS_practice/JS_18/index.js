function spacey(array){
    const arr = [array[0]]
    array.reduce((acc,val)=>{
        arr.push(acc+val)
        return acc+val
    })
    return arr
}