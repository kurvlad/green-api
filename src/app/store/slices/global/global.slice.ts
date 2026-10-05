import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

const slice = createSlice({
    name: 'global-slice',
    initialState,
    reducers: {
        set: (_, action: PayloadAction<boolean>) => action.payload,
    },
});

export const globalActions = slice.actions;
export const { reducer: global } = slice;
