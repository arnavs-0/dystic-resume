import { navigate } from 'gatsby';
import React, { memo, useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import LoginPage from '../components/landing/LoginPage';
import ProgressBar from '../components/shared/ProgressBar';
import { Helmet } from "react-helmet";

function Home() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      navigate('/app/dashboard');
    }
  });

  return (
    <>
      <Helmet>
        <title>
          dystic - resume builder
        </title>
        <link rel="canonical" href="https://dystic-test.web.app/" />
      </Helmet>
      <LoginPage />
      <ProgressBar />
    </>
  );
}

export default memo(Home);
