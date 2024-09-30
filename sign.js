// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4HH1eNmCgvsxYcmt-mWw89A1tDxTq8k8",
  authDomain: "blog-b9f6d.firebaseapp.com",
  projectId: "blog-b9f6d",
  storageBucket: "blog-b9f6d.appspot.com",
  messagingSenderId: "1036653639594",
  appId: "1:1036653639594:web:f2fd700dd886e443161dd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const colsign = collection(db, 'Sign')

const signUp = document.getElementById('signUp')
signUp.addEventListener('submit', signup)

  async function signup(event){
   event.preventDefault();

   const signForm ={
      username: signUp.username.value.trim(),
      address: signUp.address.value.trim(),
      email: signUp.email.value.trim(),
      password: signUp.password.value.trim(),
      confirmP: signUp.confirmPassword.value.trim()
   }
   
   try{
      if(signForm.password != signForm.confirmP){
         alert('Incorrect Password');
         return;
      }
    const {confirmP, ...restOfUserDetails} = signForm
      const addSign = await addDoc(colsign, restOfUserDetails)
      console.log('Document written by ' ,addSign.id)
      alert ('Successfully')


   
   }catch(err){
      console.log(err)
   }
}