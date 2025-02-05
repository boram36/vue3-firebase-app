import { defineBoot } from '#q-app/wrappers';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from 'src/stores/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDJaQtpJ26OtQQ3SIZFSDvjRZesDCloUNY',
  authDomain: 'boram-vue3-firebase-app.firebaseapp.com',
  projectId: 'boram-vue3-firebase-app',
  storageBucket: 'boram-vue3-firebase-app.firebasestorage.app',
  messagingSenderId: '281361866731',
  appId: '1:281361866731:web:c8f84581c4e3876e76c3ae',
  measurementId: 'G-NEFWN62CYR',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

export default defineBoot(async () => {
  const authStore = useAuthStore();
  onAuthStateChanged(auth, user => {
    console.log('### user:', user);
    authStore.setUser(user);
  });
});
