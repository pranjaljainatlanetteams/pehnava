import './App.css';
import HomePage from './pages/homePage/homepage.component'
import React from 'react';
import {Switch,Route} from 'react-router-dom';
// import {Route} from 'react-route-dom';
import ShopPage from './pages/homePage/shop/shop.component.js'
import Header from './components/header/header-component.js'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup';
import { createUserProfileDocument,auth } from './firebase/firebase.utils'

//we want to store the set of user in our app..jab bhi kisi bhi method se sign up kre to wo user store ho jae app.js me taki apn ko pata rhe ki konse user ne sign up kiya hai abi aur uski id aur password kya hai.Because we want the current user object through out the application.


//we have to convert out function to a class component.

//now we have the access to the state.
class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
           //we have to use the data word here to see the data which is being in use.
            this.setState({
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            });
            console.log(this.state);
          })
      }
      else{
        this.setState({currentUser:userAuth})
      }
      
      
      //abhi jo user login hai wo store ho jaega current user me uski value aa jaegi.
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return <div >
  <Header  currentUser={this.state.currentUser}/>
      {/* agar koi user hua wah atoh user ko pass kr dega agar nhi hua user to null ko pass kar dega. */}
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUpPage}/>
    </Switch> 
      
    </div>
  }
  
    
  
}

export default App;
