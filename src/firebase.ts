import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import { getAuth, signInAnonymously, onAuthStateChanged, User } from 'firebase/auth';

const firebaseConfig = {
  projectId: "celtic-house-492616-n5",
  appId: "1:606873022:web:f79bde757d5603583245ef",
  apiKey: "AIzaSyDnowom95QKH4Vt244UBCXPWWYlEHVf_qw",
  authDomain: "celtic-house-492616-n5.firebaseapp.com",
  storageBucket: "celtic-house-492616-n5.firebasestorage.app",
  messagingSenderId: "606873022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with the specific database ID
export const db = getFirestore(app, "ai-studio-socioprep-7ce3778f-5e23-4c6d-a7fd-065146443134");

// Initialize Auth
export const auth = getAuth(app);

// Authenticate anonymously
export const initAuth = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        signInAnonymously(auth)
          .then((cred) => resolve(cred.user))
          .catch((err) => {
            console.error("Anonymous authentication failed:", err);
            reject(err);
          });
      }
    });
  });
};

// Validate connection to Firestore as per the required skill
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log("Firestore connection verified successfully.");
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration. The client is offline.");
    } else {
      // It is normal to fail with permission-denied for non-existent documents,
      // as long as it reaches the server, it validates connection.
      console.log("Firestore connection test completed:", (error as Error).message);
    }
  }
}

testConnection();
