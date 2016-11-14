import React from 'react';
import Header from './header/Header';

export default class Layout extends React.Component {
  render() {
    return (
      <div class='root'>
        <Header />
        <div class='container'>
            {this.props.children}
        </div>
      </div>
    );
  }
}
