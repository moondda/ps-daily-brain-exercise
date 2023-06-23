function solution(wallpaper) {
    //정사각형
    //빈칸 . 파일있 #
    //거리  |rdx - lux| + |rdy - luy|
    
    //작은거일때 갱신, 큰거일때 갱신
    let min_x = 51;
    let min_y = 51;
    let max_x = 0;
    let max_y = 0;
    
    for(let i=0; i<wallpaper.length; i++) {
        for(let j=0; j<wallpaper[0].length; j++) {
   
            if (wallpaper[i][j] == '#') {
               
                if(min_x > j) min_x = j;
                if(min_y > i) min_y = i;
                if(max_x < j+1) max_x = j+1;
                if(max_y < i+1) max_y = i+1;
               
            }
        }
    }
    
  
    return [min_y,min_x,max_y,max_x];
}