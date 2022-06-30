import logo from './logo.svg';
import './App.css';
import Main from './Components/Home/Main';
import SpecificStock from "./Components/SpecificStock/SpecificStock"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
   <Router>
       <Routes>
         <Route path={"/"} element={<Main/>}/>
          <Route path={"/specific/:id"} element={ <SpecificStock />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
