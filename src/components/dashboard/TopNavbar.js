import { Link } from 'gatsby';
import React, { memo } from 'react';
import Avatar from '../shared/Avatar';
import Logo from '../shared/Logo';
import LogoImg from '../../images/logo1.svg'
const TopNavbar = () => (
  <div >
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto"
                     src={LogoImg} alt="dystic"/>
                <img className="hidden lg:block h-8 w-auto"
                     src={LogoImg} alt="dystic"/>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">

                  <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                     aria-current="page">builder</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                <div>
                  <button type="button"
                          className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          id="user-menu" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <Avatar className="ml-8 mr-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
               aria-current="page">Dashboard</a>
          </div>
        </div>
      </nav>
    </div>
    {/*<div className="container">*/}
    {/*  <Link to="/">*/}
    {/*    <Logo size="40px" />*/}
    {/*  </Link>*/}

    {/*  <Avatar className="ml-8 mr-8" />*/}
    {/*</div>*/}
  </div>
);

export default memo(TopNavbar);
