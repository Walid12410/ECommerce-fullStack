import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import genderReducer from "./slices/genderSlice";
import bannerReducer from "./slices/bannerSlice";
import productReducer from "./slices/productSlice";
import brandReducer from "./slices/brandSlice";
import featureReducer from "./slices/featureSlice";

const store = configureStore({
    reducer : {
        categories : categoryReducer,
        gender : genderReducer,
        banner: bannerReducer,
        product : productReducer,
        brand : brandReducer,
        feature : featureReducer
    }
});

export default store;