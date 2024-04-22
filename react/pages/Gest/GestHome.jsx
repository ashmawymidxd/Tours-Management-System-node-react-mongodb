import React from "react";
import { Content, GestHero, GestOptions ,PackageList,PackageStatistic} from "../../Sections/";
function GestHome() {
  return (
    <Content>
      <GestHero />
      <GestOptions />
      <PackageList />
      <PackageStatistic/>
    </Content>
  );
}

export default GestHome;
