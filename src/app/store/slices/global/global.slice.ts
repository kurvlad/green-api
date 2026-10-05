import { type CaseReducer, createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IGlobalState } from './global.interface';

const initialState: IGlobalState = {};

const setReducer: CaseReducer<IGlobalState, PayloadAction<boolean>> = (state, action: PayloadAction<boolean>) => {
    state = action.payload;
};

const slice = createSlice({
    name: 'global-slice',
    initialState,
    reducers: {
        set: setReducer,
    },
});

const { set } = slice.actions;

export const globalActions: typeof slice.actions = {
    set,
};

export const { reducer: global } = slice;
