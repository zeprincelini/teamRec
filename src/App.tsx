import { ReactElement } from "react";
import "./App.css";
import Home from "./pages/Home";

function App(): ReactElement {
  return (
    <div className="grid place-items-center min-h-screen p-2">
      <Home />
    </div>
  );
}

export default App;
