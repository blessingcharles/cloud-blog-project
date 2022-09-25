import { useState } from "react";
import Header from "../components/Header";

const styles = {};

const SignUp = () => {

    const [signupDetails , setSignupDetails] = useState({
        username : "" ,
        email : "" ,
        password : "" ,
        currentPassword : ""  
    }) ;


    const signupFormHandler = (e)=>{
        e.preventDefault() ;
        console.log(signupDetails)
    }

    return (
        <div>
            <Header />
            <div class="flex items-center justify-center min-h-screen bg-gray-100">
                <div class="px-8 py-6 text-left bg-white shadow-lg">
                    <h3 class="text-4xl font-bold text-center">SignUp</h3>
                    <form action="">
                        <div class="mt-4">
                            <div>
                                <label class="block" for="Username">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    value={signupDetails.username}
                                    onChange={(e) => setSignupDetails({ ...signupDetails , username : e.target.value })}
                                />
                                <span class="text-xs tracking-wide text-red-600">
                                    Username field is required{" "}
                                </span>
                            </div>
                            <div>
                                <label class="block" for="email">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    value={signupDetails.email}
                                    onChange={(e) => setSignupDetails({ ...signupDetails , email : e.target.value })}
                                />
                                <span class="text-xs tracking-wide text-red-600">
                                    Email field is required{" "}
                                </span>
                            </div>
                            <div class="mt-4">
                                <label class="block">Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    value={signupDetails.password}
                                    onChange={(e) => setSignupDetails({ ...signupDetails , password : e.target.value })}
                                />
                            </div>
                            <div class="mt-4">
                                <label class="block">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    value={signupDetails.currentPassword}
                                    onChange={(e) => setSignupDetails({ ...signupDetails , currentPassword : e.target.value })}                              
                                />
                            </div>

                            <div class="flex items-baseline justify-between">
                                <button 
                                    class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                                    onClick={(e) => signupFormHandler(e)}>
                                    Signup
                                </button>
                                <a
                                    href="#"
                                    class="text-sm text-blue-600 hover:underline"
                                >
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
