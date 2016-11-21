import React from 'react';
import { connect } from 'react-redux';

import actions from '../../action';
import CenterBar from './CenterBar';
import Loading from './Loading';
import SwitchPhoto from  './SwitchPhoto';

@connect(
  (store) => {
    return {
      photos: store.photo.photo,
      catagories: store.page.catagory,
      logo: store.page.logo,
      remainPhoto: store.photo.remainPhoto
    };
  },
  (dispatch) => {
    return {
      dispatch: dispatch,
      renderPhoto: (remainings) => dispatch(actions.renderPhoto(remainings))
    }
  }
)
export default class Home extends React.Component {

  static propTypes = {
    catagories: React.PropTypes.array,
    logo: React.PropTypes.object,
    photos: React.PropTypes.array,
    renderPhoto: React.PropTypes.func,
    remainPhoto: React.PropTypes.number
  }

  componentWillMount(){
    this.props.dispatch(actions.loadIndex());
  }

  render() {
    const { photos, catagories, logo, renderPhoto, remainPhoto } = this.props;
    const display = remainPhoto !== 0?"loadContainer show":"loadContainer hidden";

    return (
      <div>
        <div class={display}>
          <Loading />

        </div>
        <div class="index_pic">
          <SwitchPhoto photos={photos} renderPhoto={renderPhoto} remainPhoto={remainPhoto} />
        </div>
        <div class="logo">
          <CenterBar catagory={catagories} logo={logo} />
        </div>

      </div>
    );
  }
}
