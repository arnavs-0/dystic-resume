import { navigate } from 'gatsby';
import React, { memo, useState, useContext, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { RiTwitterLine } from 'react-icons/ri';
import { FcGoogle, VscPerson } from 'react-icons/all';
import background from '../images/register_bg_2.png';
import Navbar from '../components/landing/Navbar';
import FooterSmall from '../components/landing/FooterSmall';
import UserContext from '../contexts/UserContext';
import LoginPage from "../components/landing/LoginPage";

function Home() {
    const { user } = useContext(
    UserContext,
  );

  useEffect( () =>{
    if (user){
      navigate('/app/dashboard')
    }
}
  )

  return (
    <>
      <LoginPage />
    </>
  );
}

export default memo(Home);
