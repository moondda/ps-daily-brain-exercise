function solution(board, moves) {
    
    let doll=[];
    let result=0;
    
   for(let i=0; i<moves.length; i++ ) { 
    for(let j=0; j<board.length; j++) {
        
         if((board[j][moves[i]-1])!=0) {
             doll.push(board[j][moves[i]-1]);
             board[j][moves[i]-1]=0;
             
            if(doll.length > 1 && doll[doll.length-1]==doll[doll.length-2]) {
            doll.pop(); 
            doll.pop();
            result+=2;
          }
             break;
         }
        

     }
   }

    return result;
}