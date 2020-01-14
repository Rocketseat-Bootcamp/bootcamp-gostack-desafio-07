import React, { Component } from "react";

import { Container, Name } from "./styles";
export default class Main extends Component {
  static navigationOptions = {
    title: "Usuários"
  };

  render() {
    return (
      <Container>
        <Name>TEste</Name>
      </Container>
    );
  }
}
