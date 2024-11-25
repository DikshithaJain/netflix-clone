import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDTg_v61a-OL05XzJ5wkHseQUQbyCFVArc",
  authDomain: "netflix-clone-4558c.firebaseapp.com",
  projectId: "netflix-clone-4558c",
  storageBucket: "netflix-clone-4558c.firebasestorage.app",
  messagingSenderId: "516606114202",
  appId: "1:516606114202:web:6729b3f7d447b2c8676223"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await addDoc(collection(db, 'user'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, signup, logout };