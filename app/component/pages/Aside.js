import React from 'react';

import Catalog from './Catalog';
import Logo from './Logo';


export default class Aside extends React.Component {
  static propTypes = {
    catagory: React.PropTypes.array,
    logo: React.PropTypes.object
  }

  render() {
    const { logo, catagory } = this.props;

    return (
      <div class="asideContainer">
        <div class="logoContainer"><Logo logo={logo}></Logo></div>
        <div class="catalogContainer"><Catalog catagory={catagory}></Catalog></div>
      </div>

    );
  }
}
