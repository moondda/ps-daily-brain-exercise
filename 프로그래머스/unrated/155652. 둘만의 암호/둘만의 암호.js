function solution(s, skip, index) {
    
    let alphabet="abcdefghijklmnopqrstuvwxyz";
    let arr="";
    
    for(let i=0; i<skip.length; i++) {
        alphabet = alphabet.replace(skip[i], "");
    }
    
    for(let i=0; i<s.length; i++) {
    //두번 돌수도 있음 index가
        let num = alphabet.indexOf(s[i]) + index ;
        while ( num > alphabet.length -1 ) {
         num = num - alphabet.length ;
        }
        
           arr += alphabet [ num ];
    }
    
    return arr;
}