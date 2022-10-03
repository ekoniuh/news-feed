import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import React, { FC } from 'react';
import { useAuthContext } from '../../AuthContextProvider';
import { Box, CircularProgress } from '@mui/material';

type TProps = {
  children: React.ReactNode;
} & RouteProps;

export const PrivateRoute: FC<TProps> = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuthContext();

  function renderChildren(props: RouteComponentProps) {
    if (isAuthenticated === null) {
      // если статус авторизации пока неизвестен
      return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <CircularProgress color="primary" />
        </Box>
      );
    }

    if (isAuthenticated === true) {
      return children;
    }

    if (isAuthenticated === false) {
      return (
        <Redirect
          to={{
            pathname: '/admin/login',
            state: { from: props.location },
          }}
        />
      );
    }
  }

  return <Route {...rest} render={renderChildren} />;
};
