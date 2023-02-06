import "./SignupScreen.css"

export default function SignupScreen() {

    //2.Login
    return(
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>
                <button type="submit">Sign In</button>

                <h4>
                    <span className="signupScreen__gray">New to Netflix?</span>
                    Sign up now.
                </h4>
            </form>
        </div>
    );
}