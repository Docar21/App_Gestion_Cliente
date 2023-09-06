//import logo from './logo.svg'; <Route path='/Login' element={<Login/>}/>
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Regiter';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </Router>
  </div>
  );
}

export default App;
