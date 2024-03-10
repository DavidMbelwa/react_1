import NavSignIn from "../components/navSignIn";
import HeroSignIn from "../components/heroSignIn";

const SignIn = () => {
    return ( 
        <body className="container-fluid d-flex flex-column align-items-center vh-100 bg-light">
            <NavSignIn />
            <HeroSignIn />
        </body>
    );
}
 
export default SignIn;