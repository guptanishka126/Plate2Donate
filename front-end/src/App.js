import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Updated imports
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Common_page from './Components/Common_page';
import ViewEvents from './Components/ViewEvents';
function App() {
  return (
    
    <BrowserRouter> 
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} /> {/* Updated route to Home component */}
      <Route path="/register" element={<Register />} /> {/* Updated route to Register component */}
      <Route path="/login" element={<Login />} /> {/* Updated route to Login component */}
      <Route path="/page" element={<Common_page />} /> {/* Updated route to Common_page component */}
      <Route path="/view" element={<ViewEvents />} /> {/* Updated route to Common_page component */}

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
