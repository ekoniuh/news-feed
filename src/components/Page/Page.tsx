import React, { FC, Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { EmailModal } from '@features/subscribeNotification/components/EmailModal/EmailModal';
import { Dispatch } from '@app/store';
import { fetchCategories } from '@features/categories/actions';
import { fetchSources } from '@features/sources/actions';
import { Header } from '@components/Header/Header';
import { OfflineNotificationWatcher } from '@features/networkStatus/OfflineNotificationWatcher/OfflineNotificationWatcher';
import { Footer } from '@components/Footer/Footer';

const LS_EMAIL_SHOWN_KEY = 'newsfeed:email_modal_shown';
const LS_VISITS_COUNT_KEY = 'newsfeed:visits_count';

const currentVisitsCount: number = Number(localStorage.getItem(LS_VISITS_COUNT_KEY)) || 0;
localStorage.setItem(LS_VISITS_COUNT_KEY, `${currentVisitsCount + 1}`);

export const Page: FC = ({ children }) => {
  const dispatch = useDispatch<Dispatch>();
  const [emailModalShown, setEmailModalShown] = useState(
    !localStorage.getItem(LS_EMAIL_SHOWN_KEY) && currentVisitsCount >= 3
  );

  React.useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSources());
  }, []);

  return (
    <Fragment>
      <EmailModal
        shown={emailModalShown}
        onClose={() => {
          localStorage.setItem(LS_EMAIL_SHOWN_KEY, 'true');
          setEmailModalShown(false);
        }}
      >
        Hello
      </EmailModal>
      <Header />

      <main>{children}</main>

      <Footer />
      <OfflineNotificationWatcher />
    </Fragment>
  );
};
