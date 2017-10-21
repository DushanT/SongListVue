import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyC3-OwkPM1jVHKifxWlCYNVEodq1UKmR04',
  authDomain: 'songlist-b5bad.firebaseapp.com',
  databaseURL: 'https://songlist-b5bad.firebaseio.com',
  projectId: 'songlist-b5bad',
  storageBucket: 'songlist-b5bad.appspot.com',
  messagingSenderId: '779581248975'
}

let app = Firebase.initializeApp(config)
let db = app.database()

export default db