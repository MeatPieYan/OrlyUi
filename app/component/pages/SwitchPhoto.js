import React from 'react';
import { findDOMNode } from 'react-dom';

import actions from '../../action';

export default class SwitchPhoto extends React.Component {
  static propTypes = {
    photos: React.PropTypes.array,
    renderPhoto: React.PropTypes.func,
    remainPhoto: React.PropTypes.number
  }

  rendered(){
    const {remainPhoto, photos, renderPhoto } = this.props;
    renderPhoto(remainPhoto!==-1?remainPhoto:photos.length);
  }

  handleOnLoad(){
    requestAnimationFrame(this.firstRender.bind(this));
  }

  firstRender() {
    requestAnimationFrame(this.rendered.bind(this));
  }

  render() {
    const { photos } = this.props;

    let imgs = photos.map((value, key) => {
      return (
        <img key={key} src={value.url} onLoad={this.handleOnLoad.bind(this)} />
      )
    });

    return (
      <div>
        {imgs}
      </div>
    );
  }

  componentDidUpdate() {
    let imgDom = findDOMNode(this).querySelectorAll('img');
    let length = imgDom.length, i, lastIndex, played=true;
    const { remainPhoto } = this.props;

    if(remainPhoto === 0){
      i = 0;
      lastIndex = 0;
      imgDom[i].className = "show";
      i++;
      setInterval(()=>{
        if(played){
          if(i >= length){
            i = 0;
          }
          imgDom[lastIndex].className = "";
          imgDom[i].className = "show";
          lastIndex = i;
          i++;
        }
      },5000);
    }

  }


}
