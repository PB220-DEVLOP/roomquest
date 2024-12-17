// src/components/Login.js
import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, fireDB } from "../../../../firebase/FirebaseConfig"; 

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        userType: "User",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Function to handle changes in the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Function to handle user type selection
    const handleUserTypeChange = (userType) => {
        setFormData((prevData) => ({
            ...prevData,
            userType,
        }));
    };

    // Function to handle Google Sign-In
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("Google User Info:", user);

            // Redirect based on userType
            if (formData.userType === "User") {
                navigate("/user-home");
            } else if (formData.userType === "Residency Owner") {
                navigate("/residence-owner-home");
            } else if (formData.userType === "Multi-Mess Manager") {
                navigate("/multi-mess-manager-home");
            }
        } catch (error) {
            console.error("Google Sign-In error:", error.message);
            setError(error.message || "Google Sign-In failed. Please try again.");
        }
    };

    // Function to handle Email/Password login
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        try {
            // Use signInWithEmailAndPassword for email/password sign-in
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Email/Password User Info:", userCredential.user);

            // Redirect based on userType
            if (formData.userType === "User") {
                navigate("/user-home");
            } else if (formData.userType === "Residency Owner") {
                navigate("/residence-owner-home");
            } else if (formData.userType === "Multi-Mess Manager") {
                navigate("/multi-mess-manager-home");
            }
        } catch (err) {
            console.error("Login error:", err); // Log the actual error object
            let errorMessage = "An error occurred during login.";
            if (err.code === "auth/user-not-found") {
                errorMessage = "No user found with this email.";
            } else if (err.code === "auth/wrong-password") {
                errorMessage = "Invalid credentials. Please check your email and password.";
            } else if (err.code === "auth/invalid-email") {
                errorMessage = "Invalid email format.";
            } else if (err.message) {
                errorMessage = err.message;  // Capture any other error messages
            }
            setError(errorMessage);  // Set the error message in the state
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5E3E0] p-4">
            <div className="max-w-sm w-full bg-[#E8B4BC] p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-2 text-center text-[#3A3238]">Login</h1>

                {/* User Type Selection Buttons */}
                <div className="flex space-x-4 mb-6">
                    <button
                        type="button"
                        onClick={() => handleUserTypeChange("User")}
                        className={`w-full mb-2 h-16 flex items-center justify-center rounded-lg text-sm font-bold ${formData.userType === "User"
                            ? "bg-[#D282A6] text-white hover:border hover:border-[#6E4555] hover:text-[#6E4555] hover:bg-white"
                            : "bg-[#E8B4BC] text-[#6E4555] hover:border hover:border-[#6E4555] hover:text-[#6E4555] hover:bg-white"
                            }`}
                    >
                        User
                    </button>
                    <button
                        type="button"
                        onClick={() => handleUserTypeChange("Residency Owner")}
                        className={`w-full mb-2 h-16 flex items-center justify-center rounded-lg text-sm font-bold ${formData.userType === "Residency Owner"
                            ? "bg-[#D282A6] text-white hover:border hover:border-[#6E4555] hover:text-[#6E4555] hover:bg-white"
                            : "bg-[#E8B4BC] text-[#6E4555] hover:border hover:border-[#6E4555] hover:text-[#6E4555] hover:bg-white"
                            }`}
                    >
                        Residency Owner
                    </button>
                    <button
                        type="button"
                        onClick={() => handleUserTypeChange("Multi-Mess Manager")}
                        className={`w-full h-16 flex items-center justify-center rounded-lg text-sm font-bold ${formData.userType === "Multi-Mess Manager"
                            ? "bg-[#D282A6] text-white hover:border hover:border-[#6E4555] hover:text-[#6E4555] hover:bg-white"
                            : "bg-[#E8B4BC] text-[#6E4555] hover:border hover:border-[#6E4555] hover:text-[#6E4555] hover:bg-white"
                            }`}
                    >
                        Multi-Mess Manager
                    </button>
                </div>

                <p className="text-center text-sm text-[#3A3238] mb-6">
                    {formData.userType ? `Please log in as ${formData.userType}` : "Please log in to your account"}
                </p>

                {/* Existing Email/Password Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#3A3238]">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-[#D282A6] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D282A6]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-[#3A3238]">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-[#D282A6] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D282A6]"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit" onClick={handleSubmit}
                            className="w-full py-2 px-4 bg-[#6E4555] text-white font-semibold rounded-md shadow hover:bg-white hover:text-[#6E4555] hover:border hover:border-[#6E4555]"
                        >
                            Login
                        </button>
                    </div>

                </form>

                {/* Google Sign-In Button */}
                <div className="text-center mt-4">
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full py-2 px-4 bg-white text-[#6E4555] font-semibold border border-[#6E4555] rounded-md shadow hover:bg-[#6E4555] hover:text-white"
                    >
                        Sign in with Google
                    </button>
                </div>
                <div className="text-center mt-4">
                    <a href="/signup"
                        className="w-full py-2 px-4 bg-white text-[#6E4555] font-semibold border border-[#6E4555] rounded-md shadow hover:bg-[#6E4555] hover:text-white"
                    >Sign Up</a>
                </div>
                {/* Error Message */}
                {error && <p className="text-center text-red-600 mt-4">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
