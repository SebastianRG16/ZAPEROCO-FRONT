import { useState } from "react";
import { LogginPage } from "./pages/LogginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <LogginPage />
    </div>
  );
}

export default App;
