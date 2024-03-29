import React, { memo, useContext, useState } from 'react';
import { FaFileExport, FaFileImport, FaMagic } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { AiOutlineCloudDownload } from 'react-icons/all';
import Popup from 'reactjs-popup';
import ModalContext from '../../../../contexts/ModalContext';
import { useDispatch, useSelector } from '../../../../contexts/ResumeContext';
import Button from '../../../shared/Button';
import Heading from '../../../shared/Heading';
import Input from '../../../shared/Input';
import styles from './Actions.module.css';
import ResumeInsightModal from '../../../../modals/ResumeInsightModal';
import 'reactjs-popup/dist/index.css';

const Actions = ({ id }) => {
  const { t } = useTranslation();

  const [loadDemoText, setLoadDemoText] = useState(
    t('builder.actions.loadDemoData.button'),
  );
  const [resetText, setResetText] = useState(
    t('builder.actions.resetEverything.button'),
  );

  const state = useSelector();
  const dispatch = useDispatch();
  const { emitter, events } = useContext(ModalContext);

  const handleImport = () => emitter.emit(events.IMPORT_MODAL);

  const handleExport = () => emitter.emit(events.EXPORT_MODAL);

  const getSharableUrl = () => {
    const shareId = state.id;
    return `https://dystic-test.web.app/r/${shareId}`;
  };

  const handleOpenLink = () => {
    if (typeof window !== `undefined`) {
      window && window.open(getSharableUrl());
    }
  };

  const handleLoadDemo = () => {
    if (loadDemoText === t('builder.actions.loadDemoData.button')) {
      setLoadDemoText(t('shared.buttons.confirmation'));
      return;
    }

    dispatch({ type: 'load_demo_data' });
    setLoadDemoText(t('builder.actions.loadDemoData.button'));
  };

  const handleReset = () => {
    if (resetText === t('builder.actions.resetEverything.button')) {
      setResetText(t('shared.buttons.confirmation'));
      return;
    }

    setResetText(t('builder.actions.resetEverything.button'));
    dispatch({ type: 'reset_data' });
  };

  const handleAnalyze = () => {
    alert('Clicked');
  };

  return (
    <section>
      <Heading id={id} />

      <div className="mt-5 mb-5">
        <div className={styles.container}>
          <h5>{t('builder.actions.import.heading')}</h5>

          <p className="leading-loose">{t('builder.actions.import.text')}</p>

          <div className="mt-4 flex">
            <button
              onClick={handleImport}
              className="bg-red-300 active:bg-red-500 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 mt-5 shadow hover:shadow-md inline-flex items-center font-medium text-xs"
              style={{ transition: 'all .15s ease' }}
              type="button"
            >
              <FaFileImport /> &nbsp; {t('builder.actions.import.button')}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <div className={styles.container}>
          <h5>{t('builder.actions.export.heading')}</h5>

          <p className="leading-loose">{t('builder.actions.export.text')}</p>

          <div className="mt-4 flex">
            <button
              onClick={handleExport}
              className="bg-red-300 active:bg-red-500 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 mt-5 shadow hover:shadow-md inline-flex items-center font-medium text-xs"
              style={{ transition: 'all .15s ease' }}
              type="button"
            >
              <FaFileExport /> &nbsp; {t('builder.actions.export.button')}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <div className={styles.container}>
          <h5>{t('builder.actions.analyze.heading')}</h5>

          <p className="leading-loose">{t('builder.actions.analyze.text')}</p>

          <div className="mt-4 flex">
            <Popup
              trigger={
                <button
                  onClick={handleAnalyze}
                  className="bg-red-300 active:bg-red-500 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 mt-5 shadow hover:shadow-md inline-flex items-center font-medium text-xs"
                  style={{ transition: 'all .15s ease' }}
                  type="button"
                >
                  <FaMagic /> &nbsp; {t('Analyze Now')}
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="flex flex-col overflow-y-auto">
                  <button className="close self-start ml-5 focus:outline-none" onClick={close}>
                    &times;
                  </button>
                  <div className="flex justify-center">
                    <ResumeInsightModal resumeID={state.id} />
                  </div>
                  <button
                    className="button mb-5 self-center bg-gray-700 hover:bg-red-200 rounded-md focus:outline-none focus:ring focus:border-red-300"
                    style={{
                      // backgroundColor: '#172930',
                      color: '#fff',
                      width: '30%',
                      height: '50px',
                    }}
                    onClick={() => {
                      close();
                    }}
                  >
                    Close
                  </button>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <div className={styles.container}>
          <h5>{t('builder.actions.share.heading')}</h5>

          <p className="leading-loose">{t('builder.actions.share.text')}</p>

          <div>
            <Input
              type="action"
              value={getSharableUrl()}
              onClick={handleOpenLink}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <div className={styles.container}>
          <h5>{t('builder.actions.loadDemoData.button')}</h5>

          <p className="leading-loose">
            {t('builder.actions.loadDemoData.text')}
          </p>

          <div className="mt-4 flex">
            <button
              onClick={handleLoadDemo}
              className="bg-red-300 active:bg-red-500 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 mt-5 shadow hover:shadow-md inline-flex items-center font-medium text-xs"
              style={{ transition: 'all .15s ease' }}
              type="button"
            >
              <AiOutlineCloudDownload /> &nbsp; {loadDemoText}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <div className={styles.container}>
          <h5>{t('builder.actions.resetEverything.button')}</h5>

          <p className="leading-loose">
            {t('builder.actions.resetEverything.text')}
          </p>

          <div className="mt-4 flex">
            <button
              onClick={handleReset}
              className="bg-red-300 active:bg-red-500 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 mt-5 shadow hover:shadow-md inline-flex items-center font-medium text-xs"
              style={{ transition: 'all .15s ease' }}
              type="button"
            >
              {resetText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Actions);
