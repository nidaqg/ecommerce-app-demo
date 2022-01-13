//put utility functions in separate files for cleaner code

export const addItemToCart = (cartItems, cartItemToAdd) => {
  //check to see if cartItemToAdd already exists in cartItems Array
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  //if it exists, then increase quantity otherwise add it as new item 
  //in array with quanity as 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: (cartItem.quantity + 1) }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};
