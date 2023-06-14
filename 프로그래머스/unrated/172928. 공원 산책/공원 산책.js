function solution(park, routes) {
    let start = [];
    let start_x;
    let start_y;
    
    for(let i=0;i<park.length;i++){ //시작지점
        for(let j=0;j<3;j++){
            if(park[i][j]=="S") {start=[i,j];start_x=i; start_y=j;}
        }
    }
    for(let i=0;i<routes.length;i++){
    //얼마큼 이동하는지 먼저 체크
    let walk_count =routes[i][2];
        if(routes[i][0]=="E"){
            for(let i=0;i<walk_count;i++) {
                if(park[start_x][start_y+i] == 'X') break;
            }
            start_y += start_y + i;
         }
    }
        // if(routes[i][0]=="S"){}
        // if(routes[i][0]=="W"){}
        // if(routes[i][0]=="N"){}
    
    return [start_y,start_x];
}