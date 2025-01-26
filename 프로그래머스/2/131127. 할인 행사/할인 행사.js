function solution(want, number, discount) {
    //10일동안 회원
    //매일, 한가지 제품 할인, 하나씩만 구매할수있음 할인하는건
    //10일 내내 제품을 원하는 개수만큼 살수있을때 회원가입
    //할인 받을 수 있는 회원등록 날짜의 총 일수를 return 
    //가능한 날이 없으면 0을 return
    //number의 원소의 합은 10
    
    //시간복잡도 n^2이상이면 안됨
    //알파벳 소문자로 이루어진 문자열
    
    var answer = 0;
    
    let wantParsed = {};
    
    for(let i=0; i<want.length; i++) {
        wantParsed[want[i]] = number[i];
    }
    
    console.log(wantParsed)
    
//     for(let i=0; i<discount.length; i++) {
//         console.log(wantParsed[discount[i]]);
//     }
    return answer;
}