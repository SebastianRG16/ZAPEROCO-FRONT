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
import { OverviewComponent } from "./components/OverviewComponent";
import { ReadQRComponent } from "./components/ReadQRComponent";
import { RegisterComponent } from "./components/RegisterComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/donar" element={<RegisterDonationPage/>}></Route>
      <Route path="/" element={<LogginPage/>}></Route>
      <Route>
        <Route path="/home/" element={<HomePage/>}>
          **<Route index element={<RegisterComponent/>}></Route>
          <Route path="/home/resumen" element={<OverviewComponent/>}></Route>
          <Route path="/home/QR" element={<ReadQRComponent/>}></Route>
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
