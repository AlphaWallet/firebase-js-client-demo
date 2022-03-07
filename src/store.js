import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

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

export default class Store {
  updateBalance(walletAddress, token, balance) {
    const dr = doc(firestore, walletAddress + "/tokens");
    updateDoc(dr, {
      token,
      balance,
    }).then((result, error) => {
      console.log(result);
      console.log(error);
    });
  }

  updatePrice(walletAddress, token, price) {
    const dr = doc(firestore, walletAddress + "/tokens");
    updateDoc(dr, {
      token,
      price,
    }).then((result, error) => {
      console.log(result);
      console.log(error);
    });
  }
}
