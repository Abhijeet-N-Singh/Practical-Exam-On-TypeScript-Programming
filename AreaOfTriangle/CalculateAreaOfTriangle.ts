// Function to calculate the area of triangle given its base and height

function calculateTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
}

// Testing the function
const triangleBase: number = 10;
const triangleHeight: number = 5;
console.log(`The area of a triangle with base ${triangleBase} and height ${triangleHeight} is:
${calculateTriangleArea(triangleBase, triangleHeight)}`);