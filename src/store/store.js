import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./authSlice"
import productReducer from "./productSlice"
import productsReducer from "./productsSlice"
import userTypesReducer from "./userTypesSlice"
import sellersReducer from "./sellersSlice"
import profileReducer from "./profileSlice"
import mostPurchasedClientsReducer from "./mostPurchasedClientsSlice"
import mostBoughtFromReducer from "./mostBoughtFromSlice"
import mostBoughtProductsReducer from "./mostBoughtProductsSlice"
import mostSoldProductsReducer from "./mostSoldProductsSlice"
import systemProductsReducer from "./systemProductsSlice"
import userProductsReducer from "./userProductsSlice"
import pendingSalesReducer from "./pendingSalesSlice"
import confirmedInvoicesReducer from "./confirmedInvoicesSlice"
import pendingPurchasesReducer from "./pendingPurchasesSlice"
import confirmedPurchasesReducer from "./confirmedPurchasesSlice"
import categoryDetailsReducer from "./categoryDetailsSlice"
import categoriesReducer from "./categoriesSlice"
import cartOrdersReducer from "./cartOrdersSlice"

export const store = configureStore({
  reducer: {
    "auth": authReducer,
    "product": productReducer,
    "products": productsReducer,
    "userTypes": userTypesReducer,
    "sellers": sellersReducer,
    "profile": profileReducer,
    "mostPurchasedClients": mostPurchasedClientsReducer,
    "mostBoughtFrom": mostBoughtFromReducer,
    "mostBoughtProducts": mostBoughtProductsReducer,
    "mostSoldProducts": mostSoldProductsReducer,
    "systemProducts": systemProductsReducer,
    "userProducts": userProductsReducer,
    "pendingSales": pendingSalesReducer,
    "confirmedInvoices": confirmedInvoicesReducer,
    "pendingPurchases": pendingPurchasesReducer,
    "confirmedPurchases": confirmedPurchasesReducer,
    "categoryDetails": categoryDetailsReducer,
    "categories": categoriesReducer,
    "cartOrders": cartOrdersReducer
  },
})