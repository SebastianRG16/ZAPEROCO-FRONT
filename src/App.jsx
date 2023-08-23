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

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/donar" element={<RegisterDonationPage/>}></Route>
      <Route path="/" element={<LogginPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
