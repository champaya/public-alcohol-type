/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const IntroductionPage = () => {
  return (
    <div css={introductionContainer}>
      <h1>私たちについて</h1>
      <img src="/myphoto.png" css={customerIng} />
      <p>はじめましてchampayaと申します。</p>
      <p>「私たちについて」と書きましたが、１人で作成したため「私について」です、、、</p>
      <p>
        ポートフォリオとして当サイトを作成いたしました。
        <br />
        はじめて独力でwebアプリを作ってみて、難しいところもありましたが、終始楽しんで開発ができたと思っています。
      </p>
      <p>
        開発を進める中で「使う人のことを考えながら開発すること」「直接目に触れるフロントエンドの技術」が自分には合っているなと改めて感じました！
      </p>
      <p>
        フロントエンドが得意領域でもあるため、引き続き力を伸ばしていきたいと思います。将来はフロントが得意なフルスタックエンジニアになりたいです！
      </p>
      <br />
      <br />
      <p>
        最後に、、、
        <br />
        肝心の当サイトは、質問に答えるだけであなたにぴったりのお酒が見つかる心理テストです！
        <br />
        ぜひお楽しみください！
      </p>
      <div> ※免責事項</div>
      <ul>
        <li>当サイトの診断はいかなる理論にも基づいておりません。ジョークの一環としてお楽しみください。</li>
        <li>当サイトに記載しております、「お酒の豆知識」については情報の正確性や完全性を保証しておりません。</li>
        <li>当サイトの画像の一部は、AI画像生成サービスseaartで作成しております。</li>
      </ul>
    </div>
  );
};
const customerIng = css`
  width: 100%;
`;

const introductionContainer = css`
  margin: 0.5rem 17% 2rem 17%;
  font-size: 1.2rem;
  ul {
    margin: 0;
    padding-left: 1rem;
  }

  @media screen and (max-width: 480px) {
    margin: 0.5rem 5% 2rem 5%;
  }
`;

export default IntroductionPage;
