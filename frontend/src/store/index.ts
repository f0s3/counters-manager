import { configureStore } from "@reduxjs/toolkit"
import reducer, { RootState } from "./slices"
import 'react-redux';

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
} 

export const store = configureStore({
  reducer: reducer,
  devTools: true
})
