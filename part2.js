class Node {
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


class BST {



  constructor() {
    this.root = null;
  }



  add(data){
    const node = this.root
    if (node === null){
      this.root = new Node(data);
    }
    else{
      const searchTree = function(node){
         if (data < node.data){
           if(node.left === null){
             node.left = new Node(data);
             return;
           }
           else if(node.left !== null){
             return searchTree(node.left);
  
           }
         }
          else if(data > node.data){
            if(node.right === null){
              node.right = new Node(data);
              return;
            }
            else if(node.right !== null){
              return searchTree(node.right);
            }
           else {
             return null;
           }

        }
      }
    }
  return searchTree(node);
  }
  


  findMin(){
    let current = this.root;
    while(current.left !== null){
      current = current.left;
    }
    return current.data;
  }
 


  findMax(){
    let current = this.root;
    while(current.right !== null)
    {
    current = current.right;
    }
   
   return current.data;
  }


  find(data){
    let current = this.root;
    while (current.data !== data){
        if (data < current.data){
          current = current.left;
        }
        else {
          current = current.right;
        }
        if (current === null){
          return null;
        }
    }
  }





inOrder(){
if (this.root === null){
    return null;
}
else {
  var result = new Array();
  function traverseInOrder(node){
    node.left && traverseInOrder(node.left);
    result.push(node.data);
    node.right && traverseInOrder(node.right);
  }
  traverseInOrder(this.root);
  return result;
}
}

findMaxHeight(node = this.root){
  if (node == null){
    return 0;
  }
  let left = this.findMaxHeight(node.left);
  let right = this.findMaxHeight(node.right);
  if (left > right)
  {
     return left + 1;
  }
  else {
    return right + 1;
  }
  
}




}
