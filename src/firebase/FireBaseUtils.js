import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

//initilaize firebase
firebase.initializeApp(firebaseConfig);

//export firestore db and auth for use in rest of app
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// configuring for google sign in 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//create user from google sign in to store in firestore db
export const createUserProfileDoc = async (userAuth, additionalData) => {
   if(!userAuth) return;

  //query firestore with the uid of the userAuth object which is currently signed in 
  //user
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //CRUD methods can be applied to userRef
  const snapShot = await userRef.get();
 
  //if the user does not already exist in the forestore db, do this
  if(!snapShot.exists) {
   const {displayName, email} = userAuth; 
   const createdAt = new Date();

   try {
     await userRef.set({
       displayName,
       email,
       createdAt,
       ...additionalData
     })

   } catch (err) {
     console.log("ERROR CREATING USER",err)
   }
  }
  //we still userRef from this code in case we need it elsewhere later on
  return userRef;

};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef)

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
   batch.set(newDocRef, obj)
  })
  await batch.commit();
}




export default firebase;