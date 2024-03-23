/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useGetResult from "../../API/useGetResult";
import { useEffect } from "react";
import { wrappedUseSelector } from "../../redux/store/store";
import { useDispatch } from "react-redux";
import { setMyType } from "../../redux/slice/TypeStore";
import { CONSTANT } from "../../consts/constant";
import { setIsError } from "../../redux/slice/ErrorStore";

const ResultPage = () => {
  const allType = wrappedUseSelector((state) => state.allType);
  const type = wrappedUseSelector((state) => state.type);
  const question = wrappedUseSelector((state) => state.question);
  const dispatch = useDispatch();

  const getResult = useGetResult();

  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    // 回答されていない項目が１つでもあればErrorPageを表示する
    const validateResult = question.questionSets.find((item) => item.value === "0");
    if (validateResult) {
      dispatch(setIsError());
      return;
    }

    // /getResultスキーマへAPI通信
    getResult()
      .then((response) => {
        const myType = allType.find((item) => item.typeInitial === response) ?? {
          typeInitial: "",
          typeName: "",
          introduction: "",
          title1: "",
          description1: "",
          title2: "",
          description2: "",
          title3: "",
          description3: "",
        };
        dispatch(setMyType(myType));
      })
      .catch(() => {});
  }, []);

  /**
   * 「診断結果を詳しく見る」イベントハンドラ
   */
  const handleClickShowDetail = () => {
    navigate(CONSTANT.ROUTE.RESUT_DETAIL);
  };

  return (
    <div css={resultContainer(theme.palette.primary.main)}>
      <div css={resultContentContainer}>
        <div>
          <div css={resultMessage}>
            <div>
              {type.myType.typeName}({type.myType.typeInitial})タイプ
            </div>
            <div>
              <span>{type.myType.introduction}</span>
            </div>
          </div>
        </div>
        <img src={`/${type.myType.typeInitial}.png`} alt="画像を正しく読み込むことができませんでした" />
      </div>
      <div css={buttonContainer}>
        <Button onClick={handleClickShowDetail} variant="contained">
          診断結果を詳しく見る
        </Button>
      </div>
    </div>
  );
};

const resultContainer = (theme: string) => css`
  width: 700px;
  height: 400px;
  margin: 2rem auto;
  border: 0.5rem solid ${theme};
  border-radius: 0.5rem;
  @media screen and (max-width: 480px) {
    border: none;
    width: 350px;
    height: 450px;
  }
`;

const resultContentContainer = css`
  display: flex;
  justify-content: space-between;
  margin: 0.4rem;

  img {
    height: 300px;
  }

  > div {
    display: grid;
    align-content: end;
    margin-left: 0.5rem;
  }

  @media screen and (max-width: 480px) {
    display: grid;
    justify-content: center;
  }
`;

const resultMessage = css`
  div:first-of-type {
    font-size: 2.2rem;
    font-weight: bold;
  }
  div:last-of-type {
    font-size: 1.2rem;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    span {
      background: linear-gradient(transparent 70%, #ffc0cb 0%);
    }
  }
`;

const buttonContainer = css`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export default ResultPage;
