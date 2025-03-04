function solution(edges) {
    //생성한 정점의 번호, 정점을 생성하기 전 도넛 모양 그래프의 수, 막대 모양 그래프의 수, 8자 모양 그래프의 수
const graph = edges.reduce((acc,key)=> {
    if(!acc.has(key[0])) acc.set(key[0],[key[1]]);
    else acc.get(key[0]).push(key[1]);
    return acc;
},new Map());
    
    console.log(graph)
}