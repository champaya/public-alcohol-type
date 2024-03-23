/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CONSTANT } from "../../consts/constant";

const Footer = () => {
  const navigate = useNavigate();

  /**
   * 「私たちについて」イベントハンドラ
   */
  const handleClickIntroduction = () => {
    navigate(CONSTANT.ROUTE.INTRODUCTION);
  };

  /**
   * 「システムについて」イベントハンドラ
   */
  const handleClickArchitecture = () => {
    navigate(CONSTANT.ROUTE.ARCHITECTURE);
  };

  return (
    <div css={footerContainer}>
      <div css={footerButtonContainer}>
        <CustomButton onClick={handleClickIntroduction}>私たちについて</CustomButton>
        <CustomButton onClick={handleClickArchitecture}>システムについて</CustomButton>
      </div>
      <div css={footerMessage}>© 2024 champaya.</div>
    </div>
  );
};

const footerContainer = css`
  height: 9rem;
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #aaa;
  z-index: 1;
`;

const footerButtonContainer = css`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomButton = styled(Button)`
  height: 2.5rem;
  margin-left: 1.5rem;
`;

const footerMessage = css`
  width: 100%;
  padding-right: 1rem;
  text-align: end;
`;

export default Footer;
