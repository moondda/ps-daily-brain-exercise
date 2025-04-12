/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    //많은거 부터 push

    const map = new Map();

    for(let i of s) {
        map.set(i, (map.get(i) || 0) + 1);
    }

    const sortedMap = new Map([...map.entries()].sort((a,b) => b[1]-a[1]));

    let answerArr = '';

    for(const [key,val] of sortedMap) {
        for(let i=0; i<val; i++) answerArr+=key;
    }
    return answerArr;
};