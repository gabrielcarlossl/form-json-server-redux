/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { submitFormAction } from '../../redux/actions';
import { AppDispatch } from '../../redux/store';
import { Box, Button } from '@mui/material';
import { toast } from 'react-toastify';


const UserForm = () => {

  const dispatch = useDispatch<AppDispatch>()

  const [showAddressFields, setShowAddressFields] = useState(false)
  const [messageFillForm, setMessageFillForm] = useState('')
  const notifyMessage = () => toast.warn(messageFillForm)


  const onSubmit = (values: any) => {
    dispatch(submitFormAction(values))
  }

  const handleContinue = (values: any) => {
    if (values.name && values.email) {
      setShowAddressFields(true)
    } else {
      setMessageFillForm('Preencha o nome e email.')
      notifyMessage()
    }
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
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
            {showAddressFields && (
              <>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '8px',
                    ' > input': {
                      width: '100%'
                    }
                  }}
                >
                  <label>Rua:</label>
                  <Field name="street" component="input" type="text" placeholder="Digite o nome da rua" />
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
                  <label>Número:</label>
                  <Field name="number" component="input" type="text" placeholder="Digite o número" />
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
                  <label>Bairro:</label>
                  <Field name="neighborhood" component="input" type="text" placeholder="Digite o bairro" />
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
                  <label>Cidade:</label>
                  <Field name="city" component="input" type="text" placeholder="Digite a cidade" />
                </Box>
              </>
            )}
            <Button
              color='primary'
              variant="contained"
              onClick={() => handleContinue(values)}
              type="button"
            >
              Continuar
            </Button>
            {showAddressFields && <Button disabled={!values.name && !values.email} color='primary' variant="contained" type="submit">Enviar</Button>}
          </Box>
        </form>
      )}
    />
  )
}

export default UserForm;
