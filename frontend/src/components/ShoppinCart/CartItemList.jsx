import React from "react";
import CartItem from "./CartItem";

const CartItemList = ({ products, handlerDeleteItem, handlerQuantityChange }) => {
  return (
    <div className="flow-root">
      <ul className="-my-6 divide-y divide-gray-200">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handlerDeleteItem={handlerDeleteItem}
            handlerQuantityChange={handlerQuantityChange}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;
