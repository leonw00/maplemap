import TopoMap from "../components/map/TopoMap";
import SideBar from "../components/sidebar/SideBar";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page">
      <div className="main-page-side-bar">
        <SideBar/>
      </div>
      <div className="main-page-map-body">
        <TopoMap/>
      </div>
    </div>
  );
}

export default MainPage;
