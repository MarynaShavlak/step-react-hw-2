import React, { FC } from 'react';
import './ButtonsList.css';
import { Button } from '../Button/Button';
import { IButtonsList } from './ButtonsList.types';
import { IBtn } from '../Button/Button.types';

export const ButtonsList: FC<IButtonsList> = ({ labels, onClick, content }) => {
  return (
    <ul className="buttons-list">
      {labels.map((item: IBtn) => {
        return (
          <li key={item.id}>
            <Button
              id={item.id + Math.random()}
              label={item.label}
              onBtnClick={() => onClick(item.label)}
              isActive={item.label === content}
            />
          </li>
        );
      })}
    </ul>
  );
};
