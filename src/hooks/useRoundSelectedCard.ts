/** @format */

import { useAppDispatch, useAppSelector } from './useStore';
import { toggleSelected } from '../store/slices/roundData';

export const useRoundSelectedCard = (): [string[], (id: string) => void] => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(s => s.roundDataReducer.selectedCards);
  const setSelected = (id: string) => {
    dispatch(toggleSelected(id));
  };
  return [selected, setSelected];
};
