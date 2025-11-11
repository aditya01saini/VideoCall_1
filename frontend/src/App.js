
import './App.css';
import LandingPage from './pages/landing.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Authentication from './pages/authentication.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';

function App() {
  
  return (
    <>
        <Router>
           <AuthProvider>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path="/auth" element={<Authentication/>}/>
          </Routes>
          </AuthProvider>
        </Router>
    </>
  )
}

export default App
