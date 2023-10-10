import "./App.css";

import Router from "./routes/route/Router";
import SideBar from "./component/SideBar";
function App() {
  return (
    <div className="main_app_container d-flex">
      <div className="sideBar_main_container left_container">
        <SideBar />
      </div>
      <div className="right_container container my-5">
        <Router />
      </div>
    </div>
  );
}

export default App;
