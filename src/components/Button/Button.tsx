import React, { FC } from 'react';
import './Button.css';
import { PiClipboardTextFill } from 'react-icons/pi';
import { IoMdSettings } from 'react-icons/io';
import { IoLockClosed } from 'react-icons/io5';
import { ImWrench } from 'react-icons/im';
import { IButton, IconMap } from './Button.types.ts';

const iconMap: IconMap = {
  blog: PiClipboardTextFill,
  events: IoMdSettings,
  deals: IoLockClosed,
  support: ImWrench,
};

export const Button: FC<IButton> = ({ label, onBtnClick, isActive }) => {
  const IconComponent = iconMap[label] || null;
  return (
    <button
      type="button"
      className={`button ${isActive ? 'active' : ''}`}
      onClick={() => onBtnClick(label)}
    >
      {IconComponent && <IconComponent />}
      {label}
    </button>
  );
};
