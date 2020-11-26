import React, {useEffect} from "react";
import styled from "@emotion/styled";
import {GoogleOauthApi} from "../api/GoogleOauthApi";
import {GoogleIcon} from "./GoogleIcon";
import {Button, withStyles} from "@material-ui/core";


type Props = {
  className?: string
}

export const GoogleOauthButton: React.FC<Props> = () => {

  useEffect(() => {
    new GoogleOauthApi();
  }, []);
  return (
    <Root id="google-signin">
      <SignInButton variant="outlined" color="default">
        <GoogleIcon size={40}/>
        <ButtonText>OAuth With Google</ButtonText>
      </SignInButton>
    </Root>
  );
}

const Root = styled.div({
  marginTop: 10,
});

const SignInButton = withStyles({
  root: {
    padding: 0,
  }
})(Button);

const ButtonText = styled("span")({
  marginLeft: 5,
  marginRight: 10,
})