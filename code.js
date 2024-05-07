function convertToAdjList(adjMatrix) {
    const adjList = [];
    
    for (let i = 0; i < adjMatrix.length; i++) {
        let elements = [];
        for (let j = 0; j < adjMatrix.length; j++) {
            if (adjMatrix[i][j] > 0) {
                elements.push(j);
            }
        }
        adjList.push(elements);
    }
    return adjList;
}
