// Function to calculate the area of a circle given its radius
function calculateCircleArea(radius) {
    //Using the Math.PI constant to get the value of n
    return Math.PI * radius * radius;
}
// Testing the function
var circleRadius = 6;
console.log("The area of a circle with radius ".concat(circleRadius, " is:\n").concat(calculateCircleArea(circleRadius).toFixed(2)));
