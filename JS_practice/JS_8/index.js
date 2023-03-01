function finalGrade(grade, proj){
    let finalGr = 0
    if (grade>=90 || proj>=10) {
        finalGr = 100
    } else 
    if (grade>=75 || proj>=5) {
        finalGr = 90
    } else 
    if (grade>=50 && proj>=2) {
        finalGr = 75
    }
    console.log(finalGr) 
}
finalGrade(100, 12)
finalGrade(99, 0)
finalGrade(10, 15) 
finalGrade(85, 5)
finalGrade(55, 3) 
finalGrade(55, 0) 
finalGrade(20, 2) 