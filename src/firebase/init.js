import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCvWJdIKhUeEeFIeiCqm1HsiU8K_2fWuCY",
  authDomain: "smoothiesdatabase.firebaseapp.com",
  databaseURL: "https://smoothiesdatabase.firebaseio.com",
  projectId: "smoothiesdatabase",
  storageBucket: "smoothiesdatabase.appspot.com",
  messagingSenderId: "192364926558",
  appId: "1:192364926558:web:01a6b4821c40b0578646cf"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()