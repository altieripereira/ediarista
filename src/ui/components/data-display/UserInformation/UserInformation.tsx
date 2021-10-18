import React from "react";

import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./UserInformation.style";

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
  return (
    <div>
      <UserInformationContainer>
        <AvatarStyled src={props.picture}>{props.name[0]}</AvatarStyled>
        <UserName>{props.name}</UserName>
        <RatingStyled readOnly value={props.rating}></RatingStyled>
        <UserDescription>{props.description}</UserDescription>
      </UserInformationContainer>
    </div>
  );
};

export default UserInformation;
