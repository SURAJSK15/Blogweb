
import Login from './Pages/login';
import PaginationComp from './Pages/Pagniation';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <Router>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Pagniation" element={<PaginationComp/>}/>

   </Routes>
   
   </Router>
   </>
  )
}

export default App;
