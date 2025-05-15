import { initializeApp } from "firebase/app";
import { addDoc, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// signup function------------------------------------------------
const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: name,
            authProvider: "local",
            email: email
        });
    }
    catch (error) {
        console.log(error);
        alert(error.message);

    }
}


// login function------------------------------------------------
const login = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
        console.log(error);
        alert(error.message);
    }
}

// logout function------------------------------------------------
const logout = () => {
    signOut(auth);
}


export { auth, db, login, logout, signup };
