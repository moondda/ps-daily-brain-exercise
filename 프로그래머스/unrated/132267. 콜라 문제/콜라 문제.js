function solution(a, b, n) { // 5 3 30
    let count=0;
    return newN(a,b,n,count);
}

function newN(a,b,n,count) {
    if(n<a) return count;
    let cola=(parseInt(n/a))*b //최대로 마시고 얻는 콜라 7
    count += cola
    let remainder = n % a; //마시지 못하고 남은 콜라 2
    n= cola+remainder;
    return newN(a,b,n,count);
}