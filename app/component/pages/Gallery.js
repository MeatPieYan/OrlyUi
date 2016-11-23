import React from 'react';

import Photo from './Photo';

export default class Gallery extends React.Component {
  static propTypes = {
    photos: React.PropTypes.array
  }

  render(){
    const { photos } = this.props;

    let imgs = photos.map((p, index) => {
      return (<Photo photo={p} key={index} />);
    });

    return (
      <div class="galleryContainer">
        <div class="waterfall">
        { imgs }

        </div>

      </div>

    );
  }
}
