import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Heading from '../../../shared/Heading';
import Input from '../../../shared/Input';
import List from '../../lists/List';

const Projects = ({ id, event }) => {
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

      <List
        path={path}
        event={event}
        titlePath="title"
        subtitlePath="link"
        textPath="summary"
      />
    </section>
  );
};

export default memo(Projects);
