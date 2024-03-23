/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { wrappedUseSelector } from "../../redux/store/store";
import { CONSTANT } from "../../consts/constant";

const ResultDetailPage = () => {
  const type = wrappedUseSelector((state) => state.type);

  const navigate = useNavigate();
  const location = useLocation();

  /**
   * 表示する診断結果を判定する \
   * TRUE：自分の診断結果, FALSE：AllTypePageで選択された診断結果
   */
  const isMyResult = location.pathname === CONSTANT.ROUTE.RESUT_DETAIL;
  /**
   * 表示する診断結果
   */
  const result = isMyResult ? type.myType : type.displayType;

  /**
   * 「すべての診断タイプを見る」イベントハンドラ
   */
  const handleClickShowAllType = () => {
    navigate(CONSTANT.ROUTE.ALL_TYPE);
  };

  return (
    <div css={resultDetailPageContainer}>
      <div css={typeTitleContainer}>
        <h1>
          {result.typeName}({result.typeInitial})
        </h1>
        <img src={`/${result.typeInitial}.png`} alt="画像を正しく読み込むことができませんでした" />
      </div>
      <div css={descriptionContainer}>
        <div>
          <span>{result.title1}</span>
        </div>
        <div>{result.description1}</div>
      </div>
      <div css={descriptionContainer}>
        <div>
          <span>{result.title2}</span>
        </div>
        <div>{result.description2}</div>
      </div>
      {isMyResult && (
        <Button variant="contained" sx={{ my: 2 }} onClick={handleClickShowAllType}>
          すべての診断タイプを見る
        </Button>
      )}
    </div>
  );
};

const resultDetailPageContainer = css`
  width: 800px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: pre;

  @media screen and (max-width: 480px) {
    width: 350px;
  }
`;

const typeTitleContainer = css`
  width: 100%;
  line-height: 1.15;
  display: flex;
  justify-content: space-between;
  align-items: end;
  h1 {
    margin: 0;
    width: calc(100% - 300px - 4rem);
    white-space: pre-wrap;
  }
  img {
    margin: 0.1rem 2rem;
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    h1 {
      width: calc(100% - 150px - 4rem);
    }
    img {
      width: 150px;
    }
  }
`;

const descriptionContainer = css`
  width: 100%;
  padding: 1rem 0;
  border-top: 1px solid #ccc;

  div:first-of-type {
    font-size: 1.8rem;
    font-weight: 550;
    span {
      background: linear-gradient(transparent 70%, #ffc0cb 0%);
    }
  }
  div:last-of-type {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem;
    white-space: pre-wrap;
  }
`;

export default ResultDetailPage;
