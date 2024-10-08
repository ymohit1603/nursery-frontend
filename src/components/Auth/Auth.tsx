import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { signIn } from "../../redux/slices/authSlice";

export const Auth = ({ type }: { type: "Signup" | "Signin" }) => {
    const dispatch = useAppDispatch();
    const [Inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    // const [error, setError] = useState(null);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    async function sendRequest() {
        console.log(`/user/${type.toLowerCase()} ${backendUrl}`);
        try {
            const response = await axios.post(`${backendUrl}/user/${type.toLowerCase()}`, Inputs,{
                withCredentials: true
            });
            const jwt = response.data.token;
            console.log("jwt", jwt);
            if (jwt) {
                dispatch(signIn());
            }
         
            // localStorage.setItem("jwt", jwt);
            // document.cookie = `jwt=${jwt};path=/;max-age=3600`; 
            navigate(-1);
        } catch (error) {
            alert("Error while signing in");
        }
        // setInputs({ email: "", password: "" });
    }

    return (
        <div className="bg-slate-200 h-screen flex justify-center">
            <div className="flex justify-center flex-col w-1/3">
                <div className="mb-4">
                    <div className="font-bold text-3xl flex justify-center">Welcome to Nursery</div>
                    <div className="text-lg text-slate-600 flex justify-center">Please sign in or sign up to continue</div>
                </div>
                <div className="bg-white w-full py-5 px-3 border rounded-xl">
                    <div>
                        <LabelledInput
                            label="Email"
                            placeholder="Enter your email"
                            value={Inputs.email}
                            onChange={(e) => setInputs({ ...Inputs, email: e.target.value })}
                        />
                        <LabelledInput
                            label="Password"
                            placeholder="Enter your password"
                            value={Inputs.password}
                            onChange={(e) => setInputs({ ...Inputs, password: e.target.value })}
                        />
                        <div className="my-3">
                            <button
                                onClick={sendRequest}
                                className="w-[calc(100%-6px)] py-1 mx-1.5 border rounded-lg bg-blue-500 text-white"
                            >
                                {type === "Signin" ? "Sign In" : "Sign Up"}
                            </button>
                        </div>
                        <div className="p-3 text-slate-600">
                            {type === "Signin" ? "Create New Account? " : "Already have an Account "}
                            <Link className="text-blue-600" to={type === "Signin" ? "/signup" : "/signin"}>
                                {type === "Signin" ? "Sign Up" : "Sign In"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({ label, placeholder, value, onChange }: LabelledInputType) {
    return (
        <div className="p-3 w-full">
            <div className="mb-3">{label}</div>
            <div>
                <input
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}