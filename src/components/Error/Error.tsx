import React, { FC, ReactNode } from 'react';
import './Error.css';

export const Error: FC<{ title?: ReactNode; text?: ReactNode }> = ({
  title = 'Oops! Что-то пошло не так',
  text = 'Не волнуйтесь. Мы уже в курсе и чиним проблему.',
}) => {
  return (
    <div role="status" className="Error">
      <h1 className="Error__title">{title}</h1>
      <p className="Error__text">{text}</p>
    </div>
  );
};
