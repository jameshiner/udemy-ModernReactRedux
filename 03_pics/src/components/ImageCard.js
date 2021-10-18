import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // 10 is the grid row heigh set in the CSS
    // this determines how many rows the image should take up since they all have dif heights
    // the ceiling just rounds it up
    const spans = Math.ceil(this.imageRef.current.clientHeight / 10);
    this.setState({ spans });
  };

  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;
