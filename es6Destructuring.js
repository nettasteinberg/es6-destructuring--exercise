function detectCollision(objects, point) {
    for (let i = 0; i < objects.length; i++) {
        let {x: ox, y: oy, width, height} = objects[i];
        let {x: px, y: py} = point;
        if (
            px >= ox &&
            px <= ox + width &&
            py >= oy &&
            py <= oy + height
            ) {
            return objects[i];
        }
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
    const ret = detectCollision(myObjects, point) != undefined ? {x, y, width, height} = detectCollision(myObjects, point) : null;
    if (ret) {
        console.log(`point (${point.x}, ${point.y}) will collide with object {x: ${x}, y: ${y}, width: ${width}, height: ${height}}`);
    } else {
        console.log(`point (${point.x}, ${point.y}) will not collide with any object`);
    }
});
