import { configureStore } from "@reduxjs/toolkit";
import { imagesReducer } from "./imagesReducer";
import type { ImageState } from "./imagesReducer";
import { ReducerWithInitialState } from "@reduxjs/toolkit/dist/createReducer";

export type RootReducer = {
    images: ReducerWithInitialState<ImageState>;
}
export type RootReducerState = {
    images: ImageState;
}

type Store = {
    reducer: RootReducer;
}

const nonConfiguredStore: Store = {
    reducer: {
        images: imagesReducer,
    }
}

export const store = configureStore(nonConfiguredStore);