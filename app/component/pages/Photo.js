import React from 'react';

export default class Photo extends React.Component {
  static propTypes = {
    photo: React.PropTypes.object
  }

  render() {
    const { photo } = this.props;

    return (
      <div class="galleryPhoto">
        <img src={photo.url} />
      </div>
    );
  }

}
