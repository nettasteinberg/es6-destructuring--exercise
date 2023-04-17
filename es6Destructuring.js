function detectCollision(objects, point) {
    for (let i = 0; i < objects.length; i++) {
        let {x, y, width, height} = objects[i];
        if (
            point.x >= x &&
            point.x <= x + width &&
            point.y >= y &&
            point.y <= y + height
            )
            return objects[i];
    }
}
    
const myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 },
];

const points = [
    {x:0, y:0},
    {x:10, y:10},
    {x:20, y:20},
    {x:30, y:30},
    {x:40, y:40},
]

points.forEach(point => {
    detectCollision(myObjects, point) != undefined ? {x, y, width, height} = detectCollision(myObjects, point) : point;
    console.log(`point (${point.x}, ${point.y}) will collide with object {x: ${x}, y: ${y}, width: ${width}, height: ${height}}`);
});
