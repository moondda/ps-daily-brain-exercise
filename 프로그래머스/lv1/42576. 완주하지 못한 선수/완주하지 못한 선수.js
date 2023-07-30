function solution(participant, completion) {
    
    let map = {};
    
    for(let i = 0 ; i < participant.length; i++) {
        map[participant[i]] = (map[participant[i]]) ? map[participant[i]] + 1 : 1;
    }
    
    for(let i = 0 ; i < completion.length; i++) {
        map[completion[i]] -= 1
    }
    
       for(let i = 0 ; i < participant.length; i++) {
       if( map[participant[i]] != 0) return participant[i];
    }
    

    
    
    
    
    return map
}