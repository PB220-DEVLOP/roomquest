import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { fireDB } from "../../../../firebase/FirebaseConfig"; // Import Firestore function
import { FaArrowLeft } from "react-icons/fa"; // Import back icon from react-icons

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        userType: "", // No default userType
        address: "",
        organization: "",
        dob: "",
        profilePicture: null,
    });

    const [multiMessManagerRegistered, setMultiMessManagerRegistered] = useState(false);
    const [error, setError] = useState(""); // Error state for displaying form errors
    const navigate = useNavigate();
    const auth = getAuth(); // Initialize Firebase Authentication
    const googleProvider = new GoogleAuthProvider(); // Initialize Google Auth Provider

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle file input changes (for profile picture)
    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            profilePicture: e.target.files[0],
        }));
    };

    // Handle user type selection
    const handleUserTypeChange = (userType) => {
        if (userType === "Multi-Mess Manager" && multiMessManagerRegistered) return;
        setFormData((prevData) => ({
            ...prevData,
            userType,
        }));
        if (userType === "Multi-Mess Manager") setMultiMessManagerRegistered(true);
    };

    // Form validation logic
    const validateForm = () => {
        const { name, email, password, phone, userType } = formData;
        if (!name || !email || !password || !phone || !userType) {
            setError("All fields are required.");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Invalid email format.");
            return false;
        }
        if (password.length < 6) {
            setError("Password should be at least 6 characters long.");
            return false;
        }
        return true;
    };

    // Handle form submission for email/password sign up
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return; // Validate form data before submission

        try {
            const { email, password } = formData;
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            let profilePictureUrl = "";

            // Upload profile picture to the backend server if it exists
            if (formData.profilePicture) {
                const formDataToUpload = new FormData();
                formDataToUpload.append("profilePicture", formData.profilePicture);

                try {
                    const response = await fetch("http://localhost:5000/database", {
                        method: "POST",
                        body: formDataToUpload,
                    });

                    if (!response.ok) {
                        throw new Error("Failed to upload profile picture.");
                    }

                    const result = await response.json();
                    profilePictureUrl = result.filePath; // Ensure the correct file path is returned
                } catch (uploadError) {
                    console.error("Profile picture upload error:", uploadError);
                    setError("Failed to upload profile picture.");
                    return;
                }
            }

            // Prepare data to be added to the database
            const userData = {
                uid: user.uid, // Firebase Authentication user ID
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                userType: formData.userType, // Ensure userType is included
                address: formData.address,
                organization: formData.organization,
                dob: formData.dob,
                profilePicture: profilePictureUrl,
            };

            // Add user data to the 'users' collection in Firestore
            await setDoc(doc(fireDB, "users", user.uid), userData);

            console.log("User data written to Firestore:", userData);
            navigate("/home");
        } catch (error) {
            setError("Error during registration. Please try again.");
            console.error("Error during registration:", error);
        }
    };

    // Handle Google sign-in
    const handleGoogleSignIn = async () => {
        if (!formData.userType) {
            setError("Please select a user type before signing in with Google.");
            return;
        }

        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // Prepare data to be added to the database
            const userData = {
                uid: user.uid, // Firebase Authentication user ID
                name: user.displayName,
                email: user.email,
                phone: "", // Set default values or leave as is
                userType: formData.userType, // Get the selected userType
                address: "",
                organization: "",
                dob: "",
                profilePicture: user.photoURL,
            };

            // Add user data to the 'users' collection in Firestore
            await setDoc(doc(fireDB, "users", user.uid), userData);

            console.log("User data written to Firestore:", userData);
            navigate("/home");
        } catch (error) {
            setError("Error during Google Sign-In. Please try again.");
            console.error("Error during Google Sign-In:", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F7D7DC] p-4">
            <div className="max-w-3xl w-full bg-[#E8B4BC] p-8 rounded-lg shadow-md mx-auto">
                <div className="flex items-center mb-6">
                    <button
                        onClick={() => navigate("/login")}
                        className="text-[#6E4555] hover:text-[#3A3238] mr-4"
                    >
                        <FaArrowLeft className="text-2xl" />
                    </button>
                    <h1 className="text-2xl font-bold flex-grow text-center text-[#3A3238]">
                        {formData.userType ? `${formData.userType} Registration` : "Registration Form"}
                    </h1>
                </div>

                {/* User type buttons */}
                <div className="flex space-x-4 mb-6">
                    <button
                        type="button"
                        onClick={() => handleUserTypeChange("User")}
                        className={`w-full md:w-1/3 mb-2 md:mb-0 h-16 flex items-center justify-center rounded-lg text-lg font-bold ${formData.userType === "User"
                            ? "bg-[#6E4555] text-white hover:bg-[#3A3238]"
                            : "bg-[#F7D7DC] text-[#3A3238] hover:bg-[#E8B4BC] hover:text-[#6E4555]"
                            }`}
                    >
                        User
                    </button>
                    <button
                        type="button"
                        onClick={() => handleUserTypeChange("Residency Owner")}
                        className={`w-full md:w-1/3 mb-2 md:mb-0 h-16 flex items-center justify-center rounded-lg text-lg font-bold ${formData.userType === "Residency Owner"
                            ? "bg-[#6E4555] text-white hover:bg-[#3A3238]"
                            : "bg-[#F7D7DC] text-[#3A3238] hover:bg-[#E8B4BC] hover:text-[#6E4555]"
                            }`}
                    >
                        Residency Owner
                    </button>
                    {!multiMessManagerRegistered && (
                        <button
                            type="button"
                            onClick={() => handleUserTypeChange("Multi-Mess Manager")}
                            className={`w-full md:w-1/3 h-16 flex items-center justify-center rounded-lg text-lg font-bold ${formData.userType === "Multi-Mess Manager"
                                ? "bg-[#6E4555] text-white hover:bg-[#3A3238]"
                                : "bg-[#F7D7DC] text-[#3A3238] hover:bg-[#E8B4BC] hover:text-[#6E4555]"
                                }`}
                        >
                            Multi-Mess Manager
                        </button>
                    )}
                </div>

                {/* Form for sign up */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Display Form Error */}
                    {error && <p className="text-red-500 text-center">{error}</p>}

                    {/* Full Name and Date of Birth */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-[#3A3238]">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block text-sm font-medium text-[#3A3238]">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-2 gap-4">
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-[#3A3238]">
                                Phone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* Password */}
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
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-[#3A3238]">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Organization */}
                    <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-[#3A3238]">
                            Organization
                        </label>
                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Profile Picture */}
                    <div>
                        <label htmlFor="profilePicture" className="block text-sm font-medium text-[#3A3238]">
                            Profile Picture
                        </label>
                        <input
                            type="file"
                            id="profilePicture"
                            name="profilePicture"
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-sm text-gray-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#6E4555] text-white rounded-lg text-lg font-bold hover:bg-[#3A3238]"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Google Sign-In Button */}
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full mt-4 py-2 px-4 bg-[#E8B4BC] text-[#3A3238] rounded-lg text-lg font-bold hover:bg-[#6E4555] hover:text-white"
                >
                    Sign In with Google
                </button>
            </div>
        </div>
    );
};

export default SignUp;
