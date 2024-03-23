import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback } from "react";
import { wrappedUseSelector } from "../redux/store/store";
import { CONSTANT } from "../consts/constant";
import { useDispatch } from "react-redux";
import { startLoading, finishLoading } from "../redux/slice/LoadingStore";
import { setIsError } from "../redux/slice/ErrorStore";

const useGetResult = () => {
  const question = wrappedUseSelector((state) => state.question);
  const dispatch = useDispatch();

  const getResult = useCallback(async () => {
    dispatch(startLoading());

    return axios
      .post(`${CONSTANT.API.BASE}${CONSTANT.API.GET_RESULT}`, question)
      .then((response: AxiosResponse) => {
        dispatch(finishLoading());

        return response.data as string;
      })
      .catch((error: AxiosError) => {
        dispatch(setIsError());
        dispatch(finishLoading());

        throw error;
      });
  }, [dispatch, question]);

  return getResult;
};

export default useGetResult;
