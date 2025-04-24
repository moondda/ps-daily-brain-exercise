function solution(nodeinfo) {
    const nodes = nodeinfo.map((e,index) => ({x:e[0], y:e[1] , index : index+1})).sort((a,b)=> {
        if(b.y > a.y) return 1;
        else if(b.y === a.y) return a.x - b.x;
        else return -1
    });
    
    
    class TreeNode {
        constructor(node) {
            this.x = node.x;
            this.y = node.y;
            this.id = node.index;
            this.left = null;
            this.right = null;
        }
        
        insert(node) {
            if(node.x < this.x) {
                if(!this.left) {
                    this.left = new TreeNode(node);
                }
                else this.left.insert(node);
            } else {
                if(!this.right) {
                    this.right = new TreeNode(node);
                }
                else this.right.insert(node);
            }
        }
    }
    
    const root = new TreeNode(nodes[0]);
    
    for(let i=1 ; i<nodes.length;i++) root.insert(nodes[i]);
    
    const preorder = [];
    const postorder = [];
    
    const traversal = (node) => {
        if(!node) return;
        preorder.push(node.id);
        traversal(node.left);
        traversal(node.right);
        postorder.push(node.id);
        
    }
    
    traversal(root);
    
    return [preorder,postorder]
    
    
}