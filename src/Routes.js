import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './components';
import * as View from './views';
import { Simple, Dashboard } from './layouts';
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
      <PublicRoute component={View.LoginAdmin} exact layout={Simple} path="/login" />
      
      <PrivateRoute component={View.UserInfo} exact layout={Simple} path="/user" />
      <PrivateRoute component={View.CadastroPerguntas} exact layout={Simple} path="/perguntas/cadastro" />
      <PrivateRoute component={View.CadastrarNiveis} exact layout={Simple} path="/nivel/cadastro" />
      <PrivateRoute component={View.CadastroPremiacao} exact layout={Simple} path="/premiacao/cadastro" />
      <PrivateRoute component={View.CadastroCategorias} exact layout={Simple} path="/categoria/cadastro" />
      <PrivateRoute component={View.Partida} exact layout={Simple} path="/partida" />


      <PrivateRoute component={View.HomeDashBoard} exact layout={Dashboard} path="/dashboard/home" />
      <PrivateRoute component={View.HomeDashBoard} exact layout={Dashboard} path="/dashboard" />
      <PrivateRoute component={View.LojaConfig} exact layout={Dashboard} path="/dashboard/loja" />
      <PrivateRoute component={View.CreateProduct} exact layout={Dashboard} path="/dashboard/product/create" />
      <PrivateRoute component={View.EditProduct} exact layout={Dashboard} path="/dashboard/product/edit/:id_product" />
      <PrivateRoute component={View.DetailProduct} exact layout={Dashboard} path="/dashboard/product/detail/:id_product" />
      <PrivateRoute component={View.UserConfigDashBoard} exact layout={Dashboard} path="/dashboard/:id_user/config" />
      <PrivateRoute component={View.ListResgatePoints} exact layout={Dashboard} path="/dashboard/resgatePontos" />
      <PrivateRoute component={View.ListResgateProdutos} exact layout={Dashboard} path="/dashboard/resgateProdutos" />
      <PrivateRoute component={View.ListResgateProdutosPendentes} exact layout={Dashboard} path="/dashboard/resgateProdutosPendentes" />
      <PrivateRoute component={View.ConfigRewards} exact layout={Dashboard} path="/dashboard/rewards" />
      <PrivateRoute component={View.CreateReward} exact layout={Dashboard} path="/dashboard/rewards/create" />

      <PrivateRoute component={View.Roleta} exact layout={Simple} path="/roleta" />

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
