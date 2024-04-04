import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCwfmbT7KOUP10CHLMnbmBVQfu0Zaf5qqg",
  authDomain: "fresh-express-fdc6e.firebaseapp.com",
  projectId: "fresh-express-fdc6e",
  storageBucket: "fresh-express-fdc6e.appspot.com",
  messagingSenderId: "485677895224",
  appId: "1:485677895224:web:f8e866d7a5a40b05d0e0cd"
};

export const app = initializeApp(firebaseConfig);