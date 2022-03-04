import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDs9QAsO-7dvFdYeWXiGkqD5SvBOeeLCEg",
  authDomain: "test-firestore-95e2c.firebaseapp.com",
  projectId: "test-firestore-95e2c",
  storageBucket: "test-firestore-95e2c.appspot.com",
  messagingSenderId: "305753471562",
  appId: "1:305753471562:web:60a4d3c834c26d5e9644b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const tokenCollection = collection(firestore, 'tokens');

getDocs(tokenCollection).then((snapshot) => {
  const objs = snapshot.docs.map(doc => doc.data())
  const data = objs.map((obj) => obj.name + ": " + obj.price)
  const div = document.createElement("div")
  div.innerText = data.join(",");
  document.body.appendChild(div);
})
