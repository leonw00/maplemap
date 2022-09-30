import {
  faCloudMoonRain,
  faDollarSign,
  faPeopleGroup,
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
        <RadioLabel title="Buy or Rent" label1="Buy" label2="Rent" />
        <Slidebar
          min={131}
          max={160000}
          title="Typical Home Price"
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
        <Slidebar
          min={5}
          max={13}
          title="State Tax Burden"
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </SideBarCard>

      <SideBarCard title="Terrain & Weather" icon={faCloudMoonRain}>
        <RadioLabel
          title="Celcius or Farenheight"
          label1="Celcius"
          label2="Farenheight"
        />
        <Slidebar
          min={15}
          max={50}
          title="Summer Temperature"
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
        <Slidebar
          min={-20}
          max={13}
          title="Winter Temperature"
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </SideBarCard>

      <SideBarCard title="Demographic" icon={faPeopleGroup}>
        <Slidebar
          min={131}
          max={160000}
          title="Household Income per capita"
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </SideBarCard>

      <SideBarCard title="Job Opportunities" icon={faPeopleGroup}>
        <Slidebar
          min={10.2}
          max={15.6}
          title="Minimum Hourly Wage"
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
        <Slidebar
          min={16.2}
          max={40.4}
          title="Average Hourly Wage"
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
        <Slidebar
          min={250}
          max={400000}
          title="Monthly Job Vacancies"
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </SideBarCard>

      <SideBarCard title="Hazard" icon={faWarning}>
        <ToggleSwitch title="Avoid Rain" />
        <ToggleSwitch title="Avoid Thunder" />
        <ToggleSwitch title="Avoid Earthquake" />
        <ToggleSwitch title="Avoid Gale" />
      </SideBarCard>
    </ul>
  );
}

export default SideBarList;
