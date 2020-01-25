import React, { Fragment } from "react";

import GlobalStyle from "./styles/Global";

import Main from "./pages/Main";

// Aula 02/09

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
    <div className="App" />
  </Fragment>
);

export default App;
