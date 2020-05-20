import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    const { time } = this.state;

    return (
      <div className="clock">
        <h1>Clock</h1>
        <section>
          <p>Time</p>
          <p>{time.toTimeString()}</p>
        </section>
        <section>
          <p>Date</p>
          <p>{time.toDateString()}</p>
        </section>
      </div>
    );
  }
}

export default Clock;
