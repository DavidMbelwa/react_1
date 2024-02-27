import Hero from "../components/hero";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <body className="container-fluid vh-100 bg-primary">
            <Navbar/>
            <Hero/>
        </body>
        );
    }
    
    export default Home;