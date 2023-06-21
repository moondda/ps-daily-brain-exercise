function solution(s) {
    
    let result = 0;
    
    while(s.length > 0) {
        
    if(s.length == 1) { result++; break; }
        
    if(s[0] != s[1]) {
        s = s.substring(2); 
        result++;
    }
        
    else {
            let compSameCount = 1;
            let compDiffCount = 0;
        
        for(let i=1; i < s.length; i++) {
            
            if(s[0] == s[i]) { compSameCount++; }
            else {compDiffCount++; }
            
            if(compSameCount == compDiffCount) { 
                s = s.substring(i+1);
                result++;
                break;
            } 
            
            if(i == s.length -1 ) { result++; return result; }
        }
        
    } 
    }
    
    return result;
    
}