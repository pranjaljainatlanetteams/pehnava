import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('id').collection('cartItems').doc(id);
firestore.doc('/users/id/cartItems/id');
firestore.collection('/users/id/cartItems');

//both have the same meaning both means same in database.