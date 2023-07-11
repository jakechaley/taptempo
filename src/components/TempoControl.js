import React from "react";

class TempoControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      hasBeenFifteenSeconds: false,
      disabled: false
    }
  }

  handleClick = () => {
    this.setState({clickCount: this.state.clickCount + 1})
    if (this.state.clickCount === 0) {
      setTimeout(() => {
        this.setState({hasBeenFifteenSeconds: true});
        this.setState({disabled: true})
        console.log("It's been 15 seconds!");
      }, 15000)
    } 
  }   

  render() {
    return (
      <React.Fragment>
        <button disabled onClick={this.handleClick}>Tap</button>
        <div> {this.state.clickCount}</div>
      </React.Fragment>
    )
  }
}
export default TempoControl;