import React from "react";


class Checkbox extends React.Component {
  state = {
    checked: true,
    value: "✘"
  }

  switchState = () => {
  (this.state.checked) ? this.setState({checked: false, value: "✔"}) : this.setState({checked: true, value: "✘"})
  }
  

  render() {
    return (
      <div onClick={this.switchState}>{this.state.value}</div>
    )
  }
}


export default Checkbox