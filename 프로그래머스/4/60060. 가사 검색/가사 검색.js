class TrieNode {
    constructor() {
        this.children = new Map();
        this.count = 0;
    }
    
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        node.count++;
        for(let ch of word) {
            if(!node.children.has(ch)) {
                node.children.set(ch, new TrieNode());
            }
            node = node.children.get(ch);
            node.count++;
        }
    }
    
    search(word) {
        let node = this.root;
        for(let ch of word) {
            if(ch === "?") break;
            if(!node.children.has(ch)) return 0;
            else node = node.children.get(ch);
        }
        return node.count
    }
    
}

function solution(words, queries) {
    let allWords = Array.from({ length: 10001 }, () => new Trie());
    let reverseWords = Array.from({ length: 10001 }, () => new Trie());
    
    for(let word of words){
        allWords[word.length].insert(word);
        reverseWords[word.length].insert(word.split("").reverse().join(""))     
    }   
    
    
    
    let answer = new Array(queries.length).fill(0);
    
    for(let i=0; i<queries.length; i++) {
        let q = queries[i];
        if(q[0] === "?" && reverseWords[q.length]) answer[i] += (reverseWords[q.length].search(q.split("").reverse().join("")));
        if(q[0] !== "?" && allWords[q.length]) answer[i] += allWords[q.length].search(q)
    }
    return answer;
}