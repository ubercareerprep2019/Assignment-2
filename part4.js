
const islands = [
 [1, 1, 1, 1, 0],
 [1, 0, 0, 0, 3],
 [1, 0, 2, 2, 0],
 [1, 0, 2, 2, 0],
 [1, 0, 2, 2, 0],
];

const islands2 = [
 [0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0],
 [0, 0, 1, 1, 0],
 [0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0],
];

function getEmptyBoard(islands) {
    const finalgraph = []
    for(i = 0; i < islands.length; i++){
        finalgraph.push([])
        for(j = 0; j < islands[i].length; j++){
        finalgraph[i].push(0)    
        }
    }
    return finalgraph;
}


function isCellLand(x, y, islands) {
    return x >= 0 && 
        y >= 0 && 
        x < islands[0].length && 
        y < islands.length && 
        islands[y][x] === 1
}

function NumOfIslands(islands){
    const solution = getEmptyBoard(islands);
    
    // Iterate through each cell
    for(y = 0; y < islands.length; y++){
        for(x =0; x < islands[y].length; x++){
           // Check left
           
           let isLand = isCellLand(x - 1, y, islands);
           
            // Check top
            isLand = isCellLand(x, y + 1, islands);
            
            // check right
            isLand = isCellLand(x + 1, y, islands);
            
            
            /// check bottom
            isLand = isCellLand(x, y - 1, islands);
        }
    }
    return solution;
}

console.log(NumOfIslands(islands2))

/*


//Step 1: check around each index to see if theres water/land. Don't need to check around if water. 
//Step 2: if there's water surrounding land, increment islands counter. 
//Step 3: If there's islands connected to the land, use DFS to check if they're connected
Step 4: Recreate graph with incrementing numbers associated with each island. 
step 5: iterate through that new graph to check number of islands. 



*/
