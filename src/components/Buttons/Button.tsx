import React, { FC } from 'react';
import { IBtn } from '../../data/buttonsData';
import { PiClipboardTextFill } from 'react-icons/pi';
import { IoMdSettings } from 'react-icons/io';
import { IoLockClosed } from 'react-icons/io5';
import { ImWrench } from 'react-icons/im';

import './Button.css';

interface IButton extends IBtn {
  onBtnClick: (category: string) => void;
  isActive: boolean;
}

const iconMap: Record<string, JSX.Element> = {
  blog: <PiClipboardTextFill />,
  events: <IoMdSettings />,
  deals: <IoLockClosed />,
  support: <ImWrench />,
};

export const Button: FC<IButton> = ({ label, onBtnClick, isActive }) => {
  const icon = iconMap[label] || null;
  return (
    <button
      type="button"
      className={`button ${isActive ? 'active' : ''}`}
      onClick={() => onBtnClick(label)}
    >
      {icon}
      {label}
    </button>
  );
};

export { IButton };
