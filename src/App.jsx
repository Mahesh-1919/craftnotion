import SideBar from "./components/SideBar";
import MainComponent from "./components/MainComponent";
import "./Dashboard.css";

function App() {
  return (
    <>
      <div className="dashboard">
        <SideBar />

        <MainComponent />
      </div>
    </>
  );
}

export default App;
