class TreeNode {
    constructor(node) {
        this.x = node[0];
        this.y = node[1];
        this.idx = node[2];
        this.left = null;
        this.right = null;
    }
    
    insert(node) {
        //왼쪽 노드
        if(node[0] < this.x) {
            if(!this.left) this.left = new TreeNode(node);
            else this.left.insert(node);
        }
        //오른쪽 노드
        else {
            if(!this.right) this.right = new TreeNode(node);
            else this.right.insert(node);
        }
    }
}

function solution(nodeinfo) {
    var answer = [[]];
    nodeinfo = nodeinfo.map((e,idx)=> [...e,idx+1]);
    //[x,y,idx]
    nodeinfo.sort((a,b)=>{
        if(b[1]>a[1]) return 1;
        else if(a[1]==b[1]) return a[0]-b[0];
        else return -1
    });
    const tree = new TreeNode(nodeinfo[0]);
    for(let i=1; i<nodeinfo.length; i++) tree.insert(nodeinfo[i]);
    const front = [];
    const back = [];
    const dfs = (root) => {
        if(!root) return;
        front.push(root.idx);
        dfs(root.left);
        dfs(root.right);
        back.push(root.idx);
    }
    
    dfs(tree);
    return [front,back];
}