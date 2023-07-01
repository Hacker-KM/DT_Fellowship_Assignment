import "./App.css";
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import Info from "./components/Info";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/card3";
import Card4 from "./components/Card4";
import Footer from "./components/Footer";
import Side2 from "./components/Side2";
import Notice from "./components/Notice";
import data from './components/data.json'

const tasks = data.tasks; // Array of tasks
const firstTask = tasks[0]; // First task object
const assets = firstTask.assets; // Array of assets for the first task

function App() {
  
  return (
    <>
      <Navbar />
      <div className = "relative responsive">
        <Side2 />
        <Notice />
        <Task />
        <Info tasks={firstTask} />
        <div className="d-flex justify-content-center" style={{ width: "100%" }}>
          <div className="py-5" style={{ width: "66%" }}>
            <div className="d-flex responsive justify-content-between">
              <Card assets={assets} />
              <Card2 assets={assets} />
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <div className="py-3" style={{ width: "66%" }}>
            <div className="d-flex responsive justify-content-between">
              <Card3 assets={assets} />
              <Card4 assets={assets} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
