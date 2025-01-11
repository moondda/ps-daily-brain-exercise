function solution(cards1, cards2, goal) {
    let queue1 = new Queue(cards1);
    let queue2 = new Queue(cards2);
    let queueGoal = new Queue(goal);
    
    for(let i=0; i<goal.length; i++) {
        if(!queue1.isEmpty() && queue1.first() === goal[i]) { queue1.pop(); queueGoal.pop(); }
        else if(!queue2.isEmpty() && queue2.first() === goal[i]) { queue2.pop(); queueGoal.pop(); }
        else break;
    }
    
    return queueGoal.isEmpty() ? "Yes" : "No";
}

class Queue{
    items = [];
    front = 0;
    rear = 0;
    
    constructor(array){
        this.items = array;
        this.rear = array.length;
    }
    
    push(item){
        this.items.push(item);
        this.rear++;
    }
    
    pop(){
        const removedNode = this.items[this.front];
        this.front++;
        return removedNode;
    }
    
    first(){
        return this.items[this.front];
    }
    
    isEmpty(){
        return this.front === this.rear;
    }
}

