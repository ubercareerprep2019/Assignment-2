import Queue from Queue;


//PART 3 - GRAPHS - Ex1
class Graph {


  constructor(VerticeCount){
    this.VerticeCount = VerticeCount;
    this.AdjList = new Map();
  }


  addVertex(v){
    this.AdjList.set(v, []);
  }


  addEdge(v, w){
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  
  
  
//PART 3 - GRAPHS - Ex2
  bfs(start)
  {
    var visited = []
    for(i = 0; i < this.VerticeCount; i ++){
      visited[i] = false;
    }

    var q = new Queue();
    visited[start] = true;
    q.enqueue(start);

    while(!q.isEmpty()){
       var QueueElement = q.dequeue()

       console.log(QueueElement)
       getlist = this.AdjList.get(QueueElement)

       for(i in getlist){
         var neighbor = getlist[i]

         if(!visited[i]){
           visited[neighbor] = true
           q.enqueue(neighbor)
         }
       }

    }
  }


  
//PART 3 - GRAPHS - Ex3
  dfs(start){
    var visited = []
    for(i = 0; i < this.VerticeCount; i++){
      visited[i] = false;
    }

    this.DFSHelper(start, visited)
  }

  DFSHelper(vert, visited){
    visited[vert] = true;
    console.log(vert)
    var neighbors = this.AdjList.get(vert)

    for(i in neighbors){
      var elem = neighbors[i]


      if(!visited[elem]){
        this.DFSHelper(elem, visited)
      }
    }
  }


}
