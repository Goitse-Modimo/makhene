// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0CQS1qpCiJQ-KcvsJZnr_aVY1dEea6ME",
  authDomain: "makhene-487fb.firebaseapp.com",
  projectId: "makhene-487fb",
  storageBucket: "makhene-487fb.appspot.com",
  messagingSenderId: "937092917700",
  appId: "1:937092917700:web:561ff90173cce2ccc39c91",
  measurementId: "G-BFZ0954T10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
const analytics = getAnalytics(app);

export { timeStamp };
export default firebase.firestore();