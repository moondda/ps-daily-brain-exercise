function solution(a, b, n) { // 5 3 30
    let new_cola=n; //30
    let count=0;
    
    //let nowGetCola =0;
    while(new_cola>=a){ 
    // count+=parseInt(new_cola/a); 
    let cola=(parseInt(new_cola/a))*b //최대로 마시고 얻는 콜라 7
    count += cola
    let remainder;
    if(new_cola % a != 0 ) {
        remainder= new_cola % a; //마시지 못하고 남은 콜라 2
        new_cola= cola+remainder; 
        }
    else new_cola= cola;
    }
    return count;
}