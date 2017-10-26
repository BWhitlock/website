import { observer } from "mobx-react";
import * as React from "react";
// import backgroundImage from "../../assets/images/background.jpg";

type PageProps = {
  includeFooter?: boolean;
};

const Page: React.SFC<PageProps> = props => <div>{props.children}</div>;

export default observer(Page);
