import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Heading from '../../../shared/Heading';
import Input from '../../../shared/Input';
import List from '../../lists/List';

const Languages = ({ id, event }) => {
  const path = `${id}.items`;
  const { t } = useTranslation();

  return (
    <section>
      <Heading id={id} />

      <Input
        name="heading"
        label={t('builder.sections.heading')}
        path={`${id}.heading`}
        className="mb-6 mt-6"
      />

      <List path={path} event={event} titlePath="name" subtitlePath="fluency" />
    </section>
  );
};

export default memo(Languages);
