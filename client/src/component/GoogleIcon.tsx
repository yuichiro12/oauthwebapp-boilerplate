import React from "react";
import GoogleIconLightNormal from "./primitive/btn_google_light_normal_ios.svg"

type Props = {
  size?: number
  className?: string
}

export const GoogleIcon: React.FC<Props> = (props) => {
  const size = props.size;
  return (
    <img src={GoogleIconLightNormal} alt='google_light_normal' width={size}/>
  );
}