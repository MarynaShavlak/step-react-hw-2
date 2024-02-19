import { IBtn } from '../Button/Button.types';

export interface IButtonsList {
  labels: IBtn[];
  onClick: (category: string) => void;
  content: string;
}
