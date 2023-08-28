import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";
import { useState } from "react";
import { LogginPage } from "./pages/LogginPage";
import { RegisterDonationPage } from "./pages/RegisterDonationPage";
import { HomePage } from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/donar" element={<RegisterDonationPage/>}></Route>
      <Route path="/" element={<LogginPage/>}></Route>
      <Route>
        <Route path="/home" element={<HomePage/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
