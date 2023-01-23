import React from 'react';

class Imagecomp extends React.Component {
  render() {
    return (
      <img src={this.props.image} alt='foto Aprasymas'/>
    )
  }
}
export default Imagecomp;