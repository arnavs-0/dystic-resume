import React, { memo, useContext } from 'react';
import PageContext from '../../../contexts/PageContext';
import { safetyCheck, isItemVisible } from '../../../utils';

const LanguageItem = (x) => (
  <div key={x.id} className="flex flex-col">
    <h6 className="font-semibold text-sm">{x.name}</h6>
    <span className="text-xs">{x.fluency}</span>
  </div>
);

const LanguagesB = () => {
  const { data, heading: Heading } = useContext(PageContext);

  return safetyCheck(data.languages) ? (
    <div>
      <Heading>{data.languages.heading}</Heading>
      <div className="grid gap-2">
        {data.languages.items.map((x) => isItemVisible(x) && LanguageItem(x))}
      </div>
    </div>
  ) : null;
};

export default memo(LanguagesB);
