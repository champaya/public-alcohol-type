/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Radio from "@mui/material/Radio";
import { FormControl, RadioGroup, FormControlLabel, FormHelperText, useTheme } from "@mui/material";
import { changeQuestionValue } from "../../redux/slice/QuestionStore";
import { useDispatch } from "react-redux";

interface CustomRadioProps {
  id: string;
  question: string;
  value: string;
}

const CustomRadio = ({ id, question, value }: CustomRadioProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  /**
   * チェンジイベントハンドラ
   *
   * @param event
   */
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const param = { id, question, value: (event.target as HTMLInputElement).value };
    dispatch(changeQuestionValue(param));
  };

  return (
    <>
      <FormControl
        sx={{
          mb: "1rem",
          "& .MuiFormControlLabel-root": {
            margin: 0,
          },
        }}
      >
        <div css={questionContent}>{question}</div>
        <RadioGroup name={id} row value={value} onChange={handleChangeRadio} sx={{ flexWrap: "nowrap" }}>
          <FormHelperText css={radioContent({ theme: theme.palette.warning.main, type: "no" })} sx={{ mr: "2rem" }}>
            同意しない
          </FormHelperText>
          <FormControlLabel
            value="-3"
            control={<Radio color="warning" />}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "5rem",
              },
            }}
            label=""
          />
          <FormControlLabel
            value="-2"
            control={<Radio color="warning" />}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "4rem",
              },
            }}
            label=""
          />
          <FormControlLabel
            value="-1"
            control={<Radio color="warning" />}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "3rem",
              },
            }}
            label=""
          />
          <FormControlLabel
            value="1"
            control={<Radio color="success" />}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "3rem",
              },
            }}
            label=""
          />
          <FormControlLabel
            value="2"
            control={<Radio color="success" />}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "4rem",
              },
            }}
            label=""
          />
          <FormControlLabel
            value="3"
            control={<Radio color="success" />}
            sx={{
              mr: 0,
              "& .MuiSvgIcon-root": {
                fontSize: "5rem",
              },
            }}
            label=""
          />
          {/* 全角スペースを入れてラジオボタンが中央寄せになるように調整 */}
          <FormHelperText css={radioContent({ theme: theme.palette.success.main, type: "yes" })} sx={{ ml: "2rem" }}>
            同意する&emsp;
          </FormHelperText>
        </RadioGroup>
      </FormControl>
    </>
  );
};

const questionContent = css`
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
`;

const radioContent = ({ theme, type }: { theme: string; type: string }) => css`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
  color: ${theme};
  word-break: keep-all;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    position: absolute;
    margin: 0;
    right: ${type === "yes" ? "0" : "unset"};
    left: ${type === "no" ? "1rem" : "unset"};
    bottom: -1rem;
  }
`;

export default CustomRadio;
