function solution(players, m, k) {
    let result = 0
    const servers = Array(k).fill(0);
    for(let i = 0; i < 24; i++){
        servers.shift();
        const server = servers.reduce((acc, cur)=> acc+cur, 0)
        const needServer = Math.floor(players[i] / m)
        if(server < needServer){
            // 수용 가능 인원보다 유저가 많으면 서버 추가
            const addServer = needServer - server
            servers.push(addServer)
            result += addServer
        } else {
            servers.push(0)
        }
    }
    return result;
}