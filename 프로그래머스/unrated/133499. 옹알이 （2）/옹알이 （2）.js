function solution(babbling) {
    let arr = ["aya", "ye", "woo", "ma"];
    let str;
    let temp;
    let count = 0;
    
    for(let i = 0 ; i < babbling.length; i++){
        str="";
        temp=""
        for(let j = 0; j < babbling[i].length; j++) {
            str += babbling[i][j];
 
            if(arr.indexOf(str) != -1 ) { //똑같은 게 있을때
                if(temp == str) break;
                else {temp = str; str = "";}
            }
            
        }
        if(str == "") count++;
        
    }
    return count;
}