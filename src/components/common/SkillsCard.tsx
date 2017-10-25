import * as React from "react";
import { observer } from "mobx-react";
import Page from "../layout/Page";
import Header from "../layout/Header";

type SkillsCardProps = {
  cardTop: string;
  cardBottom: string;
  order: string;
};

@observer
class SkillsCard extends React.Component<SkillsCardProps> {
  render() {
    return (
      <div className={`skillsCard ${this.props.order}`}>
        <div className="skillsCard__top">{this.props.cardTop}</div>
        <div className="skillsCard__bottom">{this.props.cardBottom}</div>
      </div>
    );
  }
}

export default SkillsCard;
