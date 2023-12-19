import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MenuContextProvider from "./context/MenuContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MenuContextProvider>
    <App />
  </MenuContextProvider>
);
