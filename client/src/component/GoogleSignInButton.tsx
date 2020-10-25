import React, {useEffect} from "react";
import styled from "@emotion/styled";
import {GoogleOauthApi} from "../api/GoogleOauthApi";


type Props = {
  className?: string
}

export const GoogleSignInButton: React.FC<Props> = () => {

  useEffect(() => {
    new GoogleOauthApi();
  }, []);
  return (
    <Root id="google-signin"></Root>
  );
}

const Root = styled.div({
  marginTop: 10,
});
