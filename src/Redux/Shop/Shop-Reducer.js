import SHOP_DATA from "../../Pages/ShopPage/ShopData"

const INITIAL_STATE={
    collections: SHOP_DATA
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
      default:
          return state;
  }  
}