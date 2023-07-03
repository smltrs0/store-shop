import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../features/items/itemsSlice";
import cartReducer from "../features/shopping-cart/shoppingCartSlice";
import authUserReduce from "../features/auth/authUserSlice";
import userReducer from "../features/user/userSlice";
import orderSlice from "../features/orders/orderSlice";

const store = configureStore({
    reducer : {
        items: itemsReducer,
        shoppincart: cartReducer,
        user : userReducer,
        auth: authUserReduce,
        order: orderSlice
    }
})


export default store;