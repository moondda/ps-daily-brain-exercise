function solution(n, bans) {
    //ban된것의 원래 사전 순서 구하기 => strToNum 
    //n이랑 비교해서 ban된게 목표순서(n)보다 먼저 나오면 목표순서+1 해야함
    //숫자로 사전알파벳 구하기 => numToStr
    const strToNum = (str) => {
        let num = 0;
        for(let i=0; i<str.length; i++) {
            num = num*26 + (str.charCodeAt(i) -97 + 1);
        }
        return num;
    }
    
    const bansNum = bans.map((ban)=> strToNum(ban)).sort((a,b)=> a-b);
    let target = n; 
    for(let ban of bansNum) {
        if(ban <= target) target += 1;
    }
    
    const numToStr = (num) => {
        let s = '';
        while(num > 0) {
            num--;
            s = String.fromCharCode(num % 26 + 97) + s;
            num = Math.floor(num / 26);
        }
        return s;
        
    }
    return numToStr(target);
}