import React from "react";

class TempoControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleClick = () => {
    console.log("Click")
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Tap</button>
      </React.Fragment>
    )
  }
}
export default TempoControl;