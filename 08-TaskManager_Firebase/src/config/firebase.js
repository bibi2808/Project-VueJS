import * as firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/database";

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// var tasksRef = database.ref('tasks');
// tasksRef.on('value',function(snapshot){
//   console.log(snapshot.toJSON());
// })
// database.ref("tasks").set({
//   username: "tuanda",
//   email: "tuanda@gmfdsfdsail.com",
//   profile: "DAO ANH TUAN"
// });

// const tasksRef = database.ref("tasks/id").set({
//   abc: "text 1"
// });

export default database;
