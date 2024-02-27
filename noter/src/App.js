
import Home from "./pages/home";
import Sign_in from "./pages/sign-in";
import Sign_up from "./pages/sign-up";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <body className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="./pages/sign-in" element={<Sign_in/>} />
            <Route path="./pages/sign-up" element={<Sign_up/>} />
          </Routes>
      </body>
    </Router>
  );
}

export default App;
