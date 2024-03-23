/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CardContent, Typography, Button, LinearProgress } from "@mui/material";
import CustomRadio from "../share/CustomRadio";
import LiquorIcon from "@mui/icons-material/Liquor";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { wrappedUseSelector } from "../../redux/store/store";
import { useDispatch } from "react-redux";
import { decrementPageNo, incrementPageNo } from "../../redux/slice/QuestionPageNoStore";
import useBackTop from "../../hooks/useBackTop";
import { CONSTANT } from "../../consts/constant";

const cards = [
  "あなたに何のお酒が合っているか適当に判定します。",
  "深く考えずに気楽に回答してください。",
  "暇つぶし程度に取り組んでもらえれば幸いです。",
];

const QuestionPage = () => {
  const question = wrappedUseSelector((state) => state.question);
  const questionPageNo = wrappedUseSelector((state) => state.questionPageNo);
  const dispatch = useDispatch();

  // 回答済み選択肢のパーセント
  const [progressPercent, setProgressPercent] = useState(0);

  const navigate = useNavigate();
  const radioTopRef = useRef<HTMLDivElement>(null);

  const backTop = useBackTop();

  const isDisable = !!question.questionSets.find(
    (item) => item.id.slice(0, 1) === questionPageNo.toString() && item.value === "0"
  );

  /**
   * マウント時に回答の値リセット
   */
  useEffect(() => {
    backTop();
  }, []);

  /**
   * 回答される度にパーセントの計算をする
   */
  useEffect(() => {
    setProgressPercent(
      Math.round(
        (question.questionSets.filter((item) => item.value !== "0").length / question.questionSets.length) * 100
      )
    );
  }, [question]);

  /**
   * 「前へ」イベントハンドラ
   */
  const handleClickBack = () => {
    // 前の質問に移動する
    dispatch(decrementPageNo());
  };

  /**
   * 「次へ」イベントハンドラ
   */
  const handleClickNext = () => {
    // 次の質問に移動し、スクロールする
    dispatch(incrementPageNo());
    window.scrollTo(0, radioTopRef.current ? radioTopRef.current.offsetTop : 0);
  };

  /**
   * 「結果を見る」イベントハンドラ
   */
  const handleClickShowResult = () => {
    // ResultPageに遷移する
    navigate(CONSTANT.ROUTE.RESULT);
  };

  return (
    <div css={questionPageContainer}>
      <div css={titleStyle}>
        <div>
          <h2>おさけしんだんテスト</h2>
          <h4>Alcohol Type Test</h4>
        </div>
        <div css={cardContainer}>
          {cards.map((card, index) => (
            <CardContent key={index}>
              <LiquorIcon fontSize="large" sx={{ m: "0.1rem" }} />
              <Typography variant="body2">{card}</Typography>
            </CardContent>
          ))}
        </div>
      </div>
      <div css={percentContainer} ref={radioTopRef}>
        <Typography variant="body2" color="primary" fontSize={"1.5rem"}>
          {progressPercent}%
        </Typography>
        <div>
          <LinearProgress color="primary" variant="determinate" value={progressPercent} />
        </div>
      </div>
      <>
        {question.questionSets
          .filter((item) => item.id.slice(0, 1) === questionPageNo.toString())
          .map((questionSet) => {
            return (
              <CustomRadio
                id={questionSet.id}
                question={questionSet.question}
                value={questionSet.value}
                key={questionSet.id}
              />
            );
          })}
      </>
      <div css={buttonContainer}>
        {questionPageNo !== 1 && (
          <Button variant="contained" onClick={handleClickBack} sx={{ fontSize: "1.1rem" }}>
            ⇐前へ
          </Button>
        )}
        {questionPageNo !== 4 ? (
          <Button variant="contained" disabled={isDisable} onClick={handleClickNext} sx={{ fontSize: "1.1rem" }}>
            次へ⇒
          </Button>
        ) : (
          <Button variant="contained" disabled={isDisable} onClick={handleClickShowResult} sx={{ fontSize: "1.1rem" }}>
            結果を見る!
          </Button>
        )}
      </div>
    </div>
  );
};

const questionPageContainer = css`
  height: 100%;
  font-size: 2rem;
  font-weight: bold;
  display: grid;
  place-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const titleStyle = css`
  background-color: #f3be00;
  color: #454545;
  width: 100%;

  h2,
  h4 {
    text-align: center;
  }
`;

const cardContainer = css`
  display: flex;
  justify-content: space-evenly;
  margin: 1% 5%;

  > div {
    width: 23%;
  }
  div,
  p {
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    > div {
      width: 100%;
      display: flex;
      align-items: center;
    }
    p {
      text-align: left;
      line-height: 1.3;
      margin-left: 1rem;
      font-size: 1.3rem;
    }
  }
`;

const percentContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  div {
    width: 55%;
    margin: 2rem;
  }
`;

const buttonContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.2rem;
`;

export default QuestionPage;
