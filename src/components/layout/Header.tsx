import { observer } from "mobx-react";
import * as React from "react";

const Header: React.SFC = () => (
  <div className="home">
    <div className="home__header">
      <div className="home__header__name animated fadeInLeft">
        Bradey Yarbrough Whitlock
      </div>
      <div className="home__header__job animated fadeInRight">
        Software Developer
      </div>
    </div>
  </div>
);

export default observer(Header);
