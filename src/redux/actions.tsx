/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { AppDispatch } from './store';
import { getAllUsersFailure, getAllUsersSuccess, submitFailure, submitSuccess } from './slices/formSlice';
import { toast } from 'react-toastify';

export const submitFormAction = (values: any) => async (dispatch: AppDispatch): Promise<void> => {
  const notifySuccess = () => toast.success("User registered!");
  const notifyFailure = () => toast.error("Failed to register user!");
  try {
    await axios.post('http://localhost:3001/users', values)
    dispatch(submitSuccess()) // Despacha uma ação de sucesso
    notifySuccess()
  } catch (error: any) {
    console.error('Error adding user:', error)
    dispatch(submitFailure(error.message)) // Despacha uma ação de falha
    notifyFailure()
  }
}

export const getAllUsersAction = () => async (dispatch: AppDispatch): Promise<void> => {
  try {
    const response = await axios.get('http://localhost:3001/users')
    dispatch(getAllUsersSuccess(response.data)) // Despacha uma ação de sucesso
  } catch (error: any) {
    dispatch(getAllUsersFailure(error.message)) // Despacha uma ação de falha
  }
}