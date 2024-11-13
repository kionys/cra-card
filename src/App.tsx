import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "./App.css";
import logo from "./logo.svg";

const bold = css`
  font-weight: bold;
`;
const containerStyled = css`
  background-color: pink;
`;

const Button = styled.button`
  width: 200px;
  height: 100px;
  ${bold}
`;

function App() {
  return (
    <div className="App" css={containerStyled}>
      <Button>TEST</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
