import * as React from "react";
import { observer } from "mobx-react";
import Page from "../layout/Page";

@observer
class Home extends React.Component {
  render() {
    return <Page>hi</Page>;
  }
}

export default Home;
