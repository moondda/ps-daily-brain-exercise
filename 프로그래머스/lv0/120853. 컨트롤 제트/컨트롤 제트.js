function solution(s) {
    let s_arr = s.split(" ").map((e)=>(e != "Z" ? parseInt(e) : e));
    let sum = 0;
    
    for(let i=0; i<s_arr.length; i++) {
        if(s_arr[i] != "Z") {sum += s_arr[i];}
        else sum -= s_arr[i-1];
        
    }

    return sum;
}