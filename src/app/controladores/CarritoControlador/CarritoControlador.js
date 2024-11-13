/*Este funciona */

  /*export const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
};

export const addToCart = (product) => {
    const cart = getCart();
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
};

export const quitarDelCarrito = (productoId) => {
    let cart = getCart();

    cart = cart.filter((producto) => producto.id !== productoId);

    localStorage.setItem('cart', JSON.stringify(cart));
};
*/

export const getCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart;
};

export const addToCart = (product, quantity = 1) => {
  const cart = getCart();
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
      existingProduct.quantity += quantity; // Incrementa por la cantidad seleccionada
  } else {
      product.quantity = quantity; // Asigna la cantidad seleccionada para el nuevo producto
      cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const quitarDelCarrito = (productoId) => {
  let cart = getCart();

  cart = cart.filter((producto) => producto.id !== productoId);

  localStorage.setItem('cart', JSON.stringify(cart));
};
