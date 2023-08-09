function solution(sizes) {
    //항상 w가 더 크게 한다
    function swap([w,h]) {
        if (w < h) return [h,w];
        else return [w,h];
    }
    
    for(let i=0; i<sizes.length; i++) {
        sizes[i] = swap(sizes[i]); 
    }
    
    let width = 0;
    let height = 0;
    
    for(let i=0; i<sizes.length; i++){
        if( sizes[i][0] > width) width = sizes[i][0];
        if( sizes[i][1] > height) height = sizes[i][1];
    }
    
    return width * height ;
}