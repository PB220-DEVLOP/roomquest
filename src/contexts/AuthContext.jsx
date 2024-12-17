// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

// Custom hook to use the Auth context
export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    // Fetch user data from Firestore
                    const userRef = doc(fireDB, "users", user.uid);
                    const userDoc = await getDoc(userRef);

                    if (userDoc.exists()) {
                        setCurrentUser(user);
                        setUserType(userDoc.data().userType);
                    } else {
                        console.error("User document does not exist in Firestore.");
                        setCurrentUser(null);
                        setUserType(null);
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    setCurrentUser(null);
                    setUserType(null);
                }
            } else {
                setCurrentUser(null);
                setUserType(null);
            }
            setLoading(false);
        });

        // Cleanup function to unsubscribe on unmount
        return () => unsubscribe();
    }, []);

    // Function to handle user login
    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Retrieve user document from Firestore
            const userRef = doc(fireDB, "users", user.uid);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                setCurrentUser(user);
                setUserType(userDoc.data().userType);
            } else {
                console.error("User document does not exist after login.");
                throw new Error("User document does not exist.");
            }
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    // Function to handle user logout
    const logout = async () => {
        try {
            await signOut(auth);
            setCurrentUser(null);
            setUserType(null);
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const value = {
        currentUser,
        userType,
        login,
        logout,  // Add logout function to the context value
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* Ensure children render only when loading is false */}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthProvider;
