/* eslint-disable max-len, react/no-multi-comp, react/jsx-no-bind */
import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Waypoint } from "../src/waypoint";

class StickyProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }
  setProgress(progress) {
    this.setState({ progress });
  }
  render() {
    return (
      <div
        style={{
          background: "red",
          height: 1000,
          background: "red",
          width: "100%",
          padding: 20,
          marginTop: "100vh",
          marginBottom: "100vh",
          position: "relative"
        }}
      >
        <strong
          style={{ position: "sticky", top: 10, color: "white" }}
        >{`Progress ${this.state.progress * 100} %`}</strong>
      </div>
    );
  }
}

class PerformanceTest extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0
    };
    this.handleProgress = this.handleProgress.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  handleProgress({ progress }) {
    console.log(progress);
    this.ref.setProgress(progress);
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    return (
      <Waypoint onProgress={this.handleProgress}>
        <div>
          <StickyProgress ref={this.setRef} />
        </div>
      </Waypoint>
    );
  }
}

ReactDOM.render(<PerformanceTest />, document.getElementById("app"));
