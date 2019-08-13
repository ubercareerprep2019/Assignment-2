
//PART 1 - TREES - Ex1
class TreeNode {
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
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


}



//PART 1 - TREES - Ex2
class Employee{
  constructor(name, title, reportsTo)
  {
   self.name = name
   self.title = title
   self.reportsTo = []
  }
}

class OrganizationStructure {
  constructor(CEO){
    self.CEO = CEO
  }


levelOrder() {
      let result = [];
      let Q = []; 
      if (this.root != null) {
          Q.push(this.root);
          while(Q.length > 0) {
              let node = Q.shift();
              result.push(node.data);
              if (node.left != null) {
                  Q.push(node.left);
              };
              if (node.right != null) {
                  Q.push(node.right);
              };
          };
          return result;
      } else {
          return null;
      };
  };
