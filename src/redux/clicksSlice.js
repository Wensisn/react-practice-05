import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

export const clicksSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0, a: 0, b: 0 },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

const persistConfig = {
  key: 'clicks',
  storage,
  whitelist: ['value'],
};

export const ClickReducer = persistReducer(persistConfig, clicksSlice.reducer);

export const { increment, decrement, incrementByAmount } = clicksSlice.actions;

// selectors

export const getClicksValue = state => state.clicks.value;
