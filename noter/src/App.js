
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import Sign_up from "./pages/sign-up";
import Profile from "./pages/profile";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <body className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/sign-up" element={<Sign_up/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
      </body>
    </Router>
  );
}

export default App;
