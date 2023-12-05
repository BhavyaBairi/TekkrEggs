import "./App.css";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import HomePage from "./Components/Home/Homepage/Homepage";
import Privacy from "./Components/Privacy/Privacy";
import Terms from "./Components/Terms/Terms";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
        <Routes>
          <Route path="privacy" element={<Privacy />}/>
        </Routes>
        <Routes>
        <Route path = "terms" element = {<Terms /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
