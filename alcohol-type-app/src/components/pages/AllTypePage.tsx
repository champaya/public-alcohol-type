/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, useTheme } from "@mui/material";
import ResultDetailPage from "./ResultDetailPage";
import { useDispatch } from "react-redux";
import { setDisplayType } from "../../redux/slice/TypeStore";
import { wrappedUseSelector } from "../../redux/store/store";

const AllTypePage = () => {
  const allType = wrappedUseSelector((state) => state.allType);
  const type = wrappedUseSelector((state) => state.type);
  const dispatch = useDispatch();

  const theme = useTheme();

  /**
   * タイプボタンイベントハンドラ \
   * 表示するタイプを変更する
   *
   * @param type タイプのイニシャル
   */
  const handleClickType = (type: string) => {
    const displayType = allType.find((item) => item.typeInitial === type) ?? {
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
    dispatch(setDisplayType(displayType));
  };

  return (
    <div css={allTypeContainer}>
      <div css={introContaienr(theme.palette.primary.main)}>
        <div>好きなタイプを選択してください！！</div>
      </div>
      <div css={buttonContainer}>
        {allType.map((item) => {
          return (
            // 選択されているボタンのスタイルを変えて目立たせる
            <Button
              variant={type.displayType.typeInitial === item.typeInitial ? "outlined" : "contained"}
              key={item.typeInitial}
              onClick={() => handleClickType(item.typeInitial)}
            >
              {item.typeInitial}
            </Button>
          );
        })}
      </div>
      {type.displayType.typeInitial && <ResultDetailPage />}
    </div>
  );
};

const allTypeContainer = css`
  display: grid;
  justify-content: center;
`;

const introContaienr = (theme: string) => css`
  position: relative;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1.5em auto;
  padding: 1rem 2rem;
  border: 0.3rem solid ${theme};
  border-radius: 0.5rem;
`;

const buttonContainer = css`
  width: 800px;
  display: grid;
  justify-content: center;
  gap: 1rem;
  grid-template-columns: repeat(4, 12rem);

  @media screen and (max-width: 480px) {
    width: 380px;
    grid-template-columns: repeat(4, 7rem);
  }
`;

export default AllTypePage;
