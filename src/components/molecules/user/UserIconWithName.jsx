import React, { useContext, memo } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImgWrap>
        <img src={image} alt={name} />
      </SImgWrap>
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImgWrap = styled.div`
  display: inline-block;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
