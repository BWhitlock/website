import { observer } from "mobx-react";
import * as React from "react";

@observer
class Home extends React.Component {
  render() {
    return (
      <div className="myInfo">
        <div data-aos="fade">hi</div>
      </div>
    );
  }
}

export default Home;