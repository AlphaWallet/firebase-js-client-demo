import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDs9QAsO-7dvFdYeWXiGkqD5SvBOeeLCEg",
  authDomain: "test-firestore-95e2c.firebaseapp.com",
  projectId: "test-firestore-95e2c",
  storageBucket: "test-firestore-95e2c.appspot.com",
  messagingSenderId: "305753471562",
  appId: "1:305753471562:web:60a4d3c834c26d5e9644b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const COUNT = 100;
window.createCollections = function () {
  for (var i = 0; i < COUNT; i++) {
    const tokenCollection = collection(firestore, "user" + i);
    addDoc(tokenCollection, {
      ETH: 5,
    });
  }
};
