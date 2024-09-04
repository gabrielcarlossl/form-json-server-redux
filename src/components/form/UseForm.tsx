/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitFormAction } from '../../redux/actions';
import { AppDispatch, RootState } from '../../redux/store';
import { Box, Button } from '@mui/material';


const UserForm = () => {

  const dispatch = useDispatch<AppDispatch>()
  const { status } = useSelector((state: RootState) => state.formReducer);

  const onSubmit = (values: any) => {
    dispatch(submitFormAction(values))
  }

  console.log('status', status)

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '8px',
                ' > input': {
                  width: '100%'
                }
              }}
            >
              <label>Nome:</label>
              <Field name="name" component="input" type="text" placeholder="Digite seu nome" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '8px',
                ' > input': {
                  width: '100%'
                }
              }}
            >
              <label>Email:</label>
              <Field name="email" component="input" type="email" placeholder="Digite seu email" />
            </Box>
            <Button color='primary' variant="contained" type="submit">Enviar</Button>
          </Box>
        </form>
      )}
    />
  )
}

export default UserForm;
