
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
   this.name = name;
   this.title = title;
   this.reportsTo = []
  }
}

class OrganizationStructure {
  constructor(CEO){
    this.CEO = CEO;
    this.level = 0;
  }

  
   printLevelByLevel()
   {
     start = this.CEO
     if(this.level === 0){
       this.level += 1
     }
     this.printLevelByLevelHelper(start.reportsTo)
   }

  printLevelByLevelHelper(reportsTo){
      if(reportsTo.length === 0){
        return 
      }

      nextLevel = []
      for(i = 0; i < reportsTo.length; i++){
        nextLevel.push(reportsTo[i])
      }
      
      this.level += 1
      this.printLevelByLevelHelper(nextLevel)
  }


}



