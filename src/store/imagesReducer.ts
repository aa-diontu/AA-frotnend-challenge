import { createAction, createReducer } from '@reduxjs/toolkit';

export interface ImageState {
  list: any[];
}

export const storeImages = createAction<any[]>('images/storeImages');

const initialState = { list: [] } as ImageState;

export const imagesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(storeImages, (state, action) => {
            state.list = action.payload;
        });
});
