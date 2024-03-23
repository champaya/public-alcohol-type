import { useDispatch } from "react-redux";
import { initPageNo } from "../redux/slice/QuestionPageNoStore";
import { initQuestionSets } from "../redux/slice/QuestionStore";

/**
 * 回答とページ数をリセットする
 *
 * @returns
 */
const useBackTop = () => {
  const dispatch = useDispatch();

  const backTop = () => {
    dispatch(initPageNo());
    dispatch(initQuestionSets());
  };

  return backTop;
};

export default useBackTop;
