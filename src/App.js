import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        
        <BurgerBuilder />
       
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
