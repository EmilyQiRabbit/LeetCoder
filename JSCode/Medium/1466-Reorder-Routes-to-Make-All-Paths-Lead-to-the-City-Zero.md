# [1466. Reorder Routes to Make All Paths Lead to the City Zero](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/)

## Topic

There are n cities numbered from 0 to n-1 and n-1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by connections where connections[i] = [a, b] represents a road from city a to b.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

It's guaranteed that each city can reach the city 0 after reorder.

## Solution

```js
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
// 由一个 java 代码改造的，但是改造成 js 后，性能太差了
var minReorder = function(n, connections) {
    const canReachNode = [0];
    let change = 0;
    while (canReachNode.length < n) {
        connections.forEach((connection) => {
            const [start, end] = connection;
            if (canReachNode.includes(start) && !canReachNode.includes(end)) {
                canReachNode.push(end);
                change += 1;
            } else if (!canReachNode.includes(start) && canReachNode.includes(end)) {
                canReachNode.push(start);
            }
        })
    }
    return change;
};
```

```js
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
// bfs
var minReorder = function(n, connections) {
    // key 是出发 node
    const outGraph = new Map();
    // key 是到达 node
    const inGraph = new Map();
    const visited = new Array(n);
    let result = 0;
    let nodes;
    
    for (const [from, to] of connections) {
        nodes = outGraph.get(from);
        if (nodes) nodes.push(to);
        else outGraph.set(from, [to]);
        
        nodes = inGraph.get(to);
        if (nodes) nodes.push(from);
        else inGraph.set(to, [from]);
    }
    
    const bfs = function(city) {
        if (visited[city]) return;
        
        visited[city] = true;
        
        let correct = inGraph.get(city);
        if (correct) {
            for (const node of correct) bfs(node);
        }
        
        let wrong = outGraph.get(city);
        if (wrong) {
            for (const node of wrong) {
                if (!visited[node]) ++result;
                bfs(node);
            }
        }
    }

    bfs(0);
    
    return result;
};
```
