import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="max-w-[1920px] bg-gray-500 mx-auto relative overflow-hidden">
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
