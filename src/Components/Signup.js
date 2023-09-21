import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/signup.css'
import app  from './firebase'

const auth = getAuth(app);


const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const onSubmit = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/PictureSlide")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError("Email or Password wrong");
            console.log(errorCode, errorMessage);  
        });
    }

    return ( 
        <div className="sign">
            <main>
                            <h1> Image Gallery </h1>
                <section>
                    <div className="example">
                        <h4>Email: user@example.com</h4>
                        <h4>Password: 1Password</h4>
                    </div>
                    <div>
                        <div className="form">
                            <form>
                                <h2>Sign up</h2>
                                <div>
                                    <label htmlFor="email-address">
                                        Email address
                                    </label>
                                    <input type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email address"
                                     />
                                </div>
                                <div>
                                    <label htmlFor="password">
                                        Password
                                    </label>
                                    <input type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="password"
                                     />
                                </div>


                                <button
                                type="submit"
                                onClick={onSubmit}
                                >
                                    Sign up
                                </button>

                            </form>
                               <p className="error">{error && error} </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
     );
}
 
export default Signup;