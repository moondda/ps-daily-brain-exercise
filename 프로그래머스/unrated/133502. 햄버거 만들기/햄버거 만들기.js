function solution(ingredient) {
    //1231
    let count = 0;
    
    for(let i=0; i<ingredient.length-3; i++) {
        if(ingredient.length < 4 ) break;
        if(ingredient[i] == 1 && ingredient[i+1] == 2 && ingredient[i+2] == 3 && ingredient[i+3] == 1) {
            ingredient.splice(i,4);
            i-=3;
            count++;
        }
    }
    
    
    return count;
}
    
