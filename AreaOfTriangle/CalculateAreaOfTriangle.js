// Function to calculate the area of triangle given its base and height
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}
// Testing the function
var triangleBase = 10;
var triangleHeight = 5;
console.log("The area of a triangle with base ".concat(triangleBase, " and height ").concat(triangleHeight, " is:\n").concat(calculateTriangleArea(triangleBase, triangleHeight)));
