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