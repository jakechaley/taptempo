import React from "react";

class TempoControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    }
  }

  handleClick = () => {
    this.setState({clickCount: this.state.clickCount + 1})
    if (this.state.clickCount === 0) {
      setTimeout(() => {
        console.log("It's been 15 seconds!");
      }, 15000)
    }
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Tap</button>
        <div> {this.state.clickCount}</div>
      </React.Fragment>
    )
  }
}
export default TempoControl;