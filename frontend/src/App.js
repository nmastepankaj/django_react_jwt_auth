import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/Authentication/SignIn';
import Home from './components/Home/Home';
import CakeContainer from './components/CakeContainer';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route
          path=""
          element={
            // <Home/>
            <CakeContainer/>
          }
        />
        <Route
          path="/login"
          element={
            <SignIn/>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
