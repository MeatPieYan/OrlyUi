import React from 'react';
import { connect } from 'react-redux';

import actions from '../../action';
import Aside from './Aside';
import Gallery from './Gallery';

@connect(
  (store) => {
    return {
      catagory: store.page.catagory,
      logo: store.page.logo,
      photo: store.photo.photo
    }
  }
)
export default class Catagory extends React.Component {
  static propTypes = {
    catagory: React.PropTypes.array,
    logo: React.PropTypes.object
  }

  componentWillMount() {
    const { year } =this.props.params;
    this.props.dispatch(actions.loadCatagory(year));
  }

  render() {
    const { logo, catagory, photo } = this.props;

    return (
      <div>
        <Aside logo={logo} catagory={catagory} />
        <Gallery photos={ photo }/>
      </div>
    );
  }
}
