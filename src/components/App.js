import React, { Component } from "react";
import { SignIn } from "./";

export default class App extends Component {
  state = {
    counter: 1,
  };

  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}
