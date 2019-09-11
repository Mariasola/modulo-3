import React from "react";
import "./App.css";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      sheep: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.state.sheep.push("sheep");
    this.setState({
      counter: this.state.counter + 1,
      sheep: [...this.state.sheep]
    });
  }
  render() {
    return (
      <div className="everything">
        <p className="number">{this.state.counter}</p>
        {this.state.sheep.map((item, index) => (
          <NewSheep key={index} />
        ))}
        <button onClick={this.handleClick}>¡Púlsame!</button>
      </div>
    );
  }
}

function NewSheep() {
  return (
    <img
      src="http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png"
      alt="cute sheep"
    />
  );
}
export default SheepCounter;
