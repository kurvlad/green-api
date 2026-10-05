import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { global } from './slices/global/global.slice';

const combinedReducers = combineReducers({ global });

export const store = configureStore({
    reducer: combinedReducers,
});

// Типизация для всего хранилища
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
