const products = [
  { name: "pan", price: 3.50 },
  { name: "leche", price: 4.20 },
  { name: "arroz", price: 2.80 },
];

function calculateTotalWithTax(selectedProducts, tax) {
  let totalAmount = 0;
  selectedProducts.forEach(product => {
      const foundProduct = products.find(p => p.name === product.name);
      if (foundProduct) {
        totalAmount += foundProduct.price * product.quantity;
      }
  });
  return totalAmount + (totalAmount * (tax / 100));
}

function startCalculator() {
  let selectedProducts = [];
  let activeSelection = true;

  while (activeSelection) {
      let productName = prompt("Ingrese el nombre del producto (Pan, Leche, Arroz):");
      let quantity = parseInt(prompt("Ingrese la cantidad del producto:"));
      selectedProducts.push({ name: productName, quantity });

      activeSelection = prompt("¿Deseas agregar otro producto? (si/no)") === "si";
  }

  let tax = parseInt(prompt("Inserte el porcentaje de IGV (18, 10 o 0):"));

  let totalAmount = calculateTotalWithTax(selectedProducts, tax);
  alert(`The total is: S/.${totalAmount}`);
}

startCalculator();
