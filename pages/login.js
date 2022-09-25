import { useState } from "react";
import Header from "../components/Header";

const styles = {};

const Login = () => {

    const [loginDetails , setLoginDetails] = useState({
        email : "" ,
        password : ""  
    }) ;

    const loginFormHandler = (e) => {
        e.preventDefault();
        console.log(loginDetails);
    };

    return (
        <div>
            <Header />
            <div class="flex items-center justify-center min-h-screen bg-gray-100">
                <div class="px-8 py-6 text-left bg-white shadow-lg">
                    <h3 class="text-4xl font-bold text-center">Login</h3>
                    <form action="">
                        <div class="mt-4">
                            <div>
                                <label class="block" for="email">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    onChange={(e) => setLoginDetails({...loginDetails , email : e.target.value}) }
                                    value = {loginDetails.email}
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
                                    onChange={(e) => setLoginDetails({...loginDetails , password : e.target.value}) }
                                    value = {loginDetails.password}
                                />
                            </div>
                            <div class="flex items-baseline justify-between">
                                <button
                                    class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                                    onClick={loginFormHandler}
                                >
                                    Login
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

export default Login;
