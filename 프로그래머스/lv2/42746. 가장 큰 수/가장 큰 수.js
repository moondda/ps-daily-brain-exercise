function solution(numbers) {
    
    const answer = numbers
    .map(number => number.toString())
    .sort(function(a,b){
        return (b+a)-(a+b)
    })
    .join("");
    
    if(numbers.every( function( x ) { return x == 0 } )) return "0";
    
    
    return answer;
       
}