import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { IPAddressAPI } from "./IPAddressAPI";

export const Reducer = configureStore({
    reducer: {
        [IPAddressAPI.reducerPath]: IPAddressAPI.reducer,
    },
    middleware: (gDM) => gDM().concat(IPAddressAPI.middleware),
});

setupListeners(Reducer.dispatch);


