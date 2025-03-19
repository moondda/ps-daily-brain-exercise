function solution(user_id, banned_id) {
    var answer = 0;
    let count = 0;
    
    const isVisited = Array(user_id.length).fill(false);
    const matchedSet = new Set(); 
    
    //타겟banned_i , 방문한 array, banned 순회용 idx
    const dfs = (array, idx) => {
        if(idx > banned_id.length -1) {matchedSet.add(array.join(",")) ; return; }
    for(let i=0; i<user_id.length;i++) {
        if(array[i] === true) continue;
        if(user_id[i].length !== banned_id[idx].length) continue;
        let flag = false;
        
        for(let j=0; j<user_id[i].length; j++) {
            if(banned_id[idx][j] === '*') continue;
            if(user_id[i][j] !== banned_id[idx][j]) {
                flag = true; 
                break;
            } 
        }
        if(!flag) {
            const newArray = [...array];
            newArray[i] = true;
            dfs(newArray, idx+1);
        }
    }
}
    dfs(isVisited,0);
    return matchedSet.size;
}

