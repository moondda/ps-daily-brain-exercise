function solution(edges) {
    //생성한 정점의 번호, 정점을 생성하기 전 도넛 모양 그래프의 수, 막대 모양 그래프의 수, 8자 모양 그래프의 수
    
    //[나가는 간선,들어오는 간선]
const graph = edges.reduce((acc,key)=> {
    if(!acc.has(key[0])) acc.set(key[0],[1,0]);
    else {
        acc.set(key[0], [acc.get(key[0])[0] + 1,acc.get(key[0])[1]]);
    }
    if (!acc.has(key[1])) acc.set(key[1], [0, 1]);
    else {
        acc.set(key[1], [acc.get(key[1])[0], acc.get(key[1])[1] + 1]);
    }
    return acc;
},new Map());
    
    let added = 0;
    //추가된정점은 들어오는 간선이 없다
    //추가된 정점은 나가는 간선의 개수가 2이상이다
    for (const [key, value] of graph) {
        if(value[0] >= 2 && value[1] === 0) {
            added = key;
            break;
        }
}
    
    const graph2 = edges.reduce((acc, [from, to]) => {
    if (from !== added) {
        if (!acc.has(from)) acc.set(from, []);
        acc.get(from).push(to);
    }
    return acc;
}, new Map());
    
    
    const answer = Array(4).fill(0);
    answer[0] = added;
    const target = [];
    for(const [key,value] of edges) {
        if(key === added) target.push(value);
    }
    
    
    for(let i=0; i< target.length; i++) {
        const first = target[i];
        let pick = first;
        let flag = false;
        //반복될때
         while(graph2.get(pick)) {
            let arr = graph2.get(pick);
            //끝이 있을때
            if (arr.length == 0) {answer[1] += 1;flag = true;break;}
            else {
                if(arr.length == 2) {answer[3] += 1;flag = true;break;}
                pick = arr.pop();
            }
        }
        if(!flag) answer[2] += 1;
    }
    return answer;
}