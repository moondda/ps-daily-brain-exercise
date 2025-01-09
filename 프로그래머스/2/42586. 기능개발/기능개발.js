function solution(progresses, speeds) {
    const time = progresses.map((item,i)=> Math.ceil((100-item)/speeds[i]));
    const queue = new Queue();
    time.forEach(item => queue.push(item));
    const result = [];
    while(!queue.isEmpty()) {
        let count = 1;
        const comp = queue.pop();
        if(queue.isEmpty()) {result.push(count); break;}
        let flag = true;
        while(flag && !queue.isEmpty() ) {
            if(queue.head.data <= comp) {count++; queue.pop();}
            else {flag = false; break;}
        }
        result.push(count);
    }
    
    return result;
        
    
} 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    push(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
        this.tail.next = newNode;
        this.tail = newNode;
        }
        this.size++; 
    }
    
    pop() {
        if(!this.head) return null;
        const removedNode = this.head;
        this.head = this.head.next;
        if(!this.head) this.tail = null;
        
        this.size--;
        return removedNode.data;;
        
    }
    
    isEmpty() {
        return this.size === 0;
    }
}