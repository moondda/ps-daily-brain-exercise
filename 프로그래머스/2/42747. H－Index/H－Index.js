function solution(citations) {
    const sortedCitations = citations.sort(function(a, b)  {
  return a - b;
});
    
   // 0 4 4 4 4 5 6
   // 99 98 100 101 
    console.log(sortedCitations)
    // 101 50 30 1 
    for(let i = sortedCitations[sortedCitations.length-1]  ; i  >= 0; i--) {
        let count = 0 ;
        for(let j=0; j < sortedCitations.length ; j++) {
            if(i <= sortedCitations[j]) count++;
        }
        if(count >=i) return i;
        
    }
     return citations.length;
}