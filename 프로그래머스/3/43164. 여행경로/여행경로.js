function solution(tickets) {
    let isVisited = Array(tickets.length).fill(false);
    let visitCount = 0;
    const answer = [];
    const dfs = (target,isVisited,visitCount,result) => {
        if(visitCount === tickets.length) {
            answer.push(result); return;
        }
        for(let i=0; i<tickets.length; i++) {
            const [start,end] = tickets[i];
            if(start === target && !isVisited[i]) {
                const newVisit = [...isVisited];
                newVisit[i] = true;
                dfs(end,newVisit,visitCount+1,[...result,end]);
            }
        }
    }
    dfs("ICN",isVisited,visitCount,["ICN"]);
    return isFirst(answer);;
}

const isFirst = (answer) => {
    let word = answer.map((e,idx)=> [e.join(""), idx]);
    const sorted = word.sort();
    return answer[sorted[0][1]];
    
}