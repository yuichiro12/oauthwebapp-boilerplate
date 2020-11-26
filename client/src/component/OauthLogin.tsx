import React from "react";
import styled from "@emotion/styled";
import {GoogleOauthButton} from "./GoogleOauthButton";

type Props = {
  className?: string
}

export const OauthLogin: React.FC<Props> = () => {
  return (
    <Root>
      <GoogleOauthButton/>
    </Root>
  );
}

const Root = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
