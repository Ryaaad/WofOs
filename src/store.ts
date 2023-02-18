import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './feature/main/mainSlice';
import CalcReducer from './feature/Calculator/CalcSlice';
export const store = configureStore({
  reducer: {
    main: mainReducer,
    Calc:CalcReducer
  },
});
