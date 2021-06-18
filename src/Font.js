import React from "react";
import "./Font.css";


class Font extends React.Component {
  state = {
    italic: false,
  }

onChangeStyle() {
  (this.state.italic === false) ? this.setState({italic: true}) : this.setState({italic: false})
}

render() {
    return (
      <blockquote><p className={ this.state.italic && 'quote' } onClick={()=> this.onChangeStyle()}>Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете.</p></blockquote>
    )
  }
}


export default Font