function solution(begin, target, words) {
    //5시 시작
    //최소 몇단계로 변환할 수 있는지
    
    const wordSet = new Set(words);
    const queue = [[begin,0,wordSet]]; //단어랑 몇 단계인지
    console.log(wordSet)
    
    const comp = (word1, word2) => {
        let count = 0;
        for(let i=0; i<word1.length;i++) {
            if(word1[i] !== word2[i]) count+=1;
        }
        if(count === 1) return true;
        else return false;
    }
    
    while(queue.length) {
        const [word,step,wordSet] = queue.shift();
        if(word === target) return step;
        
        for(let i of wordSet) {
            //변환 가능하면
            if(comp(word,i)) {
                const newWordSet = new Set([...wordSet]);
                newWordSet.delete(i);
                queue.push([i,step+1,newWordSet]);
            }
        }
              
    }
    return 0;
}