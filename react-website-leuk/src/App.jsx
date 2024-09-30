import { Routes, Route } from 'react-router-dom';
import Home from './Home'; // Zorg ervoor dat dit klopt
import Login from './Login'; // Controleer ook deze import
import NotFound from './NotFound'; // En deze

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />    
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
}

export default App;
