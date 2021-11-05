import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseInitial = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitial