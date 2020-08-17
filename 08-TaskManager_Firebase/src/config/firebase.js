import * as firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

export const tasksRef = database.ref("tasks");
export const userRef = database.ref("user");
export const storageRef = firebase.storage().ref;
export default database;
