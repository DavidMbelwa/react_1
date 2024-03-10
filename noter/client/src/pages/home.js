import Hero_home from "../components/heroHome";
import Navbar from "../components/navHome";

const Home = () => {
    return (
        <body className="container-fluid d-flex flex-column align-items-center vh-100 bg-primary">
            <Navbar/>
            <Hero_home/>
        </body>
        );
    }
    
    export default Home;