import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDI47eVHxkSSI8hQuz3PGJTrUp0IOHxxqg',
  authDomain: 'pehnava-fb573.firebaseapp.com',
  projectId: 'pehnava-fb573',
  storageBucket: 'pehnava-fb573.appspot.com',
  messagingSenderId: '157662413',
  appId:  '1:157662413:web:c7057c25e780985833fd84',
};

export const createUserProfileDocument = async (userAuth , additionalData) =>{
  if ( !userAuth ) return ;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const { displayName , email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user',error.message);
    }

  }
  return userRef; 
   
};

firebase.initializeApp (config);

export const auth = firebase.auth ();
export const firestore = firebase.firestore ();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;