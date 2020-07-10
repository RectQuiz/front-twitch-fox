import React from 'react';
import { Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
// import GlobalStyle from './styles/global';
// import store from './store';
const browserHistory = createBrowserHistory();
function App() {

  return (
    <Router history={browserHistory}>
      {/* <Provider store={store}> */}
        {/* <GlobalStyle /> */}
        <Routes />
      {/* </Provider> */}
    </Router>
  );
}

export default App;
