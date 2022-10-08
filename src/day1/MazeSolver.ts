const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];
function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
) {
    console.log("recursive");

    //base cases
    //outr of bounds
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }
    // its a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    //end found!
    if (curr.x === end.x && curr.y == end.y) {
        path.push(curr);
        return true;
    }
    //aready seen
    if (seen[curr.y][curr.x]) {
        return false;
    }
    //pre
    console.log("pre");
    //add current to seen array
    seen[curr.y][curr.x] = true;
    //add current do path story
    path.push(curr);
    //recursive cases
    //see all directions
    for (let i = 0; i < directions.length; i++) {
        const [x, y] = directions[i];
        const next: Point = { x: curr.x + x, y: curr.y + y };
        const found = walk(maze, wall, next, end, seen, path);
        if (found) {
            return true;
        }
    }

    //post
    console.log("pos");
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    console.log(path);

    return path;
}
