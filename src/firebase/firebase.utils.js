import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAOVRz7XJt-1LukFa4SnFRixqkFI07VyuA",
  authDomain: "crown-db-5ed20.firebaseapp.com",
  projectId: "crown-db-5ed20",
  storageBucket: "crown-db-5ed20.appspot.com",
  messagingSenderId: "188785137944",
  appId: "1:188785137944:web:81b8df7819de3e05da266d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
console.log(auth);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
