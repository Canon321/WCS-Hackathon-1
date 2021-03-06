import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Swipe from "./Swipe";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<Swipe />} />
      </Routes>
    </div>
  );
}

export default App;
