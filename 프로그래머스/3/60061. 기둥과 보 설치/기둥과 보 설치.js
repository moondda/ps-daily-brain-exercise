function solution(n, build_frame) {
    //[x,y,a,b] 0은 기둥 1은 보, 0은 삭제, 1은 설치
    //보 오른쪽 방향으로 설치, 기둥 위쪽 방향으로 설치
    
    const giSet = new Set();
    const boSet = new Set();
    
    //기둥 규칙
    //바닥 위에 있거다,
    //보의 한쪽 끝 부분 위에 있거나
    //다른 기둥 위에 위치해야함
    const installGi = (x,y) => {
        if(y==0 ||
          boSet.has(`${x},${y}`) ||
          boSet.has(`${x-1},${y}`) ||
          giSet.has(`${x},${y-1}`)) return true;
        else return false;
    }
    
        
    //보 규칙
    //한쪽 끝이 기둥 위에 잇거나,
    //양쪽 끝 부분이 다른 보와 동시에 연결
    const installBo = (x,y) => {
        if(giSet.has(`${x+1},${y-1}`) || giSet.has(`${x},${y-1}`))
            return true;  
        else if(boSet.has(`${x-1},${y}`) && boSet.has(`${x+1},${y}`)) return true;
        else return false;
    }
    
    const available = () => {
        for(let gi of giSet) {
            const [x,y] = gi.split(",").map(Number);
            if(!installGi(x,y)) return false;
        }
        for(let bo of boSet) {
            const [x,y] = bo.split(",").map(Number);
            if(!installBo(x,y)) return false;
        }      
        return true;      
    }
    
    const deleteGi = (x,y) => {
        giSet.delete(`${x},${y}`);
        if(available()) return true;
        else return false;
    }
    
    const deleteBo = (x,y) => {
        boSet.delete(`${x},${y}`);
        if(available()) return true;
        else return false;
    }
    
    for(let [x,y,a,b] of build_frame) {
        //기둥 설치
        if(a==0 && b==1) {
            if(installGi(x,y)) giSet.add(`${x},${y}`);
        }
        //보 설치
        if(a==1 && b==1) {
           if(installBo(x,y)) boSet.add(`${x},${y}`);
           }
        //기둥 삭제
        if(a==0 && b==0) {
            if(!deleteGi(x,y)) giSet.add(`${x},${y}`);
        } 
        //보 삭제
        if(a==1 && b==0) {
            if(!deleteBo(x,y)) boSet.add(`${x},${y}`);
        }
        
    }
    //0은 기둥 1은 보
    const giTemp = [...giSet].map((e)=> [...e.split(",").map(Number),0]);
    const boTemp = [...boSet].map((e)=> [...e.split(",").map(Number),1]);
    
    //리턴 [x,y,a] a의 0은 기둥 1은 보
    //x 오름차순, y오름차순, 보 먼저
    const temp = [...giTemp,...boTemp].sort((a,b)=> {
        if(a[0] !== b[0]) return a[0]-b[0];
        if(a[1] !== b[1]) return a[1]-b[1];
        return a[2] - b[2];       
    });
    return temp;
}