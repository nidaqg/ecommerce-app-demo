//put utility functions in separate files for cleaner code

export const addItemToCart = (cartItems, cartItemToAdd) => {
  //check to see if cartItemToAdd already exists in cartItems Array
  const existingCartItem = cartItems ? (cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )):(null)

  //if it exists, then increase quantity otherwise add it as new item 
  //in array with quanity as 1
  if (existingCartItem && cartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: (cartItem.quantity + 1) }
        : cartItem
    );
  } else if (!existingCartItem && cartItems) {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  } else {
    return[{...cartItemToAdd, quantity: 1}]
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  } else{
    return cartItems.map(
      cartItem => cartItem.id === cartItemToRemove.id ?
      {...cartItem, quantity: cartItem.quantity - 1} : cartItem
    )
  }
}