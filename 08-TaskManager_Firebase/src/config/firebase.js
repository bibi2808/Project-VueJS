import * as firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/database";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

export const tasksRef = database.ref("tasks");
export const userRef = database.ref("user");
export default database;

// users : {
//     'dsaidas':{ 
//         email:'abc@gmail.com',
//         role:'amin'
//     }

// }