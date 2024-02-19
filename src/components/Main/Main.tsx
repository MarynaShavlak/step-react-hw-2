import React, { useState } from 'react';
import './Main.css';
import { ButtonsList } from '../ButtonsList';
import { buttonLabels, textDescrObj } from '../../data/buttonsData';

export const Main = () => {
  const [content, setContent] = useState<string>('');

  const onBtnClick = (category: string) => {
    setContent(category);
  };

  const defaultContent = (
    <p className="main__content">
      Sed felis eget velit aliquet sagittis id consectetur purus. Cras ornare
      arcu dui vivamus arcu felis bibendum ut. In arcu cursus euismod quis
      viverra. Euismod nisi porta lorem mollis aliquam. Aliquet eget sit amet
      tellus cras adipiscing. Accumsan in nisl nisi scelerisque eu ultrices
      vitae. Interdum consectetur libero id faucibus. Lacus vestibulum sed arcu
      non. Consequat nisl vel pretium lectus quam id leo. Quam elementum
      pulvinar etiam non quam. Ipsum a arcu cursus vitae congue mauris rhoncus.
      Dolor magna eget est lorem ipsum dolor. Urna duis convallis convallis
      tellus id.
    </p>
  );
  return (
    <main>
      <p className="main__text">
        React спрощує створення інтерактивних інтерфейсів. Вам потрібно лише
        описати, як різні частини інтерфейсу виглядають у кожному стані вашого
        додатку і React ефективно оновить та відрендерить лише потрібні
        компоненти, коли ваші дані зміняться.
      </p>
      <ButtonsList
        labels={buttonLabels}
        onClick={onBtnClick}
        content={content}
      />
      {content && <p className="main__content">{textDescrObj[content]}</p>}
      {!content && defaultContent}
    </main>
  );
};
