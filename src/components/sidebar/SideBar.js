import MapleLogo from "./asset/maple-leaf.png";
import SideBarList from "./content/SideBarList";
import SideBarBottom from "./sidebar-bottom/SideBarBottom";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="side-bar-component">
      <div className="side-bar-main">
        <div className="side-bar-head">
          <div className="side-bar-title">MapleMap </div>
          <img src={MapleLogo} alt="maple-leaf-logo" className="side-bar-logo"/>
        </div>
        <div className="side-bar-list">
          <SideBarList />
        </div>
      </div>
      <div className="side-bar-footer">
        <SideBarBottom/>
      </div>
    </div>
  );
}

export default SideBar;
