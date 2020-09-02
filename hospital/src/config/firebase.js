import * as firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;
