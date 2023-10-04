import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { LogginPage } from "./pages/LogginPage";
import { RegisterDonationPage } from "./pages/RegisterDonationPage";
import { HomePage } from "./pages/HomePage";
import { OverviewComponent } from "./components/OverviewComponent";
import { ReadQRComponent } from "./components/ReadQRComponent";
import { RegisterComponent } from "./components/RegisterComponent";
import { DonationsTimeRealComponent } from "./components/DonationsTimeRealComponent";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/donar" element={<RegisterDonationPage />}></Route>
        <Route path="/" element={<LogginPage />}></Route>
        <Route>
          <Route path="/home/" element={<HomePage />}>
            **<Route index element={<RegisterComponent />}></Route>
            <Route path="/home/donaciones" element={<OverviewComponent />}></Route>
            <Route path="/home/QR" element={<ReadQRComponent />}></Route>
            <Route path="/home/resumen" element={<DonationsTimeRealComponent />}></Route>
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </HashRouter>
  );
}

export default App;
