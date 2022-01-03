import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA2c-FsWMoBLKuwKxXRDVckGN2925HyW6s',
  authDomain: 'your-goals-7e77c.firebaseapp.com',
  databaseURL: 'https://your-goals-7e77c-default-rtdb.firebaseio.com',
  projectId: 'your-goals-7e77c',
  storageBucket: 'your-goals-7e77c.appspot.com',
  messagingSenderId: '1026097918573',
  appId: '1:1026097918573:web:33e7a9e98447f583a84564',
  measurementId: 'G-ZD6GV7RK83'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }