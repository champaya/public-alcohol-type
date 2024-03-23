/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ArchitecturePage = () => {
  return (
    <div css={architectureContainer}>
      <h1>システムについて</h1>
      <h3>・システム構成</h3>
      <p>当システムはAWS上で動作しています。</p>
      <p>簡単ではありますがこちらがシステム構成図です。シンプルで一般的な構成です。</p>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <img css={awsImg} alt="画像を正しく読み込めませんでした" src="/architecture.png" />
      </div>
      <p>
        フロントエンドはAmplifyにReactアプリを配置、バックエンドに関してはEC2にSpring
        Bootプロジェクトを乗せてAPIとして利用しています。勉強のためにあえてサーバレスサービスを利用せずに、EC2にSpring
        Bootをデプロイする形を採用しました。
      </p>
      <p>RDSにはマスタデータのみ格納しています。大したデータ量ではありませんが、こちらも勉強のために使っております。</p>
      <h3>・技術スタック</h3>
      <p>システムの主な技術スタックです。</p>
      <ul>
        フロントエンド
        <li>React</li>
        <li>Redux</li>
        <li>TypeScript</li>
        <li>Material UI</li>
        <li>emotion</li>
      </ul>
      <ul>
        バックエンド
        <li>Spring Boot</li>
        <li>JPA</li>
        <li>Java</li>
      </ul>
      <ul>
        DB
        <li>My SQL</li>
      </ul>
      <ul>
        ネットワーク/インフラ
        <li>AWS</li>
      </ul>
    </div>
  );
};

const architectureContainer = css`
  margin: 0.5rem 17%;
  font-size: 1.2rem;
  ul {
    padding: 0;
  }

  ul li {
    position: relative;
    list-style-type: none !important;
    padding: 0.5rem;
    margin-bottom: 0.2rem;
    line-height: 1.5;
    background: #dbebf8;
    vertical-align: middle;
    color: #505050;
    border-radius: 0.8rem;
  }

  ul li::before {
    display: inline-block;
    vertical-align: middle;
    content: "";
    width: 1rem;
    height: 1rem;
    background: #fff;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 480px) {
    margin: 0.5rem 5%;
  }
`;

const awsImg = css`
  width: 80%;
`;

export default ArchitecturePage;
