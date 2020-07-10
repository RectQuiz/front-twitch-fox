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
