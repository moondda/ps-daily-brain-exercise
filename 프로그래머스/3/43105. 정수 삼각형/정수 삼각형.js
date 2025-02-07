function solution(triangle) {
    for(let i=triangle.length-1; i>=0;i--) {
        for(let j=0; j<i;j++) {
            if(triangle[i][j] >  triangle[i][j+1]) 
                triangle[i-1][j] += triangle[i][j];
            else triangle[i-1][j] += triangle[i][j+1];
        }
    }
    return triangle[0][0];
}