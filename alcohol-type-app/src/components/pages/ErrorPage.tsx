/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ErrorPage = () => {
  return (
    <div css={errorContainer}>
      <h1>エラーページ</h1>
      <div css={errorMessage}>
        <p>正しく診断ができませんでした。以下の理由が考えられます。</p>
        <p>・ネットワーク状態が不安定</p>
        <p>・質問にすべて答えていない</p>
        <p>
          一度
          <span css={messageEmphasis}>画面を再読み込みして</span>
          再テストをお願いします。
        </p>
      </div>
    </div>
  );
};

const errorContainer = css`
  position: static;
  z-index: 999;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const errorMessage = css`
  font-size: 1.4rem;
  height: 50%;
`;

const messageEmphasis = css`
  font-weight: bold;
`;

export default ErrorPage;
