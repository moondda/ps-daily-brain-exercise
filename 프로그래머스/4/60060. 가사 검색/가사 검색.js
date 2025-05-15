class TrieNode{
    constructor(){
        this.children = new Map(); 
        this.count = 0;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        node.count += 1;
        for(let ch of word) {
            if(!node.children.has(ch)) node.children.set(ch,new TrieNode());
            node = node.children.get(ch);
            node.count += 1;
        }
    }
    
    search(word){
        let node = this.root;
        
        for(let ch of word) {
            if(ch === "?") break;
            
            if(!node.children.get(ch)) return 0;
            else node = node.children.get(ch);
        }
        return node.count;
    }
}

function solution(words, queries) {
    //길이별 인덱스에 trie 저장 .백만
    let allWords = Array.from({length:10001}, ()=> new Trie());
    // 리버스도 같은 방식으로 저장 백만
    let allReverseWords = Array.from({length:10001}, ()=> new Trie());
    
    for(let word of words) {
        allWords[word.length].insert(word);
        allReverseWords[word.length].insert(word.split("").reverse().join(""))
    }
    
    
    //쿼리 반복문 돌면서 배열 채워나가기. 백만
    let result = new Array(queries.length).fill(0);
    
    for(let i=0; i<queries.length; i++) {
        //뒤집어야함
        if(queries[i][0] === '?') {
            const count = allReverseWords[queries[i].length].search(queries[i].split("").reverse().join(""));
            result[i] += count;
        }
        else {
            const count = allWords[queries[i].length].search(queries[i]);
            result[i] += count;
        }
    }
    
    return result;  
    
}