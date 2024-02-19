import React, { FC } from 'react';
import './ButtonsList.css';
import { Button } from '../Buttons/Button';
import { IBtn } from '../../data/buttonsData';

interface IButtonsList {
  labels: IBtn[];
  onClick: (category: string) => void;
  content: string;
}

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
