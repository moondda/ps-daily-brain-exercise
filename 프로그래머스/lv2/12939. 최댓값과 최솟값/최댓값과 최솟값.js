function solution(s) {
    let s_arr = s.split(" ");
    s_arr = s_arr.map(e => Number(e));
    return Math.min.apply(null, s_arr).toString()+" "+Math.max.apply(null, s_arr).toString();
}