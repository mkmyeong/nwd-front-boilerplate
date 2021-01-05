import React, { ReactElement } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 30px 0;
  background-color: red;
`;

function LandingPage(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/pages/Auth/Landing.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <StyledDiv>StyledDiv sample</StyledDiv>
    </div>
  );
}

export default LandingPage;
