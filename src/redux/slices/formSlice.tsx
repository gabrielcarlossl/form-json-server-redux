/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Um slice simples para lidar com o estado de envio de formulários
const formSlice = createSlice({
  name: 'form',
  initialState: { status: 'idle', error: null, data: [] },
  reducers: {
    submitSuccess(state) {
      state.status = 'submitSuccess'
    },
    submitFailure(state: any, action: PayloadAction<string>) {
      state.status = 'submitFailure';
      state.error = action.payload;
    },
    getAllUsersSuccess(state, action: PayloadAction<any>) {
      state.status = 'getAllUsersSuccess'
      state.data = action.payload
    },
    getAllUsersFailure(state: any, action: PayloadAction<string>) {
      state.status = 'getAllUsersFailure';
      state.error = action.payload;
    }
  }
})

export const { submitSuccess, submitFailure, getAllUsersSuccess, getAllUsersFailure } = formSlice.actions;

export default formSlice.reducer