import { navigate } from 'gatsby';
import React, { memo, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { RiTwitterLine } from 'react-icons/ri';
import { FcGoogle, VscPerson } from 'react-icons/all';
import background from '../../images/register_bg_2.png';
import Navbar from './Navbar';
import FooterSmall from './FooterSmall';
import UserContext from '../../contexts/UserContext';

export default function LoginPage() {
    const [isLoadingGoogle, setLoadingGoogle] = useState(false);
    const [isLoadingAnonymous, setLoadingAnonymous] = useState(false);
    const { user, loginWithGoogle, loginAnonymously, logout } = useContext(
      UserContext,
    );

  async function handleGoogle() {
    setLoadingGoogle(true);
    await loginWithGoogle().then(() => {
      setLoadingGoogle(false);
      navigate('/app/dashboard');
    });
  }

  async function handleAnonymously() {
    setLoadingAnonymous(true);
    await loginAnonymously().then(() => {
      setLoadingAnonymous(false);
      navigate('/app/dashboard');
    });
  }
      return(
        <div>
        <Navbar transparent />
        <main>
          <section className="absolute w-full h-full">
            <div
              className="absolute top-0 w-full h-full bg-gray-900"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: '100%',
                width: '100%',
                height: '100%',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center mb-3">
                        <h6 className="text-gray-600 text-sm font-bold">
                          Sign in with
                        </h6>
                      </div>
                      <div className="btn-wrapper text-center">
                        <button
                          className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 shadow hover:shadow-md inline-flex items-center font-medium text-xs"
                          type="button"
                          style={{ transition: 'all .15s ease' }}
                        >
                          <RiTwitterLine />
                          &nbsp; Twitter
                        </button>
                        <button
                          onClick={
                            isLoadingGoogle ? undefined : () => handleGoogle()
                          }
                          className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 shadow hover:shadow-md inline-flex items-center font-medium text-xs"
                          type="button"
                          style={{ transition: 'all .15s ease' }}
                        >
                          <FcGoogle />
                          &nbsp; Google
                        </button>
  
                        <button
                          onClick={
                            isLoadingAnonymous
                              ? undefined
                              : () => handleAnonymously()
                          }
                          className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 shadow hover:shadow-md inline-flex items-center font-medium text-xs"
                          type="button"
                          style={{ transition: 'all .15s ease' }}
                        >
                          <VscPerson />
                          &nbsp; Anonymous
                        </button>
                      </div>
                      <hr className="mt-6 border-b-1 border-gray-400" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div className="text-gray-500 text-center mb-3 font-bold">
                        <small>Or sign in with credentials</small>
                      </div>
                      <form>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Email"
                            style={{ transition: 'all .15s ease' }}
                          />
                        </div>
  
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Password"
                            style={{ transition: 'all .15s ease' }}
                          />
                        </div>
  
                        <div className="text-center mt-6">
                          <button
                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="button"
                            style={{ transition: 'all .15s ease' }}
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FooterSmall absolute />
          </section>
        </main>
      </div>
      );
}