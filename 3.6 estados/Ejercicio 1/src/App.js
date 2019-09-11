import React from "react";
import "./App.css";

class TextLover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleWrite = this.handleWrite.bind(this);
  }

  handleWrite(event) {
    this.setState({
      input: event.currentTarget.value
    });
  }
  render() {
    return (
      <div className="everything">
        <label htmlFor="coments">One line a day</label>
        <textarea
          onChange={this.handleWrite}
          id="coments"
          name="coments"
          rows="8"
          cols="80"
        ></textarea>
        <p className="text">{this.state.input}</p>
      </div>
    );
  }
}
export default TextLover;
