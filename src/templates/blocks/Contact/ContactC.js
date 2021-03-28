import React, { memo, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import PageContext from '../../../contexts/PageContext';
import { hasAddress, isItemVisible, safetyCheck } from '../../../utils';
import BirthDateA from '../BirthDate/BirthDateA';

const ContactItem = ({ value, label, link }) =>
  value ? (
    <div className="flex flex-col">
      <h6 className="capitalize font-semibold">{label}</h6>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span className="font-medium break-all">{value}</span>
        </a>
      ) : (
        <span className="font-medium break-all">{value}</span>
      )}
    </div>
  ) : null;

const ContactC = () => {
  const { t } = useTranslation();
  const { data } = useContext(PageContext);

  return (
    <div className="text-xs grid gap-2">
      {hasAddress(data.profile.address) && (
        <div>
          <h6 className="capitalize font-semibold">
            {t('shared.forms.address')}
          </h6>
          <div className="flex flex-col text-xs">
            <span>{data.profile.address.line1}</span>
            <span>{data.profile.address.line2}</span>
            <span>
              {data.profile.address.city} {data.profile.address.pincode}
            </span>
          </div>
        </div>
      )}

      <ContactItem
        label={t('shared.forms.phone')}
        value={data.profile.phone}
        link={`tel:${data.profile.phone}`}
      />
      <ContactItem
        label={t('shared.forms.website')}
        value={data.profile.website}
        link={data.profile.website}
      />
      <ContactItem
        label={t('shared.forms.email')}
        value={data.profile.email}
        link={`mailto:${data.profile.email}`}
      />

      <BirthDateA />

      {safetyCheck(data.social) &&
        data.social.items.map(
          (x) =>
            isItemVisible(x) && (
              <ContactItem
                key={x.id}
                value={x.username}
                label={x.network}
                link={x.url}
              />
            ),
        )}
    </div>
  );
};

export default memo(ContactC);
