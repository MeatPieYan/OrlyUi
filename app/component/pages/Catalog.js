import React from 'react';
import { IndexLink, Link } from "react-router";

export default class Catalog extends React.Component {
  static propTypes = {
    catagory: React.PropTypes.array
  }
  render() {
    const { catagory } = this.props;
    let li = "Loading...";
    if(catagory){
      li = catagory.map((value, key)=>{
        return (
          <li key={key} ><Link to={value.to}>{value.text}</Link></li>
        )
      });
    }

    return (
        <ul>
          {li}
        </ul>
    );
  }
}
