// hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T): T =>
  useSelector(selector);