const color = "Red";
switch (color) {
  case "Red":
    console.log("Stop");
    break;
  case "Green":
    console.log("Go");
    break;
  case "Yellow":
    console.log("Caution");
    break;
  default:
    break;
}

const matrix = [
  [1, 2],
  [3, 4],
];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

const product = {
  name: "T-shirt",
  price: "60$",
  inStock: true,
};
const { info } = product;

for (const info in product) {
  console.log(`${info}: ${product[info]}`);
}

if (product.price < 50 && product.inStock) {
  console.log("Available");
} else {
  console.log("UnAvailable");
}
