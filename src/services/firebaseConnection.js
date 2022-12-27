import firebase from 'firebase/app';
import 'firbase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCEhA4bBSXQFbPsOoKy9HcuZ1Ewv4DKWPk",
  authDomain: "chamados-6b44e.firebaseapp.com",
  projectId: "chamados-6b44e",
  storageBucket: "chamados-6b44e.appspot.com",
  messagingSenderId: "824609194754",
  appId: "1:824609194754:web:4d7d32dcbf2a631099381b",
  measurementId: "G-48BK75HBKL"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;