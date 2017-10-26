import * as React from "react";
import { observer } from "mobx-react";
import Page from "../layout/Page";
import Header from "../layout/Header";
import SkillsCard from "../common/SkillsCard";
import MyInfo from "../layout/MyInfo";
// import ScrollAnimation from 'react-animate-on-scroll';

@observer
class Home extends React.Component {
  render() {
    return (
      <Page>
        <Header />
        <MyInfo />
        {/* <SkillsCard cardTop="Skills" cardBottom="Blah" order="first" />
        <SkillsCard cardTop="Skills" cardBottom="Blah" order="second" />
        <SkillsCard cardTop="Skills" cardBottom="Blah" order="third" />
        <SkillsCard cardTop="Skills" cardBottom="Blah" order="forth" /> */}
      </Page>
    );
  }
}

export default Home;
