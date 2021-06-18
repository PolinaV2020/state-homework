  
import React from "react";
import "./Play.css"


class Play extends React.Component {
  state = {
    value: "No repeat", 
    style: "btn no-repeat"
  }


  onRepeat = () => {
  if(this.state.value === "No repeat") {
    this.setState({value: "Repeat", style: "btn repeat"})
  } else if (this.state.value === "Repeat") {
    this.setState({value: "Repeat again", style: "btn repeat-again"})
  } else {
    this.setState({value: "No repeat", style: "btn no-repeat"})
  }
  }


  render() {
    return (
  <button type="button" className={this.state.style} onClick={this.onRepeat}>{this.state.value}</button>
  )
}
}


export default Play
