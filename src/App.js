import './App.css';
import HomePage from './pages/homePage/homepage.component'
import React from 'react';
import {Switch,Route} from 'react-router-dom';
// import {Route} from 'react-route-dom';
import ShopPage from './pages/homePage/shop/shop.component.js'
import Header from './components/header/header-component.js'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup';


function App() {
  return <div >
  <Header />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUpPage}/>
    </Switch> 
      
    </div>
    
  
}

export default App;
