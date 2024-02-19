import { JSXElementConstructor } from 'react';
export interface IBtn {
  id: number;
  label: string;
}

export interface IButton extends IBtn {
  onBtnClick: (category: string) => void;
  isActive: boolean;
}

export interface IconMap {
  [key: string]: JSXElementConstructor<any>;
}
