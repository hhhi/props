import React from "react";
import ReactDOM from "react-dom";
import { Photo, Title, Wrapper } from "./components.js";
import "./styles.css";

function App() {
  return (
    <Wrapper>
      <Photo src="/profile.png" />

      <Title
        style={{
          color: "red"
        }}
      >
        Ghassen
      </Title>

      <Title small>Instructor</Title>
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
