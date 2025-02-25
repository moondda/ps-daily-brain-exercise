/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    const dp = [0];
    let countOne = (s[0] === '1') ? 1 : 0;
    for(let i=1; i<s.length; i++) {
        if(s[i] === '1'){
            countOne += 1;
            dp.push(dp.at(-1));
        }
        //0일때
        else {
            dp.push(Math.min(dp.at(-1)+1 , countOne));

        }
    }

    return dp.at(-1);
};