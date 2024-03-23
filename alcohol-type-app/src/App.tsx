import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import Header from "./components/share/Header";
import Footer from "./components/share/Footer";
import QuestionPage from "./components/pages/QuestionPage";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import ResultPage from "./components/pages/ResultPage";
import ResultDetailPage from "./components/pages/ResultDetailPage";
import AllTypePage from "./components/pages/AllTypePage";
import { useDispatch } from "react-redux";
import ErrorPage from "./components/pages/ErrorPage";
import useGetAllType from "./API/useGetAllType";
import { useEffect } from "react";
import { setAllType } from "./redux/slice/AllTypeStore";
import { CONSTANT } from "./consts/constant";
import Loading from "./components/share/Loading";
import IntroductionPage from "./components/pages/IntroductionPage";
import { wrappedUseSelector } from "./redux/store/store";
import ArchitecturePage from "./components/pages/ArchitecturePage";

const globalCSS = css`
  /* スクロールバーのスタイル */
  ::-webkit-scrollbar {
    width: 0.8rem;
    border-radius: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 1rem;
  }

  html {
    /* font-sizeを下げることで、rem指定の全体のレイアウトを調整 */
    @media screen and (max-width: 480px) {
      font-size: 11px;
    }
  }

  body {
    margin: 0;
    color: #696969 !important ;

    /* 画面が小さくなると文字が読みづらくなるため行間を広めにとる */
    p {
      line-height: 1.9;
    }
  }
`;

/**
 * ルーティング設定
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      { path: CONSTANT.ROUTE.DEFAULT, element: <QuestionPage /> },
      { path: CONSTANT.ROUTE.INTRODUCTION, element: <IntroductionPage /> },
      { path: CONSTANT.ROUTE.ARCHITECTURE, element: <ArchitecturePage /> },
      { path: CONSTANT.ROUTE.RESULT, element: <ResultPage /> },
      { path: CONSTANT.ROUTE.RESUT_DETAIL, element: <ResultDetailPage /> },
      { path: CONSTANT.ROUTE.ALL_TYPE, element: <AllTypePage /> },
    ],
  },
]);

const App = () => {
  // テーマカラーを上書き
  const muiTheme = createTheme({
    palette: {
      primary: {
        main: "#f3be00",
        light: "#f3be00",
        dark: "#f3be00",
      },
      // 本来の用途とは異なるが、「同意する」のテーマカラーとして使用
      success: {
        main: "#30a430",
        light: "#30a430",
        dark: "#30a430",
      },
      // 本来の用途とは異なるが、「同意しない」のテーマカラーとして使用
      warning: {
        main: "#e08080",
        light: "#e08080",
        dark: "#e08080",
      },

      text: {
        primary: "#696969",
      },
    },
    // containedのButtonスタイルを上書き
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            color: "#fff",
          },
        },
      },
    },
  });

  const dispatch = useDispatch();
  const getAllType = useGetAllType();

  const loading = wrappedUseSelector((state) => state.loading);
  const error = wrappedUseSelector((state) => state.error);

  /**
   * アプリ起動時に１度だけマスタデータを取得する
   */
  useEffect(() => {
    // /getAllTypeスキーマへAPI通信
    getAllType()
      .then((response) => {
        dispatch(setAllType(response));
      })
      .catch(() => {});
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Global styles={globalCSS} />
      <div css={appContainer}>
        {!error && <RouterProvider router={router} />}
        {loading && <Loading />}
        {error && <ErrorPage />}
      </div>
    </ThemeProvider>
  );
};

const appContainer = css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export default App;
