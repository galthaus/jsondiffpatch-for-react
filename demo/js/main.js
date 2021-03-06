/**
 * Created by guoguangyu on 2016/10/25.
*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import JsonDiffReact from '../../src/jsondiff-for-react';

class Main extends Component {
  static propTypes = {
    children: PropTypes.object,
  };
  render() {
    const left = {a: 1};
    const right = undefined;
    return (<JsonDiffReact left={left} right={right} />);
  }
}
export default Main;
