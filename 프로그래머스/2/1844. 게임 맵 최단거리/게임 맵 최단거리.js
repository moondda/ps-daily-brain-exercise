function solution(maps) {

    maps[0][0] = 0;
    const queue = [[0,0,1]];  //[세로,가로,count]
    const maxColumnPos = maps[0].length-1;
    const maxRowPos = maps.length-1;

    
    while(queue.length !== 0 )
    { 
        const myPos = queue.shift();
        let myRow = myPos[0]; 
        let myColumn = myPos[1];
        let count = myPos[2];
        
        if(myRow === maxRowPos && myColumn === maxColumnPos ) return count;
        
        //오른쪽으로 갈 수 있을 때
        if(myColumn +1 <= maxColumnPos && maps[myRow][myColumn+1] === 1) { 
            queue.push([myRow,myColumn+1,count+1]);
            maps[myRow][myColumn+1] = 0;
        }
        
        //왼쪽으로 갈 수 있을 때
        if(myColumn -1 >= 0 && maps[myRow][myColumn-1] === 1) { 
            queue.push([myRow,myColumn-1,count+1]);
            maps[myRow][myColumn-1] = 0;
        }
        
        //위로 갈 수 있을 때
        if(myRow -1 >= 0 && maps[myRow-1][myColumn] === 1) { 
            queue.push([myRow-1,myColumn,count+1]);
            maps[myRow-1][myColumn] = 0;
        }
        
        //아래로 갈 수 있을 때
        if(myRow +1 <= maxRowPos && maps[myRow+1][myColumn] === 1) { 
            queue.push([myRow+1,myColumn,count+1]);
            maps[myRow+1][myColumn] = 0;
        }
        
    }
    return -1;
}