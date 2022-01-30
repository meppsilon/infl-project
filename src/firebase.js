import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATf2gMcmcFyL6EEASVklMQN2kQltfRrxg",
  authDomain: "infl-project.firebaseapp.com",
  projectId: "infl-project",
  storageBucket: "infl-project.appspot.com",
  messagingSenderId: "673892571939",
  appId: "1:673892571939:web:06015f66007033c6db8a96",
  measurementId: "G-Y8C17425SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/youtube.readonly');
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const auth = getAuth(app);

export const googleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log('result', result);
      console.log('credential', credential);
      console.log('token', token);
      console.log('user', user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log('error', error);
    });
};

export const createUser = () => {
  
};

// TODO: add extra layer of search by account

export const createAuction = async (auctionData) => {
  const db = getDatabase(app);
  const auctionListRef = push(ref(db, 'auctions'));
  const modifiedAuction = {
    ...auctionData,
    id: auctionListRef.key,
    created: Date.now(),
  };
  await set(auctionListRef, modifiedAuction);
  return modifiedAuction;
}
