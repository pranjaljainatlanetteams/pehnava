import React from 'react';
import './custom-button.styles.scss';
// import './title.scss';

const CustomButton=({children,isGoogleSignIn, ...otherProps})=>(
    <button className={`${isGoogleSignIn ?'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
    </button>
    //button and input both can take property of type submit.
)

export default CustomButton;