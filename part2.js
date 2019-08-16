//PART 2 - TREES - Ex4


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

}



//PART 2 - TREES - Ex5

//Array Implementation

class EntryNode {
   constructor(number, name){
    this.number = number;
    this.name = name
  }

}

class ArrayPhoneBook {
  
  
  constructor(){
    this.entries = []
  }


  insert(EntryNode){
    this.entries.push(EntryNode)
  }
  
  size(){
    return this.entries.length 
  }

  find(name){
    for(EntryIndex = 0; EntryIndex < this.entries.length ; EntryIndex++){
       if(this.entries[EntryIndex].name === name){
         return this.entries[EntryIndex].number
       }
    return -1
    };
  };
}
