import {
  faCloudMoonRain,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Slidebar from "../formfields/Slidebar";
import SideBarCard from "./SideBarCard";
import "./SideBarList.css";

function SideBarList() {
  return (
    <ul className="side-bar-card-list">
      <SideBarCard title="Living Cost" icon={faDollarSign}>
        <Slidebar
          min={131}
          max={160000}
          title="Typical Home Price"
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
        <Slidebar
          min={5}
          max={13}
          title="State Tax Burder"
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </SideBarCard>
      
      {/* <SideBarCard title="Terrain & Weather" icon={faCloudMoonRain}>
            </SideBarCard> */}

            
    </ul>
  );
}

export default SideBarList;
