import * as React from 'react';

// Components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersAction } from '../../redux/actions';
import { AppDispatch, RootState } from '../../redux/store';
import { Box, Typography } from '@mui/material';

type IRow = {
  id: string
  name: string
  email: string
}

export default function UsersTable() {
  const dispatch = useDispatch<AppDispatch>()
  const usersList = useSelector((state: RootState) => state.formReducer.data)
  const status = useSelector((state: RootState) => state.formReducer.status)

  React.useEffect(() => {
    dispatch(getAllUsersAction())
  }, [status])

  return (

    <Box
      sx={{ mt: '32px' }}
    >
      <Typography sx={{ paddingBlock: '24px', fontWeight: 600, fontSize: '24px'}}>Usuários Cadastrados</Typography>
      <TableContainer component={Paper}>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList.map((row: IRow) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}