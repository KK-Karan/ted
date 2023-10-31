import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCDrgXnQsk5sFUINo3oCVZ4tPvzL_tGCD4",
  authDomain: "tedx-402509.firebaseapp.com",
  projectId: "tedx-402509",
  storageBucket: "tedx-402509.appspot.com",
  messagingSenderId: "380791281480",
  appId: "1:380791281480:web:28628b93a3433fd489057d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export{auth, provider}