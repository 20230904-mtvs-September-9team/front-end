import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from "./pages/Main";
import Produce from "./pages/Produce";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/produce" element={<Produce />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;