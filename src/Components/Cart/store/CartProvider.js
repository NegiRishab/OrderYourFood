import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const IntialState = {
  totalAmount: 0,
  items: [],
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalamount =
      state.totalAmount + action.item.amount * action.item.price;

    // tufff code
    const ExistingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const itemexist = state.items[ExistingItem];

    let updateItem;
    let updateItems;

    if (itemexist) {
      updateItem = {
        ...itemexist,
        amount: itemexist.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[ExistingItem] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    // yup
    return {
      totalAmount: updateTotalamount,
      items: updateItems,
    };
  }
  if (action.type === "REMOVE") {
    const ExistingItem = state.items.findIndex((item) => item.id === action.id);
    const itemexist = state.items[ExistingItem];
    const updatingTotalAmount = state.totalAmount - ExistingItem.price;
    let updateItems;
    if (itemexist.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem={...itemexist,amount: itemexist.amount-1}
      updateItems=[...state.items]
      updateItems[ExistingItem]=updateItem
    }
    return {
      items:updateItems,
      totalAmount:updatingTotalAmount
    }
  }
  return IntialState;
};

export default function CartProvider(props) {
  const [cartState, dispatchcartAction] = useReducer(cartReducer, IntialState);

  const handleaddItem = (item) => {
    dispatchcartAction({ type: "ADD", item: item });
  };

  const handleRemove = (id) => {
    dispatchcartAction({ type: "REMOVE", id: id });
  };

  const cartItem = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    additem: handleaddItem,
    removeitem: handleRemove,
  };
  return (
    <CartContext.Provider value={cartItem}>
      {props.children}
    </CartContext.Provider>
  );
}
