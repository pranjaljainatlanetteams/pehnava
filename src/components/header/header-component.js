import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss';
import './title.scss';
import { auth } from '../../firebase/firebase.utils';
import './style.scss';

const Header = ({currentUser}) => (
  <div className="center1">
  <div className="header">

    <Link className="logo-container" to="/">
      <Logo className="logo" />

    </Link>

    <h1 className="center">Pehnava</h1>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/shop">CONTACT</Link>
      {
        currentUser ? 
        <div className="option" onClick={()=>auth.signOut()}>SIGN OUT </div> :
        <Link className="option" to='/signin'> SIGN IN</Link>
      }

    </div>
  </div>
  </div>
);
export default Header;
