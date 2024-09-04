import React from 'react';
import UserForm from './components/form/UseForm';
import UsersTable from './components/table/UsersTable';

function App() {
  return (
    <div className="App">
      <h1>Formulário de Usuário</h1>
      <UserForm />
      <UsersTable />
    </div>
  )
}

export default App;
