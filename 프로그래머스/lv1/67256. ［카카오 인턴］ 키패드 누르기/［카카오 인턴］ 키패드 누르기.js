function solution(numbers, hand) {
    
    let result="";
    
    let keyPad=[
                [0,0],[0,1],[0,2],
                [1,0],[1,1],[1,2],
                [2,0],[2,1],[2,2],
                [3,0],[3,1],[3,2]
               ];
    
    let leftPos=[3,0];
    let rightPos=[3,2];
    let leftDis,rightDis;
    
    
    for (let i=0; i<numbers.length; i++ ) {
        
        let nowPos=numbers[i];
        
        let tempPos;
        if(nowPos != 0) tempPos=keyPad[nowPos-1];
        else tempPos=[3,1];
        
        
        if(nowPos==1 || nowPos==4 || nowPos==7 ) {result+="L";leftPos=tempPos;}
        if(nowPos==3 || nowPos==6 || nowPos==9 ) {result+="R";rightPos=tempPos;}
        if(nowPos==2 || nowPos==5 || nowPos==8 || nowPos==0 ) {
            
            leftDis=Math.abs(tempPos[0] - leftPos[0]) + Math.abs(tempPos[1] - leftPos[1]);
            rightDis=Math.abs(tempPos[0] - rightPos[0]) + Math.abs(tempPos[1] - rightPos[1]);
        
            
            if(leftDis<rightDis) {result+="L";leftPos=tempPos;}
            if(leftDis>rightDis) {result+="R";rightPos=tempPos;}
            if(leftDis==rightDis){
                if(hand=="left") {result+="L";leftPos=tempPos;}
                if(hand=="right") {result+="R";rightPos=tempPos;}
            }
            
        }
        
    }
    return result;
    
}