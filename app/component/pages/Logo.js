import React from 'react';

export default class Logo extends React.Component {
  static propTypes = {
    logo: React.PropTypes.object
  }
  render() {
    const { logo } = this.props;
    return (
      <img src={logo.url}></img>

    );
  }
}
