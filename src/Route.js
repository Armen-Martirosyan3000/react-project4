import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Hook from './Hook';
import App from './App';
   

function Rout() { 

	return (
    
	<BrowserRouter>
	  <Routes>
        <Route path="/"  element={<Hook />} />
		    <Route path="/app" element={<App />} />
      </Routes>
	</BrowserRouter>
	);
}
export default Rout;