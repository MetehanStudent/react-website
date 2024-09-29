import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}  />    
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
}

export default App;
