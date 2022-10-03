import React, { FC } from 'react';
import { Error } from '@components/Error/Error';

export const NoMatch: FC = () => {
  return (
    <section className="container">
      <Error title="404" text="Страница не найдена" />
    </section>
  );
};
