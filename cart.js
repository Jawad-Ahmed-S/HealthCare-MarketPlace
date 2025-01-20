


export const cartItems = []; 


export const addToCart = (product) => {
  const existingItem = cartItems.find((item) => item.index === product.index);
  if (!existingItem) {

    cartItems.push({ ...product, quantity: 1 });
  }
};

