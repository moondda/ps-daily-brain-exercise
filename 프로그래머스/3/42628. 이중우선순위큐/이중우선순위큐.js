function solution(operations) {
    const queue = [];
    for(let i of operations) {
        const [command,number] = i.split(" ");
        if(command === "I") queue.push(Number(number));
        else if(queue.length === 0) continue;
        else if(command === "D" && number === '-1') {
            queue.splice(queue.indexOf(Math.min(...queue)),1);
        }
        else if(command === "D" && number === '1') {
            queue.splice(queue.indexOf(Math.max(...queue)),1);
        }
    }
    return queue.length === 0 ? [0,0] : [Math.max(...queue), Math.min(...queue)];
}