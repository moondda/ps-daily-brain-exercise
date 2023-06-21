function solution(food) {
    
    let result = "";
    
    for (let i=1; i < food.length ; i++) {
        food[i] = Math.floor (food[i] / 2);
        
        for(let j=0; j< food[i] ; j++) {
        result += i ;
        }
    }
    
    let reverseResult = result.split("").reverse().join("");
    

    return result + "0" + reverseResult ;
}