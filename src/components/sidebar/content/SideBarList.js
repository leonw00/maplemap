import {
  faCloudMoonRain,
  faDollarSign,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import RadioLabel from "../formfields/RadioLabel";
import Slidebar from "../formfields/Slidebar";
import ToggleSwitch from "../formfields/ToggleSwitch";
import SideBarCard from "./SideBarCard";
import "./SideBarList.css";

function SideBarList() {
  return (
    <ul className="side-bar-card-list">
      <SideBarCard title="Living Cost" icon={faDollarSign}>
        <RadioLabel/>
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

      <SideBarCard title="Hazard" icon={faWarning}>
        <ToggleSwitch title="Avoid Rain"/>
        <ToggleSwitch title="Avoid Thunder"/>
        <ToggleSwitch title="Avoid Earthquake"/>
        <ToggleSwitch title="Avoid Gale"/>
      </SideBarCard>


      
    </ul>
  );
}

export default SideBarList;
