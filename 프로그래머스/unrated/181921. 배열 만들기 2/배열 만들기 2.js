function solution(l, r) {
  let result = [];
    
    // let l_string = l.toString().split("");
    // l_string[0] = "5"
    // l = ""
    // l = l_string.join("");
    // console.log(l);
    // if(Number(l) <= r) result.push(Number(l));
    
    if(5 <= r && 5 >= l) result.push(5);

//50 555 
    
    

    function recursion(a,b) {
        if(Number(a) > r) return;
        a = a.toString();
        a = a + b;
        if(Number(a) > r) return;
        if(Number(a) >= l) result.push(Number(a));
        recursion(a,"0");
        recursion(a,"5");
    }
    
    recursion("5","0");
    recursion("5","5");

  if (result.length === 0) {
    return [-1];
  }
  result.sort(function(a, b)  { return a - b;});
  return result;
}