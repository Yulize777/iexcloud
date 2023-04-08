import {configureStore} from "@reduxjs/toolkit";
import {pageOne} from "./reducers/page1";


const store = configureStore({
    reducer: {
        [pageOne.reducerPath]: pageOne.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(pageOne.middleware),
})
export default store