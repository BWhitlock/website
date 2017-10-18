import { observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";

type AsyncResolveFunction = () => Promise<any>;

/**
 * For big web apps it’s not efficient to put all code into a single file, especially if some blocks of code are only required under some circumstances.
 * Webpack has a feature to split your codebase into “chunks” which are loaded on demand. This feature is called “code splitting”.
 * 
 * https://webpack.js.org/guides/code-splitting/
 * 
 * This component helps webpack determine where it should split the application.
 * 
 * @class WebpackCodeSplit
 * @extends {React.Component<{
 *   resolve: AsyncResolveFunction;
 * }>}
 */
@observer
class WebpackCodeSplit extends React.Component<{
  resolve: AsyncResolveFunction;
}> {
  @observable component: React.ComponentType | undefined;

  componentDidMount() {
    this.props
      .resolve()
      .then(module => (this.component = module.default || module));
  }

  render() {
    const Component = this.component;
    return Component ? <Component /> : null;
  }
}

export default (resolve: AsyncResolveFunction): React.SFC => {
  return () => <WebpackCodeSplit resolve={resolve} />;
};
