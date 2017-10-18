import { observer } from "mobx-react";
import * as React from "react";

type PageProps = {
  includeFooter?: boolean;
};

const Page: React.SFC<PageProps> = props => (
  <div className="page__frame">
    <div className="page__content">{props.children}</div>
  </div>
);

export default observer(Page);
