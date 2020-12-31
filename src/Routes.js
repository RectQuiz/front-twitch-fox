import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './components';
import * as View from './views';
import { Simple } from './layouts';
// import { useDispatch } from 'react-redux';
// import { cadastro_pessoa_response } from '~/store/modules/uf/action';
// import { login_auth } from '~/store/modules/login/action';
const Routes = () => {
  return (
    <Switch>
      <PublicRoute component={View.Home} exact layout={Simple} path="/" />
      <PublicRoute component={View.Home} exact layout={Simple} path="/home" />
      <PublicRoute component={View.CallbackOauth} exact layout={Simple} path="/callback_oauth" />
      <PublicRoute component={View.Loja} exact layout={Simple} path="/loja" />
      <PrivateRoute component={View.UserInfo} exact layout={Simple} path="/user/:nick_user" />
      <PrivateRoute component={View.CadastroPerguntas} exact layout={Simple} path="/perguntas/cadastro" />
      <PrivateRoute component={View.CadastrarNiveis} exact layout={Simple} path="/nivel/cadastro" />
      <PrivateRoute component={View.CadastroPremiacao} exact layout={Simple} path="/premiacao/cadastro" />
      <PrivateRoute component={View.Partida} exact layout={Simple} path="/partida" />
      {/* <PublicRoute
        component={View.CadPessoaFisica}
        exact
        layout={Simple}
        path="/auth"
      /> */}

      {/* ------- INICIO ROTAS PROCESSOS ------ */}
      
      {/* <PrivateRoute
        component={View.Dashboard}
        exact
        layout={Dash}
        path="/dashboard"
      /> */}
    </Switch>
  );
}

export default Routes;