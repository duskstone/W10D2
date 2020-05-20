import React from "react";

import Header from "./header";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const newIdx = this.props.tabs.findIndex(
      (tab) => tab.title === e.target.innerHTML
    );
    this.setState({ index: newIdx });
  }

  render() {
    return (
      <div className="tabs">
        <ul>
          {this.props.tabs.map((tab, i) => (
            <Header
              key={i}
              title={tab.title}
              handleClick={this.handleClick}
              current={this.state.index === i}
            />
          ))}
        </ul>
        <article>{this.props.tabs[this.state.index].content}</article>
      </div>
    );
  }
}

export default Tabs;
