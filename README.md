<h1 align="center">Path Finding Visualizer</h1>

<p align="center">Live at - https://mypathfinder.vercel.app </p>
<p align="center"> This project is live visualiztion of the famous path finding algorithms. </p>
<br/>




https://github.com/harshsahu1/mypathfinder/assets/76099605/8669c7ba-14b8-4148-9a60-61c93c827626





<h2 align="center">Algorithms Included</h2>
<li>* Dijkstra</li>
<li>* DFS</li>
<li>* BFS</li>

<h2 align="center">Features</h2>

### Selecting an Algorithm and Running the Visualizer

You can select a path algorithm using the Algorithms dropdown menu from the navbar.
The starting node for the algorithm is represented by the Triangle node on the graph and the end node is represented by the Circle node.
You can alter the positions of the starting and ending nodes, by choosing move StartPoint or move EndPoint in drop down menu from nav bar.
Once an algorithm is selected you can visualize the algorithm by pressing the "Launch" button.
Doing so will change the color of nodes on the graph in the order they are visited.
Once the end node is reached the shortest path will be displayed in blue.
Buttons will be disabled for the majority of the animation process.

### Weighted Graphs and Non-Weighted Graphs

The app will automatically generate edge weights for algorithms that are meant for weighted graphs.
These edge weights represent the distance to travel to that node from its neighbors, and are displayed in the center of each node.
In the case of this app neighbors are considered to be those nodes directly next to the current node in the four main directions: up, down, left, right.
If the algorithm does not need these weights none will be generated, and a "0" will be displayed.

### Building Walls

You can build walls to eliminate some nodes from the graph.
To do so simply click on a node in the graph and it will change colors to black, signifying that it is now a wall.
First you have to choose Add or remove Walls from dropDown from nav bar then, you can click your mouse, hold it and drag it in order to create larger walls.
Any walls built will persist through algorithm changes, weight changes, and visualizations.
To remove walls you will need to use the "Clear Board" button.

### Generating Mazes

Currently there are two maze algorithms implement: random walls and the recursive division.
The random walls method generates a random number in the range [0, 1) for each node.
Based on this number the node is transformed to a wall.
The recursive division method follows the basic [recursive division algorithm]
(https://weblog.jamisbuck.org/2011/1/12/maze-generation-recursive-division-algorithm) with one difference.
The difference is that instead of generating a single passage in each wall here we generate multiple.
This allows for mulitple paths between the start and end node instead of just a single path.

<br/>

## Made Using

- [NextJs]
- [ReactJs]
- [TypeScript]
- [TailWindCss]
- [CSS Animations]
