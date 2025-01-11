function solution(cards1, cards2, goal) {
    let cards1Pointer = 0;
    let cards2Pointer = 0;
    
    for(let i=0 ; i<goal.length; i++) {
        if(cards1[cards1Pointer] === goal[i] ) {
            cards1Pointer++;
        }
        else if(cards2[cards2Pointer] === goal[i] ) {
            cards2Pointer++;
        }
        else return "No";       
    }
    
    return "Yes";
}