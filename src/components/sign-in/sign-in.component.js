import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button-component/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
//we are taking a class component because we haev to store whats user is typing.
class SignIn extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      password: '',
      //puri state me email or password liya hai jab bhi change krege wo yaha change ho jaega kyuki class ke state me hai isliye yaha bhi change ho jaega
    };
  }
  handleSubmit = async event => {
    //to take the full control of the submit form we use event.prevenetDefault()
    //jese hi handle submit method ko call kiya wo dono value ko wps empty string kr dega.
    event.preventDefault ();
    const {email , password}=this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password);
    }catch(error){
      console.log(error);
    }
    this.setState ({email: '', password: ''});
  };

  handleChange = event => {
    const {value, name} = event.target;
    this.setState ({[name]: value});
  };
  render () {
    return (
      <div className="sign-in">
        {/* it is the entire sign in component. */}
        <h2> I Already have an account </h2>
        <span>Sign In With Your Email And Password</span>

        <form onSubmit={this.handleSubmit}>
          {/* form pe onsubmit lagaya jo handle submit method ko call karega   */}
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            //this will point to the handle change function whenever on change is triggered.
            required
            label="Password"
          />
       

         <div className="buttons">
           <CustomButton type="submit">Sign In</CustomButton>
           <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
             Sign In With Google
           </CustomButton>
         </div>
        </form>

      </div>
    );
  }
}
export default SignIn;
