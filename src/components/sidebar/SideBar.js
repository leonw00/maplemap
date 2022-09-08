import SideBarList from "./content/SideBarList";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="side-bar-component">
      <div className="side-bar-main">
        <div className="side-bar-logo">MapleMap</div>
        <div className="side-bar-list">
            <SideBarList/>
        </div>
      </div>
      <div className="side-bar-footer">

      </div>
    </div>
  );
}

export default SideBar;
