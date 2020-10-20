import * as firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.firestore();
export const videoRef = db.collection("listId");
export const usersRef = db.collection('users');
