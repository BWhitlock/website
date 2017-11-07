import { observer } from "mobx-react";
import * as React from "react";
import meImg from "../../assets/images/me.jpg";

@observer
class Home extends React.Component {
  render() {
    return (
      <div className="myInfo">
        <ul className="myInfo__list">
          <li>Software Developer</li>
          <li>University of Missouri, BS in Information Technology</li>
          <li>UI / UX focused developer</li>
        </ul>
        <div className="myInfo__image">
          <img
            className="myInfo__image"
            src={
              "https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/19367812_123891964869523_3719158193314594816_n.jpg"
            }
            alt="me"
          />
        </div>
      </div>
    );
  }
}

export default Home;
