import React from 'react';

import Logo from './Logo';
import Catalog from './Catalog';

export default class CenterBar extends React.Component {
  static propsType = {
    catagory: React.PropTypes.array,
    logo: React.PropTypes.object
  }
  render() {
    const {catagory, logo} = this.props;
    return (
      <div>
        <Logo logo={logo}></Logo>
        <div class="catalogContainer">
          <Catalog catagory={catagory}></Catalog>
        </div>

      </div>
    );
  }
}
