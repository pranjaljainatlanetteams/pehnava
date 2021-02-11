import React from 'react';
import './signin-signup.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './style.scss';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn/>
    <SignUp/>
   {/* kahi aur sign in aur sign up component bana rhe hai yaha pe baad me imprt kr dege dont worry. */}
  </div>
);
export default SignInAndSignUpPage;