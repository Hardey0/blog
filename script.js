
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

const colRef = collection(db, 'Blog')

document.getElementById('blogForm').addEventListener('submit', blogAccount)

async function blogAccount(e) {
    e.preventDefault();
     const allDetails ={ 
        title: blogForm.title.value.trim(),
        description: blogForm.description.value.trim(),
        author: blogForm.author.value.trim(),
        date: blogForm.date.value.trim(),
        
     }

     try{
        const addRef = await addDoc(colRef, allDetails)
        console.log('Document written by ' ,addRef.id)
        alert("Successful Added ✅")

     }catch(err){
         console.log("document written by ", err)
     }
    
}









 