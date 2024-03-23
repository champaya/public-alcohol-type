import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback } from "react";
import { CONSTANT } from "../consts/constant";
import { useDispatch } from "react-redux";
import { finishLoading, startLoading } from "../redux/slice/LoadingStore";
import { setIsError } from "../redux/slice/ErrorStore";

export interface ResultResponse {
  typeInitial: string;
  typeName: string;
  introduction: string;
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
}

const useGetAllType = () => {
  const dispatch = useDispatch();

  const getAllType = useCallback(async () => {
    dispatch(startLoading());

    return axios
      .post(`${CONSTANT.API.BASE}${CONSTANT.API.GET_ALL_TYPE}`)
      .then((response: AxiosResponse) => {
        dispatch(finishLoading());

        return response.data as unknown as ResultResponse[];
      })
      .catch((error: AxiosError) => {
        dispatch(setIsError());
        dispatch(finishLoading());

        throw error;
      });
  }, [dispatch]);

  return getAllType;
};

export default useGetAllType;
