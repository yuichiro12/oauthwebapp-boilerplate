import React from 'react';
import './App.css';
import {CommonForm} from "./component/CommonForm";
import {OauthLogin} from "./component/OauthLogin";
import styled from "@emotion/styled";

type Props = {
  className?: string
};

function App() {
  return (
    <Root className="App">
      <CommonForm />
      <OauthLogin />
    </Root>
  );
}

const Root = styled.div<Props>();
export default App;
