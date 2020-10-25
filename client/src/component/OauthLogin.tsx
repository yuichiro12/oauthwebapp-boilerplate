import React from "react";
import styled from "@emotion/styled";
import {GoogleSignInButton} from "./GoogleSignInButton";

type Props = {
  className?: string
}

export const OauthLogin: React.FC<Props> = () => {
  return (
    <Root>
      <GoogleSignInButton/>
    </Root>
  );
}

const Root = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
