const productos = [
  { nombre: "pan", precio: 3.50 },
  { nombre: "leche", precio: 4.20 },
  { nombre: "arroz", precio: 2.80 },
];

function calcularTotalConImpuesto(productosSeleccionados, impuesto) {
  let montoTotal = 0;
  productosSeleccionados.forEach(producto => {
      const productoEncontrado = productos.find(p => p.nombre === producto.nombre);
      if (productoEncontrado) {
        montoTotal += productoEncontrado.precio * producto.cantidad;
      }
  });
  return montoTotal + (montoTotal * (impuesto / 100));
}

function iniciarCalculadora() {
  let productosSeleccionados = [];
  let seleccionarMas = true;

  while (seleccionarMas) {
      let nombreProducto = prompt("Ingrese el nombre del producto (Pan, Leche, Arroz):");
      let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
      productosSeleccionados.push({ nombre: nombreProducto, cantidad });

      seleccionarMas = prompt("¿Deseas agregar otro producto? (sí/no)") === "sí";
  }

  let impuesto = parseInt(prompt("Ingresa el porcentaje de IGV (18, 10 o 0):"));

  let montoTotal = calcularTotalConImpuesto(productosSeleccionados, impuesto);
  alert(`En total es: S/.${montoTotal}`);
}

iniciarCalculadora();