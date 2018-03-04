import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyATiCWq2Gk9uE7O6ehYdfRqncef2D5_F2c",
   authDomain: "nba-2018-q3.firebaseapp.com",
   databaseURL: "https://nba-2018-q3.firebaseio.com",
   projectId: "nba-2018-q3",
   storageBucket: "nba-2018-q3.appspot.com",
   messagingSenderId: "55404550737"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}


export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}
