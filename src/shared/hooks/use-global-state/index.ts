import { useRecoilState, RecoilState } from "recoil";

import { GlobalState } from "@/shared/constants";

import { RecoilStateDictionary } from "@/shared/states";

export const useGlobalState = <T>(
  state: GlobalState
): [T, (newValue: T | ((currValue: T) => T)) => void] => {
  const recoilState: RecoilState<T> = RecoilStateDictionary[
    state
  ] as unknown as RecoilState<T>;
  return useRecoilState<T>(recoilState);
};
